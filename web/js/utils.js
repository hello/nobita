var projectName;
var project;
var folderstatus={};
var pageLoadFunction;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function beep() {
    var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}

function displayMainContent(page) {
    $.each(pages.page, function( index, _page ) {
        if(_page.id==page){ 
        //page found
            $('#mainContentData').empty();
            pageexists=true;
            //now build the page
            //set the title
            $('h1.mainTitle').html(_page.title);
            //build the objects
            buildDisplayElements(_page.objects ,'#mainContentData');
            
            if(_page.load){
				//save it to run after getting the project from the server
				pageLoadFunction = new Function (_page.load);
			}
			//add function to submit
			if(_page.submit){
				var pageSubmit= new Function(_page.submit);
				$( "#form" ).submit(function( event ) {
					return pageSubmit();
				});
			}
			pageLoadFunction();
            
        }
    });
}

//Menu builder
function buildChildMenu(_menu)
{
	//first  check if should display
	var visibleFunction= new Function(_menu.visibleFunction);
	if(!visibleFunction()){
		return "";
	}
	//if visisble start building
	var menu="<li id=\""+_menu.id+"\">";
	var child="";
	//start getting childs
	if(_menu.child){
		//build child menus in recursion
		for (var i=0;i<_menu.child.length;i++){
			child += buildChildMenu( _menu.child[i]);
		}
	}
	if(child.length >1) {
		menu +="<i class=\"fa-li fa fa-minus-square-o\" onclick=\"collapse('#"+_menu.id+"');\"></i>";
	}
	else{
		menu +="<i class=\"fa-li\"></i>";
	
	}
	////menu +="<a href=\""+_menu.page+"\">"+ _menu.name+ "</a>";
    var target = _menu.page.split("?")[1].split("=")[1];
    menu +="<a href='javascript:void(0);' onclick='displayMainContent(\"" + target + "\");'>"+ _menu.name+ "</a>";
    
    
	//check if need status
	var checkFunction= new Function(_menu.checkFunction);
	if(checkFunction()){
		menu += "<i class=\"fa fa-exclamation-circle\"></i>";
	}
	//add childs
	if(child.length >1){
		menu+="<ul class=\"fa-ul\">" +child +"</ul>";
	}

	menu+="</li>";
	return menu;
};
//menu collapse
function collapse(element)
{
	$(element).find('ul').first().toggle('show');
	if($(element).find('i').first().hasClass('fa-minus-square-o')){
		$(element).find('i').first().removeClass('fa-minus-square-o');
		$(element).find('i').first().addClass('fa-plus-square-o');
	}else{
		$(element).find('i').first().removeClass('fa-plus-square-o');
		$(element).find('i').first().addClass('fa-minus-square-o');
	}
}


function build_files2(files, rootElement) {
    $.each(files, function(index, fileObj) {
        if (fileObj.type == "folder") {
            var obj = $("<div>", {
                        "class": ".fa-folder-o",
                        "id": fileObj.id,
                        "data-type": "folder"
            }).val(fileObj.id).appendTo($(rootElement))
        }
    })
}

//Build the files
function build_files( files , windowsobject,space,parent)
{
	if(space==="" && parent===""){
		//print a root
		var html='<div id="root_div" >';
			html+='<div class="fsLine" id="_FolderMaster_File"  data-type="folder">';
				html+='<div class="fs1">';
					html+='<span><i class="fa fa-folder-o"></i>&nbsp;/</span>';
				html+='</div>';
			html+='</div>';
		html+='</div>'
		$(windowsobject).append(html);
		space='&nbsp;&nbsp;&nbsp;';
	}

	
	$.each(files, function( index, _object ) {
		var html="";
		var myid=_object.id+parent.split('//').join('');
		//avoid spaces as jquery cant hold spaces
		myid=myid.replace(/ /g, '---');
		if(_object.type=="folder"){
			html+='<div id="'+myid+'_FolderMaster"  >'
		}
		html+='<div class="fsLine" id="'+_object.id.replace(/ /g, '---')+parent+'_File"  data-type="'+_object.type +'"><div class="fs1">'+space+'<i class="fa fa-square-o"   id="'+_object.id.replace(/ /g, '---')+parent+'//FileSelect" onclick="changeSelect(this)" data-type="'+_object.type +'"></i>&nbsp;&nbsp;';
		if(_object.type=="folder"){
			html+='<span onclick="filecollapseAction(\''+myid+'\');" ><i class="';
			if(folderstatus[myid]){
				html+=folderstatus[myid];
			}
			else{
				folderstatus[myid]="fa fa-folder-o";
				html+=folderstatus[myid];
			}
			html+='" ></i>&nbsp;'+_object.id+'</span></div>';
		}
		else{//its a file
			//file name
			 html+=_object.id+'</div>';
             var ffs = _object.FlagFailSafe == undefined? false : _object.FlagFailSafe ;
             var fs  = _object.FlagSecure   == undefined? false : _object.FlagSecure ;
			 //file safe
			 html+='<div class="fs3">'+ffs+'</div>';
			 //file secure
			 html+='<div class="fs4">'+fs+'</div>';
			 //Max size
			 html+='<div class="fs5">'+_object.MaxFileSize+'</div>';
             
             if (_object.Blocks !== undefined) {
                html+='<div class="fs6">'+_object.Blocks+'</div>';
            }
             
		}
		html+='</div>';
		if(_object.type=="folder"){
			html+='<div id="'+myid+'_FolderMasterSons"  ></div<'
			html+='</div>'
		}
		$(windowsobject).append(html);
		if(_object.type=="folder"){
			build_files( _object.object ,'#'+myid+'_FolderMasterSons'/*windowsobject*/,space+'&nbsp;&nbsp;&nbsp;&nbsp;', '//'+_object.id+parent)
		}
		
	});	
	//if root
	if(space=='&nbsp;&nbsp;&nbsp;'){
		filecollapse('#fileSysDiplayPageDiv');
		createDrops('ALL');		
	}
}
//recursive collapse
function filecollapse(ID){
	var childs=$(ID).children();
	for (var i=0;i<childs.length;i++){
		var child =childs[i];
		//get first folder
		var folder =$(child).find('.fa-folder-o,.fa-folder-open-o').first();
		if (folder.hasClass('fa-folder-o')){
			var mychilds=$(child).children();
			//hide soon
			for( var j=1; j<mychilds.length;j++)
			{
				$(mychilds[j]).hide();
			}
		}
		else { //should display soon
			var mychilds=$(child).children();
			//hide soon
			for( var j=1; j<mychilds.length;j++)
			{
				//if file  show
				if($(mychilds[j]).attr("data-type")=="file"){
					$(mychilds[j]).show();	
				}
				else	{
					if($(mychilds[j]).attr('id')){
						filecollapse('#'+ $(mychilds[j]).attr('id'));
					}
					else{
						$(mychilds[j]).show();	
					}
				}
			}
		}
	}	
		
	
}
//filecollapse
function filecollapseAction(folder){
	if(folderstatus[folder]=="fa fa-folder-o")	{
		folderstatus[folder]="fa fa-folder-open-o"
	}
	else{
		folderstatus[folder]="fa fa-folder-o"
	}
	//erase 
	$('#fileSysDiplayPageDiv').html("");
	//redo menus and files
	build_files(project.userFiles,'#fileSysDiplayPageDiv','','');
	
}

//build folders
function buildFolders(windowsobject,space,files,parent){
	$.each(files, function( index, _object ) {
		if(_object.type=="folder"){
			var html='<option value="'+_object.id+parent+'_Folder">'+space+_object.id+'</option>'
			$(windowsobject).append(html);
			buildFolders(windowsobject,'&nbsp;&nbsp;'+space,_object.object,'//'+_object.id+parent)
		}
	});
}
//Change File the selection
function changeSelect(id){
	
	if($(id).hasClass('fa-square-o')){
		$(id).removeClass('fa-square-o');
		$(id).addClass('fa-check-square-o');
	}else{
		$(id).addClass('fa-square-o');
		$(id).removeClass('fa-check-square-o');
	}

}
//Select all File
function selectAllFile(){
	var selects =$('#fileSysDiplayDiv i.fa-square-o');
	$.each(selects, function( index, _object ) {
		$(_object).removeClass('fa-square-o');
		$(_object).addClass('fa-check-square-o');
	});
	
}
function unselectAllFile(){
	var selects =$('#fileSysDiplayDiv i.fa-check-square-o');
	$.each(selects, function( index, _object ) {
		$(_object).removeClass('fa-check-square-o');
		$(_object).addClass('fa-square-o');
	});
}
//build display elements
function buildDisplayElements(elements, parent){
	$.each(elements, function( index, _object ) {
		var input='';
		switch(_object.type.toLowerCase()){
			case 'div':
				input+="<div ";
				
				if(_object.id){
					input +="id='"+_object.id+"'";
				}
				if(_object.class){
					input+=	" class='"+_object.class +"' ";
				}
				if(_object.tooltip){
					if(!(_object.class && _object.class.match('fieldName'))){
						input+= "  data-tooltip='"+_object.tooltip+"'";
					}
				}
				
				input+=" >";
				
				if(_object.title){
					input+=	_object.title;
				}
				if(_object.class && _object.class.match('fieldName') && _object.tooltip){
					input+= "&nbsp;&nbsp;<span data-tooltip='"+_object.tooltip+"'><i class='fa fa-question-circle' ></i></span>";
				}
				input+="</div>";
			break;
		case 'fieldset':
				input+="<fieldset ";
				if(_object.id){
					input +="id='"+_object.id+"'";
				}
				if(_object.id){
					input +="id='"+_object.id+"'";
				}
				if(_object.class){
					input+=	" class='"+_object.class+"' ";
				}
				if(_object.tooltip){
					input+= "  data-tooltip='"+_object.tooltip+"'";	
				}
				input+=" >";
				if(_object.title){
					input+="<legend>"+	_object.title+"</legend>";
				}
				input+="</fieldset>";
			break;
			case 'checkbox':
			case 'radio':
				$(_object.values).each(function(index,value){
					tooltip=false;
					input+="<input type='"+_object.type+"' id='"+_object.id+"_"+value.value+"' name='"+_object.id+"' value='"+value.value+"'";
					if(_object.tooltip){
						input+= "  data-tooltip='"+_object.tooltip+"'";
					}
				
					if(_object.checked && _object.checked==value.value){
						input+="  checked='checked'";
					}
					if(_object.class){
						input+=	" class='"+_object.class+"' ";
					}
					input+=">";
					if(value.text ){
						input+=value.text;
					}
					input+="<br>";
				});
				break;
			case 'select':
				input+="<select id='"+_object.id+"' name='"+_object.id+"'";
				if(_object.tooltip){
						input+= "  data-tooltip='"+_object.tooltip+"'";
				}
				if(_object.required){
						input+=" "+_object.required;
					}
					if(_object.multiple){
						input+=" "+_object.multiple;
					}
					if(_object.class){
						input+=	" class='"+_object.class+"' ";
					}
					input+=">";
					//for each option
					$(_object.values).each(function(index,value){
						input+="<option value='"+value.value+"' ";
						if(_object.value && _object.value==value.value){
							input+="selected";
						}
						input+=">"+value.text+"</option>";
					});
					input+="</select>";
					break;
			case 'textarea':
				input+="<textarea id='"+_object.id+"' name='"+_object.id+"'";
				if(_object.placeholder){
					input+=" placeholder='"+_object.placeholder +"'";
				}
				if(_object.tooltip){
					input+= "  data-tooltip='"+_object.tooltip+"'";
				}
				if(_object.class){
					input+=	" class='"+_object.class+"' ";
				}
				if(_object.rows){
					input+=" rows='"+_object.rows +"'";
				}
				if(_object.cols){
					input+=" cols='"+_object.cols +"'";
				}
				if(_object.required){
					input+=" "+_object.required;
				}
				input+=">";
				if(_object.value){
					input+=_object.value;
				}	
				input+="</textarea>";
				break;
			case 'justtext':
				if(_object.title){
					input+=	_object.title;
				}
				break;
			case 'br':
				input+=	"<br />";
				break;
			default:
				input+="<input type='"+_object.type+"'  id='"+_object.id+"' name='"+_object.id+"'";
				if(_object.tooltip){
					input+= "  data-tooltip='"+_object.tooltip+"'";
				}
				if(_object.value!=undefined){
					input+=" value='"+_object.value +"'";
				}
				if(_object.class){
					input+=	" class='"+_object.class+"' ";
				}
				if(_object.placeholder){
					input+=" placeholder='"+_object.placeholder +"'";
				}	
				if(_object.max!=undefined){
					input+=" max='"+_object.max +"'";
				}
				if(_object.min!=undefined){
					input+=" min='"+_object.min +"'";
				}
				if(_object.required){
					input+=" "+_object.required;
				}
				input+=">";
		}
		$(parent).append(input);
		//now check if have sons
		if(_object.objects)
		{
			buildDisplayElements(_object.objects, "#"+_object.id);
		}
		//Add events
		if(_object.change){
			var objectChange= new Function(_object.change);
			$("#"+_object.id ).change(function( event ) {
				objectChange();
			});
		}
		if(_object.select){
			var objectSelect= new Function(_object.select);
			$("#"+_object.id ).select(function( event ) {
				objectSelect();
			});
		}
		if(_object.click){
			var objectClick= new Function(_object.click);
			$("#"+_object.id ).click(function( event ) {
				objectClick();
			});
		}
		if(_object.focus){
			var objectFocus= new Function(_object.focus);
			$("#"+_object.id ).focusin(function( event ) {
				objectFocus();
			});
		}
		if(_object.keydown){
			var objectKeydown= new Function(_object.keydown);
			$("#"+_object.id ).keydown(function( event ) {
				objectKeydown();
			});
		}
		if(_object.mouseenter){
			var objectMouseEnter= new Function(_object.mouseenter);
			$("#"+_object.id ).mouseenter(function( event ) {
				objectMouseEnter();
			});
		}
		if(_object.mouseout){
			var objectMouseOut= new Function(_object.mouseout);
			$("#"+_object.id ).mouseout(function( event ) {
				objectMouseOut();
			});
		}
	});
}

//run this on load
$(function() {
	//get the page name
	var page =getParameterByName('page');
	//read project Name from localstorage
	projectName= localStorage.getItem('projectName');
	if(!projectName ||projectName==undefined || projectName.length<1){
		if( page != 'newproject'){
			//go to new project
			window.location.href ='/index.htm?page=newproject';
		}
		else{
			project={};
		}
	}
    else if(projectName == 'ProjectImg')
    {
       project={};
    }
	else{
		try{
			//load project info from API
			$.post("/api/1/flash/openProject",   {'name':projectName},
				function(data,status){
				//if return success and has data
					if(status=='success' && data.ok){
						//save on localStorage project name
						project=data.ok.metadata;
					}
					else if(data.err){
						alert(data.err);
						//go to new project
					window.location.href ='/index.htm?page=newproject';
					}
					pageLoadFunction();
			});
		}
		catch(e){}
	}
		//Build main menu
	var mainmenu='';
	for (var i=0;i<menu.length;i++){
		mainmenu += buildChildMenu( menu[i]);	
	}

	//display main menu
	jQuery('ul.fa-ul.leftContentTree').html(mainmenu);
	
	//build page elements
	var pageexists=false;
	//now search the name in the array
	$.each(pages.page, function( index, _page ) {
		if(_page.id==page){ 
		//page found
			pageexists=true;
			//now build the page
			//set the title
			$('h1.mainTitle').html(_page.title);
			//build the objects
			buildDisplayElements(_page.objects ,'#mainContentData');
			//beep();
			//run the load function
			if(_page.load){
				//save it to run after getting the project from the server
				pageLoadFunction = new Function (_page.load);
                if (_page.id == "newproject") {
                    pageLoadFunction();
                }
                //special edit for openProjImg
                if (_page.id == "openProjImg") {
                    pageLoadFunction();
                }
			}
			//add function to submit
			if(_page.submit){
				var pageSubmit= new Function(_page.submit);
				$( "#form" ).submit(function( event ) {
					return pageSubmit();
				});
			}
		}
	});
	if(!pageexists){
		//page not in the system
		$('h1.mainTitle').html("Page not found");
	}
	//start the tooltip
    try {
        $('.tooltip').tooltipster(
        {
            animation: 'fade',
            delay: 200,
            theme: 'tooltipster-default',
            touchDevices: false,
            trigger: 'click'
        });
    } catch (e) {
        
    }
 });
 //unload event
 $( window ).unload(function() {
	 //save the project to localStorage
	 localStorage.setItem('project', JSON.stringify(project));
     localStorage.setItem('isconnected' , 'false');
});
//Event handler
function addEventHandler(obj, evt, handler) {
    if (obj.addEventListener) {
        // W3C method
        obj.addEventListener(evt, handler, false);
    } else if (obj.attachEvent) {
        // IE method.
        obj.attachEvent('on' + evt, handler);
    } else {
        // Old school method.
        obj['on' + evt] = handler;
    }
}

