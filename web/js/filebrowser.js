/******************************************************************************
*
*   filebrowser.js - CC31xx/CC32xx SimpleLink Image Creator
*
*   Copyright (C) 2016 Texas Instruments Incorporated
*
*   All rights reserved. Property of Texas Instruments Incorporated.
*   Restricted rights to use, duplicate or disclose this code are
*   granted through contract.
*
*   The program may not be used without the written permission of
*   Texas Instruments Incorporated or against the terms and conditions
*   stipulated in the agreement under which this program has been supplied,
*   and under no circumstances can it be used with non-TI connectivity device.
*
******************************************************************************/
var gMCUImgName = 'mcuimg.bin';
var gFdevice = false;
var fileBrowser = (function($) {

var checkedClass = "fa fa-check-square-o"; //"fa fa-check-circle-o";
var uncheckedClass = "fa fa-square-o"; //"fa fa-circle-o";
var folderDiv = (
"<div class='fb-nesting'>" +
"<span class='fb-text'>" +
"<span id='check' class='fb-text " + uncheckedClass + "'></span>" +
"<span id='icon' class='fb-ti-red fa fa-folder-open'></span>" +
"<span id='actions' class='fb-invisible fb-text'>" +
"<span id='rename' class='fa fa-edit fb-actions' title='Rename'></span>" +

//"<span id='add' class='fa fa-plus-circle fb-actions' title='New Folder'></span>" +
"<span id='add' class='fa fa-folder-o fb-actions' title='New Folder'></span>" +

//"<span id='upload' class='fa fa-upload fb-actions' title='Upload'></span>" +
"<span id='upload' class='fa fa-file-text-o fb-actions' title='Add File'></span>" +

"<span id='del' class='fa fa-close fb-actions' title='Delete'></span>" +
"</span>" + 
"<span id='text' class='fb-unsel fb-text2'></span>" +
"</span>" + 
"<div id='content'></div>" +
"</div>"
);

function Folder(name, parent) {
    if (name) {
        this.name = name.toLowerCase();
    }
    
    this.folders = [];
    this.files = [];
    this.parent = parent;
    this.node = null;
    
}

Folder.prototype.render = function(args) {
    if (!this.node) {
        this.node = $(folderDiv)
        //this.node.find("#text").html(this.name);
        
        if (args["check"] === false) {
            this.node.find("#check").first().hide();
        } else {
            this.node.find("#check").on("click", {that: this}, this.toggleCheck);
        }
        
        this.node.find("#icon").on("click", {node: this.node}, this.toggle);
        if (args["rename"] === false) {
            this.node.find("#rename").hide();
        } else {
            this.node.find("#rename").on("click", {that: this}, this.propsWithDialog);
        }
        
        this.node.find("#add").on("click", {that: this}, this.addFolderWithDialog);
        this.node.find("#upload").on("click", {that: this}, uploadFileWithBrowse);
        this.node.find("#del").on("click", {that: this}, this.removeWithDialog);
        
        this.node.unbind("dragenter").unbind("dragover").unbind("drop").unbind("dragleave");
        this.node.find("#content").unbind("dragenter").unbind("dragover").unbind("drop").unbind("dragleave");
        
        this.node.on("dragenter", {that: this}, this.dragenter);
        this.node.on("dragleave", {that: this}, this.dragleave);
        this.node.on("dragover", this.dragover);
        this.node.on("drop", {that: this}, this.drop);
        
        this.node.find("#content").on("dragenter", {that: this}, this.dragenter);
        this.node.find("#content").on("dragleave", {that: this}, this.dragleave);
        this.node.find("#content").on("dragover", this.dragover);
        this.node.find("#content").on("drop", {that: this}, this.drop);
        
        
    }
    
    if (args) {
        this.args = args
    } else {
        args = this.args;
    }
    
    this.node.find("#text").first().text(this.name);
    var content = this.node.find("#content").first();
    
    $.each(this.folders, function(i, folder) {
        content.append(folder.render(args));
    });
        
    $.each(this.files, function(i, file) {
        content.append(file.render(args));
    });
        
    return this.node;
}

Folder.prototype.dump = function() {
    function replacer(k, v) {
        if (k == "node") {
            return undefined;
        } else if (k == "parent") {
            return undefined;
        } else if (k == "args") {
            return undefined;
        }
        
        return v;
    }
    
    return JSON.stringify(this, replacer, 4);
}

Folder.prototype.addFolder = function(name) {
    var folder = new Folder(name, this);
    this.folders.push(folder);
    return folder;
}

Folder.prototype.addFile = function(name, attrs) {
    var file = new File(name, attrs, this);
    this.files.push(file);
    //return this;
    return file;
}

Folder.prototype.toggle = function(event) {
    var node = event.data.node;
    
    /*
    node.find("#content").slideToggle("fast", function() {
        var icon = node.find("#icon").first();
        if ($(this).is(":visible")) {
            icon.addClass("fa fa-folder").addClass("fa fa-folder-open");
        } else {
            icon.removeClass("fa fa-folder-open").addClass("fa fa-folder");
        }
    });
    */
        
    var content = node.find("#content")
    var icon = node.find("#icon").first();
    
    content.toggle()
    
    if (content.is(":visible")) {
        icon.removeClass("fa fa-folder").addClass("fa fa-folder-open");
    } else {
        icon.removeClass("fa fa-folder-open").addClass("fa fa-folder");
    }
}

Folder.prototype.remove = function(event) {
    var that = event.data.that;
    that.node.remove();
    
    var index = that.parent.folders.indexOf(that);
    if (index < 0) {
        throw "Folder does not exist in parent folder"
    }
        
    that.parent.folders.splice(index, 1);
}

Folder.prototype.addFolderWithDialog = function(event) {
    var that = event.data.that;
    
    showInputDialog("New folder name:", true,
        {text: "Create", func: function(event) {
            var name = event.data.value.val().toLowerCase();
            var error = event.data.error;
            
            var ret = checkValidName(name, joinFullPath(that.fullPath(), name, true) + "/");
            if (ret.err) {
                error.html(ret.err);
                return;
        
            } else if (name) {
                var found = false;
                $.each(that.folders, function(i, folder) {
                    if (folder.name == name) {
                        found = true;
                        return;
                    }
                });
                if (found) {
                    error.html("Error: folder with the same name already exists");
                    return false;
                }

                that.addFolder(name);
                    that.render();
                
                gBrowserActions.addFolder(name, function() {                
                    
                });
            } else {
                error.html("Error: Invalid name")
                return false;
            }
            return true;
        }},
        {text: "Cancel", func: null});
}

/*
Folder.prototype.addFileWithDialog = function(event) {
    var that = event.data.that;
    
    fileInput.on("change", function() {
        name = fileInput.prop("files")[0].name;
        
        var found = false;
        $.each(that.files, function(i, file) {
            if (file.name == name) {
                alert("File with the same name already exists");
                found = true;
                return;
            }
        });
                
        if (!found) {
            
            if (!uploadFile(fileInput.prop("files")[0]);
            
            that.addFile(name);
            that.render();
        }
        
        fileInput.off("change");
    });
    
    fileInput.val("");
    fileInput.click();
    
}
*/

Folder.prototype.removeWithOverlay = function(event) {
   $(".cool-browser-overlay").css("z-index", 100);
   var that = event.data.that;
   that.node.css("z-index", 101);
   actions = that.node.find("#actions").first();
   
}

Folder.prototype.removeWithDialog = function(event) {
    var that = event.data.that;
    
    if (!$.isEmptyObject(that.folders) || !$.isEmptyObject(that.files)) {
        if (gBrowserActions instanceof BrowserActionsOnline) {
            showInputDialog("Cannot delete non empty folder", false, 
                null,
                {text: "Close"});
                
            return;
        }
    }
    
    var that = event.data.that;
    var fullPath = that.fullPath();
    
    showInputDialog('Delete folder: ' + fullPath + " ?", false,
        {text: "Delete", func: function(event) {
            var error = event.data.error;
            var value = event.data.value;
            
            /*
            deleteFile(that.fullPath(), value.val(),
                function(ok) {
                    that.remove({data: {that: that}});
                    that.parent.render();
                    closeInputDialog();
                },
                function(err) {
                    error.html(err);
                });
            */
            that.remove({data: {that: that}});
            that.render();
            gBrowserActions.removeSelected(function() {
                closeInputDialog();
            },
            function(data) {
                error.html(data);
            });
            
            return false;
        }},
        {text: "Cancel", func: null});
}

Folder.prototype.deletable = function(x) {
    node = this.node.find("#del");
    if (x === undefined) {
        return node.is(":visible");
    } else if (x === true) {
        node.show();
    } else {
        node.hide();
    }   
}

Folder.prototype.editable = function(x) {
    node = this.node.find("#rename");
    if (x === undefined) {
        return node.is(":visible");
    } else if (x === true) {
        node.show();
    } else {
        node.hide();
    }   
}

Folder.prototype.propsWithDialog = function(event) {
    var that = event.data.that;
    
    showInputDialog("Rename folder:", true,
        {text: "Rename", func: function(event) {
            var name = event.data.value.val().toLowerCase();
            var error = event.data.error;
            
            var maxPathLen = maxFullPathLen;
            var orgName = that.name;
            
            try {
                that.name = name
                maxPathLen = findMaxPathLen(that);
            } finally {
                that.name = orgName;
            }
            
            if (maxPathLen > maxFullPathLen) {
                error.html("New name is too long in regards to inner folder/files (maximum of 179 characters per full path");
                return;
            }
               
            var ret = checkValidName(name, joinFullPath(that.parent.fullPath(), name, true));
            if (ret.err) {
                error.html(ret.err);
                return;
                
            } else if (name) {
                var found = false;
                $.each(that.parent.folders, function(i, folder) {
                    if (folder.name == name) {
                        found = true;
                        return;
                    }
                });
                if (found) {
                    error.html("Error: folder with the same name already exists");
                    return false;
                }
                
                gBrowserActions.renameFolder(that, name, 
                    function() {
                        that.name = name;
                        that.render();
                    },
                    function(err) {
                        error.html("Error: " + err);
                    });
            } else {
                error.html("Error: Invalid name")
                return false;
            }
            return true;
        }},
        {text: "Cancel", func: null},
        that.name);
}

Folder.prototype.toggleCheck = function(event) {
    var that = event.data.that;
    var check = that.node.find("#check").first();
        
    if (check.hasClass(uncheckedClass)) {
        check.removeClass(uncheckedClass).addClass(checkedClass);
    } else {
        check.removeClass(checkedClass).addClass(uncheckedClass);
    }
}    

Folder.prototype.fullPath = function() {
    if (!this.parent && this.name == "/")
        return "";
    
    var parent = this.parent;
    var path = [this.name];
    
    while (parent) {
        path.push(parent.name);
        parent = parent.parent;
    }
    
    path.pop();
    
    return "/" + path.reverse().join("/").toLowerCase();
}

Folder.prototype.findFolder = function(name) {
    var found = null;
    
    $.each(this.folders, function(i, folder) {
        if (folder.name == name) {
            found = folder;
        }
    });
    
    return found;
}

Folder.prototype.findFile = function(name) {
    var found = null;
    
    $.each(this.files, function(i, file) {
        if (file.name == name) {
            found = file;
        }
    });
    
    return found;
}


Folder.prototype.root = function() {
    var obj = this;
    
    while (obj.parent) {
        obj = obj.parent;
    }
    
    return obj;
}

Folder.prototype.checked = function() {
    var check = this.node.find("#check").first();
    return check.hasClass(checkedClass);
}

Folder.prototype.dragenter = function(e) {
    var that = e.data.that;
    
    e.preventDefault();
	e.stopPropagation();
}

Folder.prototype.dragleave = function(e) {
    var that = e.data.that;
    
    e.preventDefault();
	e.stopPropagation();
}

Folder.prototype.dragover = function(e) {
    e.preventDefault();
	e.stopPropagation();
}

Folder.prototype.drop = function(e) {
    var that = e.data.that;
    
    e.preventDefault();
	e.stopPropagation();

    that.uploadFile(e.originalEvent.dataTransfer.files[0]);
}

var fileDiv = (
"<div class='fb-nesting'>" +
"<span class='fb-text'>" +
"<span id='check' class='fb-text " + uncheckedClass + "'></span>" +
//"<span id='icon' class='fa-stack'><i class='fa fa-file-o fa-stack-1x'></i><i class='fa fa-lock fa-stack-1x'></i></span>" +
"<span id='icon' class='fa fa-file'></span>" +
"<span id='actions' class='fb-invisible fb-text'>" +
"<span id='props' class='fa fa-edit fb-actions' title='Properties'></span>" +

//"<span id='download' class='fa fa-download fb-actions' title='Download'></span>" +
"<span id='download' class='fa fa-download fb-actions' title='Get File'></span>" +
 
"<span id='del' class='fa fa-close fb-actions' title='Delete'></span>" +
"</span>" +
"<span id='text' class='unselectable fb-text2'></span>" +
"<span class='fb-attr'>" +
"<span id='sec' class='unselectable fb-text fa fa-lock' data-title='Secure'></span>" +
"<span id='failsafe' class='unselectable fb-text fa fa-save' data-title='Fail Safe'></span>" +
"<span id='size' class='unselectable fb-text fb-size'>0</span>" +
"</span>" +
"</span>" +
"</div>"
);

function File(name, attrs, parent) {
    if (name) {
        this.name = name.toLowerCase();
    }
    
    this.parent = parent;
    $.extend(this, attrs);
}

File.prototype.render = function(args) {
    if (!this.node) {
        this.node = $(fileDiv)
        //this.node.find("#text").html(this.name);
        
        if (args["check"] === false) {
            this.node.find("#check").first().hide();
        } else {
            this.node.find("#check").on("click", {that: this}, this.toggleCheck);
        }

        if (args["props"] === false) {
            this.node.find("#props").hide();
        } else {
            this.node.find("#props").on("click", {that: this}, this.propsWithDialog);
        }
        
        
        if (args["download"] === false) {
            this.node.find("#download").hide();
        } else {
            this.node.find("#download").on("click", {that: this}, this.downloadWithDialog);
        }
        
        if (this.flagSystemFile && !this.flagSystemFileHostAccess) {
            this.node.find("#del").removeClass("fb-actions")
                                  .addClass("fb-actions-disabled")
                                  .prop("title", "Unavailable for System Files");
        } else {
            this.node.find("#del").on("click", {that: this}, this.removeWithDialog);
        }
        
        /*
        this.node.unbind("dragenter").unbind("dragover").unbind("drop").unbind("dragleave");
        this.node.on("dragenter").on("dragenter", this.dragover);
        this.node.on("dragover").on("dragenter", this.dragover);
        this.node.on("drageleave").on("dragenter", this.dragover);
        this.node.on("drop").on("dragenter", this.dragover);
        */
    }
    this.node.find("#text").first().html(this.name);
    
    var sizeInKb = (this.maxFileSize / 1024).toFixed(1);
    var size = this.node.find("#size").first();
    size.html(sizeInKb + "KB");
    size.prop("title", "Size: " + this.maxFileSize + " Bytes");
    
    var sec = this.node.find("#sec").first();
    if (!this.flagSecure) {
        sec.css("opacity", 0).removeAttr("title");
    } else {
        sec.css("opacity", 1).attr("title", sec.attr("data-title"));
    }
    
    var failSafe = this.node.find("#failsafe").first();
    if (!this.flagFailSafe) {
        failSafe.css("opacity", 0).removeAttr("title");
    } else {
        failSafe.css("opacity", 1).attr("title", failSafe.attr("data-title"));
    }
        
    if (this.flagNoValidCopy) {
        this.node.find("#text").first().css("text-decoration", "line-through")
            .addClass("fb-ti-red")
            .prop("title", "File wasn't closed properly");
        
        this.node.find("#download").removeClass("fb-actions")
          .addClass("fb-actions-disabled")
          .prop("title", "Invalid file");
    } 
    
    return this.node;
}

File.prototype.remove = function(event) {
    var that = event.data.that;
    that.node.remove();
    
    var index = that.parent.files.indexOf(that);
    if (index < 0) {
        throw "File does not exist in parent folder"
    }

    that.parent.files.splice(index, 1)
}

File.prototype.removeWithOverlay = function(event) {
   $(".fb-overlay").css("z-index", 100);
   var that = event.data.that;
   that.node.css("z-index", 101);
   actions = that.node.find("#actions").first();
   
}

File.prototype.removeWithDialog = function(event) {
    var that = event.data.that;
    var fullPath = that.fullPath();
 
    if (that.flagSecure && (gBrowserActions instanceof BrowserActionsOnline) && !that.flagNoValidCopy) {
        promptText = 'Delete file: ' + fullPath + ' ?<br>Token:';
        hasInput = true;
    } else {
        promptText = 'Delete file: ' + fullPath + ' ?';
        hasInput = false;
    }   
 
    showInputDialog(promptText, hasInput,
        {text: "Delete", func: function(event) {
            var error = event.data.error;
            var value = event.data.value;
            
            gBrowserActions.deleteFile(that.fullPath(), value.val(),
                function(ok) {
                    that.remove({data: {that: that}});
                    that.parent.render();
                    closeInputDialog();
                },
                function(err) {
                    error.html(err);
                });
                    
            return false;
        }},
        {text: "Cancel", func: null});
}

File.prototype.propsWithDialog = function(event) {
    //alert("Properties dialog for file:" + event.data.that.name);
    var that = event.data.that;
    
    if (gBrowserActions instanceof BrowserActionsOnline) {
        disableAll = true;
    } else {
        disableAll = false;
    }
    
    pd = new PropsDialog(disableAll);
    pd.props(that);
    pd.open(that, function() {        
        var fullPath = that.fullPath();
        gBrowserActions.changeProps(that, fullPath, pd, fileInputSign[0].files[0], 
            function() {
                $.extend(that, pd.props());
                that.render();

                //pd.close()
            }, 
            function(err) {pd.showError(err)});
    });

}

File.prototype.toggleCheck = function(event) {
    var that = event.data.that;
    var check = that.node.find("#check").first();
        
    if (check.hasClass(uncheckedClass)) {
        check.removeClass(uncheckedClass).addClass(checkedClass);
    } else {
        check.removeClass(checkedClass).addClass(uncheckedClass);
    }
}    

File.prototype.fullPath = function(folder) {
    if (folder === undefined) {
        var parent = this.parent;
    } else {
        var parent = folder;
    }
        
    if (!parent.parent && parent.name == "/")
        return this.name.toLowerCase();
    
    var path = [this.name];
    
    while (parent && parent.name != "/") {
        path.push(parent.name);
        parent = parent.parent;
    }
    
    return "/" + path.reverse().join("/").toLowerCase();
}

File.prototype.downloadWithDialog = function(event) {
    var that = event.data.that;
    fullPath = that.fullPath();
    
    if (that.flagSecure && (gBrowserActions instanceof BrowserActionsOnline) && !that.flagPublicRead) {
        promptText = 'Download File: ' + fullPath + ' ?<br>Token:';
        hasInput = true;
    } else {
        promptText = 'Download File: ' + fullPath + ' ?';
        hasInput = false;
    }   

    showInputDialog(promptText , hasInput,
        {text: "Get", func: function(event) {
            var error = event.data.error;
            var value = event.data.value;
            
            gBrowserActions.downloadFile(that.fullPath(), value.val());
                    
            return false;
        }},
        {text: "Cancel", func: null});
}

File.prototype.root = function() {
    var obj = this;
    
    while (obj.parent) {
        obj = obj.parent;
    }
    
    return obj;
}

File.prototype.editable = function(enable) {
    node = this.node.find("#props");
    if (x === undefined) {
        return node.is(":visible");
    } else if (x === true) {
        node.show();
    } else {
        node.hide();
    }   
}

File.prototype.checked = function() {
    var check = this.node.find("#check").first();
    return check.hasClass(checkedClass);
}

var browserDiv = (
"<div class='fb-title'>" +
"<span class='fb-text'>File</span>" +
"<span class='fb-attr-header'>" +
"<span>Properties</span>" +
"</div>" +
"</span>"
);


var gBrowserActions = null;
var gProjectName = null;

function Browser(div, mode, projectName) {
    gProjectName = projectName;
    
    if (!fileInput) {
        fileInput = $("<input type='file' hidden>");
        $("body").append(fileInput);
    }
    
    if (!fileInputSign) {
        fileInputSign = $("<input type='file' hidden>");
        $("body").append(fileInputSign);
    }
    if (!fileLink) {
        fileLink = $("<a id='malink' href='/api/1/flash/devModeDownloadFileGet' hidden></a>");
        $("body").append(fileLink);
    }

    this.root = new Folder("/");
    
    if (div) {
        this.main = div;
    
        //this.overlay = this.main.clone().addClass("cool-browser-in cool-browser-overlay").appendTo(this.main);
    
        //this.inner = this.main.clone().addClass("cool-browser-in").appendTo(this.main);
        this.inner = this.main.clone().addClass("fb-in")
        this.main.html(browserDiv).append(this.inner);	
        this.inner.append(this.root.node);
        this.inner.on("scroll", this.scroll);
        
        this.main.off("dragenter").off("dragover").off("drop");
        this.main.on("dragenter", this.drag);
        this.main.on("dragleave", this.drag);
        this.main.on("dragover", this.drag);
        this.main.on("drop", this.drag);
        
        this.inner.off("dragenter").off("dragover").off("drop");
        this.inner.on("dragenter", this.drag);
        this.main.on("dragleave", this.drag);
        this.inner.on("dragover", this.drag);
        this.inner.on("drop", this.drag);
    }
    
    if (mode === undefined) {
        throw "File Browser requires mode"
    }
    
    if (mode == "offline") {
        if (projectName === undefined) {
            throw "Offline file Browsesr requires project"
        }
        gBrowserActions = new BrowserActionsOffline(this);
    } else {
        gBrowserActions = new BrowserActionsOnline(this);
    }
}

Browser.prototype.render = function() {
    $("<div class='fb-attrs'></div>").appendTo(this.inner);
    
    /* "cert" directory is unsufficient for chanined certificates and therefor deprecated in favor of just using the root folder
    if (!this.root.findFolder("cert")) {
        this.root.addFolder("cert");
    }
    */
    
    var args = {};
    if (gBrowserActions instanceof BrowserActionsOnline) {
        args.check = false;
        //args.props = false;
        args.rename = false;
    } else {
        args.download = false;
    }
      
    this.inner.append(this.root.render(args));
    
    
    this.root.deletable(false);
    this.root.editable(false);
    this.root.node.find("#actions").removeClass("fb-invisible");
    
    this.scroll({currentTarget: this.inner[0]});    
}

Browser.prototype.load = function(data) {
    this.inner.empty();
    
    if (typeof(data) == "string") {
        data = JSON.parse(data);
    }
        
    this.root = $.extend(true, new Folder(), data);
    
    function load(root) {
        $.each(root.folders, function(i, folder) {
            folder = $.extend(new Folder(), folder);
            folder.parent = root;
            root.folders[i] = folder;
            load(folder);
        });
        root.folders.sort(function(a, b) {return a.name > b.name});
        
        $.each(root.files, function(i, file) {
            file = $.extend(new File(), file);
            file.parent = root;
            root.files[i] = file;
        });
        root.files.sort(function(a, b) {return a.name > b.name});
    }

    load(this.root);
    
    
}

Browser.prototype.dump = function(data) {
    return this.root.dump();
}

Browser.prototype.scroll = function(event) {
	$(".fb-attr").css("right", -event.currentTarget.scrollLeft);
	$(".fb-attrs").css("right", -event.currentTarget.scrollLeft);
	$(".fb-attrs").css("top", event.currentTarget.scrollTop);
	//var w = $(".fb-attr").first().width();
    var w = $(".fb-attrs").first().width();
	$(".fb-text2").css("margin-right", w + "px");
}


Browser.prototype.uploadMCUImage = function(fDevice) {
    gBrowserActions.uploadMCUImage(fDevice);
}

Browser.prototype.removeSelected = function() {
    function remove(root) {        
        $.each($.extend([], root.files), function(i, file) {
            if (file.checked()) {
                file.remove({data: {that: file}});
            }
        });
        
        $.each($.extend([], root.folders), function(i, folder) {
            if (folder.checked()) {
                folder.remove({data: {that: folder}});
            } else {
                remove(folder);
            }
        });
    }
    
    remove(this.root)
    gBrowserActions.removeSelected();
}

Browser.prototype.selectAll = function() {
    this.root.node.find("*#check").removeClass(uncheckedClass).addClass(checkedClass);
}

Browser.prototype.unselectAll = function() {
    this.root.node.find("*#check").removeClass(checkedClass).addClass(uncheckedClass);
}

Browser.prototype.drag = function(e) {
    e.preventDefault();
	e.stopPropagation();
}

var inputDialog = (
'<div class="white-popup-small">' +
'	<div class="wrapPopup">' +
'		<div id="prompt" class="filePathN center-block"></div>' +
'		<div class="wrapDRS center-block">' +
'			<input type="text" id="inputValue" value="">' +
'           <div id="error" class="fb-ti-red"></div>' +
'		</div>' +
'		<div class="clear" />' +
'		<div class="wrapButtons">' +
'			<div id="ok", class="regButton mRightM"></div>' +
'			<div id="cancel" class="regButton mLeftS"</div>' +
'		</div>' +
'	</div>' +
'	<div class="clear" />' +
'</div>');
	
function showInputDialog(prompt, hasInput, ok, cancel, defaultText) {
    var div = $(inputDialog);
    
    var okBtn = div.find("#ok");
    var cancelBtn = div.find("#cancel");
    var input = div.find("#inputValue");
    var error = div.find("#error");
    
    if (!hasInput) {
        input.hide();
    } else if (defaultText) {
        input.val(defaultText);
    }
    
    
    
    if (ok) {
        okBtn.html(ok.text);
        if (ok.func) {
            okBtn.on("click", {value: input, error: error}, function(event) {
                if (ok.func(event)) {
                    $.magnificPopup.close();
                }
            });
        } else {
            
        }
        //div.find("#ok").on("click", $.magnificPopup.close);
    } else {
        //okBtn.addClass("btnDisabled");
        okBtn.remove();
        cancelBtn.removeClass("mLeftS").addClass("mleft50");
    }
    
    if (cancel) {
        cancelBtn.html(cancel.text);
        if (cancel.func) {
            cancelBtn.on("click", cancel.func);
        }
        cancelBtn.on("click", $.magnificPopup.close);
    } else {
        cancelBtn.addClass("btnDisabled");
    }
    
    div.find("#prompt").html(prompt);
    
    input.focus();
	$.magnificPopup.open({
		items: {
			src: div,
			type: 'inline',
            focus: '#inputValue'
		},
        modal: true
	});
   
   
   /*
  div.magnificPopup({
    type:'inline',
  });*/
    

}



function closeInputDialog() {
    $.magnificPopup.close();
}


function uploadFileWithBrowse(event) {
    var that = event.data.that;
    var newName = event.data.newName;
    
    fileInput.off("change").val("");
    
    fileInput.on("change", function() {
        try {
            that.uploadFile(fileInput[0].files[0], newName);
        } finally {
            fileInput.off("change");
        }
    });
    
    //fileInput.val("");
    fileInput.click();
}
    
Folder.prototype.uploadFile = function(fileObj, newName) {
    name = fileObj.name;
    
    var pd = new PropsDialog();
    var props = pd.props();
    
    //props.filename = new File(fileInput[0].files[0].name).fullPath(that);
    if (!newName) {
        props.name = new File(fileObj.name).name;
    } else {
        props.name = newName.toLowerCase();
    }
    
    props.maxFileSize = fileObj.size;
    pd.props(props);
    
    var that = this;
    
    pd.open(that, function() {
        var props = pd.props();
        if (that.findFile(props.name)) {
            pd.showError("File with the same name already exists in this folder");
            return;
        }

        var ret = checkValidName(props.name, joinFullPath(that.fullPath(), props.name));
        if (ret.err) {
            pd.showError(ret.err);
            return;
        }
        
        if (props.flagSecure && props.flagVendor) {
            if (!$.isNumeric(props.fileToken)) {
                pd.showError("Token has to be an integer");
                return;
            }
            
            if (props.fileToken > 0xFFFFFFFF || props.fileToken < 0) {
                pd.showError("Token cannot be smaller than zero or bigger than 4294967295");
                return;
            }
        }
        
        if ((props.signatureFileNameSelect == "1") && (props.name.toLowerCase() == gMCUImgName) && gFdevice){
            if(Number(props.maxFileSize ) < (Number(fileObj.size) + 20))
            {
                pd.showError("Max Size is not correct. In Private key option you should increase it by 20 bytes.");
                return;
            }
        }
        /*
        if (props.name.toLowerCase() == "mcuflashimg.bin") {
            pd.showError("Illegal name");
            return;
        }
          */          
        var fullPath = new File(props.name).fullPath(that)
        gBrowserActions.uploadFile(fullPath, props, fileObj, fileInputSign[0].files[0],
            function() {
                try {
                    that.addFile(props.name, props);
                    that.render();
                } finally {
                    fileInput.val("");
                    fileInputSign.val("");
                }
            },
            function() {
                //showInputDialog("File upload error", false, null, {text: "Close", func: null});
                error.html("File upload error");
                error.show();
            }
        );
    });
}


function BrowserActionsOnline(browser) {
    this.browser = browser;
}

BrowserActionsOnline.prototype.downloadFile = function(fullPath, token) {
    progressModalOpen("Reading File");
    
    $.post("/api/1/flash/devModeDownloadFile", {name: fullPath, token: token})
        .done(function(data) {
            if (data.ok) {
                getProgressStatus(100, function(data) { fileLink[0].click() });
            } else {
                progressModalError("Downloading, err:" + data.err);
            }
        })
        .fail(function() {
            progressModalError("Downloading");
        });
}

BrowserActionsOnline.prototype.deleteFile = function(fullPath, token, done, fail) {
    $.post("/api/1/flash/devModeDeleteFile", {name: fullPath, token: token})
        .done(function(data) {
            if (data && data.ok) {
                done(data.ok);
            } else if (data && data.err) {
                fail(data.err);
            } else {
                fail();
            }
        })
        .fail(function() {
            fail();
        });
}

BrowserActionsOnline.prototype.uploadFile = function(fullPath, props, fileObj, signFileObj, done, fail) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    
    formData.append("fullPath", fullPath);
    formData.append("props", JSON.stringify(props));
    formData.append("source", fileObj);
    if (signFileObj) {
        formData.append("sign_file", signFileObj);
    }
    
    var that = this;
    xhr.onreadystatechange = function() {
        progressModalOpen("Writing File");
        if (xhr.status == 200 && xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            if (data && data.ok) {
                getProgressStatus(100, done, false, function() { 
                    that.refresh.call(that)
                });
            }
            else if (data && data.err) {
                progressModalError("Uploading, err:" + data.err);
                fail(data.err);
            }
            else {
                progressModalError("Uploading");
                fail(data.err);
            }
        } else if (xhr.status > 200) {
            progressModalError("Uploading");
            fail();
        }
    }
    
    //progressModalOpen("Writing File");
    xhr.open("POST", "/api/1/flash/devModeUploadFile", true);
    xhr.send(formData);
}

BrowserActionsOnline.prototype.renameFolder = function(folder, newName, done, fail) {
    done();
}


BrowserActionsOnline.prototype.refresh = function() {
    var that = this;
    
    $.post("/api/1/flash/getFileList")
        .done(function(data) {
            if (data.ok) {
                that.browser.load(data.ok);
                that.browser.render();
            } else if (data.err) {
                showInputDialog("Error refreshing: " + data.err, false, 
                    null,
                    {text: "Close"});
            } else {
                showInputDialog("Error refreshing: " + data.err, false,
                    null,
                    {text: "Close"});
            }
        })
        .fail(function() {
            showInputDialog("Error refreshing", false,
                null,
                {text: "Close"});
        });
}

BrowserActionsOnline.prototype.refreshFile = function(file) {
    $.post("/api/1/flash/getFileList")
        .done(function(data) {
            if (data.ok) {
                var fb = new Browser(null, "online");
                fb.load(data.ok);

                path = file.fullPath.split("/");
                
                
            } else if (data.err) {
                showInputDialog("Error refreshing: " + data.err, false,
                    null,
                    {text: "Close"});
            } else {
                showInputDialog("Error refreshing: " + data.err, false,
                    null,
                    {text: "Close"});
            }
        })
        .fail(function() {
            showInputDialog("Error refreshing", false,
                null,
                {text: "Close"});
        });
}

BrowserActionsOnline.prototype.removeSelected = function(done, fail) {
    if (done) {
        done();
    }
}

BrowserActionsOnline.prototype.addFolder = function(name, done, fail) {
    if (done) {
        done();
    }
}



function BrowserActionsOffline(browser) {
    this.browser = browser;
}

BrowserActionsOffline.prototype.uploadFile = function(fullPath, props, fileObj, signFileObj, done, fail) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    
    formData.append("dest", fullPath);
    //formData.append("props", JSON.stringify(props));
    formData.append("source", fileObj);
    //if (signFileObj) {
    //    formData.append("sign_file", signFileObj);
    //}
    formData.append("name", gProjectName);
    
    var that = this;
    xhr.onreadystatechange = function() {
        progressModalOpen("Writing File");
        if (xhr.status == 200 && xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            if (data && data.ok) {
                //getProgressStatus(100, null);
                
                
                //project.userFiles = JSON.parse(that.browser.dump());
                
                //saveProjectAPI(function() {
                //    progressModalClose(true);
                //});
                done();
                
                saveUserFilesAPI(that.browser.dump(), function() {
                    if (signFileObj && signFileObj.name) {
                        that.uploadSignFile(fullPath, props, fileObj, signFileObj, done, fail)
                    } else {
                        progressModalClose(true);
                    }
                });
                
            }
            else if (data && data.err) {
                progressModalError("Uploading, err:" + data.err);
                fail(data.err);
            }
            else {
                progressModalError("Uploading");
                fail(data.err);
            }
        } else if (xhr.status > 200) {
            progressModalError("Uploading");
            fail();
        }
    }
    
    //progressModalOpen("Writing File");
    xhr.open("POST", "/api/1/flash/uploadProjectFsFile", true);
    xhr.send(formData);
}

