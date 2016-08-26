var pages={
'page':[
//General
{   'id':'general',
    'title':'General',
    'load':'localStorage.setItem(\'project\', "");loadGeneralSum();',
    'submit':'alert ("submit"); return false;',
    'connect':true,
    'objects':[
                {'type':'fieldset',
                 'id':'fieldsetGeneralSum',
                 'title':'General Summary',
                 'class': 'wrapSection',
                 'objects':[
                                {
                                 'type':'div',
                                 'title':'Name',
                                 'class':'wrapDRS floatLeft'                                                         
                                },
                                {
                                 'type':'div',
                                 'id':'Name_SUM',
                                 'class':'wrapDRS floatRight'                                                         
                                },
                                
                                {
                                 'type':'div',
                                 'class': 'clearM'
                                },
                                
                                {
                                 'type':'div',
                                 'title':'Mode',
                                 'class':'wrapDRS floatLeft'                                                         
                                },
                                {
                                 'type':'div',
                                 'id':'Mode_SUM',
                                 'class':'wrapDRS floatRight'                                                         
                                },
                                
                                {
                                 'type':'div',
                                 'class': 'clearM'
                                },
                                
                                {
                                 'type':'div',
                                 'title':'Capacity',
                                 'class':'wrapDRS floatLeft'                                                         
                                },
                                {
                                 'type':'div',
                                 'id':'Capacity_SUM',
                                 'class':'wrapDRS floatRight'                                                         
                                },
                                
                                {
                                 'type':'div',
                                 'class': 'clearM'
                                },
                           ]
                 }
              ]
},
    //Settings
    {   'id':'generalsettings',
        'title':'General-> Settings',
        'load':'localStorage.setItem(\'project\', "");loadGeneralSettings(); dropFile(\'#keyFileInput\');',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[
                    {'type':'fieldset',
                     'id':'fieldsetGeneralSettingsMode',
                     'title':'Image Mode',
                     'class': 'wrapSection',
                     'objects':[
                                
                                    {'id':'generalSettingsDevelopMacAddressText',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    'objects':[
                                               {
                                                   'type':'div',
                                                   'class': 'fieldName',
                                                   'title':' Original Mac Address'
                                               },
                                               {
                                                   'id':'DevMA1',
                                                   'class':'',
                                                   'type':'text',
                                                   'value':'',
                                                   'change':'changeDevelopeMacAddress();'
                                                   
                                               }]
                                    },
                                    {
                                        'id':'generalSettingsModeDiv',
                                        'type':'div',
                                        'class': 'wrapDRS floatLeft',
                                        'objects':[
                                                    {
                                                        'type':'div',
                                                        'class': 'fieldName',
                                                        'title':' &nbsp;'
                                                    },
                                                    {
                                                     'id':'ModeSelect',
                                                     'class':'',
                                                     'type':'select',
                                                     'values': [{'value':1,'text':'Production'},{'value':2,'text':'Development'}],
                                                     'change':'changeMode();'
                                                    }
                                                  ]				
                                    }
                                ]
                                },
                   
                    {'type':'fieldset',
                     'id':'fieldsetGeneralSettingsCapacity',
                     'title':'Capacity',
                     'class': 'wrapSection',
                     'objects':[
                                {
                                'id':'generalSettingsCapacitySelectDiv',
                                'type':'div',
                                'class': 'wrapDRS floatLeft',
                                'objects':[
                                            {
                                                'type':'div',
                                                'class': 'fieldName',
                                                'title':'&nbsp;'
                                            },
                                            {
                                                'id':'capacitySelect',
                                                'class':'',
                                                'type':'select',
                                                'values': [{'value':'1048576','text':'1M BYTE'},{'value':'2097152','text':'2M BYTE'}, {'value':'4194304','text':'4M BYTE'},{'value':'8388608','text':'8M BYTE'},{'value':'16777216','text':'16M BYTE'}],
                                                'change':'changeCapacity();'
                                            }
                                          ]				
                                },
                                {
                                'id':'generalSettingsCapacityBtnDiv',
                                'type':'div',
                                'class': 'wrapDRS floatRight',
                                'objects':[
                                            {
                                                'id':'checkDeviceSize',
                                                'type':'div',
                                                //'class': 'regButton btnDisabled',
                                                'class': 'regButton floatRight btnDisabled',
                                                'tooltip':'Check device size',
                                                //'title':'<i class="fa fa-arrows-h fa-1x"></i> Check device size',
                                                //'title':'&nbsp; Check device size &nbsp; &nbsp; &nbsp; ',
                                                'title':'Check device size',
                                                //'click':'checkDeviceSizeClicked();'
                                            }
                                            ]
                                }            
                                ]
                    },
                    {'type':'fieldset',
                     'id':'fieldsetGeneralSettingsCapacity3200Security',
                     'title':'',
                     'class': 'wrapSection',
                     'objects':[
                               /* {
                                'id':'generalSettingsCapacityDiv',
                                'type':'div',
                                'class': 'wrapDRS floatLeft',
                                'objects':[
                                            {
                                                'type':'div',
                                                'class': 'fieldName',
                                                'title':'Capacity'
                                            },
                                            {
                                                'id':'capacitySelect',
                                                'class':'',
                                                'type':'select',
                                                'values': [{'value':'1048576','text':'1M BYTE'},{'value':'2097152','text':'2M BYTE'}, {'value':'4194304','text':'4M BYTE'},{'value':'8388608','text':'8M BYTE'},{'value':'16777216','text':'16M BYTE'}],
                                                'change':'changeCapacity();'
                                            }
                                          ]				
                                },*/
                    
                                {
                                    'id':'generalSettingsSecureDeviceDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'Secured Device'
                                                },
                                                {
                                                    'id':'3200Select',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':'2','text':'True'},{'value':'1','text':'False'}],
                                                    'change':'changeSecureDevice();'
                                                }
                                              ]				
                                },
                                
                                
                                {
                                    'id':'generalSettingsProductionDeviceDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    //'title':'Production NWP'
                                                    'title':'Target Device'
                                                },
                                                {
                                                    'id':'ProductionNWP',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':'1','text':'Production Device'},{'value':'0','text':'Preproduction Device'}],
                                                    'change':'changeProductionDevice();'
                                                }
                                              ]				
                                },
                                {
                                 'type':'div',
                                 'class': 'clearM'
                                },
                                {
                                    'id':'generalSettingsFactorySOPDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'Return To Factory Image SOP'
                                                },
                                                {
                                                    'id':'IGNORE_FORCE_AP',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':0,'text':'Enable'},{'value':1,'text':'Disable'}],
                                                    'change':'changeFactorySOP();'
                                                }
                                              ]				
                                },
                                {
                                    'id':'generalSettingsFactoryConfigDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    //'title':'Enable Return To Factory Configuration'
                                                    'title':'Return To Factory Configuration'
                                                },
                                                {
                                                    'id':'FACTORY',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':'defaults_and_image','text':'Defaults and Image'},{'value':'none','text':'Disable'}, {'value':'defaults_only','text':'Defaults Only'}],
                                                    'change':'changeFactoryConfig();'
                                                }
                                              ]				
                                },
                                {
                                 'type':'div',
                                 'class': 'clearM'
                                },
                                
                                {
                                    'id':'generalSettingsMacAddress',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                                {'id':'USE_DEF_MAC',
                                                  'class':'',
                                                  'type':'checkbox',
                                                  'label': 'bot 2',
                                                  'values': [{'value':1,'text':'Use device MAC Address'}]
                                                },
                                                {'id':'generalSettingsMacAddressText',
                                                'type':'div',
                                                'class': 'wrapDRS floatRight',
                                                'objects':[
                                                            {
                                                                'id':'MA1',
                                                                'class':'',
                                                                'type':'text',
                                                                'value':'11:22:33:44:55:66'
                                                                
                                                            }]
                                                },
                                               ]
                                 },
                                ]
                    },
                    {'type':'fieldset',
                     'id':'fieldsetKeySourceFile',
                     'title':'Key Source File Name',
                     'class': 'wrapSection',
                     'objects':[
                                    {'id':'USE_KEY',
                                      'class':'',
                                      'type':'checkbox',
                                      'label': 'bot 2',
                                      'values': [{'value':1,'text':'Use Encryption Key'}]

                                    },
                                    {
                                     'type':'div',
                                     'class': 'clearM'
                                    },
                                    /*{
                                        'id':'KEY_FILE',
                                        'type':'file',
                                        'change':'postFile(\'KEY_FILE\', \'uploadProjectKSFile\', \'3\');',
                                        'class': ''
                                        //'class': 'regButton'
                                    }*/
                                    {
                                        'id':'fieldsetKeySourceFileBrowse',
                                        'type':'div',
                                        'class': 'wrapDRS floatLeft',
                                        'objects':[
                                    
                                                    /*{
                                                    'id':'keySourceStubb1',
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'&nbsp;'
                                                    },*/
                                                    {
                                                    'id':'keyFileInput',
                                                    'type':'text',
                                                    //'class':'floatLeft keyWidth'
                                                    'class':'floatLeft'
                                                    },
                                                    {
                                                    'id':'browseKeyFile',
                                                    'type':'div',
                                                    //'class': 'regButton rbGray mtop0 mLeftS',
                                                    'class': 'regButton mtop0 mLeftS',
                                                    'title':'Browse',
                                                    //'click':'openKeySourceBrowse();'
                                                    'click':'$(\'#KEY_FILE\').click();'
                                                    }, 
                                                    {
                                                        //'id':'browseKeySourceFile',
                                                        'id':'KEY_FILE',
                                                        'type':'file',
                                                        'class':'hideFile',
                                                        'change':'postFile(\'KEY_FILE\', \'uploadProjectKSFile\', \'3\');',
                                                    }/*,
                                                    {
                                                        'type':'div',
                                                        'class': 'clear'
                                                    }*/
                                                ]
                                    }
                               ]
                    }/*,
                    
                    {
                        'id':'ConnectBtn',
                        'type':'div',
                        'class': 'regButton',
                        'title':'Connect',
                        'click':'connectDeviceAPI()'
                    }*/
                     
                  ]
    },