function saveImage ()
{
    //'^5':'<a id="lastImageLink" href="/api/1/flash/last_image"></a>',
    $('#lastImageLink').html('<a id="lastImageLinkPath" href="/api/1/flash/lastImage?name=' + projectName + '"></a>');
    document.getElementById('lastImageLinkPath').click();
}
//function for action
//create images
function createImage(callOnDone, noClose)
{
	/*set the processing note*/ 	
	//$('#progressAlertDiv').show();	
	//$('#progressAlertDiv').html('<div class="inProgress">In Progress...<img src="images/ajax-loader.gif"></div>'); 
    /*
	$.post("/api/1/flash/createImageFromProject",   {name: projectName, key: null},	
		function(data,status){
            if (status == "success") {
                if (data && data.ok) {
                    $('#progressAlertDiv').html('<sdiv class="inProgress">Done...</div>');
                }
                else if (data && data.err) {
                    $('#progressAlertDiv').html('<sdiv class="inProgress">Error...</div>');
                    //alert(data.err);
                    displayError(data.err);
                }
                else {
                    $('#progressAlertDiv').html('<sdiv class="inProgress">Error...</div>');
                }
            }
		}
	);
    */   
    if(('development' == project.header.Mode) && (!project.header.DEV_MAC_ADDR ||project.header.DEV_MAC_ADDR==undefined || project.header.DEV_MAC_ADDR.length<1) )
    {
        showInputDialog('Original mac address was not provided. This parameter is mandatory in development mode', 
                false, 
                null,
                {text: "Close"});
        return;
    }
    
    progressModalOpen("Creating image, please wait");
    $.post("/api/1/flash/createImageFromProject",   {name: projectName, key: null})
        .done(function(data) {
            if (data && data.ok) {
                getProgressStatus(100, callOnDone, noClose);
                
                /*if(localStorage.getItem('isconnected') == 'false')//connected
                {
                    localStorage.setItem('isconnected', 'true');
                    $('#deviceStatusBox').append('<div class="uStatus"><div class="uText jslink"><div class="uIcon"><i class="fa fa-unlink uRed" ></i></div>Connected: On</div></div>');
                    $('#ConnectBtn').text("Disconnect");
        
                }*/
            } else {
                $('#progStatusImg').hide();
                $('#progStatusBtn').text("Close");
                $('#progStatus').text("Error: " + ((data && data.err) ? data.err : "unknown"));
            }
        })
        .fail( function(xhr, textStatus, errorThrown) {
            $('#progStatusImg').hide();
            $('#progStatusBtn').text("Close");
            $('#progStatus').text("Error: disconnected");
        });
}
//files Div go button clicked
function filesDivAction()
{
	//action is delete
	if ($('#filesDivActionSelect').val()=='Delete')
	{
		var toDelete=$('.fsLine>.fs1>i.fa-check-square-o');
		for (var i=0;i<toDelete.length;i++){
			var folderarray=toDelete[i].id.replace("//FileSelect", "").split("//").reverse();
			//get the first element
			var elementToDelete=folderarray.pop();
			var folderPath=findFolder(folderarray,project.userFiles);
			//now go to all object untill find and delete;
			if( folderPath && folderPath.object){
				for(var j=0;j<folderPath.object.length;j++){
					if(folderPath.object[j].id==elementToDelete){
						//remove the items
						folderPath.object.splice(j,1);
					}
				}
			}
		}
		//erase elements on display
		$('#fileSysDiplayDiv .fsLine').remove();
		//rebuild
		//rebuild
		build_files(project.userFiles,'#fileSysDiplayDiv','','');
	}
	
}
//change the slider Development Mode
function toogleSlider()
{
	if($('#DevelopmentModeToggle .slider').hasClass('sliderRight')){
		$('#DevelopmentModeToggle .slider').removeClass('sliderRight');
		$('#DevelopmentModeToggle .slider').addClass('sliderLeft');
	}
	else{
		$('#DevelopmentModeToggle .slider').removeClass('sliderLeft');
		$('#DevelopmentModeToggle .slider').addClass('sliderRight');
	}
}

//find folder
function findFolder(folder_array,folders){
	if(folder_array.length===0 || folder_array[0]==="" ){
		return folders;
	}
	for(var i=0;i<folders.length;i++){
		var _object=folders[i];
		if(_object.type=="folder"){
			//change the --- to space as jquery can not hold space
			if (_object.id==folder_array[0].replace(/---/g, ' ')){
				//found folder
				if (folder_array.length==1){
					return _object;
				}
				else{
					return findFolder(folder_array.slice(1),_object.object);
				}
				
			}
		}
	}
}

//create new folder
function filesCreateFolderDiv(){
	//get the folder name
	var foldername=$('#folderName').val();
	if(!foldername && foldername.length<1){
		return;
	}
	//clean name with invalids chars
	foldername=foldername.replace(/\[/g, "(").replace(/\]/g, ")").replace(/\_|\\|\:|\||\/|\*|\?|\"|\>/g,"");
	//now split
	var folderarray=$('#selectFolderSelect').val().replace("//Folder", "").split("//").reverse();
	var folderPath=findFolder(folderarray,project.userFiles);
	if(!folderPath.object){
		folderPath.object=[];
	}
	folderPath.object.push(
	{
		"id":foldername,
		"type": "folder",
		"object":[]
	});
	//clear the folder name
	$('#folderName').val('');
	//erase
		$('#fileSysDiplayDiv .fsLine').remove();
	//redo menus and files
	build_files(project.userFiles,'#fileSysDiplayDiv','','');
}
//create a folder on the files page
function fileCreateFolderDivPage(folderName,folderArray){
	//get the folder name
	if(!folderName && folderName.length<1){
		alert ("No Folder was created!")
		return;
	}
	//clean name with invalids chars
	folderName=folderName.replace(/\[/g, "(").replace(/\]/g, ")").replace(/\\|\:|\||\/|\*|\?|\"|\>/g,"");
	//now split
	var folderarray=folderArray.replace("//Folder", "").split("//").reverse();
	//if no files create the object
	if(!project.userFiles){
		project.userFiles=[];
	}
	if (folderArray==""){
		//check if exists the folder
		for (var i=0; i<project.userFiles.length;i++){
			if(project.userFiles[i].id==folderName){
				alert("Folder Already Exists!")
				return;
			}
		}
		project.userFiles.push(
		{
			"id":folderName,
			"type": "folder",
			"object":[]
		});	
	}
	else{
		var folderPath=findFolder(folderarray,project.userFiles);
		if(!folderPath.object){
			folderPath.object=[];
		}
		for (var i=0; i<folderPath.object.length;i++){
			if(folderPath.object[i].id==folderName){
				alert("Folder Already Exists!")
				return;
			}
		}
		folderPath.object.push(
		{
			"id":folderName,
			"type": "folder",
			"object":[]
		});	
	}
} 
//load Filesuserfiles page function 
function loadFilesuserfiles(){
    
        
   $('#fileActionSelectAction').addClass('btnDisabled').off('click');
    
   var fb = new fileBrowser.Browser($("#fileSysDiv"), "offline", projectName);
   gFileBrowser = fb;
    //fb1 = fb;
    /*
    $.post("/api/1/flash/getFileList")
        .done(function(data) {
            if (data.ok) {
                fb.load(data.ok);
                fb.render();
            } else if (data.err) {
                fileBrowser.showInputDialog("Error: " + data.err, false);
            } else {
                fileBrowser.showInputDialog("Error: " + data.err, false);
            }
        })
        .fail(function() {
            fileBrowser.showInputDialog("Error", false);
        });
    */
    if (projectName) {
        $.post("/api/1/flash/loadUserFiles", {"name": projectName})
            .done(function(data) {
                if (data.ok) {
                    fb.load(data.ok);
                } else {
                    if (data.err) {
                        alert("error loading user files");
                    }
                }
                
                fb.render();
            })
            .fail(function(data) {
                alert("error loading user files");
            });
    }
    
    if(project.header.DeviceType != 'CC3100')
    {
        $($('#fileActionSelect')[0].options[2]).show();
        
    }
    else
    {
        $($('#fileActionSelect')[0].options[2]).hide();
    }

    $("#checkUnchekDiv").children().eq(0).on("click", function() { fb.selectAll.call(fb) })
    $("#checkUnchekDiv").children().eq(1).on("click", function() { fb.unselectAll.call(fb) })
    
    return;
    
    
	if(!project){
		project={};
	}
	if(!project.userFiles){
		project.userFiles=[];
	}	
	if(project && project.userFiles){
		var found=-1;
		for (var cert=0;cert< project.userFiles.length;cert++){
			if( project.userFiles[cert].id=="cert" && project.userFiles[cert].type=="folder"){
				found=cert
			}
		}
		//if not found create 
		if (found==-1){
			var cert={
				id:'cert',
				type:"folder",
				object:[]
			};
			project.userFiles.push(cert)
		}
		build_files(project.userFiles,'#fileSysDiplayPageDiv','','');
	}
	//unbind drop in main
	$('#fileSysDiv').unbind('dragover');
	$('#fileSysDiv').unbind('dragenter');
	$('#fileSysDiv').unbind('drop');
	// stop propagation on default draganddrop
	$('#fileSysDiv').on('dragover',   function(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	);
	$('#fileSysDiv').on( 'dragenter',   function(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	);
	$('#fileSysDiv').on( 'drop',   function(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	);
	//bind upload event
	$('#fileElement').change(function (e) {
	//get the folder name
	var foldername=""
	var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
	if(toAction.length>0)
	{
		foldername=$(toAction[0]).attr("id").replace('//FileSelect','').split('//').reverse();
	}
	//upload
	 upload(e.target.files,foldername);
    });

    //bind mcuimg event
    $('#MCUImg').change(function (e) {
	//get the folder name
	var foldername=["sys"]
	var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
	if(toAction.length>0)
	{
		foldername=$(toAction[0]).attr("id").replace('//FileSelect','').split('//').reverse();
	}
	//upload
	 upload(e.target.files,foldername, true);
    });
    
    if(project.header.DeviceType == 'CC3100')
    {
        document.getElementById('fileActionSelect').options[6].style.display = 'none'; 
    }
    else
    {
       document.getElementById('fileActionSelect').options[6].style.display = 'block';
    }
}



//load Filesuserfiles page function 
function loadFilesuserfilesOnline(){
    var fb = new fileBrowser.Browser($("#fileSysDiv"), "online");
    //fb1 = fb;
    progressModalOpen("Loading file list, please wait");
    
    $.post("/api/1/flash/getFileList")
        .done(function(data) {
            if (data.ok) {
                fb.load(data.ok);
                fb.render();
                progressModalClose();
            } else if (data.err) {
                fileBrowser.showInputDialog("Error: " + data.err, false, null, {text: "Close"});
            } else {
                fileBrowser.showInputDialog("Error: " + data.err, false, null, {text: "Close"});
            }
        })
        .fail(function() {
            fileBrowser.showInputDialog("Error", false, null, {text: "Close"});
        });
}





//Select all File
function selectAllFilePage(){
	var selects =$('#fileSysDiplayPageDiv i.fa-square-o');
	$.each(selects, function( index, _object ) {
		$(_object).removeClass('fa-square-o');
		$(_object).addClass('fa-check-square-o');
	});
	
}
function unselectAllFilePage(){
	var selects =$('#fileSysDiplayPageDiv i.fa-check-square-o');
	$.each(selects, function( index, _object ) {
		$(_object).removeClass('fa-check-square-o');
		$(_object).addClass('fa-square-o');
	});
}

function changeAction()
{
    if($('#fileActionSelect').val() != undefined)
    {
        switch($('#fileActionSelect').val())
        {
            case 'MCUImg'       :
            case 'Upload'       : $('#fileActionSelectAction').html('Browse');
                                  $('#fileActionSelectAction').removeClass('btnDisabled');
                                  $('#fileActionSelectAction').off("click").on('click', filesDivPageAction);
                                    break;
            case 'Program'      : $('#fileActionSelectAction').html('Execute');
                                    break;

            case 'NewFolder'    : $('#fileActionSelectAction').html('Create');
                                    break;
            case 'Rename'       :
            case 'Remove'       : $('#fileActionSelectAction').html('&nbsp;&nbsp;Apply');
                                  $('#fileActionSelectAction').removeClass('btnDisabled');
                                  $('#fileActionSelectAction').off("click").on('click', filesDivPageAction);
                                    break;
            case 'Properties'   : $('#fileActionSelectAction').html('Display');
                                    break;
             default:    $('#fileActionSelectAction').html('Execute');
                         $('#fileActionSelectAction').addClass('btnDisabled').off('click');
        }
    }
}

//files page drop down action
function filesDivPageAction(){
    if ($('#fileActionSelect').val() == 'MCUImg') {
        if (gFileBrowser) {
            gFileBrowser.uploadMCUImage(project.header.DeviceType == 'CC3220FS');
        }
    } else if ($('#fileActionSelect').val() == 'Remove') {
        gFileBrowser.removeSelected();
    }
    
    return;
	//action is delete
	if ($('#fileActionSelect').val()=='Remove')
	{
		var toDelete=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		for (var i=0;i<toDelete.length;i++){
			var folderarray=toDelete[i].id.replace("//FileSelect", "").replace(/---/g, ' ').split("//").reverse();
			//get the first element
			var elementToDelete=folderarray.pop();
			if(folderarray.length===0){ //is root
				if (project.userFiles )
				{
					for(var j=0;j<project.userFiles.length;j++){
						if(project.userFiles[j].id==elementToDelete){
							if(project.userFiles[j].type=="file"){ //if it a file
								//remove the items
								project.userFiles.splice(j,1);
								var objectToSend={
									'name':projectName,
									'source':"/"+elementToDelete
								};
								//delete from API
								$.post("/api/1/flash/deleteProjectFsFile", 
									objectToSend,
									function(data,status){
										if(status=='success' && data.ok){
											//save project
											saveProjectAPI();
										}
										else if(data.err){
											alert("Error deleteing the file"+data.err);
										}
									}
								);								
							}
							else{ //is a folder delete for Project only
								//remove the items
								project.userFiles.splice(j,1);								
							}
						}
					}
				}
			}
			else{
				var folderPath=findFolder(folderarray,project.userFiles);
				//now go to all object until find and delete;
				if( folderPath && folderPath.object){
					for(var j=0;j<folderPath.object.length;j++){
						if(folderPath.object[j].id==elementToDelete){
							if(folderPath.object[j].type=="file"){ //if it a file
								//remove the items
								folderPath.object.splice(j,1);
											
								var objectToSend={
									'name':projectName,
									'source':"/"+folderarray.join("/")+"/"+elementToDelete
								};
								//delete from API
								$.post("/api/1/flash/deleteProjectFsFile", 
									objectToSend,
									function(data,status){
										if(status=='success' && data.ok){
											//save project
											saveProjectAPI();
										}
										else if(data.err){
											alert("Error delete the file"+data.err);
										}
									}
								);
							}
							else{
								//remove the items
								folderPath.object.splice(j,1);
							}
						}
					}
				}
			}
		}
		//erase elements on display
		$('#fileSysDiplayPageDiv').html("");
		//redo menus and files
		build_files(project.userFiles,'#fileSysDiplayPageDiv','','');
        
        saveProjectAPI();
	}
	else if($('#fileActionSelect').val()=='NewFolder'){
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length===0){
			folderCreate(toAction);
			
			
		}
		else{
			//check if there is a file selected
			for (var i=0;i<toAction.length;i++){
				var type=$(toAction[i]).attr("data-type");
				if(type!="folder"){
						alert ("Can't create a folder in a a file")
						return;
				}				
			}
			folderCreate(toAction);
		}
	}
	else if($('#fileActionSelect').val()=='Upload'){
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length>1){
			alert ("Please select only one folder!");
			return;

		}
		else{
			//check if there is a file selected
			for (var i=0;i<toAction.length;i++){
				var type=$(toAction[i]).attr("data-type");
				if(type!="folder"){
					alert ("File can not be uploaded into a file!");
					return;
				}				
			}
		}
		//if here display the  browser
        $('#fileElement').click();
	}
	else if($('#fileActionSelect').val()=='Rename'){
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length>1){
			alert ("Please select only one folder!");
			return;

		}
		else{
			//check if there is a file selected
			for (var i=0;i<toAction.length;i++){
				var type=$(toAction[i]).attr("data-type");
				if(type!="folder"){
					alert ("File can not be uploaded into a file!");
					return;
				}				
			}
		}
		//rename
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length>0)
		{
			foldername=$(toAction[0]).attr("id").replace('//FileSelect','').replace(/---/g, ' ');
			//rename
			folderRename(foldername);
		}
		
	}
    else if($('#fileActionSelect').val()=='MCUImg'){ //Select MCU Img
            $('#MCUImg').val("");
            $('#MCUImg').click();
            //displayFileProperties('/sys/mcuimg.bin');
    }
	else if($('#fileActionSelect').val()=='Properties'){ //files properties
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length>1 ){
			alert ("Please select only one file!");
			return;

		}
		else if(toAction.length===0){
			alert ("Please select a file!");
			return;	
		}
		else{
			//check if there is a file selected
			for (var i=0;i<toAction.length;i++){
				var type=$(toAction[i]).attr("data-type");
				if(type=="folder"){
					alert ("Please select files only!");
					return;
				}				
			}
		}
		displayFileProperties($(toAction[0]).attr("id").replace("//FileSelect","").split("//").reverse().join("/"));
		
	}
}
//files page drop down action
function filesDivPageAction2(){
	//action is delete
	if ($('#fileActionSelect').val()=='Remove')
	{
		var toDelete=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		for (var i=0;i<toDelete.length;i++){
			var folderarray=toDelete[i].id.replace("//FileSelect", "").replace(/---/g, ' ').split("//").reverse();
			//get the first element
			var elementToDelete=folderarray.pop();
			if(folderarray.length===0){ //is root
				if (project.userFiles )
				{
					for(var j=0;j<project.userFiles.length;j++){
						if(project.userFiles[j].id==elementToDelete){
							if(project.userFiles[j].type=="file"){ //if it a file
								//remove the items
								project.userFiles.splice(j,1);
								var objectToSend={
									'name':projectName,
									'source':"/"+elementToDelete
								};
								//delete from API
								$.post("/api/1/flash/deleteProjectFsFile", 
									objectToSend,
									function(data,status){
										if(status=='success' && data.ok){
											//save project
											saveProjectAPI();
										}
										else if(data.err){
											alert("Error deleteing the file"+data.err);
										}
									}
								);								
							}
							else{ //is a folder delete for Project only
								//remove the items
								project.userFiles.splice(j,1);								
							}
						}
					}
				}
			}
			else{
				var folderPath=findFolder(folderarray,project.userFiles);
				//now go to all object until find and delete;
				if( folderPath && folderPath.object){
					for(var j=0;j<folderPath.object.length;j++){
						if(folderPath.object[j].id==elementToDelete){
							if(folderPath.object[j].type=="file"){ //if it a file
								//remove the items
								folderPath.object.splice(j,1);
											
								var objectToSend={
									'name':projectName,
									'source':"/"+folderarray.join("/")+"/"+elementToDelete
								};
								//delete from API
								$.post("/api/1/flash/deleteProjectFsFile", 
									objectToSend,
									function(data,status){
										if(status=='success' && data.ok){
											//save project
											saveProjectAPI();
										}
										else if(data.err){
											alert("Error delete the file"+data.err);
										}
									}
								);
							}
							else{
								//remove the items
								folderPath.object.splice(j,1);
							}
						}
					}
				}
			}
		}
		//erase elements on display
		$('#fileSysDiplayPageDiv').html("");
		//redo menus and files
		build_files(project.userFiles,'#fileSysDiplayPageDiv','','');
        
        saveProjectAPI();
	}
	else if($('#fileActionSelect').val()=='NewFolder'){
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length===0){
			folderCreate(toAction);
			
			
		}
		else{
			//check if there is a file selected
			for (var i=0;i<toAction.length;i++){
				var type=$(toAction[i]).attr("data-type");
				if(type!="folder"){
						alert ("Can't create a folder in a a file")
						return;
				}				
			}
			folderCreate(toAction);
		}
	}
	else if($('#fileActionSelect').val()=='Upload'){
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length>1){
			alert ("Please select only one folder!");
			return;

		}
		else{
			//check if there is a file selected
			for (var i=0;i<toAction.length;i++){
				var type=$(toAction[i]).attr("data-type");
				if(type!="folder"){
					alert ("File can not be uploaded into a file!");
					return;
				}				
			}
		}
		//if here display the  browser
        $('#fileElement').click();
	}
	else if($('#fileActionSelect').val()=='Rename'){
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length>1){
			alert ("Please select only one folder!");
			return;

		}
		else{
			//check if there is a file selected
			for (var i=0;i<toAction.length;i++){
				var type=$(toAction[i]).attr("data-type");
				if(type!="folder"){
					alert ("File can not be uploaded into a file!");
					return;
				}				
			}
		}
		//rename
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length>0)
		{
			foldername=$(toAction[0]).attr("id").replace('//FileSelect','').replace(/---/g, ' ');
			//rename
			folderRename(foldername);
		}
		
	}
    else if($('#fileActionSelect').val()=='MCUImg'){ //Select MCU Img
            $('#MCUImg').val("");
            $('#MCUImg').click();
            //displayFileProperties('/sys/mcuimg.bin');
    }
	else if($('#fileActionSelect').val()=='Properties'){ //files properties
		var toAction=$('#fileSysDiplayPageDiv .fsLine>.fs1>i.fa-check-square-o');
		if(toAction.length>1 ){
			alert ("Please select only one file!");
			return;

		}
		else if(toAction.length===0){
			alert ("Please select a file!");
			return;	
		}
		else{
			//check if there is a file selected
			for (var i=0;i<toAction.length;i++){
				var type=$(toAction[i]).attr("data-type");
				if(type=="folder"){
					alert ("Please select files only!");
					return;
				}				
			}
		}
		displayFileProperties($(toAction[0]).attr("id").replace("//FileSelect","").split("//").reverse().join("/"));
		
	}
}
function fileSecureGUI()
{
    var disabled = !$('#fileSecure').prop("checked");
    $('#fileNoSignature'    ).prop("disabled", disabled) ;
    $('#fileStatic'         ).prop("disabled", disabled) ;
    $('#fileVendor'         ).prop("disabled", disabled) ;
    $('#filePlublicWrite'   ).prop("disabled", disabled) ;
    
}
function fileNoSignatureGUI()
{
    var disabled = $('#fileNoSignature').prop("checked");
    $('#fileCertification'    ).prop("disabled", disabled) ;
    $('#USER_SIG_FILE'        ).prop("disabled", disabled) ;
     
}