BrowserActionsOffline.prototype.deleteFile = function(fullPath, token, done, fail) {
    var that = this;
    $.post("/api/1/flash/deleteProjectFsFile", {name: gProjectName, source: fullPath})
        .done(function(data) {
            if (data && data.ok) {
                //done(data.ok);
                //saveUserFilesAPI(that.browser.dump(), function() {
                   
                //});
            } else if (data && data.err) {

                fail(data.err + "(File removed from list anyway)");
            } else {
                fail();
            }
            
            done();
            saveUserFilesAPI(that.browser.dump(), function() {});

        })
        .fail(function() {
            fail();
        });
}


BrowserActionsOffline.prototype.changeProps = function(file, fullPath, pd, signFileObj, done, fail) {
    var that = this;
    
    var ret = checkValidName(pd.props().name, joinFullPath(file.parent.fullPath(), pd.props().name));
    if (ret.err) {
        fail(ret.err);
        return;
    }

    var props = pd.props();
    if (props.flagSecure && props.flagVendor) {
        if (!$.isNumeric(props.fileToken)) {
            pd.showError("Token has to be an integer");
            return;
        }
        
        if (props.fileToken > 0xFFFFFFFF || props.fileToken < 0) {
            pd.showError("Token cannot be smaller than zero or bigger than 4294967295");
            return;
        }
    }

    if(Number(props.maxFileSize ) < Number(file.maxFileSize))
    {
        pd.showError("Max Size is smaller than file's original size :" + file.maxFileSize + " bytes");
        return;
    }
    /*
    if (props.name.props.name.toLowerCase() == "mcuflashimg.bin") {
        pd.showError("Illegal name");
        return;
    }
    */
    $.extend(file, pd.props());
    $.post("/api/1/flash/renameProjectFsFile", {name: gProjectName, source: fullPath, dest: pd.props().name})
        .done(function(data) {
            if (data && data.ok) {
                saveUserFilesAPI(that.browser.dump(), function() {
                    done();
                    
                    if (signFileObj && signFileObj.name) {
                        var fullPath = file.fullPath();
                        gBrowserActions.uploadSignFile(fullPath, pd.props(), {}, signFileObj, pd.close, fail);
                    } else {
                        pd.close();
                    }
                }, fail);
            } else {
                fail(data.err);
            }
        })
        .fail(function() {
            fail("Error");
        });
    
    //that.uploadSignFile(fullPath, props, fileObj, signFileObj, done, fail);
    
}


