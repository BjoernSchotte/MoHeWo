// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Welcome',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Welcome to MoHeWo',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Surprise',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Da schau her, ich bin Fenster 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

var send = Titanium.UI.createButton({
    title: 'Send',
    style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
});
 
var camera = Titanium.UI.createButton({
    systemButton: Titanium.UI.iPhone.SystemButton.CAMERA,
});
 
var cancel = Titanium.UI.createButton({
    systemButton: Titanium.UI.iPhone.SystemButton.CANCEL
});
 
flexSpace = Titanium.UI.createButton({
    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
 
var toolbar = Titanium.UI.iOS.createToolbar({
    items:[send, flexSpace, camera, flexSpace, cancel],
    bottom:0,
    borderTop:true,
    borderBottom:false
}); 
win2.add(toolbar);


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