function fileVendorGUI()
{
     //$("#fileToken"         ).prop("disabled", !$("#fileVendor").prop("checked")) ;
     document.getElementById("fileToken").disabled = !document.getElementById("fileVendor").checked;
}

//Display file Details
function displayFileProperties(fileFullPath){
	var folderArray=fileFullPath.split("/");
	//get file name
	var fileName=folderArray.pop();
	//display the properties
	var html='<div class="white-popup">';
	html +='	<div class="wrapPopup">';
    html +='		<div class="filePathN">';
	html +='			File Path: ';
	html +='			<span>';
	html +='				<input type="text" value="'+fileName+'" id="textFileName">';
	html +='			</span>';
	html +='		</div>';
	html +='		<div class="mbot25"></div>';
	html +='		<div class="WrapChkBx">';
	html +='			<div class="floatLeft">';
	html +='				<div class="chkBx">';
	html +='					<input type="checkbox" id="fileSafe">';
	html +='					Failsafe';
	html +='				</div>';
	html +='				<div class="chkBx"  onClick=fileSecureGUI();>';
	html +='					<input type="checkbox" id="fileSecure">';
	html +='					Secure'
	html +='				</div>';
	html +='				<div class="chkBx" onClick=fileNoSignatureGUI();>';
	html +='					<input type="checkbox" id="fileNoSignature">';
	html +='					No Signature Test'
	html +='				</div>';
	html +='				<div class="chkBx">';
	html +='					<input type="checkbox" id="fileStatic">';
	html +='					Static'
	html +='				</div>';
	html +='			</div>';
	html +='			<div class="floatRight">'; 
	html +='				<div class="chkBx" onClick=fileVendorGUI();>';
	html +='					<input type="checkbox" id="fileVendor">'
	html +='					Vendor';
	html +='				</div>';
	html +='				<div class="chkBx">';
	html +='					<input type="checkbox" id="filePlublicWrite">';
	html +='					Public Write'
	html +='				</div>';
	html +='				<div class="chkBx">';
	html +='					<input type="checkbox" id="filePlublicRead">';
	html +='					Public Read'
	html +='				</div>';
	html +='			</div>';
	html +='		</div>';  
	html +='		<div class="mbot25 clear"></div>';
    html +='		<div class="wrapDRS floatLeft">';
    html +='			<div class="fieldName">File Token:</div>';
	html +='			<input type="text" value="" id="fileToken">';
	html +='		</div>';
	html +='		<div class="clearM mbot25"></div>'
	//html +='		<div id="dropHereF">Signature File Name drag & drop area</div>';
    
    html +='			<div class="wrapDRS">'; 
    html +='			<div class="fieldName">Signature File Name:</div>';
	html +='				<div class="floatLeft">';
	html +='					<input type="text" id="userSigFileInput">';
	html +='				</div>';
	html +='				<div class="regButton mtop0 mLeftS" onClick="$(\'#USER_SIG_FILE\').click();">';
	html +='					<id="browseUserSigFile">';
    html +='					Browse';
	html +='				</div>';
    html +='				<div class="regButton mtop0 mLeftS" onClick="uploadSignatureBase(\''+fileFullPath+'\', false);">';
	html +='					<id="clearUserSigFile">';
    html +='					Clear';
	html +='				</div>';
	html +='				<div class="hideFile" onChange = "uploadSignatureBase(\''+fileFullPath+'\', true);">';
	html +='					<input type="file" id="USER_SIG_FILE">';
	html +='				</div>';
	html +='			</div>';
    
	html +='		<div class="clearM  mbot25"></div>';
	html +='		<div class="wrapDRS floatLeft">';
	html +='			<div class="fieldName">Certification File Name:</div>';
	html +='			<select id="fileCertification">';
	html +='				<option value="">None</option>';
	html +='			</select>';
	html +='		</div>';
	html +='		<div class="wrapDRS floatRight noMargin">';
	html +='			<div class="fieldName">Max Size:</div>';
	html +='			<input id="fileSize" type="number" class="sMargin" min="0" max="16000">';
	html +='		</div>';
    html +='		<div class="clear"></div>';
    html +='		<div class="regButton" onClick="filePropertiesSave(\''+fileFullPath+'\'); $.magnificPopup.close();" >Save</div>&nbsp;&nbsp;';
	html +='		<div class="regButton" style="margin-left: 20px;" onClick="$.magnificPopup.close();">Cancel</div>';
	html +='		<div class="clearM  mbot25"></div>';
	html +='	</div>';
	html +='</div>';	
	
	$.magnificPopup.open({
		items: {
			src:html,
			type: 'inline',
		}			
	});
	//wait 1 second and fill data as the callback does not work
	setTimeout(function() { 
		//fill certfication file
		//get all the files in the cert folder
		if(project &&project.userFiles ){
			for(var i=0;i<project.userFiles.length;i++){
				if(project.userFiles[i].id=="cert" && project.userFiles[i].type=="folder"){
					//get all files
					var certfolder=project.userFiles[i].object;
					if(certfolder){
						for(var j=0;j<certfolder.length;j++){
							if(certfolder[j].type=="file"){
								var html='<option value="'+certfolder[j].id+'">'+certfolder[j].id+'</option>';
								$('#fileCertification').append(html);
							}
						}
					}
				}
			}
		}
		//find the file and fill data
		var folderPath=findFolder(folderArray,project.userFiles);
		//now get loop for all values until find the file
        
        var _length;
        if(folderPath.length)
        {
            _length = folderPath.length;
        }
        else
        {
            _length = folderPath.object.length;
        }
    
		for(var j=0;j<_length;j++){
		//for(var j=0;j<folderPath.length;j++){
            
            
            
            var _name;
        
            if(folderPath[j])
            {
                _name = folderPath[j].id;
            }
            else
            {
                _name = folderPath.object[j].id;
            }
        
                //if(folderPath[j].id==fileName){
            if(_name==fileName){
                //save data
                var _folderPath;
                
                if(folderPath[j])
                {
                    _folderPath = folderPath[j];
                }
                else
                {
                    _folderPath = folderPath.object[j];
                }
                
                //var file=folderPath[j];
                var file=_folderPath;

			//if(folderPath[j].id==fileName){
				//find found
				//var file=folderPath[j];
				//fileSafe
				if (file.FlagFailSafe){
					$('#fileSafe').prop('checked', true);
				}
				//fileSecure
				if (file.FlagSecure){
					$('#fileSecure').prop('checked', true);
				}
				//fileNoSignature
				if (file.FlagNoSignatureTest ){
					$('#fileNoSignature').prop('checked', true);
				}
				//fileStatic
				if (file.FlagStatic){
					$('#fileStatic').prop('checked', true);
				}
				//fileVendor
				if (file.FlagVendor){
					$('#fileVendor').prop('checked', true);
				}
				//filePlublicWrite
				if (file.FlagPublicWrite){
					$('#filePlublicWrite').prop('checked', true);
				}
				//filePlublicRead
				if (file.FlagPublicRead){
					$('#filePlublicRead').prop('checked', true);
				}
				//fileToken
				if (file.FileToken ){
					$('#fileToken').val(file.FileToken);
				}
				//fileCertification
				if (file.CertificationFileName ){
					$('#fileCertification').val(file.CertificationFileName);
				}					
                //fileSignature
				if (file.SignatureFileName ){
					$('#userSigFileInput').val(file.SignatureFileName);
				}	
				//fileSize
				if (file.MaxFileSize ){
					$('#fileSize').val(file.MaxFileSize);
				}
                
            fileSecureGUI();
            fileNoSignatureGUI();
            fileVendorGUI();
            $('#userSigFileInput').prop("disabled", true) ;
            $('#userSigFileSelect').prop("disabled", true) ;
			}
		}
		//set drop
		//unbind and then rebind
		$('#userSigFileInput').unbind('dragover');
		$('#userSigFileInput').unbind('dragenter');
		$('#userSigFileInput').unbind('drop');
		// Tells the browser that we *can* drop on this target
		$('#userSigFileInput').on('dragover',   function(e) {
				e.preventDefault();
				e.stopPropagation();
			}
		);
		$('#userSigFileInput').on( 'dragenter',   function(e) {
				e.preventDefault();
				e.stopPropagation();
			}
		);
		$('#userSigFileInput').on('drop',   function(e){
				if(e.originalEvent.dataTransfer){
                    e.preventDefault();
                    e.stopPropagation();
                    if(!$('#fileNoSignature').prop("checked")){//not allowed when NoSignature checked
                        if(e.originalEvent.dataTransfer.files.length == 1) {
                            $('#userSigFileInput').val(e.originalEvent.dataTransfer.files[0].name.replace(/^.*[\\\/]/, ''));     
                            uploadSignature(e.originalEvent.dataTransfer.files,fileFullPath, "/api/1/flash/uploadProjectSigFile");
                        }   
                    }
				}
			}
		);
	}, 50);
}
//Save file Details
function filePropertiesSave(fileFullPath){
	var folderArray=fileFullPath.split("/");
	//get file name
	var fileName=folderArray.pop();
	//find the file and fill data
	var folderPath=findFolder(folderArray,project.userFiles);
	//now get loop 
    
    var _length;
    if(folderPath.length)
    {
        _length = folderPath.length;
    }
    else
    {
        _length = folderPath.object.length;
    }
    
	
	for(var j=0;j<_length;j++){
    //for(var j=0;j<folderPath.length;j++){
        var _name;
        
        if(folderPath[j])
        {
            _name = folderPath[j].id;
        }
        else
        {
            _name = folderPath.object[j].id;
        }
        
		//if(folderPath[j].id==fileName){
		if(_name==fileName){
			//save data
            var _folderPath;
            
            if(folderPath[j])
            {
                 _folderPath = folderPath[j];
            }
            else
            {
                _folderPath = folderPath.object[j];
            }
            
			//var file=folderPath[j];
			var file=_folderPath;
			
			//check if need a rename
			if($('#textFileName').val() && $('#textFileName').val().length && $('#textFileName').val()!= fileName){
				file.id=$('#textFileName').val();
				//send to API
				var objectToSend={
					'name':projectName,
					'source':"/"+folderArray.join("/")+"/"+fileName,
					'dest':$('#textFileName').val()
				};
				$.post("/api/1/flash/renameProjectFsFile",   objectToSend,
					function(data,status){
						if(data.err){
							file.id=fileName;
							alert("Error renaming the file the file"+data.err);
						}
					}
				);
			}
			//fileSafe
			file.FlagFailSafe= $('#fileSafe').prop('checked'); // ? "Yes":"No";
			//fileSecure
			file.FlagSecure= $('#fileSecure').prop('checked'); // ? "Yes":"No";
			//fileNoSignature
			file.FlagNoSignatureTest= $('#fileNoSignature').prop('checked'); // ? "Yes":"No";
			//fileStatic
			file.FlagStatic= $('#fileStatic').prop('checked'); // ? "Yes":"No";
			//fileVendor
			file.FlagVendor= $('#fileVendor').prop('checked'); // ? "Yes":"No";
			//filePlublicWrite
			file.FlagPublicWrite= $('#filePlublicWrite').prop('checked'); // ? "Yes":"No";
			//filePlublicRead
			file.FlagPublicRead= $('#filePlublicRead').prop('checked'); // ? "Yes":"No";
			//fileToken
			file.FileToken=$('#fileToken').val();
			//fileCertification
			file.CertificationFileName=$('#fileCertification').val();
			//fileToken
			file.MaxFileSize=$('#fileSize').val();
            //fileSignature
            file.SignatureFileName=$('#userSigFileInput').val();
			//save file
			saveProjectAPI();
			//rewrite the project 
			//erase elements on display
			$('#fileSysDiplayPageDiv').html("");
			//redo menus and files
			build_files(project.userFiles,'#fileSysDiplayPageDiv','','');
		}
	}
}
//Create NewFolder
function folderCreate(folderArray){

	var folders=[];
	for(var i=0;i<folderArray.length;i++){
		folders.push($(folderArray[i]).attr("id").replace("//FileSelect",""));
	}

	//display the ligthbox asking new folder name
	var html='<div class="white-popup-small">'
	html +='	<div class="wrapPopup">';
	html +='		<div class="filePathN">Please enter the folder name:</div>';
	html +='		<div class="wrapDRS floatLeft">';
	html +='			<input type="text" id="newFolderName" value="New Folder">';
	html +='		</div>';	
    html +='		<div class="clear" />';
	html +='		<div class="wrapButtons">';
	html +='			<div class="regButton mRightM" onClick="createFolderAction($(\'#newFolderName\').val(),\''+folders.join("||")+'\'); $.magnificPopup.close();">Create</div>';
	html +='			<div class="regButton" onClick="$.magnificPopup.close();">Cancel</div>';
	html +='		</div>';
	html +='	</div>';
	html +='	<div class="clear" />';
	html +='</div>';
	
	
	$.magnificPopup.open({
		items: {
			src:html,
			type: 'inline'
		}
	});
}
//create the folders pressed
function createFolderAction(folderName,folderArrayString){
	//for the root
	if(folderArrayString===""){
		fileCreateFolderDivPage(folderName,"");
	}
	else{
		var folderArray=folderArrayString.split("||");
		for (var i=0;i<folderArray.length;i++){
			fileCreateFolderDivPage(folderName,folderArray[i])	;
		}
	}
	//erase elements on display
	$('#fileSysDiplayPageDiv').html("");
	//redo menus and files
	build_files(project.userFiles,'#fileSysDiplayPageDiv','','');
}
// file selector added file
//Folder rename
function folderRename(folderArray){
	var folderarray=folderArray.split("//").reverse();
	var torename=folderarray.pop();
	displayFolderRename(torename,folderarray);
}
//display popup get the name and rename
function displayFolderRename(folderName,folderArray){
	var html='<div class="white-popup-small">'
	html +='	<div class="wrapPopup">';
	html +='		<div class="filePathN">Rename Folder:<span>'+folderName+'</span></div>';
	html +='		<div class="mbot25"></div>';
	html +='		<div class="wrapDRS floatLeft">';
	html +='			<div class="fieldName">New Folder Name:</div>';
	html +='			<input type="text" id="newFileName" value="'+ folderName+'">';
	html +='		</div>';	
    html +='		<div class="clear" />';
	html +='		<div class="wrapButtons">';
	html +='			<div class="regButton mRightM" onClick="folderRenameAction($(\'#newFileName\').val(),\''+folderName+'\',\''+folderArray.join("//")+'\'); $.magnificPopup.close();">Save</div>';
	html +='			<div class="regButton" onClick="$.magnificPopup.close();">Cancel</div>';
	html +='		</div>';
	html +='	</div>';
	html +='	<div class="clear" />';
	html +='</div>';
	
	
	$.magnificPopup.open({
		items: {
			src:html,
			type: 'inline'
		}
	});
	

}
//Rename the folder
function folderRenameAction(newFolderName,oldFolderName,folderArray){
	folderArray=folderArray.split('//');
	if(folderArray[0]===""){ folderArray.pop();} //remove root
	if(folderArray.length===0){ //is root
		//check if exists the folder
		for (var i=0; i<project.userFiles.length;i++){
			if(project.userFiles[i].id==newFolderName){
				alert("Folder "+newFolderName+" Already Exists!")
				return;
			}
		}
		//rename		
		for(var i=0;i<project.userFiles.length;i++){
			if(project.userFiles[i].id==oldFolderName){
				project.userFiles[i].id=newFolderName
			}
		}
	}
	else{
		var folderPath=findFolder(folderArray,project.userFiles);
		//now go to all object until find and delete;
		if( folderPath && folderPath.object){
			//check if folder already exists
			for(var i=0;i<folderPath.object.length;i++){
				if(folderPath.object[i].id==newFolderName){
					alert("Folder "+newFolderName+" Already Exists!")
					return;
				}	
			}
			//rename
			for(var i=0;i<folderPath.object.length;i++){
				if(folderPath.object[i].id==oldFolderName){
					folderPath.object[i].id=newFolderName
				}
			}
		}
	}
	//send to API 
	try{
			var sourcedir="/"+folderArray.join("/");
			var objectToSend={
				'name':projectName,
				'source_dir_name':sourcedir+oldFolderName+"/",
				'destination_dir_name':newFolderName
			};
			//load project info from API
			$.post("/api/1/flash/renameProjectFsDir",   objectToSend,
				function(data,status){
					saveProjectAPI();		
				}
			);
		}
		catch(e){}
	//erase elements on display
	$('#fileSysDiplayPageDiv').html("");
	//redo menus and files
	build_files(project.userFiles,'#fileSysDiplayPageDiv','','');
	
}