BrowserActionsOffline.prototype.uploadSignFile = function(fullPath, props, fileObj, signFileObj, done, fail) {
var xhr = new XMLHttpRequest();
    var formData = new FormData();
    
    formData.append("dest", fullPath);
    formData.append("source", signFileObj);
    formData.append("name", gProjectName);
    formData.append("is_pk", (props.signatureFileNameSelect == '1'));
    
    var that = this;
    
    //var is_pk = $(that.div.find("#userSigFileInput").fval());
    
    xhr.onreadystatechange = function() {
        progressModalOpen("Writing File");
        if (xhr.status == 200 && xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            if (data && data.ok) {
                //getProgressStatus(100, null);
                //don't call done();
                
                saveUserFilesAPI(that.browser.dump(), function() {
                    progressModalClose(true);
                }, fail);
                
            }
            else if (data && data.err) {
                progressModalError("Uploading, err:" + data.err);
                fail(data.err);
            }
            else {
                progressModalError("Uploading");
                fail(data.err);
            }
        } else if (xhr.status > 200) {
            progressModalError("Uploading");
            fail();
        }
    }
    
    //progressModalOpen("Writing File");
    xhr.open("POST", "/api/1/flash/uploadProjectSigFile", true);
    xhr.send(formData); 
 
}

BrowserActionsOffline.prototype.renameFolder = function(folder, newName, done, fail) {
    var that = this;
    $.post("/api/1/flash/renameProjectFsDir", {"name": gProjectName, "source": folder.fullPath(), "dest": newName})
        .done(function(data) {
            if (data && data.ok) {
                done(data.ok);
                saveUserFilesAPI(that.browser.dump(), done, fail);
            } else {
                fail(data.err);
            }
        })
        .fail(function() {
            fail("Error");  
        });
}