//System Settings
{   'id':'systemsettings',
    'title':'System Settings',
    'load':'localStorage.setItem(\'project\', "");loadDevice();loadDeviceRoleSettingsSum();',
    'submit':'alert ("submit"); return false;',
    'connect':true,
    'objects':[
                 {'type'    :'fieldset',
                  'id'      :'fieldsetSystemSettingsDeviceRadioSettingsSum',
                  'title'   :'<b>Device</b> Radio Settings',
                  'class'   : 'wrapSection',
                  'objects' :[
                      
                                    {
                                     'type':'div',
                                     'title':'Station Tx Power Level',
                                     'class':'wrapDRS floatLeft'                                                         
                                    },
                                    {
                                     'type':'div',
                                     'id':'STA_TX_PL_SUM',
                                     'class':'wrapDRS floatRight'                                                         
                                    },

                                    {
                                     'type':'div',
                                     'class': 'clearM'
                                    },

                                    {
                                     'type':'div',
                                     'title':'Access Point Tx Power Level',
                                     'class':'wrapDRS floatLeft'                                                         
                                    },
                                    {
                                     'type':'div',
                                     'id':'AP_TX_PL_SUM',
                                     'class':'wrapDRS floatRight'                                                         
                                    },
                                    {
                                     'type':'div',
                                     'class': 'clearM'
                                    },

                                    {
                                     'type':'div',
                                     'title':'PHY Calibration Mode',
                                     'class':'wrapDRS floatLeft'                                                         
                                    },
                                    {
                                     'type':'div',
                                     'id':'PHY_CAL_MODE_SUM',
                                     'class':'wrapDRS floatRight'                                                         
                                    },
                                    {
                                     'type':'div',
                                     'class': 'clearM'
                                    },

                                    {
                                     'type':'div',
                                     'title':'Phy Tx Power',
                                     'class':'wrapDRS floatLeft'                                                         
                                    },
                                    {
                                     'type':'div',
                                     'id':'PHY_DEVICE_HIGH_TX_POWER_SUM',
                                     'class':'wrapDRS floatRight'                                                         
                                    }
                         
                  ]
                 },
                 {'type':'fieldset',
                  'id':'fieldsetSystemSettingsDeviceRoleSettingsGeneralSum',
                  'title':'<b>Device Role</b>General Settings',
                  'class': 'wrapSection',
                  'objects':[    {   'type':'fieldset',
                                     'id':'fieldsetDeviceRoleSettingsGeneralModeSum',
                                     'title':'Device Mode',
                                     'class': 'wrapSection',
                                     'objects':[
                                                {
                                                 'type':'div',
                                                 'title':'Start Role',
                                                 'class':'wrapDRS floatLeft'                                                         
                                                },
                                                {
                                                 'type':'div',
                                                 'id':'START_ROLE_SELECT_SUM',
                                                 'class':'wrapDRS floatRight'                                                         
                                                },

                                                {
                                                 'type':'div',
                                                 'class': 'clearM'
                                                },

                                                {
                                                 'type':'div',
                                                 'title':'Country Code',
                                                 'class':'wrapDRS floatLeft'                                                         
                                                },
                                                {
                                                 'type':'div',
                                                 'id':'COUNTRY_CODE_SUM',
                                                 'class':'wrapDRS floatRight'                                                         
                                                },
                                               ]
                                }

                           ]
                  }
    ]
}, 
    //Device 
    {   'id':'systemsettingsdevice',
        'title':'System Settings-> Device',
        'load':'localStorage.setItem(\'project\', ""); loadDevice();',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[
                    {'type':'fieldset',
                         'id':'fieldsetDeviceRadioSettingsSum',
                         'title':'Radio Settings',
                         'class': 'wrapSection',
                         'objects':[

                                        {
                                         'type':'div',
                                         'title':'Station Tx Power Level',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'STA_TX_PL_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },
                                                     
                                        {
                                         'type':'div',
                                         'title':'Access Point Tx Power Level',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'AP_TX_PL_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },
                                                     
                                        {
                                         'type':'div',
                                         'title':'PHY Calibration Mode',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'PHY_CAL_MODE_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },
                                                     
                                        {
                                         'type':'div',
                                         'title':'Phy Tx Power',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'PHY_DEVICE_HIGH_TX_POWER_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        }
                         
                                   ]
                    },
                    /*{'type':'fieldset',
                         'id':'fieldsetDevicePoliciesSum',
                         'title':'Policies',
                         'class': 'wrapSection',
                         'objects':[]
                    }*/
        ]
    },
        //Radio Settings
        {   'id':'systemsettingsdeviceRadioSettings',
            'title':'System Settings-> Device -> Radio Settings',
            'load':'localStorage.setItem(\'project\', ""); loadRadioSettings();',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[
                        {'type':'fieldset',
                         'id':'fieldsetDeviceRadioSettings',
                         'title':'RF Configuration',
                         'class': 'wrapSection',
                         'objects':[
                                     {   'id':'staTxPowLevel',
                                         'type':'div',
                                         'class': 'wrapDRS floatLeft',
                                         'objects':[
                                                     
                                                     {
                                                         'type':'div',
                                                         'class': 'fieldName',
                                                         'title':'Station Tx Power Level (dBm)'
                                                     },                                  
                                                     {
                                                         'id':'STA_TX_PL',
                                                         'class':'',
                                                         'type':'number',
                                                         'max':15,
                                                         'min':0,
                                                         'value':0,
                                                         //'change':'changeStationTxPowerLevel();'
                                                         
                                                     },
                                                     {
                                                         'type':'div',
                                                         'class': 'clearS'
                                                     },
                                                     {
                                                         'type':'div',
                                                         'class': 'descSmallText',
                                                         'title':'* 0- Max Tx Power, 15- Min Tx Power'
                                                     }]
                                     },
                                     {   'id':'apTxPowLevel',
                                         'type':'div',
                                         'class': 'wrapDRS floatRight',
                                         'objects':[
                                                     
                                                     {
                                                         'type':'div',
                                                         'class': 'fieldName',
                                                         'title':'Access Point Tx Power Level (dBm)&nbsp;'
                                                     },
                                                     
                                                     {
                                                         'id':'AP_TX_PL',
                                                         'class':'',
                                                         'type':'number',
                                                         'max':15,
                                                         'min':0,
                                                         'value':0
                                                         
                                                     },
                                                     {
                                                         'type':'div',
                                                         'class': 'clearS'
                                                     },
                                                     {
                                                         'type':'div',
                                                         'class': 'descSmallText',
                                                         'title':'* 0- Max Tx Power, 15- Min Tx Power'
                                                     }]
                                     },
                                     {
                                         'type':'div',
                                         'class': 'clearM'
                                     },
                                     
                                     {
                                        'id':'phyCalibModeDiv',
                                        'type':'div',
                                        'class': 'wrapDRS floatLeft',
                                        //'class': 'wrapDRS',
                                        'objects':[
                                                    {
                                                        'type':'div',
                                                        'class': 'fieldName',
                                                        'title':'PHY Calibration Mode'
                                                    },
                                                    {
                                                        'id':'PHY_CAL_MODE',
                                                        'class':'',
                                                        'type':'select',
                                                        'values': [{'value':0,'text':'Normal'},{'value':1,'text':'Trigger'},{'value':2,'text':'Onetime'} ]
                                                    }
                                                  ]				
                                    },
                                    {
                                    'id':'phyDeviceHihgTxPwdiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    //'class': 'wrapDRS',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'PHY Tx Power'
                                                },
                                                {
                                                    'id':'PHY_DEVICE_HIGH_TX_POWER',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':0,'text':'Normal'},{'value':1,'text':'High'}]
                                                }
                                              ]				
                                    },
                                    {
                                        'type':'div',
                                        'class': 'clearM'
                                    }/*,
                                    {
                                        'id':'addCalibBtn',
                                        'type':'div',
                                        'class': 'regButton',
                                        'title':'Update',
                                        'click':'addRadioSettings()'
                                    } */
                                     
                                   ]
                        }
                      ]
        },
        //Policies
        {   'id':'systemsettingsdevicepolicies',
            'title':'System Settings-> Device-> Policies',
            'load':'localStorage.setItem(\'project\', "");',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[]
        },
    //Device Role Settings
    {   'id':'devicerolesettings',
        'title':'System Settings-> Device Role Settings',
        'load':'localStorage.setItem(\'project\', ""); loadDeviceRoleSettingsSum()',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[
                    {   'type':'fieldset',
                         'id':'fieldsetDeviceRoleSettingsGeneralSum',
                         'title':'General Settings',
                         'class': 'wrapSection',
                         'objects':[    {   'type':'fieldset',
                                             'id':'fieldsetDeviceRoleSettingsGeneralModeSum',
                                             'title':'Device Mode',
                                             'class': 'wrapSection',
                                             'objects':[
                                                        {
                                                         'type':'div',
                                                         'title':'Start Role',
                                                         'class':'wrapDRS floatLeft'                                                         
                                                        },
                                                        {
                                                         'type':'div',
                                                         'id':'START_ROLE_SELECT_SUM',
                                                         'class':'wrapDRS floatRight'                                                         
                                                        },
                                                        
                                                        {
                                                         'type':'div',
                                                         'class': 'clearM'
                                                        },
                                                        
                                                        {
                                                         'type':'div',
                                                         'title':'Country Code',
                                                         'class':'wrapDRS floatLeft'                                                         
                                                        },
                                                        {
                                                         'type':'div',
                                                         'id':'COUNTRY_CODE_SUM',
                                                         'class':'wrapDRS floatRight'                                                         
                                                        },
                                                       ]
                                        }
                                    
                                   ]
                    }
                  ]
    }, 
        //General Settings
        {'id':'devicerolesettingsgeneralsettings',
		'title':'Role Settings > General Settings',
		'load':'localStorage.setItem(\'project\', ""); loadDeviceRoleGeneralSettings();',
		'submit':'alert ("submit"); return false;',
		'connect':true,
		'objects':[ {'type':'fieldset',
					'id':'fieldsetDeviceMode',
					'title':'Device Mode',
					'class': 'wrapSection',
					'objects':[
                                    {
                                    'id':'SecurityTypeDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    //'class': 'wrapDRS',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'Start Role'
                                                },
                                                {
                                                    'id':'StartRoleSelect',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':2,'text':'Access Point'},{'value':3,'text':'P2P'},{'value':0,'text':'Station'} ]
                                                }
                                              ]				
                                    },
                                    {
                                    'id':'CountryCodeDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'Country Code'
                                                },
                                                {
                                                    'id':'CountryCodeSelect',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':0,'text':'EU'},{'value':1,'text':'US'},{'value':2,'text':'JP'} ]
                                                }
                                              ]				
                                    }
						      ], 
					},
                    {'type':'fieldset',
					'id':'fieldsetRoleSettingsGeneralSettingsGeneral',
					'title':'General',
					//'class': 'wrapSection mbot0',
					'class': 'wrapSection',
					//'class': '',
					'objects':[
                                
                                {
                                    'id':'deviceName',
                                    'title':'Device Name',
                                    'type':'div',
                                    'class': 'fieldName',
                                },
                                {
                                    'id':'deviceNameText',
                                    'class':'fieldName',
                                    'type':'text'
                                },
                                {
                                    'type':'div',
                                    'class': 'clearM'
                                }
						]
					},
                    {'type':'fieldset',
                     'id':'fieldsetConnectPolicy',
                     'title':'Connection Policy',
                     'class': 'wrapSection',
                     'objects':[
                                    {
                                    'id':'conPolAutoStart',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                                {
                                                    'type' : 'div',
                                                    'class': 'fieldName',
                                                    'title': 'Auto Connect'
                                                },
                                                {
                                                    'id':'conPolAutoStartSelect',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':'0','text':'Disable'},{'value':'1','text':'Enable'}]
                                                }
                                              ]				
                                    },
                                    {
                                    'id':'conPolFastConnect',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    'objects':[
                                                {
                                                    'type' : 'div',
                                                    'class': 'fieldName',
                                                    'title': 'Fast Connect'
                                                },
                                                {
                                                    'id':'conPolFastConnectSelect',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':'0','text':'Disable'},{'value':'1','text':'Enable'}]
                                                }
                                              ]				
                                    },
                                    {
                                        'type':'div',
                                        'class': 'clearM'
                                    },
                                    {
                                    'id':'conAnyWFDirect',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                                {
                                                    'type' : 'div',
                                                    'class': 'fieldName',
                                                    'title': 'Any Wi-Fi® Direct'
                                                },
                                                {
                                                    'id':'conAnyWFDirectSelect',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':'0','text':'Disable'},{'value':'1','text':'Enable'}]
                                                }
                                              ]				
                                    },
                                    {
                                    'id':'conPolAutoProvisioning',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    'objects':[
                                                {
                                                    'type' : 'div',
                                                    'class': 'fieldName',
                                                    'title': 'Auto Provisioning'
                                                },
                                                {
                                                    'id':'conPolAutoProvisioningSelect',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':'0','text':'Disable'},{'value':'1','text':'Enable'}],
                                                    'change':'changeAutoProvisioningSelect();'
                                                }
                                              ]				
                                    }
                                    
                              ]
                    },
                    {'type':'fieldset',
                        'id':'fieldsetProvisioning',
                        'title':'Auto Provisioning',
                        'class': 'wrapSection',
                        'objects':[
                                    
                                    {
                                    'id':'AutoProvExternalConfirm',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                                {
                                                    'type' : 'div',
                                                    'class': 'fieldName',
                                                    'title': 'Auto Provisioning External Confirmation'
                                                },
                                                {
                                                    'id':'AutoProvExternalConfSelect',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [{'value':0,'text':'Disable'},{'value':1,'text':'Enable'}]
                                                }
                                              ]				
                                    }
                                    ]
					},
			      ]
		},
        //STA/P2P Device
        {   'id':'devicerolesettingsstadevice',
            'title':'System Settings -> Device Role Settings-> STA/Wi-Fi® Direct Device',
            'load':'localStorage.setItem(\'project\', ""); loadSTADirectDeviceSum();',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[
                        /*{   'type':'fieldset',
                            'id':'fieldsetSTADirectDeviceProfileSum',
                            'title':'Profiles',
                            'class': 'wrapSection',
                            'objects':[]
                        },*/
                        {
                            'type':'div',
                            'class': 'clearM'
                        },
                        {   'type':'fieldset',
                            'id':'fieldsetSTADirectDeviceNWSettingsSum',
                            'title':'Network Settings',
                            'class': 'wrapSection',
                            'objects':[
                                        {
                                         'type':'div',
                                         'title':'DHCP Client Enable',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'DHCP_CLIENT_ENABLE_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },
                                        
                                        {
                                         'type':'div',
                                         'title':'IP Address',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'STA_IP_ADDRESS_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },
                                        
                                        {
                                         'type':'div',
                                         'title':'Subnet Mask',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'STA_SUBNET_MASK_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },
                                        
                                        {
                                         'type':'div',
                                         'title':'Default Gateway',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'STA_DEFAULT_GW_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },
                                        {
                                         'type':'div',
                                         'title':'DNS Server',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'STA_DNS_SRVR_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        }
                                      ]
                        }
                      ]
        }, 
            //Profiles
            {'id':'devicerolesettingsstap2p',
                'title':'Device Role Settings > STA/P2P Device',
                'load':'localStorage.setItem(\'project\', ""); loadDeviceRoleSettingsSTA();',
                'submit':'alert ("submit"); return false;',
                'connect':true,
                'objects':[
                    {
                        'type':'fieldset',
                        'id':'fieldsetAppProfile',
                        'title':'Add Profile',
                        'class': 'wrapSection',
                        'objects':[
                                {
                                    'id':'SSIDDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                        {
                                            'type':'div',
                                            'class': 'fieldName',
                                            'title':'SSID'
                                        },
                                        {
                                            'id':'SSIDText',
                                            'class':'',
                                            'type':'text'
                                            
                                        }
                                    ]
                                    
                                },
                                {
                                    'id':'SecurityDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    'objects':[
                                        {
                                            'type':'div',
                                            'class': 'fieldName',
                                            'title':'Security Key',
											'tooltip':'Security key info'
                                        },
                                        {
                                            'id':'SecurityText',
                                            'class':'',
                                            'type':'text'
                                            
                                        }
                                    ]
                                    
                                },
                                {
                                    'type':'div',
                                    'class': 'clearM'
                                },
                                {
                                    'id':'SecurityTypeDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                        {
                                            'type':'div',
                                            'class': 'fieldName',
                                            'title':'Security Type'
                                        },
                                        {
                                            'id':'SecurityTypeSelect',
                                            'class':'',
                                            'type':'select',
                                            'values': [{'value':'Open','text':'Open'},{'value':'Other','text':'Other'}]
                                        }
                                    ]								
                                },
                                {
                                    'id':'ProfilePriorityDiv',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight noMargin',
                                    'objects':[
                                        {
                                            'type':'div',
                                            'class': 'fieldName',
                                            'title':'Profile Priority'
                                        },
                                        {
                                            'id':'ProfilePriorityText',
                                            'class':'sMargin',
                                            'type':'number',
                                            'max':8,
                                            'min':0,
                                            'value':0
                                            
                                            
                                        },
                                        {
                                            'type':'div',
                                            'class': 'descSmallText',
                                            'title':'* Value between 1- 8 (8 = highest)'
                                        }
                                    ]								
                                },
                                {
                                    'type':'div',
                                    'class': 'clear'
                                },
                                {
                                    'id':'addProfileButtom',
                                    'type':'div',
                                    'class': 'regButton',
                                    'title':'Add Profile',
                                    'click':'addProfileClicked()'
                                }
                            ]
                    },
                    {
                        'type':'fieldset',
                        'id':'ProfileListDiv',
                        'title':'Profiles List',
                        'class': 'wrapSection mbot0"',
                        'objects':[
                            {
                                'id':'ProfileListDetailsDiv',
                                'type':'div',
                                'class': '',
                                'objects':[
                                    {
                                        'id':'listNotes',
                                        'type':'div',
                                        'class': 'pLnote',
                                        'title':'No Profiles Created Yet...'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'type':'div',
                        'class': 'mtop75'
                    }
                ]
            },
            //Network Settings
            {'id':'devicerolesettingsstap2pnetworksettings',
            'title':'Station & Wi-Fi® Direct Client Configuration',
            'load':'localStorage.setItem(\'project\', ""); loadSTANWSettings(); enableDisableSTAP2P();',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[
                        {   
                        'type':'fieldset',
                        'id':'fieldsetNetworkSettings',
                        'title':'Network Settings',
                        'class': 'wrapSection',
                        'objects':[
                                    {
                                        'id':'stap2pDHCPEnable',
                                        'class':'c1',
                                        'type':'checkbox',
                                        'label': 'bot 2',
                                        'values': [{'value':1,'text':'DHCP Client Enable'}],
                                        'checked':1,
                                    },
                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    },
                                    {'id':'stap2pipaddr',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': '',
                                                    'title':'IP Address'
                                                },
                                                {
                                                    'id':'staipAddrText',
                                                    'class':'',
                                                    'type':'text',
                                                    'value':'192.168.1.100'
                                                    
                                                }]
                                    },
                                    {
                                        'id':'stap2pipsubnet',
                                        'type':'div',
                                        'class': 'wrapDRS floatRight',
                                        'objects':[
                                                    {
                                                        'type':'div',
                                                        'class': '',
                                                        'title':'Subnet Mask'
                                                    },
                                                    {
                                                        'id':'stasubnetMaskText',
                                                        'class':'',
                                                        'type':'text',
                                                        'value':'255.255.255.0'
                                                        
                                                    }
                                                ]
                                    
                                    },
                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    },
                                    {
                                        'id':'stap2pdefaultgw',
                                        'type':'div',
                                        'class': 'wrapDRS floatLeft',
                                        //'class': '',
                                        'objects':[
                                                    {
                                                        'type':'div',
                                                        'class': '',
                                                        'title':'Default Gateway'
                                                    },
                                                    {
                                                        'id':'stadgwText',
                                                        'class':'',
                                                        'type':'text',
                                                        'value':'192.168.1.31'
                                                        
                                                    }]
                                    },
                                    {
                                        'id':'stap2pipdns',
                                        'type':'div',
                                        'class': 'wrapDRS floatRight',
                                        //'class': '',
                                        'objects':[{
                                                        'type':'div',
                                                        'class': '',
                                                        'title':'DNS Server'
                                                    },
                                                    {
                                                        'id':'stadnsText',
                                                        'class':'',
                                                        'type':'text',
                                                        'value':'192.168.1.31'
                                                        
                                                    }]
                                    
                                    },
                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    }/*,
                                    {
                                        'id':'addSTANWSettingsBtn',
                                        'type':'div',
                                        'class': 'regButton',
                                        'title':'Update',
                                        'click':'addSTANWSettings()'
                                    } */
                                    ]
                        }]
            },
        //AP/P2P Go
        {   'id':'devicerolesettingsapdevice',
            'title':'System Settings -> Device Role Settings-> AP/Wi-Fi® Direct GO',
            'load':'localStorage.setItem(\'project\', "");loadAPDirectDeviceSum();',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[
                        {   'type':'fieldset',
                            'id':'fieldsetSTADirectDeviceNWSettingsSum',
                            'title':'Network Settings',
                            'class': 'wrapSection',
                            'objects':[
                                        {
                                         'type':'div',
                                         'title':'IP Address',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'AP_IP_ADDRESS_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },
                                                                               
                                        {
                                         'type':'div',
                                         'title':'Default Gateway',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'AP_DEFAULT_GW_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },
                                        {
                                         'type':'div',
                                         'title':'DNS Server',
                                         'class':'wrapDRS floatLeft'                                                         
                                        },
                                        {
                                         'type':'div',
                                         'id':'AP_DNS_SRVR_SUM',
                                         'class':'wrapDRS floatRight'                                                         
                                        },
                                        
                                        {
                                         'type':'div',
                                         'class': 'clearM'
                                        },


                                                        {
                                                         'type':'div',
                                                         'title':'DHCP Start Address',
                                                         'class':'wrapDRS floatLeft'                                                         
                                                        },
                                                        {
                                                         'type':'div',
                                                         'id':'apDhcpStartAddressTextSum',
                                                         'class':'wrapDRS floatRight'                                                         
                                                        },
                                                        {
                                                         'type':'div',
                                                         'class': 'clearM'
                                                        },
                                                        {
                                                         'type':'div',
                                                         'title':'DHCP Last Address',
                                                         'class':'wrapDRS floatLeft'                                                         
                                                        },
                                                        {
                                                         'type':'div',
                                                         'id':'apDhcpLastAddressTextSum',
                                                         'class':'wrapDRS floatRight'                                                         
                                                        },
                                                        
                                                        {
                                                         'type':'div',
                                                         'class': 'clearM'
                                                        },
                                                        {
                                                         'type':'div',
                                                         'title':'DHCP Lease Time',
                                                         'class':'wrapDRS floatLeft'                                                         
                                                        },
                                                        {
                                                         'type':'div',
                                                         'id':'apDhcpLeaseTimeSum',
                                                         'class':'wrapDRS floatRight'                                                         
                                                        },
                                                        
                                                        {
                                                         'type':'div',
                                                         'class': 'clearM'
                                                        }

                                    
                                      ]
                        },
                        {
                            'type':'div',
                            'class': 'clearM'
                        },
                        /*{   'type':'fieldset',
                            'id':'fieldsetAPDirectDeviceProfileSum',
                            'title':'Black List',
                            'class': 'wrapSection',
                            'objects':[]
                        }*/

                      ]
        },    
            //WLan Settings
            {'id':'devicerolesettingsapp2pwlansettings',
            'title':'AP & Wi-Fi® Direct Group Owner WLAN Configuration',
            'load':'localStorage.setItem(\'project\', "");loadAPWLanSettings()',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[
                        {   
                        'type':'fieldset',
                        'id':'fieldsetAPWlanSettings',
                        'title':'AP & Wi-Fi® Direct GO WLAN Settings',
                        'class': 'wrapSection',
                        'objects':[ 
                                    {'id':'app2pssid',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'SSID'
                                                },
                                                {
                                                    'id':'apSSIDText',
                                                    'class':'fieldName',
                                                    'type':'text'/*,
                                                    'value':''/*,
                                                    'change':'changeAPStaticIP(e);'*/
                                                    
                                                }   
                                                ]
                                    },
                                    {'id':'app2maxStations',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'Max Stations'
                                                },
                                                {
                                                    'id':'apMaxStaNum',
                                                    'class':'fieldName',
                                                    'type':'number',
                                                    'max':4,
                                                    'min':1,
                                                    'value':1/*
                                                    'change':'changeAPStaticIP(e);'*/
                                                    
                                                }]
                                    },
                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    },
                                    
                                    {'id':'app2pssidhidden',
                                     'type':'div',
                                     'class': 'wrapDRS floatLeft',
                                     'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'Hidden SSID'
                                                },
                                                {
                                                    'id':'hiddenSSIDSelect',
                                                    'class':'',
                                                    'type':'select',
                                                    //'values': [{'value':'0','text':'Disabled'},{'value':'1','text':'Empty'},{'value':'2','text':'Clear'}],
                                                    'values': [{'value':'0','text':'Disabled'},{'value':'1','text':'Enabled'}],
                                                    'change':'changeHiddenSSID();'
                                                }
                                              ]				
                                    },
                                    {'id':'apSecurity',
                                     'type':'div',
                                     'class': 'wrapDRS floatRight',
                                     'objects':[    
                                                    {
                                                        'type':'div',
                                                        'class': 'fieldName',
                                                        'title':'Security'
                                                    },
                                                    {
                                                        'id':'apSecuritySelect',
                                                        'class':'',
                                                        'type':'select',
                                                        'values': [{'value':'0','text':'Open'},{'value':'1','text':'WEP'},{'value':'2','text':'WPAv2'}]/*,
                                                        'change':'changeHiddenSSID();'*/
                                                    }
                                                ]
                                    },
                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    },
                                    {'id':'app2pchannel',
                                     'type':'div',
                                     'class': 'wrapDRS floatLeft',
                                     'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'Channel'
                                                },
                                                /*{
                                                    'id':'channelSelect',
                                                    'class':'',
                                                    'type':'select',
                                                    'values': [ {'value':'1','text':'1'},
                                                                {'value':'2','text':'2'},
                                                                {'value':'3','text':'3'},
                                                                {'value':'4','text':'4'},
                                                                {'value':'5','text':'5'},
                                                                {'value':'6','text':'6'},
                                                                {'value':'7','text':'7'},
                                                                {'value':'8','text':'8'},
                                                                {'value':'9','text':'9'},
                                                                {'value':'10','text':'10'},
                                                                {'value':'11','text':'11'},
                                                                {'value':'12','text':'12'},
                                                                {'value':'13','text':'13'},
                                                                {'value':'14','text':'14'}],
                                                    'change':'changeChannel();'
                                                }*/
                                                {
                                                         'id':'apChannelNum',
                                                         'class':'fieldName',
                                                         'type':'number',
                                                         'max':13,
                                                         'min':1,
                                                         'value':1
                                                         
                                                },
                                              ]				
                                    },
                                    {'id':'app2ppw',
                                    'type':'div',
                                    'class': 'wrapDRS floatRight',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': 'fieldName',
                                                    'title':'Password',
                                                    'tooltip':'Wi-Fi® password in AP role.For WEP, it is either 5 bytes or 13 bytes in ASCII format.For WPA it is 8-63 bytes'
                                                },
                                                {
                                                    'id':'apPWText',
                                                    'class':'wrapDRS',
                                                    //'type':'password',
                                                    'type':'text'
                                                    
                                                }]
                                    },                                    
                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    }
                                  ]
                        }]
            },
            //Network Settings
            {'id':'devicerolesettingsapp2pnetworksettings',
            'title':'AP & Wi-Fi® Direct Group Owner Network Configuration',
            'load':'localStorage.setItem(\'project\', ""); loadAPNWSettings(); enableDisableAPP2P();',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[
                        {   
                        'type':'fieldset',
                        'id':'fieldsetAPNetworkSettings',
                        'title':'AP & Wi-Fi® Direct GO Network Settings',
                        'class': 'wrapSection',
                        'objects':[
                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    },
                                    {'id':'app2pipaddr',
                                    'type':'div',
                                    'class': 'wrapDRS floatLeft',
                                    'objects':[
                                                {
                                                    'type':'div',
                                                    'class': '',
                                                    'title':'IP Address'
                                                },
                                                {
                                                    'id':'apipAddrText',
                                                    'class':'',
                                                    'type':'text',
                                                    'value':'10.123.45.1'/*,
                                                    'change':'changeAPStaticIP(e);'*/
                                                    
                                                }]
                                    },
                                    {'id':'app2pdg',
                                     'type':'div',
                                     'class': 'wrapDRS floatRight',
                                     'objects':[
                                                    {
                                                        'type':'div',
                                                        'class': '',
                                                        'title':'Default Gateway'
                                                    },
                                                    {
                                                        'id':'apdgText',
                                                        'class':'',
                                                        'type':'text',
                                                        'value':'10.123.45.1'
                                                        
                                                    }
                                                ]
                                    
                                    },
                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    },
                                    {'id':'apDNSServer',
                                     'type':'div',
                                     'class': 'wrapDRS floatLeft',
                                     'objects':[
                                                    {
                                                        'type':'div',
                                                        'class': '',
                                                        'title':'DNS Server'
                                                    },
                                                    {
                                                        'id':'apDNSText',
                                                        'class':'',
                                                        'type':'text',
                                                        'value':'10.123.45.1'
                                                        
                                                    }
                                                ]
                                    },
                                                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    },
                                    {
                                        'type':'fieldset',
                                        'id':'fieldsetAPNetworkSettingsDHCPServer',
                                        'title':'DHCP Server',
                                        'class': 'wrapSection',
                                        'objects':[
                                                    {   'id':'app2pdhcpstartaddr',
                                                        'type':'div',
                                                        'class': 'wrapDRS floatLeft',
                                                        'objects':[
                                                                {
                                                                    'type':'div',
                                                                    'class': '',
                                                                    'title':'Start Address'
                                                                },
                                                                {
                                                                    'id':'apDhcpStartAddressText',
                                                                    'class':'',
                                                                    'type':'text',
                                                                    'value':'10.123.45.2'
                                                                    
                                                                }]
                                                    },
                                                    {   'id':'app2pdhcplastaddr',
                                                        'type':'div',
                                                        'class': 'wrapDRS floatRight',
                                                        'objects':[
                                                                    {
                                                                        'type':'div',
                                                                        'class': '',
                                                                        'title':'Last Address'
                                                                    },
                                                                    {
                                                                        'id':'apDhcpLastAddressText',
                                                                        'class':'',
                                                                        'type':'text',
                                                                        'value':'10.123.45.254'
                                                                        
                                                                    },
                                                                ]
                                                    
                                                    },
                                                    {   'id':'app2pdhcpstartaddr',
                                                        'type':'div',
                                                        'class': 'wrapDRS floatLeft',
                                                        'objects':[
                                                                    {
                                                                        'type':'div',
                                                                        'class': 'clearM'
                                                                    },
                                                                    {
                                                                        'type':'div',
                                                                        'class': '',
                                                                        'title':'Lease Time'
                                                                    },
                                                                    
                                                                    {
                                                                        'id':'apDhcpLeaseTimeText',
                                                                        'class':'',
                                                                        'type':'text',
                                                                        'value':'24'
                                                                        
                                                                    },
                                                                    {
                                                                        'type':'div',
                                                                        'class': 'descSmallText',
                                                                        'title':'* hours'
                                                                    }]
                                                    },
                                                    
                                                  ]
                                    
                                    },
                                    {
                                    'type':'div',
                                    'class': 'clearM'
                                    }/*,
                                    {
                                        'id':'addAPNWSettingsBtn',
                                        'type':'div',
                                        'class': 'regButton',
                                        'title':'Update',
                                        'click':'addAPNWSettings()'
                                    } */
                                    ]
                        }]
            },
            //Black List
            {'id':'devicerolesettingsapblacklist',
			'title':'Device Role Settings > AP/P2P - GO',
			'load':'localStorage.setItem(\'project\', ""); loadDeviceRoleSettingsAP();',
			'submit':'alert ("submit"); return false;',
			'connect':true,
			'objects':[
				{
					'type':'fieldset',
					'id':'addAddressDiv',
					'title':'Add Address',
					'class': 'wrapSection',
					'objects':[
						{
							'id':'addressDiv',
							'type':'div',
							'class': 'fieldName',
							'title':'Address'
						},
						{
							'id':'addressText',
							'class':'',
							'type':'text'
						},
						{
							'type':'div',
							'class': 'clear'
						},
						{
							'id':'addAddressButtom',
							'type':'div',
							'class': 'regButton',
							'title':'Add Address',
							'click':'addAddressClicked()'
						}   
					]
				},
				{
					'type':'fieldset',
					'id':'denyListDiv',
					'title':'Deny List',
					'class': 'wrapSection mbot0"',
					'objects':[
						{
							'id':'denyListDetailsDiv',
							'type':'div',
							'class': '',
							'objects':[
								{
									'id':'listNotes',
									'type':'div',
									'class': 'pLnote',
									'title':'No Addresses Added Yet...'
								}
							]
						}
					]
				},
				{
					'type':'div',
					'class': 'mtop75'
				}
				
			]
		},
        //Network Applications
        {   'id':'networkapplications',
			'title':'Network Applications',
			'load':'localStorage.setItem(\'project\', "");loadNetworkApp();',
			'submit':'alert ("submit"); return false;',
			'connect':true,
			'objects':[
                        {'type':'fieldset',
                        'id':'fieldsetNetworkApplicationConfiguration',
                        /*'title':'Configuration',*/
                        'title':'Start Applications',
                        'class': 'wrapSection',
                        'objects':[ {   'type':'fieldset',
                                        'id':'fieldsetStationStartApp',
                                        'title':'Station&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;',
                                        'class': 'wrapDRS floatLeft',
                                        'objects':[
                                                    {   'id':'STA_HTTP_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':1,'text':'HTTP Server'}],
                                                        'checked':1
                                                    },
                                                    /*{   'id':'STA_DHCP_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':2,'text':'DHCP Client'}],
                                                        'checked':0,
                                                    },*/
                                                    {   'id':'STA_MDNS_ID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':4,'text':'MDNS'}],
                                                        'checked':4,
                                                    },
                                                    /*{   'id':'STA_DNS_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':8,'text':'DNS Client'}],
                                                        'checked':0,
                                                    },*/
                                                    {
                                                        'type':'div',
                                                        'class': 'clearM'
                                                    }/*,
                                                    {   'id':'STA_DC_ID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':16,'text':'Device Config'}],
                                                        'checked':0,
                                                    }*/
                                                  ]

                                    },
                                    {   'type':'fieldset',
                                        'id':'fieldsetP2PCLSStartApp',
                                        'title':'Wi-Fi® Direct Client&#8196;&#8196;&#8196;&nbsp;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;',
                                        'class': 'wrapDRS floatRight',

                                        'objects':[
                                                    {   'id':'CLS_HTTP_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':1,'text':'HTTP Server'}],
                                                        'checked':1,
                                                    },
                                                    /*{   'id':'CLS_DHCP_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':2,'text':'DHCP Client'}],
                                                        'checked':0,
                                                    },*/
                                                    {   'id':'CLS_MDNS_ID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':4,'text':'MDNS'}],
                                                        'checked':4,
                                                    },
                                                    /*{   'id':'CLS_DNS_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':8,'text':'DNS Client'}],
                                                        'checked':0,
                                                    },*/
                                                    {
                                                        'type':'div',
                                                        'class': 'clearM'
                                                    }
                                                    /*,
                                                    {   'id':'CLS_DC_ID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':16,'text':'Device Config'}],
                                                        'checked':0,
                                                    }*/
                                                    
                                                  ]

                                    },
                                    {
                                        'type':'div',
                                        'class': 'clearM'
                                    },
                                    {   'type':'fieldset',
                                        'id':'fieldsetAppStartApp',
                                        'title':'Access Point&#8196;&#8196;&#8196;&#8196;&nbsp;&nbsp;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&nbsp;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;',
                                        'class': ' floatLeft',
                                        'objects':[
                                                    {   'id':'AP_HTTP_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':1,'text':'HTTP Server'}],
                                                        'checked':1,
                                                    },
                                                    {   'id':'AP_DHCP_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':2,'text':'DHCP Server'}],
                                                        'checked':2,
                                                    },
                                                    {   'id':'AP_MDNS_ID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':4,'text':'MDNS'}],
                                                        'checked':4,
                                                    },
                                                    {   'id':'AP_DNS_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':8,'text':'DNS Server'}],
                                                        'checked':8,
                                                    }/*,
                                                    {   'id':'AP_DC_ID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':16,'text':'Device Config'}],
                                                        'checked':0,
                                                    }*/
                                                  ]

                                    },
                                    
                                    {   'type':'fieldset',
                                        'id':'fieldsetP2PGOStartApp',
                                        'title':'Wi-Fi® Direct GO&nbsp;&#8196;&#8196;&#8196;&#8196;&#8196;&nbsp;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;&#8196;',
                                        'class': 'wrapDRS floatRight',
                                        'objects':[
                                                    {   'id':'GO_HTTP_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':1,'text':'HTTP Server'}],
                                                        'checked':1,
                                                    },
                                                    {   'id':'GO_DHCP_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':2,'text':'DHCP Server'}],
                                                        'checked':2,
                                                    },
                                                    {   'id':'GO_MDNS_ID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':4,'text':'MDNS'}],
                                                        'checked':4,
                                                    },
                                                    {   'id':'GO_DNS_SID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':8,'text':'DNS Server'}],
                                                        'checked':8,
                                                    }/*,
                                                    {   'id':'GO_DC_ID',
                                                        'class':'c1',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':16,'text':'Device Config'}],
                                                        'checked':0,
                                                    }*/
                                                  ]

                                    },
                                    {
                                        'type':'div',
                                        'class': 'clearM'
                                    }/*,
                                    {
                                        'id':'addNetworkAppBtn',
                                        'type':'div',
                                        'class': 'regButton',
                                        'title':'Update',
                                        'click':'addNetworkApp()'
                                    }*/
                                  ]
                        }
                      ]
		},