function upload(files,ID, mcuimg){
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		var reader = new FileReader();


        //find  folder position
        var folderarray=ID;
        //if root ->set null)`
        if(ID=='#_FolderMaster_File') {
            folderarray="";
            ID="";
        }
        if(folderarray.indexOf('#')==0){
            folderarray=$(ID).find('div.fsLine').first().attr('id').replace("_File", "").split("//").reverse();
        }
        if(folderarray==""){
            var folderPath=project.userFiles;
            //check if file exists set error
            for (var j=0;j<folderPath.length;j++){
                if(folderPath[j].id==file.name){
                    alert("File "+ file.name +" already exists!Not uploaded \n");
                    return;
                }	
            }
            //add to project array
            folderPath.push(
                {
                    "id":file.name,
                    "type": "file",
                    "MaxFileSize"          : file.size
                }
            );
        }
        else if(((folderarray[0] === "sys") && (folderarray.length === 1))&&(mcuimg == true)){
            //find sys folder
            

            var found=-1;
            for (var sys=0;sys< project.userFiles.length;sys++){
                if( project.userFiles[sys].id=="sys" && project.userFiles[sys].type=="folder"){
                    found=sys;
                    
                    //find and remove old file from json
                    var folderPath = project.userFiles[sys].object;
                    for (var j=0;j<folderPath.length;j++)
                    {
                        //if(folderPath[j].id=='mcuimg.bin')
                        if(folderPath[j].id==getMCUImgFileName())
                        {
                            folderPath.pop(folderPath[j]);
                        }
                    }
                    //add new file
                    project.userFiles[sys].object.push(
                                                            {
                                                                "id"            : getMCUImgFileName(),
                                                                "type"          : "file",
                                                                "MaxFileSize"   : file.size
                                                            }
                                                      );
                    
                }
            }
            //if not found create 
            if (found==-1){
                var sys={
                    id:'sys',
                    type:"folder",
                    object:[
                                {
                                    "id"            : getMCUImgFileName(),
                                    "type"          : "file",
                                    "MaxFileSize"   : file.size
                                }
                            ]
                };
                project.userFiles.push(sys);
                
            }
           
            	//update list
                //erase elements on display
            //$('#fileSysDiplayPageDiv').html("");
                //redo menus and files
            //build_files(project.userFiles,'#fileSysDiplayPageDiv','','');
            //displayFileProperties('sys/mcuimg.bin');
            displayFileProperties('sys/' + getMCUImgFileName());
        }
        else{
            var folderPath=findFolder(folderarray,project.userFiles);
            if(!folderPath.object){
                folderPath.object=[];
            }
            //check if file exists set error
            for (var j=0;j<folderPath.object.length;j++){
                if(folderPath.object[j].id==file.name){
                    alert("File "+ file.name +" already exists!Not uploaded \n");
                    return;
                }	
            }
            //add to project array
            folderPath.object.push(
                {
                    "id":file.name,
                    "type": "file",
                    "MaxFileSize" : file.size
                }
            );
        }
        saveProjectAPI();/*update json*/
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.status == 200 && xhr.readyState == 4) {
                var data = JSON.parse(xhr.responseText);
                if (data && data.ok) {
                    $('#capacitySelect').val(data.ok);
                }
                else if (data && data.err) {
                    alert(data.err);
                }
                else {
                    alert("error upload file");
                }
            }
        }
            
        var formData = new FormData();
        formData.append("name", projectName);
        formData.append("source", file);
        var fullFileName = "";
        if(folderarray)
        {
            //fullFileName = folderarray.join("/")+"/"+ (!mcuimg ? file.name : "mcuimg.bin");
            fullFileName = folderarray.join("/")+"/"+ (!mcuimg ? file.name : getMCUImgFileName());
        }
        else
        {
            fullFileName = file.name;
        }
        
        //var fullFileName = folderarray.join("/")+"/"+ (!mcuimg ? file.name : "mcuimg.bin")
        formData.append("dest", fullFileName);
        
        xhr.open("post", "/api/1/flash/uploadProjectFsFile", true);
        xhr.send(formData);
    }
            
	//update list
    //erase elements on display
    $('#fileSysDiplayPageDiv').html("");
    //redo menus and files
    build_files(project.userFiles,'#fileSysDiplayPageDiv','','');	
}

function getMCUImgFileName()
{
    if(project.header.DeviceType == 'CC3220FS')//F-Device
    {
        return 'mcuflashimg.bin';
    }
    else
    {
        return 'mcuimg.bin';
    }
}

//upload/delete user signature  file
function uploadSignatureBase(filePath, upload)
{  
    var apiFuncPath = '';
    if($('#USER_SIG_FILE'))
    {
        var spf = document.getElementById('USER_SIG_FILE');
        
        if(upload)
        {
            $('#userSigFileInput').val(spf.value.replace(/^.*[\\\/]/, ''));
            apiFuncPath= "/api/1/flash/uploadProjectSigFile";
        }
        else//clear
        {
            $('#userSigFileInput').val('');
            apiFuncPath = "/api/1/flash/deleteProjectSigFile";
        }
    
        uploadSignature(spf.files, filePath, apiFuncPath);
    }
}


//common part of upload/delete signature file
function uploadSignature (files,filePath, apiFuncPath ){
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
      
        //Send file to API
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.status == 200 && xhr.readyState == 4) {
                var data = JSON.parse(xhr.responseText);
                if (data && data.ok) {
        
                }
                else if (data && data.err) {
                    alert(data.err);
                }
                else {
                    alert("error upload/delete file");
                }
            }
        }
            
        var formData = new FormData();
        formData.append("name", projectName);
        formData.append("source", file);
        formData.append("dest", "/"+filePath);
        
        xhr.open("post", apiFuncPath, true);
        xhr.send(formData);
	}	
}
//Create drops for file uploads
function createDrops(folders){
	var targets;
	if(folders=="ALL"){
		targets=$('[id*="_FolderMaster"]');		
	}
	else{
		targets=$(folders);
	}
	for(var i=0;i<targets.length;i++){
		//unbind and then rebind
		$(targets[i]).unbind('dragover');
		$(targets[i]).unbind('dragenter');
		$(targets[i]).unbind('drop');
		// Tells the browser that we *can* drop on this target
		$(targets[i]).on('dragover',   function(e) {
				e.preventDefault();
				e.stopPropagation();
			}
		);
		$(targets[i]).on( 'dragenter',   function(e) {
				e.preventDefault();
				e.stopPropagation();
			}
		);
		$(targets[i]).on('drop',   function(e){
				if(e.originalEvent.dataTransfer){
					if(e.originalEvent.dataTransfer.files.length) {
						
						e.preventDefault();
						e.stopPropagation();
						upload(e.originalEvent.dataTransfer.files,'#'+$(this).attr("id"));
					}   
				}
			}
		);
	}
	
	
}
/*Save Clicked
function FilesuserfilesSaveClicked(){
	saveProjectAPI();
}*/

Function.prototype.bindToEventHandler = function bindToEventHandler() {
		var handler = this;
		var boundParameters = Array.prototype.slice.call(arguments);
		//create closure
		return function (e) {
			e = e || window.event; // get window.event if e argument missing (in IE)   
			boundParameters.unshift(e);
			handler.apply(this, boundParameters);
		}
	};

//Profile STA
//add profile button
function addProfileClicked ()
{
	if(!project.STAProfiles){
		project.STAProfiles=[];
	}
	//get data and add to json
	project.STAProfiles.push(
		{
			'id':makeid(),
			'SSID':$('#SSIDText').val(),
			'SecurityKey':$('#SecurityText').val(),
			'SecurityType':$('#SecurityTypeSelect').val(),
			'ProfilePriority':$('#ProfilePriorityText').val()
		}
	);
	//reload the list
	loadDeviceRoleSettingsSTA();
	//save project
	saveProjectAPI();
}
//build the profile list
function loadDeviceRoleSettingsSTA ()
{
	//erase all the profiles
	$('#ProfileListDetailsDiv div.pLwrap').remove();
	
	//is has profiles
	if(project.STAProfiles && project.STAProfiles.length>0)
	{
		//erase the no profile message
		$('#listNotes').hide();
		for (var i=0;i<project.STAProfiles.length;i++){
			var html='<div class="pLwrap"><div class="lPname">'+project.STAProfiles[i].SSID+'</div><div class="lRbin" onclick="removeProfile(\''+project.STAProfiles[i].id+'\')"><i class="fa fa-trash-o"></i></div>'
			$('#ProfileListDetailsDiv').append(html);	
		}
    }
	else{
		$('#listNotes').show();
	}
}
//erase the profile
function removeProfile(profileID){
	if(project.STAProfiles && project.STAProfiles.length>0)
	{
		for (var i=0;i<project.STAProfiles.length;i++){
			if(project.STAProfiles[i].id==profileID)
			{
				project.STAProfiles.splice(i,1);
				//reload the list
				loadDeviceRoleSettingsSTA();
				//save project
				saveProjectAPI();
				return;
			}
		}
    }
}

//make a random id
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
// Deny Address page
function loadDeviceRoleSettingsAP (){
	//erase all the Address
	$('#denyListDetailsDiv div.pLwrap').remove();
	//is has Address
	if(project.denyAddresses && project.denyAddresses.length>0)
	{
		//erase the no Address message
		$('#listNotes').hide();
		for (var i=0;i<project.denyAddresses.length;i++){
			var html='<div class="pLwrap"><div class="lPname">'+project.denyAddresses[i].address+'</div><div class="lRbin" onclick="removeAddresses(\''+project.denyAddresses[i].id+'\')"><i class="fa fa-trash-o"></i></div>'
			$('#denyListDetailsDiv').append(html);	
		}
    }
	else{
		$('#listNotes').show();
	}
}
//erase address
function removeAddresses(profileID){
	if(project.denyAddresses && project.denyAddresses.length>0)
	{
		for (var i=0;i<project.denyAddresses.length;i++){
			if(project.denyAddresses[i].id==profileID)
			{
				project.denyAddresses.splice(i,1);
				//reload the list
				loadDeviceRoleSettingsAP();
				//save project
				saveProjectAPI();
				return;
			}
		}
    }
}
//add address
function addAddressClicked(){
	if(!project.denyAddresses){
		project.denyAddresses=[];
	}
	//get data and add to json
	project.denyAddresses.push(
		{
			'id':makeid(),
			'address':$('#addressText').val()
		}
	);
	//reload the list
	loadDeviceRoleSettingsAP();
	//save project
	saveProjectAPI();
}

function setProjImageClicked()
{
    //toggleFullOverlay($("#mainContent"), false);
    //window.location.href ='/index.htm?page=general';
    var sliFile = $('#IMG_FILE').prop("files")[0];
    var keyFile = $('#PROJ_IMAGE_KEY_FILE_NAME');
    programImageFromSLI(sliFile, keyFile ? keyFile.prop("files")[0] : undefined);
}
//New Project page functions
//load
function newprojectLoad(){
    toggleFullOverlay($("#mainContent"), true);
    
	if(!project || !project.header){
		return;
	}
	
	//set name
	if(project.header.Name){
		$('#projectNameText').val(project.header.Name);
	}
	//description
	if(project.header.Description){
		$('#projectDescriptionText').val(project.header.Description);
	}
	//device type
	if(project.header.DeviceType){
		$('#deviceTypeSelect').val(project.header.DeviceType);
	}
	//device capacity
	if(project.header.StorageCapacityBytes){
		$('#capacitySelect').val(project.header.StorageCapacityBytes);
	}
	//set mode
	if(project.header.Mode){
		if(project.header.Mode=='production'){
			$('#DevelopmentModeToggle .slider').removeClass('sliderRight');
			$('#DevelopmentModeToggle .slider').addClass('sliderLeft');
		}
		else{
			$('#DevelopmentModeToggle .slider').removeClass('sliderLeft');
			$('#DevelopmentModeToggle .slider').addClass('sliderRight');
        }
	}
}
//check Device Size Clicked
function checkDeviceSizeClicked(){
	//save the project in the API
	try{
		//load project info from API
		$.post("/api/1/flash/getDeviceCapacityAndDestroyFS",
			function(data,status){
				//if return success and has data
				if(status=='success' && data.ok){
					//set capacity
					$('#capacitySelect').val(data.ok);
				}

				if(data.err){
					alert(data.err);
				}
			});
	}
	catch(e){
		alert("Error Creating File");		
	}			
}
//Create Project Clicked
function createProjectClicked(){
	
    
	//save data
	if(!project){
		project={};
	}
	if(!project.header){
		project.header={};
	}
	//set name
	project.header.Name=$('#projectNameText').val();
	//and save name in the local storage
	localStorage.setItem('projectName',  project.header.Name);
    
    localStorage.setItem('isconnected', 'false');
	//description
	project.header.Description=$('#projectDescriptionText').val();
	//device type
	project.header.DeviceType=$('#deviceTypeSelect').val();
	//device capacity
	project.header.StorageCapacityBytes=$('#capacitySelect').val();
    
    createDefaultProjectValues();
    
	//set mode
	if($('#DevelopmentModeToggle .slider').hasClass('sliderRight')){
		project.header.Mode='development';
	}
	else{
		project.header.Mode='production';
	}
         
	//save the project in the API
	saveProjectAPI(function() {window.location.href = "/index.htm?page=general"});

    toggleFullOverlay($("#mainContent"), false);
}

//end of New Project page functions
//Device Role Page function
function LoadDeviceMode(){
	//load info from object
	if(!project || !project.general_settings){
		return;
	}
	//deviceModeSelect
	if(project.general_settings.deviceMode){
		$('#deviceModeSelect').val(project.general_settings.deviceMode);
	}
	//rolePreferenceSelect
	if(project.general_settings.rolePreference){
		$('#rolePreferenceSelect').val(project.general_settings.rolePreference);
	}
	//channelSelect
	if(project.general_settings.channel){
		$('#channelSelect').val(project.general_settings.channel);
	}
	//deviceNameText
	if(project.general_settings.deviceName){
		$(deviceNameText).val(project.general_settings.deviceName);
	}
}
//save function
function DeviceModeSaveClick(){
	//save data to object
	if(!project){
		project={};
	}
	if(!project.general_settings){
		project.general_settings={};
	}
	//deviceModeSelect
	project.general_settings.deviceMode=$('#deviceModeSelect').val();
	//rolePreferenceSelect
	project.general_settings.rolePreference=$('#rolePreferenceSelect').val();
	//channelSelect
	project.general_settings.channel=$('#channelSelect').val();
	//deviceNameText
	project.general_settings.deviceName=$('#deviceNameText').val();
	//save project
	saveProjectAPI();
}
//end of Device Role Page function
//Api Save Project
function saveProjectAPI(successFunc){
	try{
		//load project info from API
		$.post("/api/1/flash/saveProject",   {'name':project.header.Name, 'data': JSON.stringify(project,null,4)},
			function(data,status){
			//if return success and has data
				if(data.err){
                    
					alert(data.err);
				}
                else if(status=='success' && data.ok){
                    if(successFunc){
                        successFunc();
                    }
                }
			});
	}
	catch(e){
		alert("Error Saving Project");		
	}
}


function saveUserFilesAPI(userFiles, successFunc, fail){
	try{
		//load project info from API
        /*
		$.post("/api/1/flash/saveUserFiles",   {'name':project.header.Name, 'data': userFiles},
			function(data,status){
			//if return success and has data
				if(data.err){
                    
					alert(data.err);
				}
                else if(status=='success' && data.ok){
                    if(successFunc){
                        successFunc();
                    }
                }
			});
            */
            
        $.post("/api/1/flash/saveUserFiles",   {'name': project.header.Name, 'data': userFiles})
            .done(function(data) {
                if (data.ok) {
                    successFunc(data.ok);
                } else {
                    if (fail) {
                        fail(data.ok);
                    }
                }
            })
            .fail(function() {
                fail();
            });
	}
	catch(e){
		alert("Error Saving Project");		
	}
}



/*----------------------------------------------------------------------------------------------------------*/

function changeCertStoreDefault()
{
    project.header.UseDefaultCertStore = document.getElementById('USE_DEF_CERT_STORE_1').checked;
    
    saveProjectAPI();
    
    loadCertStore();
}

function loadCertStore() 
{
    document.getElementById('USE_DEF_CERT_STORE_1').checked = project.header.UseDefaultCertStore;
    
    $('#keyCertStoreFileInput').prop('readonly', true);
    
    if(project.header.UseDefaultCertStore)
    {
        $('#keyCertStoreFileInput').val("/files/certstore.lst");
        $('div#browseCertStoreFile').addClass("btnDisabled");
        
        $('#keyCertStoreSignFileInput').val("/files/certstore.lst.signed");
        $('div#browseCertStoreSignFile').addClass("btnDisabled");
    }
    else
    {
         $('#keyCertStoreFileInput').val(project.systemFiles.FILES.CS_FILE_NAME.replace(/^.*[\\\/]/, ''));
         $('div#browseCertStoreFile').removeClass("btnDisabled");

         
         $('#keyCertStoreSignFileInput').val(project.systemFiles.FILES.CSS_FILE_NAME.replace(/^.*[\\\/]/, ''));
         $('div#browseCertStoreSignFile').removeClass("btnDisabled");
    }
    
    $('#CERT_STORE_FILE'          ).prop("disabled", project.header.UseDefaultCertStore);
    $('#CERT_STORE_SIGNATURE_FILE').prop("disabled", project.header.UseDefaultCertStore);
    
    document.getElementById('USE_DEF_CERT_STORE_1').addEventListener('change', changeCertStoreDefault, false);
}