BrowserActionsOffline.prototype.uploadMCUImage = function(fDevice) {
    var mcuImgName = gMCUImgName;
    //if(fDevice & is_pk)
        //mcuImgName= 'mcuflashimg.bin';
    gFdevice = fDevice;
    var folder = this.browser.root.findFolder("sys");
    if (!folder) {
        folder = this.browser.root.addFolder("sys");
        folder.parent.render();
    }
    
    var event = {data: {that: folder, newName: mcuImgName}};
    uploadFileWithBrowse(event);
}

BrowserActionsOffline.prototype.removeSelected = function(done, fail) {
    saveUserFilesAPI(this.browser.dump(), done, fail);
}

BrowserActionsOffline.prototype.downloadFile = function(fullPath, token) {

}

BrowserActionsOffline.prototype.addFolder = function(name, done, fail) {
    saveUserFilesAPI(this.browser.dump(), done, fail);
}

var propsDiv = (
'<div class="white-popup">' +
'	<div class="wrapPopup">' +
'		<div class="filePathN">' +
'			File Name: ' +
'			<span>' +
'               <span id="textFolderName"></span>' +
'				<input type="text" value="" id="textFileName">' +
'               <span id="fileError" class="uRed"></span>' +
'			</span>' +
'		</div>' +
'		<div class="mbot25"></div>' +
'		<div class="WrapChkBx">' +
'			<div class="floatLeft">' +
'				<div class="chkBx">' +
'					<input type="checkbox" id="flagFailSafe">' +
'					Failsafe' +
'				</div>' +
'				<div class="chkBx">' +
'					<input type="checkbox" id="flagSecure">' +
'					Secure' +
'				</div>' +
'				<div class="chkBx">' +
'					<input type="checkbox" id="flagNoSignatureTest">' +
'					No Signature Test' +
'				</div>' +
'				<div class="chkBx">' +
'					<input type="checkbox" id="flagStatic">' +
'					Static' +
'				</div>' +
'			</div>' +
'			<div class="floatRight">' + 
'				<div class="chkBx">' +
'					<input type="checkbox" id="flagVendor">' +
'					Vendor' +
'				</div>' +
'				<div class="chkBx">' +
'					<input type="checkbox" id="flagPublicWrite">' +
'					Public Write' +
'				</div>' +
'				<div class="chkBx">' +
'					<input type="checkbox" id="flagPublicRead">' +
'					Public Read' +
'				</div>' +
'			</div>' +
'		</div>' +  
'		<div class="mbot25 clear"></div>' +
'		<div class="wrapDRS floatLeft">' +
'			<div class="fieldName">File Token:</div>' +
'			<input type="text" value="" id="fileToken">' +
'		</div>' +
'		<div class="clearM mbot25"></div>' +
            
'			<fieldset class = "wrapSection" >' + 
//'			<div class="fieldName ">Signature File Name:</div>' +
'			<div class="wrapDRS">' +             
//'			<div class="" data-tooltip="In Private key option you should increase you MAX SIZE on 20 bytes">'+
'			<div class="">'+
'                <select id="userSigFileSelect">' +
'				 <option value="0">Signature File Name:</option>' +
'				 <option value="1">Private Key File Name:</option>' +
'			     </select>' +
'           </div>' +
'           <div class="clearS mbot25"></div>' +
'				<div class="floatLeft">' +
'					<input type="text" id="userSigFileInput">' +
'				</div>' +
'				<div id="browseUserSigFile" class="regButton mtop0 mLeftS">' +
//'					<id="browseUserSigFile">' +
'					Browse' +
'				</div>' +
'				<div id="clearUserSigFile" class="regButton mtop0 mLeftS">' +
//'					<id="clearUserSigFile">' +
'					Clear' +
'				</div>' +
'				<div class="hideFile">' +
'					<input type="file" id="USER_SIG_FILE">' +
'				</div>' +
'			</div>' +
'			</fieldset>' + 
'		<div class="clearM  mbot25"></div>' +
'		<div class="wrapDRS floatLeft">' +
'			<div class="fieldName">Certification File Name:</div>' +
'			<select id="fileCertification">' +
'				<option value="">None</option>' +
'			</select>' +
'		</div>' +
'		<div class="wrapDRS floatRight noMargin">' +
'			<div class="fieldName">Max Size:</div>' +
'			<input id="fileSize" type="number" class="sMargin" min="0">' +
'		</div>' +
'		<div class="clear"></div>' +
'		<div id="saveBtn" class="regButton">Save</div>&nbsp;&nbsp;' +
'		<div id="cancelBtn" class="regButton" style="margin-left: 20px;">Cancel</div>' +
'		<div class="clearM  mbot25"></div>' +
'       <div id="error" hidden></div>' +
'	</div>' +
'</div>'
);