//Tools
{'id':'files',
    'title':'Tools',
    'load':'localStorage.setItem(\'project\', "");',
    'submit':'alert ("submit"); return false;',
    'connect':true,
    'objects':[]
},
    {   'id':'toolscreateflashimage',
        'title':'Tools-> Create Flash Image',
        'load':'localStorage.setItem(\'project\', "");',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[
                        {'type':'fieldset',
                         'id':'fieldsettoolscreateflashimagesource',
                         'title':'MCU Image Source File',
                         'class': 'wrapSection',
                         'objects':[
                                        {
                                            'id':'keyImageSourceFileInput',
                                            'type':'text',
                                            'class':'keyWidth floatLeft'
                                        },
                                        {
                                            'id':'browseImageSourceFile',
                                            'type':'div',
                                            'class': 'regButton mtop0 mLeftS',
                                            'title':'Browse',
                                            'click':'$(\'#IMAGE_SOURCE_FILE\').click();'
                                        }, 
                                        {
                                            'id':'IMAGE_SOURCE_FILE',
                                            'type':'file',
                                            'class':'hideFile',
                                            'change':'postFile(\'IMAGE_SOURCE_FILE\', \'uploadProjectCertStoreFile\', \'1\');',
                                        },
                                   ]
                        },
                        {
                            'id':'CreateFlashImageButton',
                            'type':'div',
                            'class': 'regButton floatLeft',
                            'title':'Create Flash Image',
                            'click':'createFlashImage();'
                        }
 ]
    },
    {   'id':'toolssignfile',
        'title':'Tools-> Sign File',
        'load':'localStorage.setItem(\'project\', "");',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[
                        {'type':'fieldset',
                         'id':'fieldsettoolscreateflashimagekey',
                         'title':'Key File',
                         'class': 'wrapSection',
                         'tooltip': 'Key file for signature(Optional)',
                         'objects':[
                                        {
                                            'id':'keyFileInput',
                                            'type':'text',
                                            'class':'keyWidth floatLeft'
                                        },
                                        {
                                            'id':'browseKeyImageSourceFile',
                                            'type':'div',
                                            'class': 'regButton mtop0 mLeftS',
                                            'title':'Browse',
                                            'click':'$(\'#KEY_IMAGE_SOURCE_FILE\').click();'
                                        }, 
                                        {
                                            'id':'KEY_IMAGE_SOURCE_FILE',
                                            'type':'file',
                                            'class':'hideFile',
                                            'change':'postFile(\'KEY_IMAGE_SOURCE_FILE\', \'uploadProjectCertStoreFile\', \'1\');',
                                        },
                                   ]
                        },
                        {
                            'id':'UpdateMCUImage',
                            'type':'div',
                            'class': 'regButton floatRight',
                            'title':'Update Flash Image',
                            'click':'updateMCUFlashImage();'
                        }, 
                    ]
    },