function dropFile(eName)
{
    var eName = $(eName);
        eName.unbind('dragover');
		eName.unbind('dragenter');
		eName.unbind('drop');
		// Tells the browser that we *can* drop on this target
		eName.bind('dragover',   function(e) {
				e.preventDefault();
				e.stopPropagation();
		});
        
		eName.bind( 'dragenter',   function(e) {
                e.preventDefault();
				e.stopPropagation();   
		});
    
            
        eName.bind('drop',   function(e) {
                e.preventDefault();
				e.stopPropagation();
                if(e.originalEvent.dataTransfer.files.length == 1) {
						
                        var json_num;
                        var path ;
                        switch(eName.selector)
                        {
                            case '#keyFileInput':                   json_num = "3";
                                                                    path = "/api/1/flash/uploadProjectKSFile";
                                                                    break;
                                                
                            case '#spFileInput':                    json_num = "0";
                                                                    path = "/api/1/flash/uploadProjectSPFile";
                                                                    break;
                                                                    
                            case '#keyCertStoreFileInput':          json_num = "1";
                                                                    path = "/api/1/flash/uploadProjectCertStoreFile";
                                                                    break;
                            case '#keyCertStoreSignFileInput':      json_num = "2";
                                                                    path = "/api/1/flash/uploadProjectCertStoreSigFile";
                                                                    break;
                        }
                        
                            if(((json_num == "1") || (json_num == "2")) && (project.header.UseDefaultCertStore))
                            {
                                alert("Operation not allowed!");
                            }
                            else
                            {
                                updateFiles (json_num                             , e.originalEvent.dataTransfer.files[0].name);
                                postFileBase(e.originalEvent.dataTransfer.files[0], path                                      );
                            }
				}   

		});
}

function postFileBase(source, path)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            if (data && data.ok) {
            }
            else if (data && data.err) {
                alert(data.err);
            }
            else {
                alert("error upload file");
            }
        }
    }
    
    var formData = new FormData();
    formData.append("name", projectName);
    formData.append("source", source);
    
    xhr.open("POST", path, true);
    xhr.send(formData);
    
}

function postFile(id, funcname, json_num)
{
    var spf = document.getElementById(id);
    //var name = spf.value;
    var name = spf.files[0].name;
    
    
    updateFiles(json_num, name);
    
    postFileBase(spf.files[0], "/api/1/flash/".concat(funcname));
}

function updateFiles(json_num, name)
{
    switch(json_num)
    {
        case "0":   project.systemFiles.FILES.SP_FILE_NAME = name;
                    project.header.ServicePackFileLocation = name;
                    $('#spFileInput').val(name.replace(/^.*[\\\/]/, ''));
                    break;
                    
        case "1":   project.systemFiles.FILES.CS_FILE_NAME = name;
                    $('#keyCertStoreFileInput').val(name.replace(/^.*[\\\/]/, ''));
                    break;
        case "2":   project.systemFiles.FILES.CSS_FILE_NAME = name;
                    $('#keyCertStoreSignFileInput').val(name.replace(/^.*[\\\/]/, ''));
                    break;
                
        case "3":   project.header.KeyFileLocation = name;
                    $('#keyFileInput').val(name.replace(/^.*[\\\/]/, ''));
                    break;
        /*        
        case "4":   project.systemFiles.FILES.KEY_IMAGE_FILE_NAME = name;
                    $('#keyImgFileInput').val(name.replace(/^.*[\\\/]/, ''));
                    break;
        case "5":    project.systemFiles.FILES.PROJ_IMAGE_KEY_FILE_NAME  = name;
                    
                    break;*/
    }
    //save project
    saveProjectAPI();
}


/*-------------------------------Mac Address---TBD--------------------------------------------------*/
function addMacDefault(e)
{
    var use_default = document.getElementById('USE_DEF_MAC_1').checked;
    project.systemFiles.CONFIG_TYPE_MAC.USE_DEFAULT = use_default ? 1 : 0;
    
        //save project
    saveProjectAPI();
    
    document.getElementById('MA1').disabled = use_default;
    
    if(use_default)
    {
        if(localStorage.getItem('isconnected') == 'true')//connected
        {
            document.getElementById('MA1').value = document.getElementById('devMacAddr').innerHTML;
        }
        else
        {
            document.getElementById('MA1').value = "";
        }
    }
    else
    {
        document.getElementById('MA1').value = project.systemFiles.CONFIG_TYPE_MAC.MAC_ADDR;
    }
}

function addMacAddr(e)
{
    if(verifyMacAddr(e, project.systemFiles.CONFIG_TYPE_MAC.MAC_ADDR))
    {
        project.systemFiles.CONFIG_TYPE_MAC.MAC_ADDR = document.getElementById('USE_DEF_MAC_1').checked ? "" : document.getElementById('MA1').value;
            //save project
        saveProjectAPI();
    }
}

function loadDevelopeMacAddress()
{
    var isconnected = localStorage.getItem('isconnected') == 'true';
    if(isconnected)
    {
        $('#DevMA1').val($('#devMacAddr').html());
        changeDevelopeMacAddress();
    }
    else
    {
        $('#DevMA1').val(project.header.DEV_MAC_ADDR);
    }
    
}

function changeDevelopeMacAddress()
{
    //project.systemFiles.CONFIG_TYPE_MAC.DEV_MAC_ADDR = $('#DevMA1').val();
    project.header.DEV_MAC_ADDR = $('#DevMA1').val();
    saveProjectAPI();
}

function loadMacAddress(){
    var isconnected = localStorage.getItem('isconnected') == 'true';
    
    if(project.systemFiles.CONFIG_TYPE_MAC.USE_DEFAULT == 1)
    {
        if($('#USE_DEF_MAC_1').val() != undefined)
        {
            $("#USE_DEF_MAC_1").attr('checked', true);
            if(isconnected)
            {
                $('#MA1').val($('#devMacAddr').html());
            }
            else
            {
                $('#MA1').val('');
            }
            $('#MA1').prop("disabled", true);
        }        
    }
    else
    {
        $("#USE_DEF_MAC_1").attr('checked', false);
        $('#MA1').val(project.systemFiles.CONFIG_TYPE_MAC.MAC_ADDR);
        $('#MA1').prop("disabled", false);
    }
    
    /*--------------------------------*/
    if($('#USE_DEF_MAC_1').val() != undefined)
    {
        document.getElementById('USE_DEF_MAC_1').addEventListener('change', addMacDefault, false);
        document.getElementById('MA1'          ).addEventListener('change', addMacAddr, false);
    }

}
/*-------------------------------Calibrations----------------------------------------------------*/

function loadRadioSettings()
{
    document.getElementById('STA_TX_PL'     ).value = project.systemFiles.CONFIG_TYPE_MODE.STA_TX_POWER_LEVEL   ;
    document.getElementById('AP_TX_PL'      ).value = project.systemFiles.CONFIG_TYPE_MODE.AP_TX_POWER_LEVEL    ;
    document.getElementById('PHY_CAL_MODE'  ).value = project.systemFiles.CONFIG_TYPE_MODE.PHY_CAL_MODE         ;
    
    document.getElementById('PHY_DEVICE_HIGH_TX_POWER'  ).value = project.systemFiles.CONFIG_TYPE_MODE.PHY_STA_HIGH_TX_POWER  ;
        
    document.getElementById('STA_TX_PL'     ).addEventListener("change", function(e) { if (verifyNumLimits(e, 0 , 15, project.systemFiles.CONFIG_TYPE_MODE.STA_TX_POWER_LEVEL )){ changeStationTxPowerLevel();}});
    document.getElementById('AP_TX_PL'      ).addEventListener("change", function(e) { if (verifyNumLimits(e, 0 , 15, project.systemFiles.CONFIG_TYPE_MODE.AP_TX_POWER_LEVEL  )){ changeAPTxPowerLevel();}});
    document.getElementById('PHY_CAL_MODE'  ).addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_MODE.PHY_CAL_MODE = document.getElementById('PHY_CAL_MODE'  ).value; saveProjectAPI();});
    document.getElementById('PHY_DEVICE_HIGH_TX_POWER'  ).addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_MODE.PHY_STA_HIGH_TX_POWER = document.getElementById('PHY_DEVICE_HIGH_TX_POWER'  ).value;
                                                                                       project.systemFiles.CONFIG_TYPE_MODE.PHY_AP_HIGH_TX_POWER  = document.getElementById('PHY_DEVICE_HIGH_TX_POWER'  ).value;
                                                                                       saveProjectAPI();});
   
}



function changeStationTxPowerLevel()
{
    project.systemFiles.CONFIG_TYPE_MODE.STA_TX_POWER_LEVEL = document.getElementById('STA_TX_PL'     ).value;
        
    //save project
    saveProjectAPI();
}

function changeAPTxPowerLevel()
{
    project.systemFiles.CONFIG_TYPE_MODE.AP_TX_POWER_LEVEL = document.getElementById('AP_TX_PL'     ).value;
        
    //save project
    saveProjectAPI();
}

/*---------------------------------Device Role Settings --> General Settings--------------------------------------------------------------*/
function changeAutoProvisioningSelect()
{
    document.getElementById('AutoProvExternalConfSelect'    ).disabled = document.getElementById('conPolAutoProvisioningSelect'  ).value == '0';
}

function loadDeviceRoleGeneralSettings(){
    document.getElementById('StartRoleSelect'           ).value = project.systemFiles.CONFIG_TYPE_MODE.START_ROLE;
    document.getElementById('CountryCodeSelect'         ).value = project.systemFiles.CONFIG_TYPE_MODE.COUNTRY_CODE;
    
    document.getElementById('deviceNameText'            ).value = project.systemFiles.CONFIG_TYPE_DEVICE_NAME.DEVICE_URN;
    
    document.getElementById('conPolAutoStartSelect'         ).value = project.systemFiles.CONFIG_TYPE_STA_CONFIG.AUTOSTART        ;
    document.getElementById('conPolFastConnectSelect'       ).value = project.systemFiles.CONFIG_TYPE_STA_CONFIG.USEFASTCONNECT   ;
    document.getElementById('conAnyWFDirectSelect'          ).value = project.systemFiles.CONFIG_TYPE_STA_CONFIG.CONNECTTOANYP2P  ;
    document.getElementById('conPolAutoProvisioningSelect'  ).value = project.systemFiles.CONFIG_TYPE_STA_CONFIG.AUTOPROVISIONING ;
    
    changeAutoProvisioningSelect();
    document.getElementById('AutoProvExternalConfSelect').value = project.systemFiles.CONFIG_TYPE_MODE.AUTO_PROV_EXTERNAL_CONFIRMATION;
    
    document.getElementById('StartRoleSelect'           ).addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_MODE.START_ROLE   = document.getElementById('StartRoleSelect'  ).value; saveProjectAPI();});
    document.getElementById('CountryCodeSelect'         ).addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_MODE.COUNTRY_CODE = document.getElementById('CountryCodeSelect').value; saveProjectAPI();});
    
    
    document.getElementById('deviceNameText'            ).addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_DEVICE_NAME.DEVICE_URN  = document.getElementById('deviceNameText').value; saveProjectAPI();});
    
    document.getElementById('conPolAutoStartSelect'         ).addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_STA_CONFIG.AUTOSTART        = document.getElementById('conPolAutoStartSelect'         ).value; saveProjectAPI();});
    document.getElementById('conPolFastConnectSelect'       ).addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_STA_CONFIG.USEFASTCONNECT   = document.getElementById('conPolFastConnectSelect'       ).value; saveProjectAPI();});
    document.getElementById('conAnyWFDirectSelect'          ).addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_STA_CONFIG.CONNECTTOANYP2P  = document.getElementById('conAnyWFDirectSelect'          ).value; saveProjectAPI();});
    document.getElementById('conPolAutoProvisioningSelect'  ).addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_STA_CONFIG.AUTOPROVISIONING = document.getElementById('conPolAutoProvisioningSelect'  ).value; saveProjectAPI();});
    
    document.getElementById('AutoProvExternalConfSelect').addEventListener("change", function(e) { project.systemFiles.CONFIG_TYPE_MODE.AUTO_PROV_EXTERNAL_CONFIRMATION = document.getElementById('AutoProvExternalConfSelect').value; saveProjectAPI();});
    
    //TBD
}
/*---------------------------------Device Role Settings --> Station & Wi-Fi Direct Client Configuration -- > Network Settings----------------*/

function enableDisableSTAP2PBase()
{
    var enabled = document.getElementById('stap2pDHCPEnable_1').checked; 
    
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IP_MODE = enabled? "True" : "False";
    saveProjectAPI();
    
    document.getElementById('staipAddrText'    ).disabled = enabled;
    document.getElementById('stasubnetMaskText').disabled = enabled;
    document.getElementById('stadgwText'       ).disabled = enabled;
    document.getElementById('stadnsText'       ).disabled = enabled;   
}

function enableDisableSTAP2P()
{
    enableDisableSTAP2PBase();
    document.getElementById('stap2pDHCPEnable_1').addEventListener('change', enableDisableSTAP2PBase, false);
}

function loadSTANWSettings(){
    if(project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IP_MODE == "True")
    {
        document.getElementById('stap2pDHCPEnable_1').checked = 1;
    }
    else
    {
        document.getElementById('stap2pDHCPEnable_1').checked = 0;
    }
    
    document.getElementById('staipAddrText'     ).value = project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_STATIC_IP;
    document.getElementById('stasubnetMaskText' ).value = project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_SUBNET_MASK;
    document.getElementById('stadgwText'        ).value = project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DEFAULT_GATEWAY;
    document.getElementById('stadnsText'        ).value = project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IPV4_DNS_SERVER;
    
    
    document.getElementById('staipAddrText'     ).addEventListener("change", function(e) { if (validateIPaddress(e, project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_STATIC_IP         )){ project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_STATIC_IP       = document.getElementById('staipAddrText'     ).value; saveProjectAPI();}});
    document.getElementById('stasubnetMaskText' ).addEventListener("change", function(e) { if (validateIPaddress(e, project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_SUBNET_MASK       )){ project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_SUBNET_MASK     = document.getElementById('stasubnetMaskText' ).value; saveProjectAPI();}});
    document.getElementById('stadgwText'        ).addEventListener("change", function(e) { if (validateIPaddress(e, project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DEFAULT_GATEWAY   )){ project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DEFAULT_GATEWAY = document.getElementById('stadgwText'        ).value; saveProjectAPI();}});
    document.getElementById('stadnsText'        ).addEventListener("change", function(e) { if (validateIPaddress(e, project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IPV4_DNS_SERVER   )){ project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IPV4_DNS_SERVER = document.getElementById('stadnsText'        ).value; saveProjectAPI();}});
    
}
/*---------------------------------Device Role Settings --> AP & Wi-Fi Direct Client Configuration -- > WLan Settings------------------------*/
function loadAPWLanSettings()
{
    document.getElementById('apSSIDText'        ).value = project.systemFiles.CONFIG_TYPE_AP.SSID       ;
    document.getElementById('apMaxStaNum'       ).value = project.systemFiles.CONFIG_TYPE_AP.MAX_STT    ;
    document.getElementById('hiddenSSIDSelect'  ).value = project.systemFiles.CONFIG_TYPE_AP.HIDDEN_SSID;
    document.getElementById('apSecuritySelect'  ).value = project.systemFiles.CONFIG_TYPE_AP.SECURITY   ;
    document.getElementById('apPWText'          ).value = project.systemFiles.CONFIG_TYPE_AP.PASSWORD   ;
    document.getElementById('apChannelNum'      ).value = project.systemFiles.CONFIG_TYPE_AP.CHANNEL    ;
    
    
    document.getElementById('apMaxStaNum'     ).addEventListener("change", function(e) { if (verifyNumLimits(e, 1 , 4 , project.systemFiles.CONFIG_TYPE_AP.MAX_STT )){ changeApMaxStationsNum();}});
    document.getElementById('apChannelNum'    ).addEventListener("change", function(e) { if (verifyNumLimits(e, 1 , 14, project.systemFiles.CONFIG_TYPE_AP.CHANNEL )){ changeApChannelNum();}});

    document.getElementById('hiddenSSIDSelect').addEventListener("change", function(e) { 
                project.systemFiles.CONFIG_TYPE_AP.HIDDEN_SSID = $('#hiddenSSIDSelect').val(); saveProjectAPI();});
    document.getElementById('apSecuritySelect').addEventListener("change", changeApSecuritySelect);
                
    document.getElementById('apSSIDText'      ).addEventListener("change", function(e) { 
                if (verifyText(e, project.systemFiles.CONFIG_TYPE_AP.SSID, 0, 33)){project.systemFiles.CONFIG_TYPE_AP.SSID  = $('#apSSIDText').val(); saveProjectAPI();}});
    document.getElementById('apPWText'      ).addEventListener("change", function(e) { if (verifyPassword(e, project.systemFiles.CONFIG_TYPE_AP.PASSWORD)){project.systemFiles.CONFIG_TYPE_AP.PASSWORD  = $('#apPWText').val(); saveProjectAPI();}});
                
}
function changeApSecuritySelect()
{
    project.systemFiles.CONFIG_TYPE_AP.SECURITY    = $('#apSecuritySelect').val();

    if(project.systemFiles.CONFIG_TYPE_AP.SECURITY == '0')//Open
    {
        $('#apPWText').val('');
    }
    else if (project.systemFiles.CONFIG_TYPE_AP.SECURITY == '1')
    {
        project.systemFiles.CONFIG_TYPE_AP.PASSWORD  = '1234567890123';
        $('#apPWText').val(project.systemFiles.CONFIG_TYPE_AP.PASSWORD);
    }
    else if (project.systemFiles.CONFIG_TYPE_AP.SECURITY == '2')
    {
        project.systemFiles.CONFIG_TYPE_AP.PASSWORD  = '12345678';
        $('#apPWText').val(project.systemFiles.CONFIG_TYPE_AP.PASSWORD);
    }
    
    saveProjectAPI();
}
function changeApMaxStationsNum()
{
    project.systemFiles.CONFIG_TYPE_AP.MAX_STT = $('#apMaxStaNum').val();
        
    //save project
    saveProjectAPI();
}
function changeApChannelNum()
{
    project.systemFiles.CONFIG_TYPE_AP.CHANNEL = $('#apChannelNum').val();
        
    //save project
    saveProjectAPI();
}
/*---------------------------------Device Role Settings --> AP & Wi-Fi Direct Client Configuration -- > Network Settings---------------------*/