function PropsDialog(disableAll) {
    this.div = $(propsDiv);
    
    this.toDisableAll = disableAll;
    
    if (!disableAll) {
        var that = this;
        this.div.find("#saveBtn").on("click", {that: that}, this.save);
        
        var div = this.div
        fileInputSign.on("change", function(event) {
            div.find("#userSigFileInput").val(fileInputSign.prop("files")[0].name);
        });
        
        this.div.find("#flagSecure").on("click", {that: this}, this.change);
        this.div.find("#flagVendor").on("click", {that: this}, this.change);
        this.div.find("#flagNoSignatureTest").on("click", {that: this}, this.change);
    } else {
        this.disableAll();
    }
    
    this.div.find("#cancelBtn").on("click", $.magnificPopup.close);
}

PropsDialog.prototype.open = function(obj, saveFunc) {     
    var opts = this.div.find("#fileCertification");
    opts = opts.empty()[0];
    opts.options.add(new Option(""));
    
    /* "cert" directory is unsufficient for chanined certificates and therefor deprecated in favor of just using the root folder
    var cert = folder.root().findFolder("cert");
    if (cert && opts) {
        $.each(cert.files, function(i, file) {
            opts.options.add(new Option(file.fullPath()));
        });
    }
    */
    
    if (opts) {
        $.each(obj.root().files, function(i, file) {
            opts.options.add(new Option(file.fullPath()));
        });
    }
    
    if (obj.certificationFileName) {
        $(opts).val(obj.certificationFileName);
    }
    
    this.saveFunc = saveFunc;
    
    this.change({data: {that: this}});
    if (this.toDisableAll) {
        this.disableAll();
    }
    
    fileInputSign.val("");
    
    $.magnificPopup.open({
        items: {
            src: this.div,
            type: 'inline'
        },
        modal: true
    });
}