//Files
{   'id':'files',
    'title':'Files',
    'load':'localStorage.setItem(\'project\', "");loadFilesSum();',
    'submit':'alert ("submit"); return false;',
    'connect':true,
    'objects':[
                {   'type':'fieldset',
                    'id':'fieldsetFilesSPSum',
                    'title':'Service Pack',
                    'class': 'wrapSection',
                    'objects':[
                                    {
                                     'type':'div',
                                     'title':'Service Pack File Name',
                                     'class':'wrapDRS floatLeft'                                                         
                                    },
                                    {
                                     'type':'div',
                                     'id':'SP_FILE_SUM',
                                     'class':'wrapDRS floatRight'                                                         
                                    },
                                    
                                    {
                                     'type':'div',
                                     'class': 'clearM'
                                    },

                              ]
                },
                
                {   'type':'fieldset',
                    'id':'fieldsetFilesCSSum',
                    'title':'Certificate Store',
                    'class': 'wrapSection',
                    'objects':[
                                {
                                 'type':'div',
                                 'title':'Certificate Store File Name',
                                 'class':'wrapDRS floatLeft'                                                         
                                },
                                {
                                 'type':'div',
                                 'id':'CS_FILE_SUM',
                                 'class':'wrapDRS floatRight'                                                         
                                },
                                
                                {
                                 'type':'div',
                                 'class': 'clearM'
                                },
                                
                                {
                                 'type':'div',
                                 'title':'Certificate Store Signature File Name',
                                 'class':'wrapDRS floatLeft'                                                         
                                },
                                {
                                 'type':'div',
                                 'id':'CSS_FILE_SUM',
                                 'class':'wrapDRS floatRight'                                                         
                                },
                                
                                {
                                 'type':'div',
                                 'class': 'clearM'
                                }
                                ]
                }
              ]
}, 
    //User Application
    {   'id':'filesuserfiles',
			'title':'Files > User Files',
			'load':'loadFilesuserfiles();',
			'submit':'alert ("submit"); return false;',
			'connect':true,
			'objects':[
					{
						'id':'checkUnchekDiv',
						'type':'div',
						'class': 'checkUnchek',
						'title':'<span>Check All</span> | <span>Uncheck All</span>'
					},
					{
						'id':'fileActionSelectDiv',
						'type':'div',
						'class': 'wrapDRS floatRight',
						'title':'<b>Action: </b>',
						'objects':[
							     {		
                                    'id':'fileActionSelect',
                                    'class':'',
                                    'type':'select',
                                    'values': [{'value':'Select Action' ,'text':'Select Action'     },
                                               //{'value':'Program'       ,'text':'Program'           },
                                               {'value':'Remove'        ,'text':'Remove Selected'},
                                               //{'value':'NewFolder'     ,'text':'New Folder'        },
                                               //{'value':'Upload'        ,'text':'Upload File'       },
                                               //{'value':'Rename'        ,'text':'Rename Folder'     },
                                               {'value':'MCUImg'        ,'text':'Select MCU Image'  }],//,
                                               //{'value':'Properties'    ,'text':'File Properties'   }],
                                'change':'changeAction();'
                                },
                                {
                                    'id':'fileActionSelectAction',
                                    'type':'div',
                                    //'class': 'regButton mtop0 floatRight rbGray mLeftS',
                                    'class': 'regButton mtop0 floatRight mLeftS',
                                    'title':'Execute',
                                    'click':'filesDivPageAction();'
                                }
						]
					},
					{
						'id':'divclear1',
						'class':'clear mbot15',
						'type':'div'
						
					},
					{
						'id':'fileElement',
						'type':'file',
						'class':'hideFile'
					},	
                    {
						'id':'MCUImg',
						'type':'file',
						'class':'hideFile'
					},
                    /*
					{
						'id':'fileSysDiv',
						'type':'div',
						'class': 'fileSys',
						'objects':[
							{
								'id':'fsTitlesDiv',
								'type':'div',
								'class': 'fsTitles',
								'objects':[
									{
										'type':'div',
										'class': 'fs1',
										'title':'File'
									},
									{
										'type':'div',
										'class': 'fs3',
										'title':'Fail Safe'
									},
									{
										'type':'div',
										'class': 'fs4',
										'title':'Secure'
									},
									{
										'type':'div',
										'class': 'fs5',
										'title':'Max size'
									}
								]
							},
							{
								'id':'fileSysDiplayPageDiv',
								'type':'div',
								'class': 'fileSysDiplay'
							},
							//{
							//	'id':'saveButton',
							//	'type':'div',
							//	'class': 'regButton',
							//	'title':'Save',
							//	'click':'FilesuserfilesSaveClicked();'
							//}
						]
                        
					}
                    */
                    
                    {
						'id':'fileSysDiv',
						'type':'div',
						'class': 'fb',
					}
                    
			]
		},
    //User Application
    {   'id':'filesuserfilesonline',
        'title':'Files > User File Browser ',
        'load':'loadFilesuserfilesOnline();',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[
                    {
                        'id'    :'userFileRefreshBtn',
                        'type'  :'div',
                        'class' :'<i fa fa-refresh cursorDefault i/>',
                        'click' :'browse();'
                    },
                    {
                        'type':'div',
                        'class': 'clearM'
                    },  
                    {
                        'id'    :'fileSysDiv',
                        'type'  :'div',
                        'class' :'fb',
                    }
                 ]
	},

    //Service Pack
    {   'id':'binservicepack',
        'title':'Files > Service Pack',
        'load':'localStorage.setItem(\'project\', "");loadFilesSP(); dropFile(\'#spFileInput\');',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[
                    {'type':'fieldset',
                     'id':'fieldsetBinServicePack',
                     'title':'Service Pack File Name',
                     'class': 'wrapSection',
                     'objects':[
                                    /*{
                                        'id':'SP_FILE',
                                        'type':'file',
                                        'change':'postFile(\'SP_FILE\', \'uploadProjectSPFile\', \'0\');',
                                        'class': ''
                                        //'class': 'regButton'
                                    }*/
                                    {
                                        'id':'fieldsetBinServicePackFileBrowse',
                                        'type':'div',
                                        'class': 'wrapDRS floatLeft',
                                        'objects':[
                                                    {
                                                    'id':'spFileInput',
                                                    'type':'text',
                                                    'class':'floatLeft browseWidth'
                                                    },
                                                    {
                                                    'id':'browseServicePackFile',
                                                    'type':'div',
                                                    'class': 'regButton mtop0 mLeftS',
                                                    'title':'Browse',
                                                    'click':'$(\'#SP_FILE\').click();'
                                                    }, 
                                                    {
                                                        'id':'SP_FILE',
                                                        'type':'file',
                                                        'class':'hideFile',
                                                        'change':'postFile(\'SP_FILE\', \'uploadProjectSPFile\', \'0\');',
                                                    }, 
                                                    {
                                                    'id':'clearServicePackFile',
                                                    'type':'div',
                                                    'class': 'regButton mtop0 mLeftS floatRight',
                                                    'title':'&nbspClear&nbsp&nbsp',
                                                    'tooltip':'Clear Service Pack from the project',
                                                    'click':'clearServicePackFile()',
                                                    
                                                    }, 
                                                   ]
                                    }
                               ]
                    }
                  ]
    },
    //Certificate Store
    {   'id':'bincertstore',
        'title':'Files > Certificate Store',
        'load':'localStorage.setItem(\'project\', "");loadCertStore(); dropFile(\'#keyCertStoreFileInput\'); dropFile(\'#keyCertStoreSignFileInput\');',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[
                    {'type':'fieldset',
                     'id':'fieldsetBinCertStore',
                     'title':'Certificate Store',
                     'class': 'wrapSection',
                     'objects':[
                                    {   'id':'USE_DEF_CERT_STORE',
                                                        //'class':'c1',
                                                        'class':'',
                                                        'type':'checkbox',
                                                        'label': 'bot 2',
                                                        'values': [{'value':1,'text':'Use default Certificate Store'}],
                                                        'checked':1
                                    },
                                    {
                                        'type':'div',
                                        'class': 'clearM'
                                    },                                    
                                    {
                                         'type':'fieldset',
                                         'id':'fieldsetBinCertStoreSourceFile',
                                         'title':'Source File',
                                         'class': 'wrapSection',
                                         'objects':[
                                                    /*{
                                                        'id':'CERT_STORE_FILE',
                                                        'type':'file',
                                                        'change':'postFile(\'CERT_STORE_FILE\', \'uploadProjectCertStoreFile\', \'1\');',
                                                        //'class': 'regButton',
                                                        'class': ''
                                                    }*/
                                                    {
                                                    'id':'fieldsetCertStoreFileBrowse',
                                                    'type':'div',
                                                    'class': 'wrapDRS floatLeft',
                                                    'objects':[
                                                               /* {
                                                                'id':'keyCertStore',
                                                                'type':'div',
                                                                'class': 'fieldName',
                                                                'title':'Source File',
                                                                'tooltip':'Certificate Store Source File'
                                                                },*/
                                                                {
                                                                'id':'keyCertStoreFileInput',
                                                                'type':'text',
                                                                'class':'floatLeft'
                                                                //'class':'floatLeft keyWidth'
                                                                },
                                                                {
                                                                'id':'browseCertStoreFile',
                                                                'type':'div',
                                                                'class': 'regButton mtop0 mLeftS',
                                                                'title':'Browse',
                                                                'click':'$(\'#CERT_STORE_FILE\').click();'
                                                                }, 
                                                                {
                                                                    'id':'CERT_STORE_FILE',
                                                                    'type':'file',
                                                                    'class':'hideFile',
                                                                    'change':'postFile(\'CERT_STORE_FILE\', \'uploadProjectCertStoreFile\', \'1\');',
                                                                },
                                                               ]
                                                    }
                                                   ]
                                    },
                                    {
                                        'type':'div',
                                        'class': 'clear'
                                    },
                                    {
                                         'type':'fieldset',
                                         'id':'fieldsetBinCertStoreSignSourceFile',
                                         'title':'Signature Source File',
                                         'class': 'wrapSection',
                                         'objects':[
                                                    /*{
                                                        'id':'CERT_STORE_SIGNATURE_FILE',
                                                        'type':'file',
                                                        'change':'postFile(\'CERT_STORE_SIGNATURE_FILE\', \'uploadProjectCertStoreSigFile\', \'2\');',
                                                        'class': ''
                                                        //'class': 'regButton'
                                                    }*/
                                                    
                                                    {
                                                    'id':'fieldsetCertStoreSignSourceFileBrowse',
                                                    'type':'div',
                                                    'class': 'wrapDRS floatLeft',
                                                    'objects':[
                                                               /* {
                                                                'id':'keyCertStore',
                                                                'type':'div',
                                                                'class': 'fieldName',
                                                                'title':'Source File',
                                                                'tooltip':'Certificate Store Source File'
                                                                },*/
                                                                {
                                                                'id':'keyCertStoreSignFileInput',
                                                                'type':'text',
                                                                'class':'floatLeft'
                                                                //'class':'floatLeft keyWidth'
                                                                },
                                                                {
                                                                'id':'browseCertStoreSignFile',
                                                                'type':'div',
                                                                'class': 'regButton mtop0 mLeftS',
                                                                'title':'Browse',
                                                                'click':'$(\'#CERT_STORE_SIGNATURE_FILE\').click();'
                                                                }, 
                                                                {
                                                                    'id':'CERT_STORE_SIGNATURE_FILE',
                                                                    'type':'file',
                                                                    'class':'hideFile',
                                                                    'change':'postFile(\'CERT_STORE_SIGNATURE_FILE\', \'uploadProjectCertStoreSigFile\', \'2\');',
                                                                },
                                                               ]
                                                    }
                                                   ]
                                    },
                                    {
                                        'type':'div',
                                        'class': 'clear'
                                    }
                               ]
                    }
                  ]
    },