function enableDisableAPP2P()
{
    //enableDisableSTAP2PBase();
    //document.getElementById('stap2pDHCPEnable_1').addEventListener('change', enableDisableSTAP2PBase, false);
}

function loadAPNWSettings()
{

    document.getElementById('apipAddrText'  ).value = project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_STATIC_IP;
    document.getElementById('apdgText'      ).value = project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DEFAULT_GATEWAY;
    document.getElementById('apDNSText'     ).value = project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_IPV4_DNS_SERVER;

    document.getElementById('apDhcpStartAddressText'  ).value = project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_START_IP_ADDRESS;
    document.getElementById('apDhcpLastAddressText'   ).value = project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LAST_IP_ADDRESS;
    document.getElementById('apDhcpLeaseTimeText'     ).value = project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LEASE_TIME;

    document.getElementById('apipAddrText'          ).addEventListener("change", function(e) { if (validateIPaddress(e, project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_STATIC_IP                   )){ project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_STATIC_IP                  = document.getElementById('apipAddrText'          ).value; saveProjectAPI();}});
    document.getElementById('apdgText'              ).addEventListener("change", function(e) { if (validateIPaddress(e, project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DEFAULT_GATEWAY             )){ project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DEFAULT_GATEWAY            = document.getElementById('apdgText'              ).value; saveProjectAPI();}});
    document.getElementById('apDNSText'             ).addEventListener("change", function(e) { if (validateIPaddress(e, project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_IPV4_DNS_SERVER             )){ project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_IPV4_DNS_SERVER            = document.getElementById('apDNSText'             ).value; saveProjectAPI();}});
    document.getElementById('apDhcpStartAddressText').addEventListener("change", function(e) { if (validateIPaddress(e, project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_START_IP_ADDRESS )){ project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_START_IP_ADDRESS= document.getElementById('apDhcpStartAddressText').value; saveProjectAPI();}});
    document.getElementById('apDhcpLastAddressText' ).addEventListener("change", function(e) { if (validateIPaddress(e, project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LAST_IP_ADDRESS  )){ project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LAST_IP_ADDRESS = document.getElementById('apDhcpLastAddressText' ).value; saveProjectAPI();}});
    document.getElementById('apDhcpLeaseTimeText'   ).addEventListener("change", function(e) { if (verifyNumLimits  (e, 0, 24, project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LEASE_TIME)){ project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LEASE_TIME      = document.getElementById('apDhcpLeaseTimeText'   ).value; saveProjectAPI();}});

}

/*---------------------------------Device Role Settings --> Network Applications ------------------------------------------------------------*/

function loadNetworkApp()
{
    $('#STA_HTTP_SID_1').prop("checked", project.systemFiles.CONFIG_TYPE_MODE.STA_START_APPS & 1);
    $('#STA_MDNS_ID_4' ).prop("checked", project.systemFiles.CONFIG_TYPE_MODE.STA_START_APPS & 4 );
    
    $('#AP_HTTP_SID_1').prop("checked", project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS & 1  );
    $('#AP_DHCP_SID_2').prop("checked", project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS & 2  );
    $('#AP_MDNS_ID_4' ).prop("checked", project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS & 4  );
    $('#AP_DNS_SID_8' ).prop("checked", project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS & 8  );
    
    $('#CLS_HTTP_SID_1').prop("checked", project.systemFiles.CONFIG_TYPE_MODE.P2P_CLS_START_APPS & 1 );
    $('#CLS_MDNS_ID_4' ).prop("checked", project.systemFiles.CONFIG_TYPE_MODE.P2P_CLS_START_APPS & 4 );
    
    $('#GO_HTTP_SID_1').prop("checked", project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS & 1 );
    $('#GO_DHCP_SID_2').prop("checked", project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS & 2 );
    $('#GO_MDNS_ID_4' ).prop("checked", project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS & 4 );
    $('#GO_DNS_SID_8' ).prop("checked", project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS & 8 );
    
    //document.getElementById('STA_HTTP_SID_1' ).checked = (project.systemFiles.CONFIG_TYPE_MODE.STA_START_APPS & 1 );
    //document.getElementById('STA_DHCP_SID_2' ).checked = (project.systemFiles.CONFIG_TYPE_MODE.STA_START_APPS & 2 );
    //document.getElementById('STA_MDNS_ID_4'  ).checked = (project.systemFiles.CONFIG_TYPE_MODE.STA_START_APPS & 4 );
    //document.getElementById('STA_DNS_SID_8'  ).checked = (project.systemFiles.CONFIG_TYPE_MODE.STA_START_APPS & 8 );
    //document.getElementById('STA_DC_ID_16'  ).checked = (project.systemFiles.CONFIG_TYPE_MODE.STA_START_APPS & 16 );    
    /*
    document.getElementById('AP_HTTP_SID_1').checked = (project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS & 1 );
    document.getElementById('AP_DHCP_SID_2').checked = (project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS & 2 );
    document.getElementById('AP_MDNS_ID_4' ).checked = (project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS & 4 );
    document.getElementById('AP_DNS_SID_8' ).checked = (project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS & 8 );
    //document.getElementById('AP_DC_ID_16'  ).checked = (project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS & 16 );    
    
    document.getElementById('CLS_HTTP_SID_1').checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_CLS_START_APPS & 1 );
    //document.getElementById('CLS_DHCP_SID_2').checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_CLS_START_APPS & 2 );
    document.getElementById('CLS_MDNS_ID_4' ).checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_CLS_START_APPS & 4 );
    //document.getElementById('CLS_DNS_SID_8' ).checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_CLS_START_APPS & 8 );
    //document.getElementById('CLS_DC_ID_16'  ).checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_CLS_START_APPS & 16 );    
    *
    document.getElementById('GO_HTTP_SID_1').checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS & 1 );
    document.getElementById('GO_DHCP_SID_2').checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS & 2 );
    document.getElementById('GO_MDNS_ID_4' ).checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS & 4 );
    document.getElementById('GO_DNS_SID_8' ).checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS & 8 );
    //document.getElementById('GO_DC_ID_16'  ).checked = (project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS & 16 );
    */
    
    document.getElementById('STA_HTTP_SID_1').addEventListener('change', updateSTANetApp, false);
    //document.getElementById('STA_DHCP_SID_2').addEventListener('change', updateSTANetApp, false);
    document.getElementById('STA_MDNS_ID_4' ).addEventListener('change', updateSTANetApp, false);
    //document.getElementById('STA_DNS_SID_8' ).addEventListener('change', updateSTANetApp, false);
    //document.getElementById('STA_DC_ID_16'  ).addEventListener('change', updateSTANetApp, false);    
    
    document.getElementById('AP_HTTP_SID_1').addEventListener('change', updateAPNetApp, false);
    document.getElementById('AP_DHCP_SID_2').addEventListener('change', updateAPNetApp, false);
    document.getElementById('AP_MDNS_ID_4' ).addEventListener('change', updateAPNetApp, false);
    document.getElementById('AP_DNS_SID_8' ).addEventListener('change', updateAPNetApp, false);
    //document.getElementById('AP_DC_ID_16'  ).addEventListener('change', updateAPNetApp, false);    
    
    document.getElementById('CLS_HTTP_SID_1').addEventListener('change', updateCLSNetApp, false);
    //document.getElementById('CLS_DHCP_SID_2').addEventListener('change', updateCLSNetApp, false);
    document.getElementById('CLS_MDNS_ID_4' ).addEventListener('change', updateCLSNetApp, false);
    //document.getElementById('CLS_DNS_SID_8' ).addEventListener('change', updateCLSNetApp, false);
    //document.getElementById('CLS_DC_ID_16'  ).addEventListener('change', updateCLSNetApp, false);
    
    document.getElementById('GO_HTTP_SID_1').addEventListener('change', updateGONetApp, false);
    document.getElementById('GO_DHCP_SID_2').addEventListener('change', updateGONetApp, false);
    document.getElementById('GO_MDNS_ID_4' ).addEventListener('change', updateGONetApp, false);
    document.getElementById('GO_DNS_SID_8' ).addEventListener('change', updateGONetApp, false);
    //document.getElementById('GO_DC_ID_16'  ).addEventListener('change', updateGONetApp, false);
  
}

function updateSTANetApp()
{
    project.systemFiles.CONFIG_TYPE_MODE.STA_START_APPS     =(  ($('#STA_HTTP_SID_1').prop('checked')? $('#STA_HTTP_SID_1').val() :0) | 
                                                                ($('#STA_DHCP_SID_2').prop('checked')? $('#STA_DHCP_SID_2').val() :0) | 
                                                                ($('#STA_MDNS_ID_4' ).prop('checked')? $('#STA_MDNS_ID_4' ).val() :0) | 
                                                                ($('#STA_DNS_SID_8' ).prop('checked')? $('#STA_DNS_SID_8' ).val() :0) | 
                                                                ($('#STA_DC_ID_16' ).prop('checked')? $('#STA_DC_ID_16'  ).val()  :0)   );  

    //save project
	saveProjectAPI();
}

function updateAPNetApp()
{

    project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS      = ( ($('#AP_HTTP_SID_1').prop('checked')? $('#AP_HTTP_SID_1').val() :0) | 
                                                                ($('#AP_DHCP_SID_2').prop('checked')? $('#AP_DHCP_SID_2').val() :0) | 
                                                                ($('#AP_MDNS_ID_4' ).prop('checked')? $('#AP_MDNS_ID_4' ).val() :0) | 
                                                                ($('#AP_DNS_SID_8' ).prop('checked')? $('#AP_DNS_SID_8' ).val() :0) | 
                                                                ($('#AP_DC_ID_16'  ).prop('checked')? $('#AP_DC_ID_16'  ).val() :0)   );
    //save project
	saveProjectAPI();

}

function updateCLSNetApp()
{

    project.systemFiles.CONFIG_TYPE_MODE.P2P_CLS_START_APPS = ( (document.getElementById('CLS_HTTP_SID_1').checked? document.getElementById('CLS_HTTP_SID_1').value :0) | 
                                                                (document.getElementById('CLS_DHCP_SID_2').checked? document.getElementById('CLS_DHCP_SID_2').value :0) | 
                                                                (document.getElementById('CLS_MDNS_ID_4' ).checked? document.getElementById('CLS_MDNS_ID_4' ).value :0) | 
                                                                (document.getElementById('CLS_DNS_SID_8' ).checked? document.getElementById('CLS_DNS_SID_8' ).value :0) | 
                                                                (document.getElementById('CLS_DC_ID_16'  ).checked? document.getElementById('CLS_DC_ID_16'  ).value :0)   );
    //save project
	saveProjectAPI();
}

function updateGONetApp()
{

    project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS  = ( (document.getElementById('GO_HTTP_SID_1').checked? document.getElementById('GO_HTTP_SID_1').value :0) | 
                                                                (document.getElementById('GO_DHCP_SID_2').checked? document.getElementById('GO_DHCP_SID_2').value :0) | 
                                                                (document.getElementById('GO_MDNS_ID_4' ).checked? document.getElementById('GO_MDNS_ID_4' ).value :0) | 
                                                                (document.getElementById('GO_DNS_SID_8' ).checked? document.getElementById('GO_DNS_SID_8' ).value :0) | 
                                                                (document.getElementById('GO_DC_ID_16'  ).checked? document.getElementById('GO_DC_ID_16'  ).value :0)   );
    //save project
	saveProjectAPI();
}

/*-------------------------------------------------------------------------------------------------------------------------------------------*/
function loadDevice()
{
    document.getElementById('STA_TX_PL_SUM').innerHTML  = project.systemFiles.CONFIG_TYPE_MODE.STA_TX_POWER_LEVEL ;
    document.getElementById('AP_TX_PL_SUM').innerHTML  = project.systemFiles.CONFIG_TYPE_MODE.AP_TX_POWER_LEVEL   ;
    
    var phy_mode;
    switch (project.systemFiles.CONFIG_TYPE_MODE.PHY_CAL_MODE)
    {
        case 0:
        case "0":    phy_mode = 'Normal';
                break;
        case 1:
        case "1":    phy_mode = 'Trigger';
                break;
        case 2:
        case "2":    phy_mode = 'Onetime';
                break;

    }
    
    document.getElementById('PHY_CAL_MODE_SUM').innerHTML  =    phy_mode;
    
    var dev_high_tx_pow;
    switch (project.systemFiles.CONFIG_TYPE_MODE.PHY_STA_HIGH_TX_POWER)
    {
        case 0:
        case "0":    dev_high_tx_pow = 'Normal';
                break;
        case 1:
        case "1":    dev_high_tx_pow = 'High';
                break;
    }
    
    document.getElementById('PHY_DEVICE_HIGH_TX_POWER_SUM').innerHTML  =    dev_high_tx_pow;
}

function loadDeviceRoleSettingsSum()
{
    var role_settings;
    switch (project.systemFiles.CONFIG_TYPE_MODE.START_ROLE)
    {
        case "2":
        case 2  :    role_settings = 'Access Point';
                    break;
        case "3":            
        case 3:    role_settings = 'P2P';
                break;
        case "0":
        case 0:    role_settings = 'Station';
                break;

    }
    
    document.getElementById('START_ROLE_SELECT_SUM').innerHTML  =    role_settings;
    
    var val;
    switch (project.systemFiles.CONFIG_TYPE_MODE.COUNTRY_CODE )
    {
        case "0":
        case 0:    val = 'EU';
                break;
        case "1":
        case 1:    val = 'US';
                break;
        case "2":
        case 2:    val = 'JP';
                break;
    }
    
    document.getElementById('COUNTRY_CODE_SUM').innerHTML  =    val;

}

function loadSTADirectDeviceSum()
{
   
    document.getElementById('DHCP_CLIENT_ENABLE_SUM').innerHTML  =   project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IP_MODE          ;
    document.getElementById('STA_IP_ADDRESS_SUM'    ).innerHTML  =   project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_STATIC_IP        ;
    document.getElementById('STA_SUBNET_MASK_SUM'   ).innerHTML  =   project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_SUBNET_MASK      ;
    document.getElementById('STA_DEFAULT_GW_SUM'    ).innerHTML  =   project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DEFAULT_GATEWAY  ;
    document.getElementById('STA_DNS_SRVR_SUM'      ).innerHTML  =   project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IPV4_DNS_SERVER  ;
    
}

function loadAPDirectDeviceSum()
{

    document.getElementById('AP_IP_ADDRESS_SUM'         ).innerHTML  =   project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_STATIC_IP                     ;
    document.getElementById('AP_DEFAULT_GW_SUM'         ).innerHTML  =   project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DEFAULT_GATEWAY               ;
    document.getElementById('AP_DNS_SRVR_SUM'           ).innerHTML  =   project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_IPV4_DNS_SERVER               ;
    document.getElementById('apDhcpStartAddressTextSum' ).innerHTML  =   project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_START_IP_ADDRESS   ;
    document.getElementById('apDhcpLastAddressTextSum'  ).innerHTML  =   project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LAST_IP_ADDRESS    ;
    document.getElementById('apDhcpLeaseTimeSum'        ).innerHTML  =   project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LEASE_TIME         ;
}

function loadFilesSP()
{
    $('#spFileInput').prop('readonly', true);
    $('#spFileInput').val(project.systemFiles.FILES.SP_FILE_NAME.replace(/^.*[\\\/]/, ''));
}

function loadFilesSum()
{
    document.getElementById('SP_FILE_SUM'         ).innerHTML = project.systemFiles.FILES.SP_FILE_NAME.replace(/^.*[\\\/]/, '');
    
    //if(project.systemFiles.FILES.DEFAULT_CERTIFICATES)
    if(project.header.UseDefaultCertStore)
    {
        document.getElementById('CS_FILE_SUM'          ).innerHTML = '/files/certstore.lst';
        document.getElementById('CSS_FILE_SUM'         ).innerHTML = '/files/certstore.lst.signed';
    }
    else
    {
        document.getElementById('CS_FILE_SUM'          ).innerHTML = project.systemFiles.FILES.CS_FILE_NAME.replace(/^.*[\\\/]/, '') ;
        document.getElementById('CSS_FILE_SUM'         ).innerHTML = project.systemFiles.FILES.CSS_FILE_NAME.replace(/^.*[\\\/]/, '');
    }
}

function changeProductionDevice(){   
    if($('#ProductionNWP').val() != undefined)
    {
        project.header.ProductionNWP = $('#ProductionNWP').val();
        
         //save project
        saveProjectAPI();
    }
}

function loadProductionNWP()
{
    document.getElementById('ProductionNWP').value = project.header.ProductionNWP;
}

function changeFactoryConfig()
{
    if($('#FACTORY').val() != undefined)
    {
        project.header.EnableReturnToFactory = $('#FACTORY').val();
        
        //save project
        saveProjectAPI();
    }
}

function loadFactoryConfig()
{
    document.getElementById('FACTORY').value = project.header.EnableReturnToFactory;
    
    /*if(localStorage.getItem('isconnected') == 'true')
    {
        $('select#FACTORY').prop("disabled", true);
    }
    else
    {
        $('select#FACTORY').prop("disabled", false);
    }*/
}

function changeFactorySOP()
{  
    if($('#IGNORE_FORCE_AP').val() != undefined)
    {
        project.systemFiles.CONFIG_TYPE_MODE.IGNORE_FORCE_AP = $('#IGNORE_FORCE_AP').val().toString();
        project.header.ReturnToFactoryGPIO = project.systemFiles.CONFIG_TYPE_MODE.IGNORE_FORCE_AP.toString();/*Katjas' requirment*/
        
        if(project.systemFiles.CONFIG_TYPE_MODE.IGNORE_FORCE_AP == "1")
        {
            document.getElementById('FACTORY').options[1].style.display = 'block';
        }
        else
        {
           document.getElementById('FACTORY').options[1].style.display = 'none';
        }

        if($("#FACTORY").val() =='none')
        {
              $("#FACTORY").val('defaults_and_image') ;
               project.header.EnableReturnToFactory = $('#FACTORY').val();
        }
        //save project
        saveProjectAPI();
    }
}