PropsDialog.prototype.showError = function(text) {    
    this.div.find("#fileError").html(text).show();
}

PropsDialog.prototype.hideError = function(text) {
    this.div.find("#fileError").html("").hide();
}

PropsDialog.prototype.props = function(obj) {
    if (obj === undefined) {
        obj = {};
        obj.name = this.div.find("#textFileName").val().toLowerCase();
        obj.maxFileSize = this.div.find("#fileSize").val();
        obj.flagFailSafe = this.div.find("#flagFailSafe")[0].checked
        obj.flagSecure = this.div.find("#flagSecure")[0].checked
        obj.flagVendor = this.div.find("#flagVendor")[0].checked
        obj.flagStatic = this.div.find("#flagStatic")[0].checked
        obj.flagNoSignatureTest = this.div.find("#flagNoSignatureTest")[0].checked
        obj.flagPublicWrite = this.div.find("#flagPublicWrite")[0].checked
        obj.flagPublicRead = this.div.find("#flagPublicRead")[0].checked
        obj.fileToken = this.div.find("#fileToken").val();
        obj.certificationFileName = this.div.find("#fileCertification").val();
        obj.signatureFileName = this.div.find("#userSigFileInput").val();
        obj.signatureFileNameSelect = this.div.find("#userSigFileSelect").val();
    } else {
        if (obj.name) {
            this.div.find("#textFileName").val(obj.name);
        }

        if (obj.folderName) {
            this.div.find("#textFolderName").text(obj.folderName);
        }
        
        if (obj.maxFileSize) {
            this.div.find("#fileSize").val(obj.maxFileSize);
        }
        
        if (obj.flagFailSafe) {
            this.div.find("#flagFailSafe")[0].checked = obj.flagFailSafe;
        }
        
        if (obj.flagSecure) {
            this.div.find("#flagSecure")[0].checked = obj.flagSecure;
        }
        
        if (obj.flagVendor) {
            this.div.find("#flagVendor")[0].checked = obj.flagVendor;
        }
        
        if (obj.flagStatic) {
            this.div.find("#flagStatic")[0].checked = obj.flagStatic;
        }
        
        if (obj.flagNoSignatureTest) {
            this.div.find("#flagNoSignatureTest")[0].checked = obj.flagNoSignatureTest;
        }
        
        if (obj.flagPublicWrite) {
            this.div.find("#flagPublicWrite")[0].checked = obj.flagPublicWrite;
        }
        
        if (obj.flagPublicRead) {
            this.div.find("#flagPublicRead")[0].checked = obj.flagPublicRead;
        }
        
        if (obj.fileToken) {
            this.div.find("#fileToken").val(obj.fileToken);
        }
        
        if (obj.certificationFileName) {
            this.div.find("#fileCertification").val(obj.certificationFileName);
        }
        
        if (obj.signatureFileName) {
            this.div.find("#userSigFileInput").val(obj.signatureFileName);
        }
        
        if (obj.signatureFileNameSelect) {
            this.div.find("#userSigFileSelect").val(obj.signatureFileNameSelect);
        }
    }
    
    return obj;
}