//Certificates
{   'id':'certificates',
    'title':'Certificates',
    'load':'localStorage.setItem(\'project\', "");',
    'submit':'alert ("submit"); return false;',
    'connect':true,
    'objects':[]
},
    //Enerprise Network
    {   'id':'certificatesEnterpriseNW',
        'title':'Certificates-> Enerprise Network',
        'load':'localStorage.setItem(\'project\', "");',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[]
    },
        //CA
        {   'id':'certificatesEnterpriseNWCA',
            'title':'Certificates-> Enerprise Network-> CA',
            'load':'localStorage.setItem(\'project\', "");',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[]
        },
        //Client
        {   'id':'certificatesEnterpriseNWClient',
            'title':'Certificates-> Enerprise Network-> Client',
            'load':'localStorage.setItem(\'project\', "");',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[]
        },
        //Private
        {   'id':'certificatesEnterpriseNWPrivate',
            'title':'Certificates-> Enerprise Network-> Private',
            'load':'localStorage.setItem(\'project\', "");',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[]
        },
    //General
    {   'id':'certificatesGeneral',
        'title':'Certificates-> General',
        'load':'localStorage.setItem(\'project\', "");',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[]
    },

//WWW
{   'id':'www',
    'title':'WWW',
    'load':'localStorage.setItem(\'project\', "");',
    'submit':'alert ("submit"); return false;',
    'connect':true,
    'objects':[]
},