function loadFactorySOP()
{
    document.getElementById('IGNORE_FORCE_AP').value = project.systemFiles.CONFIG_TYPE_MODE.IGNORE_FORCE_AP;
    
        if(project.systemFiles.CONFIG_TYPE_MODE.IGNORE_FORCE_AP == "1")
        {
            document.getElementById('FACTORY').options[1].style.display = 'block';
 
        }
        else
        {
           document.getElementById('FACTORY').options[1].style.display = 'none';
        }
        
        
    /*if(localStorage.getItem('isconnected') == 'true')
    {
        $('#IGNORE_FORCE_AP').prop("disabled", true);
    }
    else
    {
        $('#IGNORE_FORCE_AP').prop("disabled", false);
    }*/
    
}

function loadGeneralSettings()
{
    loadMode();
    loadCapacity();
    
    loadSecureDevice();
    loadProductionNWP();
    loadFactoryConfig();
    loadFactorySOP();
    loadMacAddress();
    loadEncryptionKey();
    
    if(project.header.Mode == 'development')
    {
        loadDevelopeMacAddress();
    }
    
    if(localStorage.getItem('isconnected') == 'true')
    {
        $('#ConnectBtn').text("Disconnect");
        
        /*//show key file name
        var kf = document.getElementById('KEY_FILE');
        document.getElementById('USE_KEY_1').checked  = project.header.UseKey;
        if(project.header.KeyFileLocation != "")
        {
            kf.style.display = "none";
            var dd = document.createElement("div");
            dd.innerHTML = "<b>" + project.header.KeyFileLocation.replace(/^.*[\\\/]/, '') +"</b>";
            kf.parentNode.appendChild(dd);
        }*/
    }
    else
    {
        $('#ConnectBtn').text("Connect");
    }
    
}

function addEncryptionKey()
{
     project.header.UseKey = document.getElementById('USE_KEY_1').checked;
     
    //save project
	saveProjectAPI();
}

function changeSecureDevice()
{
    if($('#3200Select').val() != undefined)
    {
        //project.header.IsTheDeviceSecure = $('#3200Select').val() == '1' ? 1 : 2;
        project.header.IsTheDeviceSecure = $('#3200Select').val() == '1' ? false : true;
        
        /*if(localStorage.getItem('isconnected') == 'true')
        {
            updateEncryptionFileGui (false);
        }   
        else
        {
            updateEncryptionFileGui (project.header.IsTheDeviceSecure);
        }*/
        updateEncryptionFileGui (project.header.IsTheDeviceSecure);
        project.header.KeyFileLocation = $('#keyFileInput').val();
            
         //save project
        saveProjectAPI();
    }
}

function updateEncryptionFileGui (enable)
{
    $('input#USE_KEY_1'         ).prop("disabled", !enable);
    $('input#KEY_FILE'          ).prop("disabled", !enable);
    $('input#keyFileInput'      ).prop("disabled", !enable);   
    
    if(!enable)
    {
        $('div#browseKeyFile').addClass("btnDisabled");
        $('#USE_KEY_1').prop("checked", project.header.UseKey);
        addEncryptionKey();
    }
    else
    {
        $('div#browseKeyFile').removeClass("btnDisabled");
    }
    
    if(project.header.IsTheDeviceSecure == true)
    {
        $('#fieldsetKeySourceFile').show();
    }
    else
    {
        $('#fieldsetKeySourceFile').hide();
    }
}

function loadSecureDevice()
{
    $('#3200Select').val(project.header.IsTheDeviceSecure == true ? '2' : '1');
    var kfl = '';
    if(project.header.KeyFileLocation)
        {
            kfl = project.header.KeyFileLocation.replace(/^.*[\\\/]/, '');
        }
    $('#keyFileInput').val(kfl);
    
    updateEncryptionFileGui (project.header.IsTheDeviceSecure);
     
   /* if(localStorage.getItem('isconnected') == 'true')
    {
        $('#3200Select').prop("disabled", true);
    }
    else
    {
        $('#3200Select').prop("disabled", false);
    }*/
}

function loadEncryptionKey()
{
    if($('#keyFileInput').val() != undefined)
    {
        document.getElementById('USE_KEY_1').addEventListener('change', addEncryptionKey, false);
        $('#keyFileInput').prop('readonly', true);
        
        $('#USE_KEY_1').prop("checked", project.header.UseKey);
        
        /*if(localStorage.getItem('isconnected') == 'true')
        {
            updateEncryptionFileGui (false);
        }   
        else
        {
            updateEncryptionFileGui (project.header.IsTheDeviceSecure);
        }*/
    }
}

function loadMode()
{
    if(project.header.Mode == 'development')
    {
        document.getElementById('ModeSelect').value = 2;
        document.getElementById('generalSettingsDevelopMacAddressText').style.display = 'block';
    }
    else
    {
        document.getElementById('ModeSelect').value = 1;
        document.getElementById('generalSettingsDevelopMacAddressText').style.display = 'none';
    }
    
    if(localStorage.getItem('isconnected') == 'true')
    {
        document.getElementById('ModeSelect').disabled = true;
        document.getElementById('generalSettingsDevelopMacAddressText').disabled = true;
    }
    else
    {
        document.getElementById('ModeSelect').disabled = false;
        document.getElementById('generalSettingsDevelopMacAddressText').disabled = false;
    }
    
}

function changeMode()
{
    var strText = $("#ModeSelect option:selected").text().toLowerCase();
    
    if((strText == 'development') || (strText == 'production'))
    {
        project.header.Mode = strText;

        //save project
        saveProjectAPI();
    }
    
    if(project.header.Mode == 'development')
    {
        $('#generalSettingsDevelopMacAddressText').show();
        
        $('#BrowseBtn').removeClass('btnDisabled');
        $('#BrowseBtn').off("click").on('click', browse);
    }
    else
    {
        $('#generalSettingsDevelopMacAddressText').hide();
        
        $('#BrowseBtn').addClass('btnDisabled').off('click');
    }
}
function changeCapacity()
{
    if($('#capacitySelect').val() != undefined)
    {
        project.header.StorageCapacityBytes = $('#capacitySelect').val();
        
        //save project
        saveProjectAPI();
    }

}

function loadCapacity()
{
    document.getElementById('capacitySelect').value = project.header.StorageCapacityBytes;
    
    /*if(localStorage.getItem('isconnected') == 'true')
    {
        document.getElementById('capacitySelect').disabled = true;
    }
    else
    {
        document.getElementById('capacitySelect').disabled = false;
    }*/
}

function loadGenerateImage()
{
var pname = localStorage.getItem('projectName');
$.post("/api/1/flash/getImageFileExist",   {'name':pname},
				function(data,status){
                    //if sli file exists
					if(status=='success' && data.ok){
                        //enable save button
						        $('#saveImageButton').removeClass('btnDisabled');
                                $('#saveImageButton').off('click').on('click', saveImage);
					}
					else if(data.err){
                        console.log(data.err);
						//disable save button
					$('#saveImageButton').addClass('btnDisabled').off('click');
					}

                });
    /* to delete
    if('development' != project.header.Mode){
        //enable program button
        $('#programImageButton').removeClass('btnDisabled');
        $('#programImageButton').off('click').on('click', function(){createImage(programImageFromProject, true);});
    }
    else{
        if('' !== project.header.DEV_MAC_ADDR)
        {
            //enable program button
            $('#programImageButton').removeClass('btnDisabled');
            $('#programImageButton').off('click').on('click', function(){createImage(programImageFromProject, true);});
        }
        else
        {
            //disable program button
            $('#programImageButton').addClass('btnDisabled').off('click');
        }
    }
    */
    updateBrowseBtn();
}
function clearServicePackFile()
{
    project.systemFiles.FILES.SP_FILE_NAME = '';
    project.header.ServicePackFileLocation = '';
    $('#spFileInput').val('');
    saveProjectAPI();
}

function checkDeviceType()
{
    return true;
}

function loadGeneralSum()
{
    document.getElementById('Name_SUM').innerHTML = project.header.Name;
    document.getElementById('Mode_SUM').innerHTML = project.header.Mode;
    
    switch(project.header.StorageCapacityBytes)
    {
        case '1048576' : document.getElementById('Capacity_SUM').innerHTML = '1M Byte';
                        break;
        case '2097152' : document.getElementById('Capacity_SUM').innerHTML = '2M Byte';
                        break;
        case '4194304' : document.getElementById('Capacity_SUM').innerHTML = '4M Byte';
                        break;
        case '8388608' : document.getElementById('Capacity_SUM').innerHTML = '8M Byte';
                        break;
        case '16777216': document.getElementById('Capacity_SUM').innerHTML = '16M Byte';
                        break;
                        
                        
         default:    document.getElementById('Capacity_SUM').innerHTML = '1M Byte';           
    }
    
    updateBrowseBtn();
}


function verifyText(e, oldVal, min, max)
{
    var str = e.currentTarget.value;
    if((str.length > min) && (str.length < max))
    {
        return true;
    }
    else
    {
        showInputDialog('String length should be between ' +  Number(min + 1)  + ' - ' + Number(max - 1) + '!', 
                        false, 
                        null,
                        {text: "Close"});
        e.currentTarget.value = oldVal;
        return false;
    }
}
function verifyPassword(e, oldVal)
{
    var str = e.currentTarget.value;
    
    if($('#apSecuritySelect').val() == '1')/*WEP*/
    {
        /*check length 13 or 5*/
        if((str.length == 13) || (str.length == 5))
        {
            /*check ASCII input*/
            if(/^[\x00-\x7F]*$/.test(str))/*ASCII*/
            {
                return true;
            }
            else
            {
                showInputDialog('Wrong ASCII input!', 
                        false, 
                        null,
                        {text: "Close"});
            }
        }
        else
        {
            showInputDialog('Wrong password length! Should be 13 or 5!', 
                        false, 
                        null,
                        {text: "Close"});

        }
    }
    else if ($('#apSecuritySelect').val() == '2') /*WPA*/
    {
        if((str.length < 8)||(str.length > 63))
        {
            showInputDialog('Wrong password length! Should be 8-63!', 
                        false, 
                        null,
                        {text: "Close"});
        }
        else
        {
            return true;
        }
    }
    else/*Open*/
    {
        return true;
    }
    
    e.currentTarget.value = oldVal;
    return false;
}

function verifyNumLimits(e, min, max, oldVal)
{
    var str = e.currentTarget.value;
    var n = ~~Number(str);
    if(String(n) === str && n >= min && n <= max)
    {
        return true;
    }
    else
    {
        showInputDialog('Value should be between ' +  min + ' - ' + max + '!', 
                        false, 
                        null,
                        {text: "Close"});
        e.currentTarget.value = oldVal;
        return false;
    }
}

function validateIPaddress(e, oldIP)   
{  
    var IPRegex=new RegExp("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");
    
    if(!IPRegex.test(e.currentTarget.value))
    {
        showInputDialog('You have entered an invalid IP address!', 
                        false, 
                        null,
                        {text: "Close"});
        e.currentTarget.value = oldIP;
        return false;
    }
    
    return true;
}  

function verifyMacAddr(e, oldVal)
{
    
    var MACAddress = e.currentTarget.value;
    var MACRegex=new RegExp("^(?!(?:ff:ff:ff:ff:ff:ff|00:00:00:00:00:00))([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$");
    if(!MACRegex.test(MACAddress))
    {
        showInputDialog('Wrong Mac Address format. Should be "01:23:45:67:89:AB"\n "00:00:00:00:00:00" and "ff:ff:ff:ff:ff:ff" are not required', 
                        false, 
                        null,
                        {text: "Close"});
        e.currentTarget.value = oldVal;
        return false;
    }
    return true;
}

function createDefaultProjectValues()
{
    project.header.IsTheDeviceSecure = false;
    project.header.ProductionNWP = "1";
    project.header.EnableReturnToFactory = "defaults_and_image";
    project.header.ReturnToFactoryGPIO = "0";  //--> moved to systemFiles.CONFIG_TYPE_MODE.IGNORE_FORCE_AP
    project.header.UseDefaultCertStore = true;
    project.header.StorageCapacityBytes = "2097152";
    project.header.UseKey = 0;
    project.header.KeyFileLocation = "";
    project.header.DEV_MAC_ADDR = "";
    if(!project.systemFiles){
		project.systemFiles={};
	}
    
    /*-----------------CONFIG_TYPE_MAC -------------*/
    if(!project.systemFiles.CONFIG_TYPE_MAC){
		project.systemFiles.CONFIG_TYPE_MAC={};
	}
    
    project.systemFiles.CONFIG_TYPE_MAC.SystemFileId = "CONFIG_TYPE_MAC";
    project.systemFiles.CONFIG_TYPE_MAC.USE_DEFAULT = 1;
    project.systemFiles.CONFIG_TYPE_MAC.MAC_ADDR = "08:00:28:11:22:33";
    //project.systemFiles.CONFIG_TYPE_MAC.DEV_MAC_ADDR = "11:22:33:44:77:88";
    
    /*-----------------FILES -------------*/
    if(!project.systemFiles.FILES){
		project.systemFiles.FILES={};
	}
    
    project.systemFiles.FILES.SystemFileId = "FILES";
    project.systemFiles.FILES.SP_FILE_NAME = "";
    project.systemFiles.FILES.CS_FILE_NAME = "";
    project.systemFiles.FILES.CSS_FILE_NAME = "";
    //project.systemFiles.FILES.KEY_IMAGE_FILE_NAME = "";
    //project.systemFiles.FILES.PROJ_IMAGE_KEY_FILE_NAME = "";
    //project.systemFiles.FILES.DEFAULT_CERTIFICATES = 1;
    
    /*-----------------CONFIG_TYPE_MODE -------------*/
    if(!project.systemFiles.CONFIG_TYPE_MODE){
		project.systemFiles.CONFIG_TYPE_MODE={};
	}
    
    project.systemFiles.CONFIG_TYPE_MODE.SystemFileId = "CONFIG_TYPE_MODE";
                    /*-----------Network Applications------------*/
    project.systemFiles.CONFIG_TYPE_MODE.STA_START_APPS     = 5;
    project.systemFiles.CONFIG_TYPE_MODE.AP_START_APPS      = 15;
    project.systemFiles.CONFIG_TYPE_MODE.P2P_CLS_START_APPS = 5;
    project.systemFiles.CONFIG_TYPE_MODE.P2P_GO_START_APPS  = 15;
    
                    /*----------Calibrations-----*/
    project.systemFiles.CONFIG_TYPE_MODE.STA_TX_POWER_LEVEL = "0";
    project.systemFiles.CONFIG_TYPE_MODE.AP_TX_POWER_LEVEL  = "0";
    project.systemFiles.CONFIG_TYPE_MODE.PHY_CAL_MODE       = "0";
    
    project.systemFiles.CONFIG_TYPE_MODE.PHY_STA_HIGH_TX_POWER = 0;
    project.systemFiles.CONFIG_TYPE_MODE.PHY_AP_HIGH_TX_POWER  = 0;

            /*------------------System-----------------------*/
    project.systemFiles.CONFIG_TYPE_MODE.IGNORE_FORCE_AP = "0";
    
            /*----------------Provisioning/Events non configurable -------*/

    project.systemFiles.CONFIG_TYPE_MODE.PROVISIONING_SAVED_ROLE        = 0;   
    project.systemFiles.CONFIG_TYPE_MODE.PROVISIONING_MODE              = 2;
    project.systemFiles.CONFIG_TYPE_MODE.PROVISIONING_STATE             = 0;   
    project.systemFiles.CONFIG_TYPE_MODE.PROVISIONING_SAVED_AUTO_START  = 1;
    project.systemFiles.CONFIG_TYPE_MODE.PROVISIONING_RESULT            = 0;    
    project.systemFiles.CONFIG_TYPE_MODE.PROVISIONING_MONITOR_TIMER     = 0;    
    project.systemFiles.CONFIG_TYPE_MODE.PROVISIONING_ROLE_AFTER_SUCCESS = 0;

    project.systemFiles.CONFIG_TYPE_MODE.SL_EVENT_CLASS_NETCFG          = 0;
    project.systemFiles.CONFIG_TYPE_MODE.SL_EVENT_CLASS_FS              = 0;
    project.systemFiles.CONFIG_TYPE_MODE.SL_EVENT_CLASS_WLAN            = 0;
    project.systemFiles.CONFIG_TYPE_MODE.SL_EVENT_CLASS_GLOBAL          = 0;
    project.systemFiles.CONFIG_TYPE_MODE.SL_EVENT_CLASS_BSD             = 0;
    project.systemFiles.CONFIG_TYPE_MODE.SL_EVENT_CLASS_DEVICE          = 0;    
    project.systemFiles.CONFIG_TYPE_MODE.SL_EVENT_CLASS_NETAPP          = 0;

    
            
    project.systemFiles.CONFIG_TYPE_MODE.START_ROLE = "2";
    project.systemFiles.CONFIG_TYPE_MODE.COUNTRY_CODE = "0";
    project.systemFiles.CONFIG_TYPE_MODE.AUTO_PROV_EXTERNAL_CONFIRMATION = "0";
    
        /*-----------------CONFIG_TYPE_DHCP_SRV -------------*/
    if(!project.systemFiles.CONFIG_TYPE_DHCP_SRV){
		project.systemFiles.CONFIG_TYPE_DHCP_SRV={};
	}
    
    project.systemFiles.CONFIG_TYPE_DHCP_SRV.SystemFileId                       = "CONFIG_TYPE_DHCP_SRV";
    project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_START_IP_ADDRESS    = "10.123.45.2";
    project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LAST_IP_ADDRESS     = "10.123.45.254";
    project.systemFiles.CONFIG_TYPE_DHCP_SRV.AP_DHCP_SERVER_LEASE_TIME          = "24";
    
    
        /*-----------------CONFIG_TYPE_IP_CONFIG -------------*/
    if(!project.systemFiles.CONFIG_TYPE_IP_CONFIG){
		project.systemFiles.CONFIG_TYPE_IP_CONFIG={};
	}
    
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.SystemFileId                       = "CONFIG_TYPE_IP_CONFIG";
    
            /*-------------------------STA Network Settings -----------------*/
            

    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_STATIC_IP                     = "192.168.1.101";
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_SUBNET_MASK                   = "255.255.255.0";
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DEFAULT_GATEWAY               = "192.168.1.31";
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IPV4_DNS_SERVER               = "192.168.1.31";
    
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IP_MODE                       = "True";
            /*---------------------------------Not exposed/configurable STA------------*/
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_STATIC_IPV6_GLOBAL_ADDRESS    = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_STATIC_IPV6_LOCAL_ADDRESS     = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_IPV6_DNS_SERVER               = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_INACTIVITY_TIME               = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_ARP_RENEW_TIME                = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DHCP_CLIENT_TIME_OUT          = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DNS_CLIENT_TIME               = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_KEEP_ALIVE_TIME               = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DHCP_SERVER_START_IP_ADDRESS  = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DHCP_SERVER_LAST_IP_ADDRESS   = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.STA_DHCP_SERVER_MODE              = null;
    
        /*-------------------------AP Network Settings -----------------*/
            

    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_STATIC_IP                      = "10.123.45.1";
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DEFAULT_GATEWAY                = "10.123.45.1";
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_IPV4_DNS_SERVER                = "10.123.45.1";
    
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DHCP_SERVER_START_IP_ADDRESS   = "10.123.45.2";
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DHCP_SERVER_LAST_IP_ADDRESS    = "10.123.45.254";
   
        /*---------------------------------Not exposed/configurable AP------------*/
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_SUBNET_MASK                    = null;
    
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_STATIC_IPV6_GLOBAL_ADDRESS     = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_STATIC_IPV6_LOCAL_ADDRESS      = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_IPV6_DNS_SERVER                = null;
       
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DHCP_CLIENT_TIME_OUT           = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_ARP_RENEW_TIME                 = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_KEEP_ALIVE_TIME                = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DNS_CLIENT_TIME                = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_INACTIVITY_TIME                = null;
    
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_IP_MODE                        = null;
    project.systemFiles.CONFIG_TYPE_IP_CONFIG.AP_DHCP_SERVER_MODE               = null;
    

    
     /*-------------------------AP WLan Settings --------------------*/
    if(!project.systemFiles.CONFIG_TYPE_AP){
		project.systemFiles.CONFIG_TYPE_AP={};
	}
        
    project.systemFiles.CONFIG_TYPE_AP.SSID                                     = "mysimplelink";
    project.systemFiles.CONFIG_TYPE_AP.MAX_STT                                  = "4";
    project.systemFiles.CONFIG_TYPE_AP.HIDDEN_SSID                              = "0";
    project.systemFiles.CONFIG_TYPE_AP.SECURITY                                 = "0";
    project.systemFiles.CONFIG_TYPE_AP.CHANNEL                                  = "1";
    project.systemFiles.CONFIG_TYPE_AP.PASSWORD                                 = "";
    
    /*-------------------------Device Name --------------------*/
    if(!project.systemFiles.CONFIG_TYPE_DEVICE_NAME ){
		project.systemFiles.CONFIG_TYPE_DEVICE_NAME ={};
	}
    project.systemFiles.CONFIG_TYPE_DEVICE_NAME.DEVICE_URN                     = "mysimplelink";
    project.systemFiles.CONFIG_TYPE_DEVICE_NAME.DOMAIN_NAME                    = "mysimplelink.net";
        /*---------------------------------User Files------------*/

    /*-------------------------Connection Policy --------------------*/
    if(!project.systemFiles.CONFIG_TYPE_STA_CONFIG){
		project.systemFiles.CONFIG_TYPE_STA_CONFIG={};
	}
    
    project.systemFiles.CONFIG_TYPE_STA_CONFIG.AUTOSTART                        = "1";
    project.systemFiles.CONFIG_TYPE_STA_CONFIG.USEFASTCONNECT                   = "0";
    project.systemFiles.CONFIG_TYPE_STA_CONFIG.CONNECTTOANYP2P                  = "0";
    project.systemFiles.CONFIG_TYPE_STA_CONFIG.AUTOPROVISIONING                 = "1";
    
  /*-------------------------Device Name --------------------*/
    if(!project.systemFiles.CONFIG_TYPE_DEVICE_NAME){
		project.systemFiles.CONFIG_TYPE_DEVICE_NAME={};
	}
    
    project.systemFiles.CONFIG_TYPE_DEVICE_NAME.DEVICE_URN                        = "mysimplelink";
    project.systemFiles.CONFIG_TYPE_DEVICE_NAME.DOMAIN_NAME                       = "mysimplelink.net";  
     /*
    if(!project.userFiles){
		//project.userFiles=[];
        project.userFiles=null;
	}
    */
    
    
     //save project
	//saveProjectAPI();
}