PropsDialog.prototype.save = function(event) {
    var that = event.data.that;
    
    if (that.saveFunc) {
        that.saveFunc(that);
    }
}

PropsDialog.prototype.close = function() {
    $.magnificPopup.close();
}

PropsDialog.prototype.change = function(event) {
    var that = event.data.that;
    var flagSecure = that.div.find("#flagSecure")[0];
    var flagNoSigTest =  that.div.find("#flagNoSignatureTest")[0];
    var flagVendor =  that.div.find("#flagVendor")[0];
    var flagStatic = that.div.find("#flagStatic")[0];
    var flagPublicRead = that.div.find("#flagPublicRead")[0];
    var flagPublicWrite = that.div.find("#flagPublicWrite")[0];
    var fileToken = that.div.find("#fileToken")[0];
    var fileSign = that.div.find("#userSigFileInput")[0];
    var fileSignSelect = that.div.find("#userSigFileSelect")[0];
    var fileCert = that.div.find("#fileCertification")[0];
    var textFileName = that.div.find("#textFileName")[0];
    
    textFileName.disabled = ($(textFileName).val() == gMCUImgName);
    if (flagSecure.checked) {
        flagNoSigTest.disabled = false;
        flagVendor.disabled = false;
        flagStatic.disabled = false;
        flagPublicRead.disabled = false;
        flagPublicWrite.disabled = false;
        fileToken.disabled = !flagVendor.checked;
        fileSign.disabled = flagNoSigTest.checked;
        fileSignSelect.disabled = flagNoSigTest.checked;
        fileCert.disabled = flagNoSigTest.checked;
        if (!flagNoSigTest.checked) {
            that.div.find("#browseUserSigFile")
                .removeClass("btnDisabled")
                .off("click")
                .on("click", function() { 
                    fileInputSign.val("");
                    fileInputSign.click();
                });

            that.div.find("#clearUserSigFile")
                .removeClass("btnDisabled")
                .off("click")
                .on("click", function(event) {
                    that.div.find("#userSigFileInput").val("");
                    fileInputSign.val("");
                });
         
        } else {
            that.div.find("#browseUserSigFile")
                .addClass("btnDisabled")
                .off("click");

            that.div.find("#clearUserSigFile")
                .addClass("btnDisabled")
                .off("click");
        }
    } else {
        flagNoSigTest.disabled = true;
        flagVendor.disabled = true;
        flagStatic.disabled = true;
        flagPublicRead.disabled = true;
        flagPublicWrite.disabled = true;
        fileToken.disabled = true;
        fileSign.disabled = true;
        fileSignSelect.disabled = true;
        fileCert.disabled = true;

        that.div.find("#browseUserSigFile")
            .addClass("btnDisabled")
            .off("click");

        that.div.find("#clearUserSigFile")
            .addClass("btnDisabled")
            .off("click");   
    }
}