//User Files
{   'id':'userfiles',
    'title':'User Files',
    'load':'localStorage.setItem(\'project\', "");',
    'submit':'alert ("submit"); return false;',
    'connect':true,
    'objects':[]
},
        {   'id':'openProjImg',
            'title':'Open Project Image',
            'load':'toggleFullOverlay($("#mainContent"), true); loadOpenProjImg(); ',
            'submit':'alert ("submit"); return false;',
            'connect':true,
            'objects':[
                        {'type':'fieldset',
                         'id':'fieldsetopenProjImg',
                         'title':'Image File Name',
                         'class': 'wrapSection',
                         'objects':[
                                        /*{
                                            'id':'IMG_FILE',
                                            'type':'file',
                                            //'change':'postFile(\'SP_FILE\', \'uploadProjectSPFile\', \'0\');',
                                            'change':'enableSetProjImage();',
                                            'class': ''
                                            //'class': 'regButton'
                                        }*/
                                        {
                                        'id':'fieldsetopenProjImgBrowse',
                                        'type':'div',
                                        'class': 'wrapDRS floatLeft',
                                        'objects':[
                                                    {
                                                    'id':'keyImgFileInput',
                                                    'type':'text',
                                                    'class':'floatLeft keyWidth'
                                                    },
                                                    {
                                                    'id':'browseImgFile',
                                                    'type':'div',
                                                    'class': 'regButton mtop0 mLeftS',
                                                    'title':'Browse',
                                                    'click':'$(\'#IMG_FILE\').click();'
                                                    }, 
                                                    {
                                                        'id':'IMG_FILE',
                                                        'type':'file',
                                                        'class':'hideFile',
                                                        //'change':'postFile(\'IMG_FILE\', \'uploadProjectCertStoreFile\', \'4\');',
                                                        'change':'enableSetProjImage();',
                                                    }
                                                   ]
                                        }
                                   ]
                        },
                        {
						'type':'div',
						'class': 'clear'
                        },
                        {'type':'fieldset',
                         'id':'fieldsetopenProjImgKey',
                         'title':'Image Key File Name',
                         'class': 'wrapSection',
                         'objects':[
                                        /*{
                                            'id':'PROJ_IMAGE_KEY_FILE_NAME',
                                            'type':'file',
                                            'change':'enableSetProjImage();',
                                            'class': ''
                                            //'class': 'regButton'
                                        }*/
                                        
                                        {
                                        'id':'fieldsetOpenProjImgKeyBrowse',
                                        'type':'div',
                                        'class': 'wrapDRS floatLeft',
                                        'objects':[
                                                    {
                                                    'id':'keyImgKeyFileInput',
                                                    'type':'text',
                                                    'class':'floatLeft keyWidth'
                                                    },
                                                    {
                                                    'id':'browseImgKeyFile',
                                                    'type':'div',
                                                    'class': 'regButton mtop0 mLeftS',
                                                    'title':'Browse',
                                                    'click':'$(\'#PROJ_IMAGE_KEY_FILE_NAME\').click();'
                                                    }, 
                                                    {
                                                        'id':'PROJ_IMAGE_KEY_FILE_NAME',
                                                        'type':'file',
                                                        'class':'hideFile',
                                                        //'change':'postFile(\'PROJ_IMAGE_KEY_FILE_NAME\', \'uploadProjectCertStoreFile\', \'4\');',
                                                        'change':'enableSetProjImage();',
                                                    }
                                                   ]
                                        }
                                   ]
                        },
                        {
                            'id':'backProjImage',
                            'type':'div',
                            'class': 'regButton floatLeft',
                            'title':'<< &nbsp; &nbsp; Back',
                            'click':'loadWelcome();'
                        },
                        {
                            'id':'setProjImage',
                            'type':'div',
                            'class': 'regButton floatRight',
                            'title':'Program Image'
                        }
                        
                      ]
        },

        {'id':'newproject',
        'title':'Start new project',
        'load':'newprojectLoad();',
        'submit':'alert ("submit"); return false;',
        'connect':true,
        'objects':[
                    {
                        'id':'projectName',
                        'type':'div',
                        'class': 'fieldName',
                        'title':'Project Name'
                    },
                    {
                        'id':'projectNameText',
                        'class':'mbot25',
                        'type':'text',
                        'placeholder':'Project Name',
                        'required':'required'
                    },
                    {
                        'id':'projectDescription',
                                'type':'div',
                                'class': 'fieldName',
                                'title':'Project Description'
                    },
                    {
                        'id':'projectDescriptionText',
                        'class':'mbot25',
                        'type':'textarea'
                    },
                    {
                        'id':'deviceTypeInputWrap',
                        'type':'div',
                        'class': 'inputWrap',					
                        'objects':[
                                    {
                                        'id':'deviceType',
                                        'type':'div',
                                        'class': 'fieldName',
                                        'title':'Device Type'
                                    },
                                    {		
                                        'id':'deviceTypeSelect',
                                        'class':'',
                                        'type':'select',
                                        'values': [{'value':'CC3200','text':'CC3220'},{'value':'CC3100','text':'CC3120'}, {'value':'CC3220FS','text':'CC3220SF'}]
                                    },
                        ]
                    },
                    /*{
                        'id':'capacityInputWrap',
                        'type':'div',
                        'class': 'inputWrap',					
                        'objects':[
                            {
                                'id':'capacity',
                                'type':'div',
                                'class': 'fieldName',
                                'title':'Capacity'
                            },
                            {		
                                'id':'capacitySelect',
                                'class':'',
                                'type':'select',
                                'values': [{'value':'100','text':'1M'},{'value':'2000','text':'2M'},{'value':'4000','text':'4M'},{'value':'8000','text':'8M'},{'value':'16000','text':'16M'}]			
                            }
                        ]
                    },
                            
                    {
                        'id':'checkDeviceSize',
                        'type':'div',
                        'class': 'regButton btnDisabled',
                        'title':'<i class="fa fa-arrows-h fa-1x"></i> Check device size',
                        'click':'checkDeviceSizeClicked();'
                    },*/
                    {
                        'type':'div',
                        'class': 'clear'
                    },
                    {
                        'type':'div',
                        'class': 'mtop21'
                    },
                    {
                        'id':'DevelopmentMode',
                        'type':'div',
                        'class': 'fieldName',
                        'title':'Device Mode'
                    },
                    {
                        'id':'DevelopmentModeToggle',
                        'type':'div',
                        'class': 'slideToggle',
                        'title':'<div class="devMode devModeD">Develop</div><div class="devMode devModeP">Production</div><div class="slider sliderLeft"><div class="inSlider"><i class="fa fa-bars  fa-rotate-90"></i></div></div>',
                        'click':'toogleSlider();'
                    },
                    {
                        'type':'div',
                        'class': 'mtop21'
                    },
                    {
                        'id':'backCreateProject',
                        'type':'div',
                        'class': 'regButton floatLeft',
                        'title':'<< &nbsp; &nbsp; Back',
                        'click':'loadWelcome();'
                    },
                    {
                        'id':'createProject',
                        'type':'div',
                        'class': 'regButton floatRight',
                        'title':'Create Project',
                        'click':'createProjectClicked();'
                    },
                    
                    {
                        'type':'div',
                        'class': 'clear'
                    },
                    {
                        'type':'div',
                        'class': 'mtop75'
                    }

            ]
        },
		
		{'id':'programimageconnected',
		'title':'Generate Image',
		'load':'$(\'#progressAlertDiv\').hide(); loadGenerateImage();',
		'submit':'alert ("submit"); return false;',
		'connect':true,
		'objects':[/*{
					'id':'key',
					'type':'div',
					'class': 'fieldName',
					'title':'Key',
					'tooltip':'This is the key title'
					},
					{
					'id':'keyInput',
					'type':'text',
					'class':'floatLeft keyWidth'
					},
					{
					'id':'browseKey',
					'type':'div',
					'class': 'regButton rbGray mtop0 mLeftS',
					'title':'Browse',
                    'click':'openCreateImageBrowse();',
					'tooltip':'This is the browse button'
					}, 
                    {
						'id':'browseKeyImageFile',
						'type':'file',
						'class':'hideFile',
                        //'change':'updateCreateImagePath();'
                        'change':'postFile(\'browseKeyImageFile\', \'uploadProjectBKFile\', \'4\');',
					},
					{
						'type':'div',
						'class': 'clear'
					},*/
					{
					'id':'createButton',
					'type':'div',
					'class': 'regButton mRightM',
					'title':'Create Image',
					'click':'createImage();',
					'tooltip':'Create Image'
					}, 
					{
					'id':'programImageButton',
					'type':'div',
					'class': 'regButton',
					'title':'Program Image (Create & Program)',
                    //'click':'programImageFromProject();'
                    'click':'createImage(programImageFromProject, true);'
					}, 
					{
						'type':'div',
						'class': 'clear'
					},
                    {
					'id':'saveImageButton',
					'type':'div',
					'class': 'regButton mRightM',
					'title':'&nbsp; Save Image&nbsp;',
					//'click':'saveImage();',
					'tooltip':'became enable after first image creation'
					},
                    {
                    	'type':'div',
						'id':'lastImageLink'
                    },
					{
						'type':'div',
						'id':'progressAlertDiv',
						'class': 'progressAlert',
						'title':'<div class="inProgress">In Progress...</div><div class="progInText">Image Created Successfully!</div>'
					},
         			{
						'type':'div',
						'class': 'mtop75'
					}
			]
		}
		]
};
var menu=[
	{   'name' :'<b>General</b>',
		'id': 'idmenugeneral',
		'page': '/index.htm?page=general',
		'checkFunction':'return false;',
		'visibleFunction':'return true;',
		'child':[
                    {   'name' :'Settings',
                        'id': 'idmenuGeneralSettings',
                        'page': '/index.htm?page=generalsettings',
                        'checkFunction':'return false;',
                        'visibleFunction':'return true;',
                        'child':
                                [
                                    {'name' :'',
                                     'id': 'idmenuGeneralSettingsStubbin',
                                     'page': '/index.htm?page=generalsettings',
                                     'checkFunction':'return false;',
                                     'visibleFunction':'return true;'
                                    }
                                ]
                    }
            
                ]
	},
	{   'name' :'<b>System Setting</b>',
		'id': 'idmenuSystemSettingl',
		'page': '/index.htm?page=systemsettings',
		'checkFunction':'return false;',
		'visibleFunction':'return true;',
		'child':[
			{   'name' :'Device',
				'id': 'idmenuDevice',
				'page': '/index.htm?page=systemsettingsdevice',
				'checkFunction':'return false;',
				'visibleFunction':'return true;',
				'child':[
					/*{'name' :'Supported Modes',
					'id': 'idmenuSupportedModes',
					'page': '/Mac.html',
					'checkFunction':'return false;',
					'visibleFunction':'return true;'
					},
                    {'name' :'Service Pack',
					'id': 'idmenuServicePack',
                    'page': '/index.htm?page=deviceservicepack',
					'checkFunction':'return false;',
					'visibleFunction':'return true;'
					},*/
					{'name' :'Radio Settings',
					'id': 'idmenuRadioSettings',
                    'page': '/index.htm?page=systemsettingsdeviceRadioSettings',
					'checkFunction':'return false;',
					'visibleFunction':'return true;',
                    'child':
                                [
                                    {'name' :'',
                                     'id': 'idmenuRadioSettingsStubbin',
                                     'page': '/index.htm?page=systemsettingsdeviceRadioSettings',
                                     'checkFunction':'return false;',
                                     'visibleFunction':'return true;'
                                    }
                                ]
					}/*,
					{'name' :'Policies',
					'id': 'idmenuPolicies',
					'page': '/index.htm?page=systemsettingsdevicepolicies',
					'checkFunction':'return false;',
					'visibleFunction':'return true;'
					}*/
				]
			},
			{   'name' :'Role Settings',
				'id': 'idmenuDeviceRoleSettings',
				'page': '/index.htm?page=devicerolesettings',
				'checkFunction':'return false;',
				'visibleFunction':'return true;',
                'child':[
					{'name' :'General Settings',
					'id': 'idmenuDeviceRoleGeneralSettings',
					'page': '/index.htm?page=devicerolesettingsgeneralsettings',
					'checkFunction':'return false;',
					'visibleFunction':'return true;',
                    'child':
                                [
                                    {'name' :'',
                                     'id': 'idmenuDeviceRoleGeneralSettingsStubbin',
                                     'page': '/index.htm?page=devicerolesettingsgeneralsettings',
                                     'checkFunction':'return false;',
                                     'visibleFunction':'return true;'
                                    }
                                ]
					},
					{'name' :'STA/Wi-Fi® Direct Device',
					'id': 'idmenuSTAP2PDevice',
					'page': '/index.htm?page=devicerolesettingsstadevice',
					'checkFunction':'return false;',
					'visibleFunction':'return true;',
                    'child':[
                               /* {'name' :'Profiles',
                                'id': 'idmenuDeviceRoleSettingsProfiles',
                                'page': '/index.htm?page=devicerolesettingsstap2p',
                                'checkFunction':'return false;',
                                'visibleFunction':'return true;'
                                },*/
                                {'name' :'Network Settings',
                                'id': 'idmenuDeviceRoleSettingsSTANetworkSettings',
                                'page': '/index.htm?page=devicerolesettingsstap2pnetworksettings',
                                'checkFunction':'return false;',
                                'visibleFunction':'return true;'
                                }
                            ]
					},
                    {'name' :'AP/Wi-Fi® Direct GO',
					'id': 'idmenuAPP2PDevice',
					'page': '/index.htm?page=devicerolesettingsapdevice',
					'checkFunction':'return false;',
					'visibleFunction':'return true;',
                    'child':[
                                {'name' :'WLAN Settings',
                                'id': 'idmenuDeviceRoleAPWlanSettings',
                                'page': '/index.htm?page=devicerolesettingsapp2pwlansettings',
                                'checkFunction':'return false;',
                                'visibleFunction':'return true;'
                                },
                                {'name' :'Network Settings',
                                'id': 'idmenuDeviceRoleAPNetworkSettings',
                                'page': '/index.htm?page=devicerolesettingsapp2pnetworksettings',
                                'checkFunction':'return false;',
                                'visibleFunction':'return true;'
                                }/*,
                                {'name' :'Black List',
                                'id': 'idmenuDeviceRoleSettingsAPBlackList',
                                'page': '/index.htm?page=devicerolesettingsapblacklist',
                                'checkFunction':'return false;',
                                'visibleFunction':'return true;'
                                }*/
                            ]
					}
				]
			},
            {   'name' :'Network Applications',
				'id': 'idmenuNetworkApplicationss',
				'page': '/index.htm?page=networkapplications',
				'checkFunction':'return false;',
				'visibleFunction':'return true;',
                'child':[
                        {'name' :'',
                         'id': 'idmenuNetworkAppStubbin',
                         'page': '/index.htm?page=networkapplications',
                         'checkFunction':'return false;',
                         'visibleFunction':'return true;'
                        }]
            }
		]
	},
    {   'name' :'<b>Files</b>',
		'id': 'idmenuFiles',
		'page': '/index.htm?page=files',
		'checkFunction':'return false;',
		'visibleFunction':'return true;',
		'child':[
                    {   'name' :'User Files',
                        'id': 'idmenuBinUserApp',
                        'page': '/index.htm?page=filesuserfiles',
                        'checkFunction':'return false;',
                        'visibleFunction':'return checkDeviceType();',
                    },
                    {   'name' :'Service Pack',
                        'id': 'idmenuBinSP',
                        'page': '/index.htm?page=binservicepack',
                        'checkFunction':'return false;',
                        'visibleFunction':'return true;',
                    },
                    {   'name' :'Certificate Store',
                        'id': 'idmenuDevice',
                        'page': '/index.htm?page=bincertstore',
                        'checkFunction':'return false;',
                        'visibleFunction':'return true;',
                    }/*,
                    {   'name' :'Online User Files',
                        'id': 'idmenuBinUserApp',
                        'page': '/index.htm?page=filesuserfilesonline',
                        'checkFunction':'return false;',
                        'visibleFunction':'return checkDeviceType();',
                    }*/
                ]
    },
    /*{   'name' :'<b>Tools</b>',
		'id': 'idmenuTools',
		'page': '/index.htm?page=tools',
		'checkFunction':'return false;',
		'visibleFunction':'return true;',
		'child':[
                    {   'name' :'Create Flash Image',
                        'id': 'idmenuToolsCreateFlashImage',
                        'page': '/index.htm?page=toolscreateflashimage',
                        'checkFunction':'return false;',
                        'visibleFunction':'return true;',
                    },
                    {   'name' :'Sign File',
                        'id': 'idmenuToolsSignFile',
                        'page': '/index.htm?page=toolssignfile',
                        'checkFunction':'return false;',
                        'visibleFunction':'return true;',
                    }
                ]
    },*/
    /*{   'name' :'Certificates',
		'id': 'idmenuCertificates',
		'page': '/index.htm?page=certificates',
		'checkFunction':'return false;',
		'visibleFunction':'return true;',
		'child':[
                    {   'name' :'Enterprise Network',
                        'id': 'idmenuCertEnterpriseNW',
                        'page': '/index.htm?page=certificatesEnterpriseNW',
                        'checkFunction':'return false;',
                        'visibleFunction':'return true;',
                        'child':[
                                    {   'name' :'CA',
                                        'id': 'idmenuCertEnterpriseNWCA',
                                        'page': '/index.htm?page=certificatesEnterpriseNWCA',
                                        'checkFunction':'return false;',
                                        'visibleFunction':'return true;',
                                    },
                                    {   'name' :'Client',
                                        'id': 'idmenuCertEnterpriseNWClient',
                                        'page': '/index.htm?page=certificatesEnterpriseNWClient',
                                        'checkFunction':'return false;',
                                        'visibleFunction':'return true;',
                                    },
                                    {   'name' :'Private',
                                        'id': 'idmenuCertEnterpriseNWPrivate',
                                        'page': '/index.htm?page=certificatesEnterpriseNWPrivate',
                                        'checkFunction':'return false;',
                                        'visibleFunction':'return true;',
                                    }
                                ]
                        
                    },

                    {   'name' :'General',
                        'id': 'idmenuCertEnterpriseGeneral',
                        'page': '/index.htm?page=certificatesGeneral',
                        'checkFunction':'return false;',
                        'visibleFunction':'return true;'
                    }
                ]
    },*/
    /*{   'name' :'WWW',
		'id': 'idmenuWww',
		'page': '/index.htm?page=www',
		'checkFunction':'return false;',
		'visibleFunction':'return true;',
    },
    {   'name' :'User Files',
		'id': 'idmenuUserFiles',
		'page': '/index.htm?page=userfiles',
		'checkFunction':'return false;',
		'visibleFunction':'return true;'
    }
    {   'name' :'Generate Image',
		'id': 'idmenuGenerateImage',
		'page': '/index.htm?page=programimageconnected',
		'checkFunction':'return false;',
		'visibleFunction':'return true;',
    }*/
];