function displayError(text){
	var html='<div class="white-popup-small">'
	html +='	<div class="wrapPopup">';
	html +='		<div class="filePathN">Error:<span>'+text+'</span></div>';
	html +='		<div class="mbot25"></div>';
	html +='		<div class="wrapDRS floatLeft">';
	html +='			<div class="fieldName"></div>';
	html +='		</div>';	
    html +='		<div class="clear" />';
	html +='		<div class="wrapButtons">';
	html +='			<div class="regButton mCenterM" onClick="$.magnificPopup.close();">Ok</div>';
	html +='		</div>';
	html +='	</div>';
	html +='	<div class="clear" />';
	html +='</div>';
	
	
	$.magnificPopup.open({
		items: {
			src:html,
			type: 'inline'
		}
	});
}

function updateConnectionStatus(data) {
    //connect status
    $('#deviceStatusBox').empty();
    $('#deviceStatusBox').append('<div class="uStatus"><div class="uText jslink"><div class="uIcon"><i class="fa fa-link"></i></div>Connected: <span id = "devConnect">On</span></div></div>');
    //device
    var securedText = "";
    var secured = false;
    if (data.ok.chip_rev < 0x20 && data.ok.device == "CC3200") {
        securedText = "Preproduction Secured";
        secured = true;
    }else if (data.ok.secure) {
        securedText = "Secure";
        secured = data.ok.secure;
    } else {
        securedText = "Non-Secure";
        secured = false;
    }
    
    if (data.ok.dev_mode) {
        currentMode = "Development"
    } else {
        currentMode = "Production"
    }
        
    $('#deviceStatusBox').append('<div class="uStatus">');
    $('#deviceStatusBox').append('<div class="uText"><div class="uIcon"><i class="fa fa-star" ></i></div>Device Type: <span class="mf20">'+ data.ok.device+ ', ' + securedText + '</span>');
    $('#deviceStatusBox').append('</div>');
    //MAC Address
    $('#deviceStatusBox').append('<div class="uStatus">');
    $('#deviceStatusBox').append('<div class="uText"><div class="uIcon"><i class="fa fa-arrow-circle-o-right"></i></div>MAC Address: <span id = "devMacAddr">'+data.ok.mac_address+'</span></div>');
    $('#deviceStatusBox').append('</div>');
    //hardware
    $('#deviceStatusBox').append('<div class="uStatus">');
    $('#deviceStatusBox').append('<div class="uText"><div class="uIcon"><i class="fa fa-briefcase"></i></div>HW Version: <span>'+ data.ok.chip_rev+'</span></div>');
    $('#deviceStatusBox').append('</div>');
    //programing
    $('#deviceStatusBox').append('<div class="uStatus">');
    if(data.ok.secure && data.ok.secure === true){
        $('#deviceStatusBox').append('<div class="uText jslink"><div class="uIcon"><i class="fa fa-code"></i></i></div>Programming Status: <span>On</span></div>');
    }
    else{
        $('#deviceStatusBox').append('<div class="uText jslink"><div class="uIcon"><i class="fa fa-code"></i></i></div>Programming Status: <span>On</span></div>');
    }
    $('#deviceStatusBox').append('</br>');
    $('#deviceStatusBox').append('</div>');
    
    
    $('#deviceStatusBox').append('<div class="uText jslink"><div class="uIcon"><i class="fa fa-code"></i></i></div>Current Mode: <span id = currentModeId>' + currentMode + '</span></div>');
    
    $('#deviceStatusBox').append('</br>');
    $('#deviceStatusBox').append('</div>');
    
    $('#ConnectBtn').text("Disconnect");
    
    
    //try to update the general settting page
    $('select#3200Select').val(secured ? "2" : "1");
    project.header.IsTheDeviceSecure = secured;
    
    $('select#ProductionNWP').val(data.ok.z_device ? "0" : "1");
    project.header.ProductionNWP = data.ok.z_device ? "0" : "1";
    
    if (data.ok.capacity) {
        $('select#capacitySelect').val(data.ok.capacity * 1024 * 1024);
    }
    //$('select#ModeSelect'       ).prop("disabled", true);

    //set connected as true
    localStorage.setItem('isconnected', 'true');
    
    changeMode();
    changeCapacity();
    changeSecureDevice();
    changeProductionDevice();

    changeFactorySOP();
    changeFactoryConfig();
    
    loadMacAddress();
    loadDevelopeMacAddress();
    changeDevelopeMacAddress();
    updateBrowseBtn();
}

function connectDeviceAPI(disconnect, done, fail) {
    if ($('#ConnectBtn').text() == "Disconnect" || disconnect) {
        $('#deviceStatusBox').empty();
        
        $('#deviceStatusBox').append('<div class="uStatus"><div class="uText jslink"><div class="uIcon"><i class="fa fa-unlink uRed" ></i></div>Connected: Off</div></div>');
         
        //$('select#ModeSelect'       ).prop("disabled", false);       
        $('#ConnectBtn').text("Connect");
        
        localStorage.setItem('isconnected', 'false');
        
        changeMode();
        changeCapacity();
        changeSecureDevice();
        changeProductionDevice();
        
        changeFactorySOP();     /*! place important*/
        changeFactoryConfig(); /*! place important*/
        loadMacAddress();
        updateBrowseBtn();
        
        
        $.post("/api/1/flash/disconnectDevice", {})
            .done(function(data) {
                done();
            })
            .fail(function(xhr, textStatus, errorThrown) {
                done(); // just do it
            });

        
        return;
    }
    
    //update status of key source file name
    if($('#KEY_FILE').val() != undefined)
        project.header.KeyFileLocation = $('#KEY_FILE').val();
    
    //$('#deviceStatusBox').append('<div class="uStatus"><div class="uText jslink"><div class="uIcon"><i><img id="progStatusImgJslink" src="images/ajax-loader.gif"/></i></div>Connecting...</div></div>');
    progressModalOpen("Connecting, please wait");
   
    $.post("/api/1/flash/connectDevice",   {"com_port": null})
        .done(function(data) {
            if (data && data.ok) {
                getProgressStatus(100, updateConnectionStatus);
            } else {
                $('#progStatusImg').hide();
                $('#progStatusBtn').text("Close");
                $('#progStatus').text("Error: " + ((data && data.err) ? data.err : "unknown"));
            }
        })
        .fail( function(xhr, textStatus, errorThrown) {
            $('#progStatusImg').hide();
            $('#progStatusBtn').text("Close");
            $('#progStatus').text("Error: disconnected");
        });

}

function progressModalOpen(text, showBar){
    var html='<div class="white-popup-small">'
	html +='	<div class="wrapPopup">';
	html +='		<div class="center-block"><img class="mright10" id="progStatusImg" src="images/ajax-loader.gif" ><span id="progStatus">'+text+'<span></div>';
    //html +='        <div class="center-block"><img class="center-block" id="progStatusImg" src="images/ajax-loader.gif"></div>';
    
    if (showBar)
        html +='        <div><div class="center-block progress"><div id="progStatusBar" class="progress-bar"></div></div>';
        
	html +='		<div class="wrapButtons">';
	html +='			<div id="progStatusBtn" class="regButton mleft59">Abort</div>';
	html +='		</div>';
	html +='	</div>';
	html +='	<div class="clear" />';
	html +='</div>';
    
    $.magnificPopup.open({
        items: {
        src:html,
        type: 'inline',
		},
        
        modal: true,
	});
    
    $('#progStatusBtn').on("click", function(e) {
        if ($('#progStatusBtn').text() == "Abort") {
            $.post("/api/1/flash/prog_abort", {}, function(data, status) {
                if (status == "success" && data.ok) {
                        $('#progStatus').text("Aborted");
                } else {
                    if (data.err)
                        $('#progStatus').text("Abort error: " + data.err);
                    else
                        $('#progStatus').text("Abort error: disconnect");
                }
            });
        } else if ($('#progStatusBtn').text() == "Close") {
            progressModalClose();
            loadGenerateImage();
            if((localStorage.getItem('isconnected') == undefined) || (localStorage.getItem('isconnected') == 'false'))
            {
                $('#deviceStatusBox').empty();
                $('#deviceStatusBox').append('<div class="uStatus"><div class="uText jslink"><div class="uIcon"><i class="fa fa-unlink uRed" ></i></div>Connected: Off</div></div>');
            }
        }
    });
}



function progressModalClose(noClose) 
{    
    //update data
    try {
        changeCapacity();
    } catch (e) {
        console.log(e);
    }
    try {
        changeSecureDevice();
    } catch (e) {
        console.log(e);
    }
    try {
        changeFactorySOP();
    } catch (e) {
        console.log(e);
    }
    try {
        changeFactoryConfig();
    } catch (e) {
        console.log(e);
    }
    try {
        changeProductionDevice();
    } catch (e) {
        console.log(e);
    }
    
    if (noClose) {
        $('#progStatusImg').hide();
        $('#progStatus').text("Done")
        $('#progStatusBtn').text("Close");
    } else {
        $.magnificPopup.close();
    }
}

function getProgressStatus(timeOut, callOnDone, noClose, fail) {
    if (timeOut === undefined)
        timeOut = 100
        
    $.post("/api/1/flash/getProgStatus", {})
        .done(function(data) {
            if (data) {
                if (data.ok || data.err) {
                    if (data.ok) {
                                    $('#progStatus').text((typeof(data.ok) == "string") ? data.ok : "Operation Completed Successfully");
                                    if (callOnDone)
                                        callOnDone(data)
                    }                 
                    else if (data.err) {
                        $('#progStatus').css({'color': 'red'});
                        $('#progStatus').css("font-weight","Bold");
                        $('#progStatus').text("Operation failed: " + data.err);
                        $('#progStatusImg').hide();
                        $('#progStatusBtn').text("Close");
                        
                        if (fail) {
                            fail(data.err);
                        }
                    }
                    
                    if (!noClose) {
                        $('#progStatusImg').hide();
                        $('#progStatusBtn').text("Close");
                    }
                } else {
                    $('#progStatus').text(data.prog_status.text);
                    var progress = ((data.prog_status.number * 1.0) / data.prog_status.total * 100) + "%";
                    try {
                            if($('#progStatusBar').prop("style"))
                            {
                                $('#progStatusBar').prop("style").width = progress;
                            }
                    } catch (err) {
                    }
                    
                    window.setTimeout(function() { getProgressStatus(timeOut, callOnDone, noClose, fail) }, timeOut);
                }
            } else {
               
            }
        })
        .fail( function(xhr, textStatus, errorThrown) {
            $('#progStatusImg').hide();
            $('#progStatusBtn').text("Close");
            $('#progStatus').text("Error: disconnected");
        });
}

function programImageFromProject() {
    progressModalOpen("Starting...", true);
    connectDeviceAPI(true, function() {
        $.post("/api/1/flash/programImageFromProject", {name: projectName, com_port: null})
            .done(function(data) {
                if (data && data.ok) {
                    getProgressStatus(100);
                } else {
                    $('#progStatusImg').hide();
                    $('#progStatusBtn').text("Close");
                    $('#progStatus').text("Error: " + ((data && data.err) ? data.err : "unknown"));
                }
            })
            .fail( function(xhr, textStatus, errorThrown) {
                $('#progStatusImg').hide();
                $('#progStatusBtn').text("Close");
                $('#progStatus').text("Error: disconnected");
            });
    });
}

function programImageFromSLI(sliFile, keyFile) {
    var formData = new FormData();
    
    if (false) // should be user selected com port in the future
        formData.append("com_port", null);
                
    if (sliFile)
        formData.append("sli_file", sliFile);

    if (keyFile)
        formData.append("key_file", keyFile);
        
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            if (data && data.ok) {
                getProgressStatus(100)
            }
            else if (data && data.err) {
                $('#progStatusImg').hide();
                $('#progStatusBtn').text("Close");
                $('#progStatus').text("Error: " + data.err);
            }
        } else if (xhr.status > 200) {
            $('#progStatusImg').hide();
            $('#progStatusBtn').text("Close");
            $('#progStatus').text("Error: disconnected"); 
        }
    }
    
    xhr.upload.onprogress = function(e) {
        $('#progStatus').text("Preparing SLI file");
        if (e.lengthComputable) {
            $('#progStatusBar').prop("style").width = ((e.loaded / e.total) * 100) + "%";
        }
    }
    
    progressModalOpen("Starting...", true);
    
    xhr.open("POST", "/api/1/flash/programImageFromSLI", true);
    xhr.send(formData);
}

function loadWelcome()
{
    window.location.href = "/Welcome.htm";
}

function loadGenerataImage()
{
    //window.location.href = "/index.htm?page=programimageconnected";
    displayMainContent('programimageconnected');
}

function enableSetProjImage()
{
    $('#setProjImage').removeClass('btnDisabled')
    $('#setProjImage').off('click').on('click', setProjImageClicked);
   
    $('#keyImgFileInput').val($('#IMG_FILE').val().replace(/^.*[\\\/]/, ''));    

    $('#keyImgKeyFileInput').val($('#PROJ_IMAGE_KEY_FILE_NAME').val().replace(/^.*[\\\/]/, ''));
    
}

function loadOpenProjImg()
{
    if (document.getElementById('IMG_FILE').innerHTML == "")

    {
        $('#setProjImage').addClass('btnDisabled').off('click');
    }
}
function openCreateImageBrowse()
{
    $('#browseKeyImageFile').click();
}

function toggleFullOverlay(activeDiv, enable) {
    var ol = $("#fullOverlay")
    
    if (enable) {
        activeDiv.css("z-index", 200);
        ol.css({"z-index": 100, "opacity": 0.8})
    } else {
        activeDiv.css("z-index", "auto");
        ol.css({"z-index": 0, "opacity": 0})
    }
}


function browse()
{   
    displayMainContent('filesuserfilesonline');
}

function updateBrowseBtn()
{
//if(project){if(project.header){if(project.header.Mode){
    if(localStorage.getItem('isconnected') != 'true'){//disconnected
        $('#BrowseBtn').addClass('btnDisabled').off('click');
    }
    else{
        //if('development' == project.header.Mode){
        if("Development" == $('#currentModeId').html()){
            //enable browse button
            $('#BrowseBtn').removeClass('btnDisabled');
            $('#BrowseBtn').off("click").on('click', browse);
        }
        else {
        $('#BrowseBtn').addClass('btnDisabled').off('click');
        }
    }
//}}}
}

function progressModalError(text) {
    $('#progStatusImg').hide();
    $('#progStatusBtn').text("Close");
    $('#progStatus').text("Error: " + text);
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