PropsDialog.prototype.disableAll = function() {
    var that = this;
    var flagSecure = that.div.find("#flagSecure")[0];
    var flagNoSigTest =  that.div.find("#flagNoSignatureTest")[0];
    var flagVendor =  that.div.find("#flagVendor")[0];
    var flagStatic = that.div.find("#flagStatic")[0];
    var flagPublicRead = that.div.find("#flagPublicRead")[0];
    var flagPublicWrite = that.div.find("#flagPublicWrite")[0];
    var fileToken = that.div.find("#fileToken")[0];
    var fileSign = that.div.find("#userSigFileInput")[0];
    var fileSignSelect = that.div.find("#userSigFileSelect")[0];
    var fileCert = that.div.find("#fileCertification")[0];
    var flagFailSafe = that.div.find("#flagFailSafe")[0];
    
    var textFileName = that.div.find("#textFileName")[0];
    var maxFileSize = this.div.find("#fileSize")[0];
    var saveBtn = this.div.find("#saveBtn");
    
    
    flagNoSigTest.disabled = true;
    flagVendor.disabled = true;
    flagStatic.disabled = true;
    flagPublicRead.disabled = true;
    flagPublicWrite.disabled = true;
    fileToken.disabled = true;
    fileSign.disabled = true;
    fileSignSelect.disabled = true;
    fileCert.disabled = true;
    flagSecure.disabled = true;
    flagFailSafe.disabled = true;
    
    textFileName.disabled = true;
    maxFileSize.disabled = true;
    
    that.div.find("#browseUserSigFile")
        .addClass("btnDisabled")
        .off("click");

    that.div.find("#clearUserSigFile")
        .addClass("btnDisabled")
        .off("click");
        
    saveBtn.addClass("btnDisabled").off("click");

    that.div.find("#fileCertification").addClass("fb-cert-disabled");
    $(that.div.find("#fileCertification")[0].options[0]).addClass("fb-cert-disabled");
        
        
        
}

function joinFullPath(folderPath, fileName, isFolder) {
    if ((!folderPath || folderPath == "/") && !isFolder) {
        return fileName;
    }
    
    return folderPath + "/" + fileName;
}

function findMaxPathLen(root, maxPathLen) {
    if (maxPathLen === undefined) {
        maxPathLen = root.fullPath().length + 1;
    }
    
    $.each(root.folders, function(i, folder) {
        var fullPathLen = folder.fullPath().length + 1;
        maxPathLen = Math.max(maxPathLen, fullPathLen);
        
        maxPathLen = findMaxPathLen(folder, maxPathLen);
    });
    
    $.each(root.files, function(i, file) {
        var fullPathLen = file.fullPath().length;
        maxPathLen = Math.max(maxPathLen, fullPathLen);
    });
    
    return maxPathLen;
}
    


var overwriteDiv = (
'		<div class="clearM mbot25"></div>' +
'			<div class="wrapDRS">' + 
'			<div class="fieldName">File Name:</div>' +
'				<div class="floatLeft">' +
'					<input type="text" id="userFileInput">' +
'				</div>' +
'				<div id="browseUserFile" class="regButton mtop0 mLeftS">' +
'					Browse' +
'				</div>' +
'				<div id="clearUserFile" class="regButton mtop0 mLeftS">' +
'					Clear' +
'				</div>' +
'			</div>'
);


function overwriteDialog() {
    this.div = $(overwriteDiv);
    
}

overwriteDialog.prototype.open = function() {
    $.magnificPopup.open({
        items: {
            src: this.div,
            type: 'inline'
        },
        modal: true
    });
}

var invalidCharsPatt = new RegExp("[\\<\\>:\"/\\\\|\\?\\*]");
var maxFullPathLen = 179; //240;
//var maxPathLen = 190 // windows limit

function checkValidName(name, fullPath) {
    if (name.trim().toLowerCase() == "con") {
        return {err: '"con" is a reserved file name'};
    }
    
    //if (name.trim() === "" || name.startsWith(" ") || name.endsWith(" ")) { // startsWith/endsWith not supported in ie11 ...
    if (name.trim() === "" || name.indexOf(" ") == 0 || name.lastIndexOf(" ") == name.length - 1) {
        return {err: "Name cannot be: empty, made out of spaces only, start with space/end with space"};
    }
    
    if (invalidCharsPatt.test(name)) {
        return {err: "Invalid characters in name: < > \ / ? * :"};
    }

    //if (name.length > maxPathLen) {
    //    return {err: "File/folder name is too long (>" + maxPathLen + ")"};
    //}
    
    if (fullPath.length > maxFullPathLen) {
        return {err: "Full path is too long (" + fullPath.length + ">" + maxFullPathLen + ")"};
    }
    
    return {ok: true};
}


var fileInput = null;
var fileInputSign = null;
var fileLink = null;

var propsDialog

return {Folder: Folder,
        File: File,
        Browser: Browser,
        PropsDialog: PropsDialog,
        showInputDialog: showInputDialog}
                
})(jQuery);
