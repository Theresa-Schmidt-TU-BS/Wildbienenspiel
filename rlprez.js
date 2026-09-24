/*!
 * Copyright (c) Atomi Systems, Inc. All rights reserved.
 * Version: 9.4.0
 * Date: 2025.11.14
 */
(function(AP) {
	var $, jQuery;
	$ = jQuery = AP.$;
	var d = {params:{ContentCategory:[0,0,0,0],ButtonBGColorHover:["rgb(236, 236, 236)","rgb(236, 236, 236)","rgb(236, 236, 236)","rgb(236, 236, 236)"],Navigation:[0,0,0,0],ContentBorderWidth:[0,0,0,0],ContentBG:["rgb(251, 251, 251)","rgb(251, 251, 251)","rgb(251, 251, 251)","rgb(251, 251, 251)"],AutoScroll:[false,false,false,false],PageBG:["rgb(251, 251, 251)","rgb(251, 251, 251)","rgb(251, 251, 251)","rgb(251, 251, 251)"],PlayerFontFamily:["Tahoma","Tahoma","Tahoma","Tahoma"],ToolbarTextColor:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],ShowLastBtn:[true,false,false,false],DisplayMode:[1,1,1,1],TocBackground:["rgb(230, 230, 230)","rgb(230, 230, 230)","rgb(230, 230, 230)","rgb(230, 230, 230)"],PlayerSize:[0,0,0,0],PlayerFontSize:[13,13,13,13],AutoHidePlayerBar:[false,false,false,false],SideBarCategory:[0,0,0,0],ButtonIconColor:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],SideBarPos:[0,0,0,0],SideBarWidth:[350,350,350,350],ShowSpeedBtn:[true,false,false,false],TocItemBG:["rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)"],ShowAuthorInfo:[false,false,false,false],ShowAuthorImage:[false,false,false,false],ShowAuthorVideo:[false,false,false,false],SidebarBG:["rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)"],SidebarTextColor:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],TopBarCategory:[0,0,0,0],ShowTopBar:[false,false,false,false],ShowPlayBtn:[true,false,false,false],ShowSidebarBtn:[true,true,true,true],TocCategory:[0,0,0,0],TocStyle:[0,0,0,0],ToolbarCategory:[0,0,0,0],TocItemBGCurrentHover:["rgb(153, 204, 255)","rgb(153, 204, 255)","rgb(153, 204, 255)","rgb(153, 204, 255)"],TocShowDuration:[false,false,false,false],TocShowThumbnails:[false,false,false,false],ShowFirstBtn:[true,false,false,false],TocShowStateIcons:[false,false,false,false],TocItemBGCompletedHover:["rgb(179, 179, 179)","rgb(179, 179, 179)","rgb(179, 179, 179)","rgb(179, 179, 179)"],ShowMaxTocLevel:[false,false,false,false],TOCTextColor:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],ButtonIconColorActive:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],TocItemBGHover:["rgb(212, 212, 212)","rgb(212, 212, 212)","rgb(212, 212, 212)","rgb(212, 212, 212)"],TocItemBGCurrent:["rgb(127, 191, 255)","rgb(127, 191, 255)","rgb(127, 191, 255)","rgb(127, 191, 255)"],TocItemBGCompleted:["rgb(190, 190, 190)","rgb(190, 190, 190)","rgb(190, 190, 190)","rgb(190, 190, 190)"],ShowDisplayModeBtn:[true,true,true,true],Separator:["rgb(212, 212, 212)","rgb(212, 212, 212)","rgb(212, 212, 212)","rgb(212, 212, 212)"],ShowToolbar:[true,false,false,false],SliderCategory:[0,0,0,0],ShowRestartBtn:[true,false,false,false],ShowExitBtn:[true,false,false,false],ShowPrevBtn:[true,false,false,false],ShowProgressBar:[true,false,false,false],ShowNextBtn:[true,false,false,false],ShowVolumeBar:[false,false,false,false],ShowVolumeBtn:[true,true,true,true],ShowCCBtn:[true,true,true,true],ShowInfoBtn:[false,false,false,false],ShowTocBtn:[false,false,false,false],ShowResourcesBtn:[true,true,true,true],ShowSegments:[true,true,true,true],ShowPosition:[true,true,true,true],ShowPrezLen:[true,true,true,true],ToolbarBG:["rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)"],ButtonCategory:[0,0,0,0],ButtonIconColorHover:["rgb(25, 25, 25)","rgb(25, 25, 25)","rgb(25, 25, 25)","rgb(25, 25, 25)"],ButtonBGColor:["rgb(233, 233, 233)","rgb(233, 233, 233)","rgb(233, 233, 233)","rgb(233, 233, 233)"],ButtonBGColorActive:["rgb(227, 227, 227)","rgb(227, 227, 227)","rgb(227, 227, 227)","rgb(227, 227, 227)"],ButtonBorderColor:["rgb(179, 179, 179)","rgb(179, 179, 179)","rgb(179, 179, 179)","rgb(179, 179, 179)"],SliderThumbBG:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],SliderThumbBGHover:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],SliderTrackBG1:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],SliderTrackBG2:["rgb(0, 128, 255)","rgb(0, 128, 255)","rgb(0, 128, 255)","rgb(0, 128, 255)"],SliderMarkers:["rgb(255, 192, 0)","rgb(255, 192, 0)","rgb(255, 192, 0)","rgb(255, 192, 0)"],MenuCategory:[0,0,0,0],MenuBackground:["rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)"],MenuItemBGHover:["rgb(227, 227, 227)","rgb(227, 227, 227)","rgb(227, 227, 227)","rgb(227, 227, 227)"],MenuTextColor:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],MenuBorderColor:["rgb(179, 179, 179)","rgb(179, 179, 179)","rgb(179, 179, 179)","rgb(179, 179, 179)"],ResourcesPaneCategory:[0,0,0,0],ResourcesPaneBackground:["rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)","rgb(224, 224, 224)"],ResourcesPaneTextColor:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"]},homepage:"",projectName:"Untitled",e:{l:[[16,[[38,["300_9",-1,1],[[0,0,3,[true,"apLastSessionIncomplete",0]]]]]]]},copyright:"",appHomepage:"https://atomisystems.com",author:"Leander Mecklenburg",generator:"ActivePresenter",pools:[],authorDescription:"",description:"",l:[[1280,720]],language:"en-US",feedbacks:[{at:"Correct Feedback",i:11,de:"",a:true,fbi:"300_1",n:"Correct Feedback",m:15,b:{f:[1,3036676095],ct:[]},d:3000,h:[720],hm:1,ts:[2,700,35],tl:[[0,"Hauptzeitleiste"]],cc:[{i:6,m:15,k:0,rs:true,n:"Form_6",ti:-1,s:[{w:[{r:[430,259,420,202]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],s:[10,45,2,1509949440],l:[1,4287535269,321],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:4,m:15,k:21,cc:[{i:1,m:15,k:0,rs:true,n:"Titel_1",ti:-1,s:[{w:[{r:[0,0,420,65],c:[1,1,"a","a",0,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Richtig</p>","font-family:'Times New Roman';font-size:28px;color:#30AE63;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"Freiform_5",ti:-1,s:[{w:[{r:[21,65,378,1],c:[0,0,"90000%","a",0,0,0,0,1,0],p:[[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]],[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]]]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,l:[1,2528426691,321],a:[565]}],f:35651584,e:{s:-1},uts:1,t:17},{i:3,m:15,k:0,rs:true,n:"Text_3",ti:-1,s:[{w:[{r:[0,76,420,75],c:[2,1,"a","a",10,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sehr gut, deine Antwort war richtig!</p>","font-family:'Arial';font-size:18px;color:#44546A;text-align:center;","default"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:2,m:15,k:10,rs:true,c:6,n:"Schaltfläche_2",ti:0,f:35675136,s:[{w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],tm:[20,5,20,5],e:{l:[[3,[[7,1]]]],s:-1,f:8},uts:1,t:0}],n:"Flexible-Box_4",ti:-1,s:[{w:[{r:[430,259,420,202],b:[1,false,0,0,0]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1,f:8},uts:1}],e:null},{at:"Incorrect Feedback",i:12,de:"",a:true,fbi:"300_2",n:"Incorrect Feedback",m:15,b:{f:[1,3036676095],ct:[]},d:3000,h:[720],hm:1,ts:[2,700,35],tl:[[0,"Hauptzeitleiste"]],cc:[{i:6,m:15,k:0,rs:true,n:"Form_6",ti:-1,s:[{w:[{r:[430,259,420,202]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],s:[10,45,2,1509949440],l:[1,4287535269,321],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:4,m:15,k:21,cc:[{i:1,m:15,k:0,rs:true,n:"Titel_1",ti:-1,s:[{w:[{r:[0,0,420,65],c:[1,1,"a","a",0,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nicht richtig</p>","font-family:'Times New Roman';font-size:28px;color:#D15218;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"Freiform_5",ti:-1,s:[{w:[{r:[21,65,378,1],c:[0,0,"90000%","a",0,0,0,0,1,0],p:[[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]],[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]]]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,l:[1,2528426691,321],a:[565]}],f:35651584,e:{s:-1},uts:1,t:17},{i:3,m:15,k:0,rs:true,n:"Text_3",ti:-1,s:[{w:[{r:[0,76,420,75],c:[2,1,"a","a",10,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Leider war deine Antwort nicht richtig.</p>","font-family:'Arial';font-size:18px;color:#44546A;text-align:center;","default"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:2,m:15,k:10,rs:true,c:6,n:"Schaltfläche_2",ti:0,f:35675136,s:[{w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],tm:[20,5,20,5],e:{l:[[3,[[7,1]]]],s:-1,f:8},uts:1,t:0}],n:"Flexible-Box_4",ti:-1,s:[{w:[{r:[430,259,420,202],b:[1,false,0,0,0]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1,f:8},uts:1}],e:null},{at:"Try Again Feedback",i:13,de:"",a:true,fbi:"300_3",n:"Try Again Feedback",m:15,b:{f:[1,3036676095],ct:[]},d:3000,h:[720],hm:1,ts:[2,700,35],tl:[[0,"Hauptzeitleiste"]],cc:[{i:6,m:15,k:0,rs:true,n:"Form_6",ti:-1,s:[{w:[{r:[430,259,420,202]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],s:[10,45,2,1509949440],l:[1,4287535269,321],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:4,m:15,k:21,cc:[{i:1,m:15,k:0,rs:true,n:"Titel_1",ti:-1,s:[{w:[{r:[0,0,420,65],c:[1,1,"a","a",0,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nicht richtig</p>","font-family:'Times New Roman';font-size:28px;color:#D15218;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"Freiform_5",ti:-1,s:[{w:[{r:[21,65,378,1],c:[0,0,"90000%","a",0,0,0,0,1,0],p:[[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]],[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]]]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,l:[1,2528426691,321],a:[565]}],f:35651584,e:{s:-1},uts:1,t:17},{i:3,m:15,k:0,rs:true,n:"Text_3",ti:-1,s:[{w:[{r:[0,76,420,75],c:[2,1,"a","a",10,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Leider war deine Antwort nicht richtig.</p>","font-family:'Arial';font-size:18px;color:#44546A;text-align:center;","default"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:2,m:15,k:10,rs:true,c:6,n:"Schaltfläche_2",ti:0,f:35675136,s:[{w:[{r:[152,151,115,34],c:[0,0,"a","a",0,0,0,18,1,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nochmal</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[152,151,115,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nochmal</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[152,151,115,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nochmal</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[152,151,115,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nochmal</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],tm:[20,5,20,5],e:{l:[[3,[[39,"300_3"]]]],s:-1,f:8},uts:1,t:0}],n:"Flexible-Box_4",ti:-1,s:[{w:[{r:[430,259,420,202],b:[1,false,0,0,0]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1,f:8},uts:1}],e:null},{at:"Complete Feedback",i:14,de:"",a:true,fbi:"300_4",n:"Complete Feedback",m:15,b:{f:[1,3036676095],ct:[]},d:3000,h:[720],hm:1,ts:[2,700,35],tl:[[0,"Hauptzeitleiste"]],cc:[{i:6,m:15,k:0,rs:true,n:"Form_6",ti:-1,s:[{w:[{r:[430,259,420,202]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],s:[10,45,2,1509949440],l:[1,4287535269,321],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:4,m:15,k:21,cc:[{i:1,m:15,k:0,rs:true,n:"Titel_1",ti:-1,s:[{w:[{r:[0,0,420,65],c:[1,1,"a","a",0,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Vollständig</p>","font-family:'Times New Roman';font-size:28px;color:#30AE63;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"Freiform_5",ti:-1,s:[{w:[{r:[21,65,378,1],c:[0,0,"90000%","a",0,0,0,0,1,0],p:[[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]],[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]]]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,l:[1,2528426691,321],a:[565]}],f:35651584,e:{s:-1},uts:1,t:17},{i:3,m:15,k:0,rs:true,n:"Text_3",ti:-1,s:[{w:[{r:[0,76,420,75],c:[2,1,"a","a",10,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Danke für deine Antwort.</p>","font-family:'Arial';font-size:18px;color:#44546A;text-align:center;","default"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:2,m:15,k:10,rs:true,c:6,n:"Schaltfläche_2",ti:0,f:35675136,s:[{w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],tm:[20,5,20,5],e:{l:[[3,[[7,1]]]],s:-1,f:8},uts:1,t:0}],n:"Flexible-Box_4",ti:-1,s:[{w:[{r:[430,259,420,202],b:[1,false,0,0,0]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1,f:8},uts:1}],e:null},{at:"Incomplete Feedback",i:15,de:"",a:true,fbi:"300_5",n:"Incomplete Feedback",m:15,b:{f:[1,3036676095],ct:[]},d:3000,h:[720],hm:1,ts:[2,700,35],tl:[[0,"Hauptzeitleiste"]],cc:[{i:6,m:15,k:0,rs:true,n:"Form_6",ti:-1,s:[{w:[{r:[430,259,420,202]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],s:[10,45,2,1509949440],l:[1,4287535269,321],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:4,m:15,k:21,cc:[{i:1,m:15,k:0,rs:true,n:"Titel_1",ti:-1,s:[{w:[{r:[0,0,420,65],c:[1,1,"a","a",0,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Unvollständig</p>","font-family:'Times New Roman';font-size:28px;color:#E47C30;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"Freiform_5",ti:-1,s:[{w:[{r:[21,65,378,1],c:[0,0,"90000%","a",0,0,0,0,1,0],p:[[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]],[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]]]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,l:[1,2528426691,321],a:[565]}],f:35651584,e:{s:-1},uts:1,t:17},{i:3,m:15,k:0,rs:true,n:"Text_3",ti:-1,s:[{w:[{r:[0,76,420,75],c:[2,1,"a","a",10,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Bitte beantworte alle Fragen.</p>","font-family:'Arial';font-size:18px;color:#44546A;text-align:center;","default"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:2,m:15,k:10,rs:true,c:6,n:"Schaltfläche_2",ti:0,f:35675136,s:[{w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[162,151,96,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],tm:[20,5,20,5],e:{l:[[3,[[39,"300_5"]]]],s:-1,f:8},uts:1,t:0}],n:"Flexible-Box_4",ti:-1,s:[{w:[{r:[430,259,420,202],b:[1,false,0,0,0]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1,f:8},uts:1}],e:null},{at:"Timeout Feedback",i:16,de:"",a:true,fbi:"300_6",n:"Timeout Feedback",m:15,b:{f:[1,3036676095],ct:[]},d:3000,h:[720],hm:1,ts:[2,700,35],tl:[[0,"Hauptzeitleiste"]],cc:[{i:6,m:15,k:0,rs:true,n:"Form_6",ti:-1,s:[{w:[{r:[430,259,420,202]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],s:[10,45,2,1509949440],l:[1,4287535269,321],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:4,m:15,k:21,cc:[{i:1,m:15,k:0,rs:true,n:"Titel_1",ti:-1,s:[{w:[{r:[0,0,420,65],c:[1,1,"a","a",0,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Timeout</p>","font-family:'Times New Roman';font-size:28px;color:#F0C330;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"Freiform_5",ti:-1,s:[{w:[{r:[21,65,378,1],c:[0,0,"90000%","a",0,0,0,0,1,0],p:[[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]],[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]]]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,l:[1,2528426691,321],a:[565]}],f:35651584,e:{s:-1},uts:1,t:17},{i:3,m:15,k:0,rs:true,n:"Text_3",ti:-1,s:[{w:[{r:[0,76,420,75],c:[2,1,"a","a",10,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sorry, the time to answer has expired.</p>","font-family:'Arial';font-size:18px;color:#44546A;text-align:center;","default"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:2,m:15,k:10,rs:true,c:6,n:"Schaltfläche_2",ti:0,f:35675136,s:[{w:[{r:[152,151,116,34],c:[0,0,"a","a",0,0,0,18,1,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Continue</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[152,151,116,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Continue</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[152,151,116,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Continue</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[152,151,116,34],c:[0,0,"a","a",0,0,0,18,1,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Continue</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],tm:[20,5,20,5],e:{l:[[3,[[7,1]]]],s:-1,f:8},uts:1,t:0}],n:"Flexible-Box_4",ti:-1,s:[{w:[{r:[430,259,420,202],b:[1,false,0,0,0]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1,f:8},uts:1}],e:null},{at:"Resume Feedback",i:17,de:"",a:true,fbi:"300_9",n:"Resume Feedback",m:15,b:{f:[1,3036676095],ct:[]},d:3000,h:[720],hm:1,ts:[2,700,35],tl:[[0,"Hauptzeitleiste"]],cc:[{i:10,m:15,k:0,rs:true,n:"Form_10",ti:-1,s:[{w:[{r:[430,259,420,202]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],s:[10,45,2,1509949440],l:[1,4287535269,321],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:8,m:15,k:21,cc:[{i:1,m:15,k:0,rs:true,n:"Titel_1",ti:-1,s:[{w:[{r:[0,0,420,59],c:[1,1,"a","a",0,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Resume Presentation</p>","font-family:'Times New Roman';font-size:28px;color:#99BAB7;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:9,m:15,k:0,rs:true,n:"Freiform_9",ti:-1,s:[{w:[{r:[21,59,378,1],c:[0,0,"90000%","a",0,0,0,0,1,0],p:[[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]],[[0,0,-37797,0,126000,0,1],[378000,0,252000,0,415797,0]]]}],d:1,t:["","font-family:'Arial';font-size:18px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,l:[1,2528426691,321],a:[565]}],f:35651584,e:{s:-1},uts:1,t:17},{i:3,m:15,k:0,rs:true,n:"Text_3",ti:-1,s:[{w:[{r:[0,70,420,84],c:[2,1,"a","a",10,0,0,0,3,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Would you like to resume the presentation from the last slide viewed?</p>","font-family:'Arial';font-size:18px;color:#44546A;text-align:center;","default"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:7,m:15,k:21,cc:[{i:2,m:15,k:10,rs:true,c:6,n:"Schaltfläche_2",ti:0,f:35675136,s:[{w:[{r:[93,0,111,34],c:[0,1,"a","a",0,0,10,0,0,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Resume</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[93,0,111,34],c:[0,1,"a","a",0,0,10,0,0,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Resume</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[93,0,111,34],c:[0,1,"a","a",0,0,10,0,0,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Resume</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[93,0,111,34],c:[0,1,"a","a",0,0,10,0,0,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Resume</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],tm:[20,5,20,5],e:{l:[[3,[[39,"300_9"],[9]]]],s:-1,f:8},uts:1,t:0},{i:4,m:15,k:10,rs:true,c:6,n:"Schaltfläche_4",ti:0,f:35675136,s:[{w:[{r:[225,0,102,34],c:[0,1,"a","a",0,10,0,0,0,0]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Restart</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[225,0,102,34],c:[0,1,"a","a",0,10,0,0,0,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Restart</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[225,0,102,34],c:[0,1,"a","a",0,10,0,0,0,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Restart</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[225,0,102,34],c:[0,1,"a","a",0,10,0,0,0,0]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Restart</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],tm:[20,5,20,5],e:{l:[[3,[[39,"300_9"],[46]]]],s:-1,f:8},uts:1,t:0}],n:"Flexible-Box_7",ti:-1,s:[{w:[{r:[0,154,420,49],b:[0,false,1,0,0],c:[1,1,"a","a",0,0,0,0,3,0]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1,f:8},uts:1}],n:"Flexible-Box_8",ti:-1,s:[{w:[{r:[430,259,420,202],b:[1,false,0,0,0]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1,f:8},uts:1}],e:null},{at:"Review Feedback",i:18,de:"",a:true,fbi:"300_7",n:"Review Feedback",m:15,b:{f:null,ct:[]},d:3000,h:[720],hm:1,tl:[[0,"Hauptzeitleiste"]],cc:[{i:4,m:15,k:10,rs:true,c:6,n:"Schaltfläche_4",ti:0,f:35651584,s:[{w:[{r:[58,624,100,36]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Previous</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[58,624,100,36]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Previous</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[58,624,100,36]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Previous</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[58,624,100,36]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Previous</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],e:{l:[[3,[[8,1]]]],s:-1,f:8},uts:1,t:0},{i:5,m:15,k:10,rs:true,c:6,n:"Schaltfläche_5",ti:0,f:35651584,s:[{w:[{r:[182,624,100,36]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Next</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[2,0,[[0,4289578949],[100,4286223506]],90,0,100],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[182,624,100,36]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Next</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[2,0,[[0,4288593338],[100,4284708982]],90,0,100],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[182,624,100,36]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Next</p>","font-family:'Arial';font-size:18px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Clicked",r:0,f:[2,0,[[0,4287211428],[100,4283194715]],90,0,100],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[182,624,100,36]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Next</p>","font-family:'Arial';font-size:18px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4286611584],a:[1,[220]]}],e:{l:[[3,[[7,1]]]],s:-1,f:8},uts:1,t:0}],e:null},{at:"Blank Feedback",i:19,de:"",a:true,fbi:"300_8",n:"Blank Feedback",m:15,b:{f:[1,3036676095],ct:[]},d:3000,h:[720],hm:1,ts:[2,700,35],tl:[[0,"Hauptzeitleiste"]],e:null}],mediaStats:[0,0,0,0,0,0,0,0,0,0],mpv:"9.4.0",options:{playerResource:"player/",opModes:4,prezContainerID:"lqMz5QfJ",testMaxTime:0,reportMethod:0,css:"rlprez.css",passCondition:0,reportFormat:0,resourceLocation:"resources/",hilightFocus:false,reportAddress:"",showUnmuteMsg:true,passConditionValue:80,scormScorePercent:false,autoplay:true,generatePreview:false,generateSeparatePackage:true,useWebmOgg:false,prezContainer:"",prezContainerResources:"resources\\",playerContainer:"player\\",indexContainerRes:"index-images\\",fileNamePrefix:"",lms:false,previewMode:false},toc:[{c:[],n:"1.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">Folie 1</p></body></html>",s:68,d:0},{c:[],n:"2.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">Folie 2</p></body></html>",s:73,d:0},{c:[],n:"3.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeAFieldX</p></body></html>",s:126,d:3000},{c:[],n:"4.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeAFieldY</p></body></html>",s:177,d:3000},{c:[],n:"5.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeBFieldX</p></body></html>",s:178,d:3000},{c:[],n:"6.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeBFieldY</p></body></html>",s:179,d:3000},{c:[],n:"7.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeCFieldX</p></body></html>",s:181,d:3000},{c:[],n:"8.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeCFieldY</p></body></html>",s:182,d:3000},{c:[],n:"9.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">FinalSlide</p></body></html>",s:183,d:3000},{c:[],n:"10.",t:"<html><body style=\"font-family:'Tahoma';font-size:13px;\"><p style=\"margin-top: 0px; margin-bottom: 0px; \">Impressum und Datenschutz</p><p style=\"margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p></body></html>",s:232,d:3000}],pcs:[{i:-1,h:[720],a:true,st:0,d:24000,tl:[[0,"Hauptzeitleiste"]]},null],av:[],responsive:false,v:"9.4.0",vars:[["apScoreSubtract","0",2,1],["foundFlowers","0",2,1],["amountOfFlowers","0",2,1],["FlowersA1_F1","3",2,1],["pointsBeeAFieldX","0",2,1],["pointsBeeAFieldY","0",2,1],["pointsBeeBFieldX","0",2,1],["pointsBeeBFieldY","0",2,1],["pointsBeeCFieldX","0",2,1],["pointsBeeCFieldY","0",2,1],["maxPointsBeeAFieldX","48",2,1],["maxPointsBeeAFieldY","42",2,1],["maxPointsBeeBFieldX","18",2,1],["maxPointsBeeBFieldY","16",2,1],["maxPointsBeeCFieldX","8",2,1],["maxPointsBeeCFieldY","2",2,1],["roundBeeAFieldX","0",2,1],["roundBeeAFieldY","0",2,1],["roundBeeBFieldX","0",2,1],["roundBeeBFieldY","0",2,1],["roundBeeCFieldY","0",2,1],["roundBeeCFieldX","0",2,1],["timeInGame","",1,1]],adActions:[["correctFlower",[[28,[-1,0,-1,""],0,"thisObj"],[14,0]]],["goToButton",[[28,[-1,0,-1,""],[[0,0,3,["3","",0],["attempts"]]],"thisObj"],[5,-1,[[0,0,1,["4","",0],["attempts"]]],"slide"]]],["falseFlower",[[28,[-1,0,-1,""],0,"thisObj"]]]],slides:[{at:"Folie 1",i:68,de:"",a:false,n:"",d:0,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste"]],cc:[{i:1,m:15,k:0,rs:true,n:"Titel_1",ti:-1,s:[{w:[{r:[119,88,1040,272]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Auf Blütensuche – Wer fliegt worauf?</p>","font-family:'Arial';font-size:60px;color:#FFFFFF;text-align:center;","bottom"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:2,m:15,k:0,rs:true,n:"Text_2",ti:-1,s:[{w:[{r:[254,637,771,54]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Theresa Schmidt, Leander H. Mecklenburg und Dagmar Hilfert-Rüppell</p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:4,m:15,k:10,rs:true,c:6,n:"Schaltfläche_4",ti:0,f:35651584,s:[{w:[{r:[565,553,147,47]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:28px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[565,553,147,47]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:28px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[565,553,147,47]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:28px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[565,553,147,47]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Weiter</p>","font-family:'Arial';font-size:28px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[7,1]]]],s:-1,f:8},uts:0,t:0},{i:5,m:15,k:0,rs:true,n:"Form_5",ti:-1,s:[{w:[{r:[-10,-8,1299,178]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:6,m:15,k:2,rs:true,n:"Bild_6",ti:-1,s:[{w:[{r:[0,94,407,152]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10006,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:7,m:15,k:2,rs:true,n:"Bild_7",ti:-1,s:[{w:[{r:[1005,21,241,118]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10007,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:8,m:15,k:2,rs:true,n:"Bild_8",ti:-1,s:[{w:[{r:[528,371,225,142]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10015,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:10,m:15,k:0,rs:true,c:6,n:"Form_10",ti:-1,f:35682304,s:[{w:[{r:[271,699,771,17]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum &amp; Datenschutz </p>","font-family:'Arial';font-size:12px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],e:{l:[[3,[[5,232]]]],s:-1},uts:1,t:0},{i:11,m:15,k:0,rs:true,n:"Form_11",ti:-1,s:[{w:[{r:[1032,699,256,30]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">CC-BY-NC-SA 4.0 Schmidt et al. (2026)</p>","font-family:'Arial';font-size:11px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:12,m:15,k:2,rs:true,n:"Bild_12",ti:-1,s:[{w:[{r:[1059,628,202,71]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10018,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]]]]]}},{at:"Folie 2",i:73,de:"",a:false,n:"",d:0,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste"]],cc:[{i:2,m:15,k:0,rs:true,n:"Inhalt_2",ti:-1,s:[{w:[{r:[60,108,400,552]}],d:1,t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wildbienen benötigen bestimmte Blüten, von denen sie Pollen sammeln können. Als Forschende unterstützt du bei der Beobachtung der Bienen. Die Bienen können nur bestimmte Blüten anfliegen. Finde für jede der drei Bienenarten die passenden Blüten. Für die richtigen Blüten erhältst du +2 Punkte und für eine falsche -1 Punkt. Du kannst jede Wiese dreimal spielen, aber du musst dich beeilen.</p><p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p>","font-family:'Arial';font-size:28px;color:#000000;text-align:left;","default"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:12,m:15,k:21,cc:[{i:6,m:15,k:0,rs:true,n:"Form_6",ti:-1,s:[{w:[{r:[0,160,228,116]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"><span style=\"font-weight:bold;\">Glockenblumen-Scherenbiene</span></p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Chelostoma rapunculi</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p>","font-family:'Arial';font-size:22px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:11,m:15,k:2,rs:true,n:"Bild_11",ti:-1,s:[{w:[{r:[0,0,228,160]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:[3,10019,0,1,1672,1260],a:[0],im:[10020,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0}],n:"Gruppenobjekt_12",ti:-1,s:[{w:[{r:["59139%","15524%","17820%","38306%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1},uts:1},{i:10,m:15,k:21,cc:[{i:7,m:15,k:0,rs:true,n:"Form_7",ti:-1,s:[{w:[{r:[0,160,228,89]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"><span style=\"font-weight:bold;\">Garten-Wollbiene</span></p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Anthidium manicatum</p>","font-family:'Arial';font-size:22px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:9,m:15,k:2,rs:true,n:"Bild_9",ti:-1,s:[{w:[{r:[0,0,228,160]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:[3],a:[0],im:[10021,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0}],n:"Gruppenobjekt_10",ti:-1,s:[{w:[{r:["38524%","15524%","17810%","34476%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1},uts:1},{i:22,m:15,k:21,cc:[{i:8,m:15,k:0,rs:true,n:"Form_8",ti:-1,s:[{w:[{r:[0,160,228,107]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiesenhummel</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"><span style=\"font-weight:normal;\">Bombus pratorum</span></p>","font-family:'Arial';font-size:22px;font-weight:bold;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:13,m:15,k:2,rs:true,n:"Bild_13",ti:-1,s:[{w:[{r:[0,0,228,160]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10022,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0}],n:"Gruppenobjekt_22",ti:-1,s:[{w:[{r:["78989%","15056%","17820%","37072%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1},uts:1},{i:15,m:15,k:10,rs:true,c:6,n:"Schaltfläche_15",ti:0,f:35651584,s:[{w:[{r:[507,459,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeBFieldX% von %maxPointsBeeBFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[507,459,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeBFieldX% von %maxPointsBeeBFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[507,459,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeBFieldX% von %maxPointsBeeBFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[507,459,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeBFieldX% von %maxPointsBeeBFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[41,[[33,[0,"roundBeeBFieldX","1",0]],[28,[15,0,3,""],[[0,0,3,["3","roundBeeBFieldX",0]]]],[33,[4,"pointsBeeBFieldX","0",0],[[0,0,1,["4","roundBeeBFieldX",0]]]],[5,178,[[0,0,1,["4","roundBeeBFieldX",0]]]]]]]]],s:-1,f:8},uts:0,t:0},{i:17,m:15,k:10,rs:true,c:6,n:"Schaltfläche_17",ti:0,f:35651584,s:[{w:[{r:[507,559,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeBFieldY% von %maxPointsBeeBFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[507,559,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeBFieldY% von %maxPointsBeeBFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[507,559,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeBFieldY% von %maxPointsBeeBFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[507,559,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeBFieldY% von %maxPointsBeeBFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[41,[[33,[0,"roundBeeBFieldY","1",0]],[28,[17,0,3,""],[[0,0,3,["3","roundBeeBFieldY",0]]]],[33,[4,"pointsBeeBFieldY","0",0],[[0,0,1,["4","roundBeeBFieldY",0]]]],[5,179,[[0,0,1,["4","roundBeeBFieldY",0]]]]]]]]],s:-1,f:8},uts:0,t:0},{i:18,m:15,k:10,rs:true,c:6,n:"Schaltfläche_18",ti:0,f:35651584,s:[{w:[{r:[764,459,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeCFieldX% von %maxPointsBeeCFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[764,459,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeCFieldX% von %maxPointsBeeCFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[764,459,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeCFieldX% von %maxPointsBeeCFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[764,459,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeCFieldX% von %maxPointsBeeCFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[41,[[33,[0,"roundBeeCFieldX","1",0]],[28,[18,0,3,""],[[0,0,3,["3","roundBeeCFieldX",0]]]],[33,[4,"pointsBeeCFieldX","0",0],[[0,0,1,["4","roundBeeCFieldX",0]]]],[5,181,[[0,0,1,["4","roundBeeCFieldX",0]]]]]]]]],s:-1,f:8},uts:0,t:0},{i:19,m:15,k:10,rs:true,c:6,n:"Schaltfläche_19",ti:0,f:35651584,s:[{w:[{r:[771,559,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeCFieldY% von %maxPointsBeeCFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[771,559,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeCFieldY% von %maxPointsBeeCFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[771,559,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeCFieldY% von %maxPointsBeeCFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[771,559,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeCFieldY% von %maxPointsBeeCFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[41,[[33,[0,"roundBeeCFieldY","1",0]],[28,[19,0,3,""],[[0,0,3,["3","roundBeeCFieldY",0]]]],[33,[4,"pointsBeeCFieldY","0",0],[[0,0,1,["4","roundBeeCFieldY",0]]]],[5,182,[[0,0,1,["4","roundBeeCFieldY",0]]]]]]]]],s:-1,f:8},uts:0,t:0},{i:20,m:15,k:10,rs:true,c:6,n:"Schaltfläche_20",ti:0,f:35651584,s:[{w:[{r:[1025,459,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeAFieldX% von %maxPointsBeeAFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[1025,459,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeAFieldX% von %maxPointsBeeAFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[1025,459,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeAFieldX% von %maxPointsBeeAFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[1025,459,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1: %pointsBeeAFieldX% von %maxPointsBeeAFieldX% Punkten</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[41,[[33,[0,"roundBeeAFieldX","1",0]],[28,[20,0,3,""],[[0,0,3,["3","roundBeeAFieldX",0]]]],[33,[4,"pointsBeeAFieldX","0",0],[[0,0,1,["4","roundBeeAFieldX",0]]]],[5,126,[[0,0,1,["4","roundBeeAFieldX",0]]]]]]]]],s:-1,f:8},uts:0,t:0},{i:21,m:15,k:10,rs:true,c:6,n:"Schaltfläche_21",ti:0,f:35651584,s:[{w:[{r:[1025,559,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeAFieldY% von %maxPointsBeeAFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[1025,559,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeAFieldY% von %maxPointsBeeAFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[1025,559,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeAFieldY% von %maxPointsBeeAFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[1025,559,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2: %pointsBeeAFieldY% von %maxPointsBeeAFieldY% Punkten</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[41,[[33,[0,"roundBeeAFieldY","1",0]],[28,[21,0,3,""],[[0,0,3,["3","roundBeeAFieldY",0]]]],[33,[4,"pointsBeeAFieldY","0",0],[[0,0,1,["4","roundBeeAFieldY",0]]]],[5,177,[[0,0,1,["4","roundBeeAFieldY",0]]]]]]]]],s:-1,f:8},uts:0,t:0},{i:27,m:15,k:10,rs:true,c:6,n:"Schaltfläche_27",ti:0,f:35651584,s:[{w:[{r:[1025,641,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Beenden</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[1025,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Beenden</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[1025,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Beenden</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[1025,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Beenden</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,183,[[0,0,5,["0","roundBeeAFieldX",0]],[0,0,5,["0","roundBeeAFieldY",0]],[0,0,5,["0","roundBeeBFieldX",0]],[0,0,5,["0","roundBeeBFieldY",0]],[0,0,5,["0","roundBeeCFieldX",0]],[0,0,5,["0","roundBeeCFieldY",0]]]],[15,[28,0,[200,0,0],[400,3000,0]]]]]],s:-1,f:8},uts:0,t:0},{i:28,m:15,k:0,rs:true,n:"textboxUnfinished",ti:-1,s:[{w:[{r:[530,301,383,189]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Du musst auf jeder der sechs Wiesen mindestens einmal nach Blumen gesucht haben.</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],a:[1,[100]]}],f:35913728,e:{s:-1},uts:1,t:0},{i:30,m:15,k:0,rs:true,c:6,n:"Form_30",ti:-1,f:35682304,s:[{w:[{r:[271,699,771,17]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum &amp; Datenschutz </p>","font-family:'Arial';font-size:12px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],e:{l:[[3,[[5,232]]]],s:-1},uts:1,t:0}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]]]]]}},{at:"BeeAFieldX",i:126,de:"",a:false,n:"<p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeAFieldX</p>",d:3000,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste",[[40,[[1006,0,0]]]]]],cc:[{i:72,m:15,k:21,cc:[{i:70,m:15,k:2,rs:true,n:"flowerBackground",ti:-1,s:[{w:[{r:[0,0,988,556]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10013,1]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:39,m:15,k:0,rs:true,n:"correct1",ti:-1,s:[{w:[{r:[0,274,104,282]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[0,274,104,282]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651968,e:{l:[[3,[[41,[[28,[39,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,1]]]]]],s:-1},uts:1,t:0},{i:45,m:15,k:0,rs:true,n:"correct2",ti:-1,s:[{w:[{r:[120,244,78,213]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[120,244,78,213]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651968,e:{l:[[3,[[41,[[28,[45,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,2]]]]]],s:-1},uts:1,t:0},{i:47,m:15,k:0,rs:true,n:"correct3",ti:-1,s:[{w:[{r:[199,457,78,55]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[199,457,78,55]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[47,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,3]]]]]],s:-1},uts:1,t:0},{i:48,m:15,k:0,rs:true,n:"correct4",ti:-1,s:[{w:[{r:[199,402,78,55]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[199,402,78,55]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[48,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,4]]]]]],s:-1},uts:1,t:0},{i:49,m:15,k:0,rs:true,n:"correct5",ti:-1,s:[{w:[{r:[199,329,78,55]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[199,329,78,55]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[49,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,5]]]]]],s:-1},uts:1,t:0},{i:50,m:15,k:0,rs:true,n:"correct6",ti:-1,s:[{w:[{r:[199,250,78,55]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[199,250,78,55]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[50,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,6]]]]]],s:-1},uts:1,t:0},{i:51,m:15,k:0,rs:true,n:"correct7",ti:-1,s:[{w:[{r:[308,485,78,55]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[308,485,78,55]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[51,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,7]]]]]],s:-1},uts:1,t:0},{i:52,m:15,k:0,rs:true,n:"correct8",ti:-1,s:[{w:[{r:[277,306,121,179]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[277,306,121,179]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[52,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,8]]]]]],s:-1},uts:1,t:0},{i:53,m:15,k:0,rs:true,n:"correct9",ti:-1,s:[{w:[{r:[347,223,79,83]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[347,223,79,83]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[53,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,9]]]]]],s:-1},uts:1,t:0},{i:54,m:15,k:0,rs:true,n:"correct10",ti:-1,s:[{w:[{r:[427,267,79,83]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[427,267,79,83]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[54,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,10]]]]]],s:-1},uts:1,t:0},{i:55,m:15,k:0,rs:true,n:"correct11",ti:-1,s:[{w:[{r:[398,395,79,145]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[398,395,79,145]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[55,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,11]]]]]],s:-1},uts:1,t:0},{i:56,m:15,k:0,rs:true,n:"correct12",ti:-1,s:[{w:[{r:[477,457,79,83]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[477,457,79,83]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[56,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,12]]]]]],s:-1},uts:1,t:0},{i:57,m:15,k:0,rs:true,n:"correct13",ti:-1,s:[{w:[{r:[477,395,79,62]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[477,395,79,62]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[57,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,13]]]]]],s:-1},uts:1,t:0},{i:58,m:15,k:0,rs:true,n:"correct14",ti:-1,s:[{w:[{r:[506,267,79,98]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[506,267,79,98]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[58,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,14]]]]]],s:-1},uts:1,t:0},{i:59,m:15,k:0,rs:true,n:"correct15",ti:-1,s:[{w:[{r:[556,366,79,174]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[556,366,79,174]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[59,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,15]]]]]],s:-1},uts:1,t:0},{i:60,m:15,k:0,rs:true,n:"correct16",ti:-1,s:[{w:[{r:[585,316,51,50]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[585,316,51,50]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[60,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,16]]]]]],s:-1},uts:1,t:0},{i:61,m:15,k:0,rs:true,n:"correct17",ti:-1,s:[{w:[{r:[585,160,51,118]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[585,160,51,118]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[61,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,17]]]]]],s:-1},uts:1,t:0},{i:62,m:15,k:0,rs:true,n:"correct18",ti:-1,s:[{w:[{r:[636,267,62,83]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[636,267,62,83]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[62,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,18]]]]]],s:-1},uts:1,t:0},{i:63,m:15,k:0,rs:true,n:"correct19",ti:-1,s:[{w:[{r:[713,274,73,267]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[713,274,73,267]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[63,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,19]]]]]],s:-1},uts:1,t:0},{i:64,m:15,k:0,rs:true,n:"correct20",ti:-1,s:[{w:[{r:[723,172,152,101]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[723,172,152,101]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[64,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,20]]]]]],s:-1},uts:1,t:0},{i:65,m:15,k:0,rs:true,n:"correct21",ti:-1,s:[{w:[{r:[799,341,90,76]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[799,341,90,76]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[65,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,21]]]]]],s:-1},uts:1,t:0},{i:66,m:15,k:0,rs:true,n:"correct22",ti:-1,s:[{w:[{r:[851,417,90,139]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[851,417,90,139]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[66,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,22]]]]]],s:-1},uts:1,t:0},{i:67,m:15,k:0,rs:true,n:"correct23",ti:-1,s:[{w:[{r:[889,332,79,75]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[889,332,79,75]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[67,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,23]]]]]],s:-1},uts:1,t:0},{i:68,m:15,k:0,rs:true,n:"correct24",ti:-1,s:[{w:[{r:[896,190,79,139]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[896,190,79,139]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[68,0,1,""]],[33,[0,"pointsBeeAFieldX","2",0]],[14,24]]]]]],s:-1},uts:1,t:0}],n:"hotSpot",ti:-1,s:[{w:[{r:["21885%","15760%","77200%","77238%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1},uts:1},{i:2,m:15,k:2,rs:true,n:"ImageBee",ti:-1,s:[{w:[{r:[29,113,228,160]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10022,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"textboxIntroduction",ti:-1,s:[{w:[{r:[29,336,228,333]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Klicke auf die richtigen Blüten für diese Bienenart. Für jede richtige Blüte erhältst du +2 Punkte, für jede falsche -1 Punkt. Insgesamt hast du %pointsBeeAFieldX% von %maxPointsBeeAFieldX% Punkten erreicht.</p>","font-family:'Arial';font-size:24px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:40,m:15,k:23,rs:true,n:"timer",ti:-1,s:[{w:[{r:[1066,34,130,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"> </p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[10]}],f:35651584,e:{l:[[40,[[27,[44,0,[200,0,0]]]]]],s:-1},uts:0,t:0,tmp:{duration:30000,type:0,subType:2,countdown:true}},{i:41,m:15,k:0,rs:true,n:"textboxTime",ti:-1,s:[{w:[{r:[978,39,124,37]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zeit:</p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35651584,e:{s:-1},uts:1,t:2},{i:44,m:15,k:21,cc:[{i:43,m:15,k:0,rs:true,n:"Form_43",ti:-1,s:[{w:[{r:[542,294,339,155]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Deine Zeit ist leider abgelaufen.</p>","font-family:'Arial';font-size:28px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:2097152,e:{s:-1},uts:1,t:0},{i:42,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0}],n:"timeOut",ti:-1,s:[{w:[{r:["-456%","-810%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:2359296,e:{s:-1},uts:1},{i:83,m:15,k:21,cc:[{i:84,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0},{i:81,m:15,k:0,rs:true,n:"allFlowersCorrectText",ti:-1,s:[{w:[{r:[560,130,273,182]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sehr gut, du hast alle richtigen Blüten gefunden</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:82,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[628,236,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73]]]],s:-1,f:8},uts:1,t:0}],n:"allFlowersCorrect",ti:-1,s:[{w:[{r:["325%","579%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35913728,e:{s:-1},uts:1},{i:6,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[29,34,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73],[45,[40,0]]]]],s:-1,f:8},uts:0,t:0},{i:73,m:15,k:0,rs:true,n:"Form_73",ti:-1,s:[{w:[{r:[29,273,228,50]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiesenhumme<span style=\"font-weight:normal;\">l</span></p>","font-family:'Arial';font-size:22px;font-weight:bold;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:86,m:15,k:0,rs:true,c:6,n:"Form_86",ti:-1,f:35682304,s:[{w:[{r:[271,699,771,17]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum &amp; Datenschutz </p>","font-family:'Arial';font-size:12px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],e:{l:[[3,[[5,232]]]],s:-1},uts:1,t:0}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]],[43,[40,0]],[14,25]]]]}},{at:"BeeAFieldY",i:177,de:"",a:false,n:"<p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeAFieldY</p>",d:3000,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste",[[40,[[1006,0,0]]]]]],cc:[{i:96,m:15,k:21,cc:[{i:75,m:15,k:2,rs:true,n:"flowerBackground",ti:-1,s:[{w:[{r:[0,0,988,556]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10014,1]}],f:169869696,e:{s:-1,f:8},uts:1,t:0},{i:39,m:15,k:0,rs:true,n:"correct1",ti:-1,s:[{w:[{r:[0,231,104,135]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[0,231,104,135]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[39,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,26]]]]]],s:-1},uts:1,t:0},{i:76,m:15,k:0,rs:true,n:"correct2",ti:-1,s:[{w:[{r:[15,473,68,72]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[15,473,68,72]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[76,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,27]]]]]],s:-1},uts:1,t:0},{i:77,m:15,k:0,rs:true,n:"correct3",ti:-1,s:[{w:[{r:[82,366,68,160]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[82,366,68,160]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[77,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,28]]]]]],s:-1},uts:1,t:0},{i:78,m:15,k:0,rs:true,n:"correct4",ti:-1,s:[{w:[{r:[166,245,68,72]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[166,245,68,72]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[78,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,29]]]]]],s:-1},uts:1,t:0},{i:79,m:15,k:0,rs:true,n:"correct5",ti:-1,s:[{w:[{r:[280,257,68,72]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[280,257,68,72]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[79,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,30]]]]]],s:-1},uts:1,t:0},{i:80,m:15,k:0,rs:true,n:"correct6",ti:-1,s:[{w:[{r:[265,330,68,72]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[265,330,68,72]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[80,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,31]]]]]],s:-1},uts:1,t:0},{i:81,m:15,k:0,rs:true,n:"correct7",ti:-1,s:[{w:[{r:[247,446,68,99]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[247,446,68,99]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[81,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,32]]]]]],s:-1},uts:1,t:0},{i:82,m:15,k:0,rs:true,n:"correct8",ti:-1,s:[{w:[{r:[333,446,68,63]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[333,446,68,63]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[82,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,33]]]]]],s:-1},uts:1,t:0},{i:83,m:15,k:0,rs:true,n:"correct9",ti:-1,s:[{w:[{r:[367,351,68,63]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[367,351,68,63]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[83,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,34]]]]]],s:-1},uts:1,t:0},{i:84,m:15,k:0,rs:true,n:"correct10",ti:-1,s:[{w:[{r:[400,493,58,63]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[400,493,58,63]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[84,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,35]]]]]],s:-1},uts:1,t:0},{i:85,m:15,k:0,rs:true,n:"correct11",ti:-1,s:[{w:[{r:[426,281,58,63]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[426,281,58,63]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[85,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,36]]]]]],s:-1},uts:1,t:0},{i:86,m:15,k:0,rs:true,n:"correct12",ti:-1,s:[{w:[{r:[459,351,88,174]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[459,351,88,174]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[86,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,37]]]]]],s:-1},uts:1,t:0},{i:87,m:15,k:0,rs:true,n:"correct13",ti:-1,s:[{w:[{r:[547,281,73,70]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[547,281,73,70]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[87,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,38]]]]]],s:-1},uts:1,t:0},{i:88,m:15,k:0,rs:true,n:"correct14",ti:-1,s:[{w:[{r:[562,378,84,178]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[562,378,84,178]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[88,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,39]]]]]],s:-1},uts:1,t:0},{i:89,m:15,k:0,rs:true,n:"correct15",ti:-1,s:[{w:[{r:[656,344,69,201]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[656,344,69,201]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[89,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,40]]]]]],s:-1},uts:1,t:0},{i:90,m:15,k:0,rs:true,n:"correct16",ti:-1,s:[{w:[{r:[661,215,90,129]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[661,215,90,129]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[90,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,41]]]]]],s:-1},uts:1,t:0},{i:91,m:15,k:0,rs:true,n:"correct17",ti:-1,s:[{w:[{r:[725,428,75,65]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[725,428,75,65]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[91,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,42]]]]]],s:-1},uts:1,t:0},{i:92,m:15,k:0,rs:true,n:"correct18",ti:-1,s:[{w:[{r:[739,493,61,52]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[739,493,61,52]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[92,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,43]]]]]],s:-1},uts:1,t:0},{i:93,m:15,k:0,rs:true,n:"correct19",ti:-1,s:[{w:[{r:[813,412,75,65]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[813,412,75,65]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[93,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,44]]]]]],s:-1},uts:1,t:0},{i:94,m:15,k:0,rs:true,n:"correct20",ti:-1,s:[{w:[{r:[776,245,75,158]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[776,245,75,158]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[94,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,45]]]]]],s:-1},uts:1,t:0},{i:95,m:15,k:0,rs:true,n:"correct21",ti:-1,s:[{w:[{r:[898,224,79,220]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[898,224,79,220]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[95,0,1,""]],[33,[0,"pointsBeeAFieldY","2",0]],[14,46]]]]]],s:-1},uts:1,t:0}],n:"hotspotGame",ti:-1,s:[{w:[{r:["21885%","15645%","77200%","77195%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1},uts:1},{i:2,m:15,k:2,rs:true,n:"ImageBee",ti:-1,s:[{w:[{r:[29,113,228,160]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10022,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"textboxIntroduction",ti:-1,s:[{w:[{r:[29,337,228,332]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Klicke auf die richtigen Blüten für diese Bienenart. Für jede richtige Blüte erhältst du +2 Punkte, für jede falsche -1 Punkt. Insgesamt hast du %pointsBeeAFieldY% von %maxPointsBeeAFieldY% Punkten erreicht.</p>","font-family:'Arial';font-size:24px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:40,m:15,k:23,rs:true,n:"timer",ti:-1,s:[{w:[{r:[1066,34,130,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"> </p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[10]}],f:35651584,e:{l:[[40,[[27,[44,0,[200,0,0]]]]]],s:-1},uts:0,t:0,tmp:{duration:30000,type:0,subType:2,countdown:true}},{i:41,m:15,k:0,rs:true,n:"textboxTime",ti:-1,s:[{w:[{r:[978,39,124,37]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zeit:</p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35651584,e:{s:-1},uts:1,t:2},{i:44,m:15,k:21,cc:[{i:43,m:15,k:0,rs:true,n:"Form_43",ti:-1,s:[{w:[{r:[542,294,339,155]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Deine Zeit ist leider abgelaufen.</p>","font-family:'Arial';font-size:28px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:2097152,e:{s:-1},uts:1,t:0},{i:42,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0}],n:"timeOut",ti:-1,s:[{w:[{r:["-456%","-810%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:2359296,e:{s:-1},uts:1},{i:104,m:15,k:21,cc:[{i:105,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0},{i:102,m:15,k:0,rs:true,n:"allFlowersCorrectText",ti:-1,s:[{w:[{r:[560,130,273,182]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sehr gut, du hast alle richtigen Blüten gefunden</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:103,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[628,236,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73]]]],s:-1,f:8},uts:1,t:0}],n:"allFlowersCorrect",ti:-1,s:[{w:[{r:["325%","579%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35913728,e:{s:-1},uts:1},{i:6,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[29,34,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73],[45,[40,0]]]]],s:-1,f:8},uts:0,t:0},{i:97,m:15,k:0,rs:true,n:"Form_97",ti:-1,s:[{w:[{r:[29,273,228,50]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiesenhumme<span style=\"font-weight:normal;\">l</span></p>","font-family:'Arial';font-size:22px;font-weight:bold;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:107,m:15,k:0,rs:true,c:6,n:"Form_107",ti:-1,f:35682304,s:[{w:[{r:[271,699,771,17]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum &amp; Datenschutz </p>","font-family:'Arial';font-size:12px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],e:{l:[[3,[[5,232]]]],s:-1},uts:1,t:0}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]],[43,[40,0]],[14,47]]]]}},{at:"BeeBFieldX",i:178,de:"",a:false,n:"<p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeBFieldX</p>",d:3000,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste",[[40,[[1006,0,0]]]]]],cc:[{i:98,m:15,k:21,cc:[{i:70,m:15,k:2,rs:true,n:"flowerBackground",ti:-1,s:[{w:[{r:[0,0,988,556]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10013,1]}],f:169869696,e:{s:-1,f:8},uts:1,t:0},{i:39,m:15,k:0,rs:true,n:"correct1",ti:-1,s:[{w:[{r:[0,274,104,282]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[0,274,104,282]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[39,0,1,""]],[33,[0,"pointsBeeBFieldX","2",0]],[14,48]]]]]],s:-1},uts:1,t:0},{i:78,m:15,k:0,rs:true,n:"correct2",ti:-1,s:[{w:[{r:[186,393,79,58]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[186,393,79,58]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[78,0,1,""]],[33,[0,"pointsBeeBFieldX","2",0]],[14,49]]]]]],s:-1},uts:1,t:0},{i:80,m:15,k:0,rs:true,n:"correct3",ti:-1,s:[{w:[{r:[303,284,108,207]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[303,284,108,207]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[80,0,1,""]],[33,[0,"pointsBeeBFieldX","2",0]],[14,50]]]]]],s:-1},uts:1,t:0},{i:83,m:15,k:0,rs:true,n:"correct4",ti:-1,s:[{w:[{r:[411,402,56,154]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[411,402,56,154]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[83,0,1,""]],[33,[0,"pointsBeeBFieldX","2",0]],[14,51]]]]]],s:-1},uts:1,t:0},{i:87,m:15,k:0,rs:true,n:"correct5",ti:-1,s:[{w:[{r:[516,278,70,93]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[516,278,70,93]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[87,0,1,""]],[33,[0,"pointsBeeBFieldX","2",0]],[14,52]]]]]],s:-1},uts:1,t:0},{i:88,m:15,k:0,rs:true,n:"correct6",ti:-1,s:[{w:[{r:[586,320,47,52]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[586,320,47,52]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[88,0,1,""]],[33,[0,"pointsBeeBFieldX","2",0]],[14,53]]]]]],s:-1},uts:1,t:0},{i:93,m:15,k:0,rs:true,n:"correct7",ti:-1,s:[{w:[{r:[710,267,70,289]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[710,267,70,289]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[93,0,1,""]],[33,[0,"pointsBeeBFieldX","2",0]],[14,54]]]]]],s:-1},uts:1,t:0},{i:96,m:15,k:0,rs:true,n:"correct8",ti:-1,s:[{w:[{r:[857,402,94,154]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[857,402,94,154]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[96,0,1,""]],[33,[0,"pointsBeeBFieldX","2",0]],[14,55]]]]]],s:-1},uts:1,t:0},{i:97,m:15,k:0,rs:true,n:"correct9",ti:-1,s:[{w:[{r:[889,183,94,154]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[889,183,94,154]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[97,0,1,""]],[33,[0,"pointsBeeBFieldX","2",0]],[14,56]]]]]],s:-1},uts:1,t:0},{i:73,m:15,k:0,rs:true,n:"false1",ti:-1,s:[{w:[{r:[123,222,63,215]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[123,222,63,215]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[73,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:74,m:15,k:0,rs:true,n:"false2",ti:-1,s:[{w:[{r:[193,222,63,90]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[193,222,63,90]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[74,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:75,m:15,k:0,rs:true,n:"false3",ti:-1,s:[{w:[{r:[256,284,46,45]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[256,284,46,45]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[75,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:76,m:15,k:0,rs:true,n:"false4",ti:-1,s:[{w:[{r:[202,320,78,73]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[202,320,78,73]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[76,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:77,m:15,k:0,rs:true,n:"false5",ti:-1,s:[{w:[{r:[193,451,71,56]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[193,451,71,56]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[77,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:79,m:15,k:0,rs:true,n:"false6",ti:-1,s:[{w:[{r:[313,491,71,65]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[313,491,71,65]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[79,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:81,m:15,k:0,rs:true,n:"false7",ti:-1,s:[{w:[{r:[333,222,93,62]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[333,222,93,62]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[81,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:82,m:15,k:0,rs:true,n:"false8",ti:-1,s:[{w:[{r:[438,281,77,62]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[438,281,77,62]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[82,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:86,m:15,k:0,rs:true,n:"false9",ti:-1,s:[{w:[{r:[557,371,77,169]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[557,371,77,169]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[86,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:89,m:15,k:0,rs:true,n:"false10",ti:-1,s:[{w:[{r:[633,261,77,84]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[633,261,77,84]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[89,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:90,m:15,k:0,rs:true,n:"false11",ti:-1,s:[{w:[{r:[569,146,94,115]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[569,146,94,115]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[90,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:91,m:15,k:0,rs:true,n:"false12",ti:-1,s:[{w:[{r:[786,203,83,98]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[786,203,83,98]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[91,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:92,m:15,k:0,rs:true,n:"false13",ti:-1,s:[{w:[{r:[719,183,67,78]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[719,183,67,78]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[92,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:94,m:15,k:0,rs:true,n:"false14",ti:-1,s:[{w:[{r:[813,341,77,62]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[813,341,77,62]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[94,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:95,m:15,k:0,rs:true,n:"false15",ti:-1,s:[{w:[{r:[889,341,77,62]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[889,341,77,62]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[95,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:84,m:15,k:0,rs:true,n:"false16",ti:-1,s:[{w:[{r:[467,391,77,62]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[467,391,77,62]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[84,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:85,m:15,k:0,rs:true,n:"false17",ti:-1,s:[{w:[{r:[477,462,77,62]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[477,462,77,62]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[85,0,1,""]],[33,[1,"pointsBeeBFieldX","1",0]]]]]]],s:-1},uts:1,t:0}],n:"hotspotGame",ti:-1,s:[{w:[{r:["21885%","15760%","77200%","77238%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1},uts:1},{i:2,m:15,k:2,rs:true,n:"ImageBee",ti:-1,s:[{w:[{r:[29,113,228,160]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10021,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"textboxIntroduction",ti:-1,s:[{w:[{r:[29,336,228,334]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Klicke auf die richtigen Blüten für diese Bienenart. Für jede richtige Blüte erhältst du +2 Punkte, für jede falsche -1 Punkt. Insgesamt hast du %pointsBeeBFieldX% von %maxPointsBeeBFieldX% Punkten erreicht.</p>","font-family:'Arial';font-size:24px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:40,m:15,k:23,rs:true,n:"timer",ti:-1,s:[{w:[{r:[1066,34,130,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"> </p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[10]}],f:35651584,e:{l:[[40,[[27,[44,0,[200,0,0]]]]]],s:-1},uts:0,t:0,tmp:{duration:30000,type:0,subType:2,countdown:true}},{i:41,m:15,k:0,rs:true,n:"textboxTime",ti:-1,s:[{w:[{r:[978,39,124,37]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zeit:</p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35651584,e:{s:-1},uts:1,t:2},{i:44,m:15,k:21,cc:[{i:43,m:15,k:0,rs:true,n:"Form_43",ti:-1,s:[{w:[{r:[542,294,339,155]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Deine Zeit ist leider abgelaufen.</p>","font-family:'Arial';font-size:28px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:2097152,e:{s:-1},uts:1,t:0},{i:42,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0}],n:"timeOut",ti:-1,s:[{w:[{r:["-456%","-810%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:2359296,e:{s:-1},uts:1},{i:110,m:15,k:21,cc:[{i:111,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0},{i:108,m:15,k:0,rs:true,n:"allFlowersCorrectText",ti:-1,s:[{w:[{r:[560,130,273,182]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sehr gut, du hast alle richtigen Blüten gefunden</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:109,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[628,236,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73]]]],s:-1,f:8},uts:1,t:0}],n:"allFlowersCorrect",ti:-1,s:[{w:[{r:["325%","579%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35913728,e:{s:-1},uts:1},{i:6,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[29,34,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73],[45,[40,0]]]]],s:-1,f:8},uts:0,t:0},{i:99,m:15,k:0,rs:true,n:"Form_99",ti:-1,s:[{w:[{r:[29,269,228,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"><span style=\"font-weight:bold;\">Garten-Wollbiene</span></p>","font-family:'Arial';font-size:22px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:113,m:15,k:0,rs:true,c:6,n:"Form_113",ti:-1,f:35682304,s:[{w:[{r:[271,699,771,17]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum &amp; Datenschutz </p>","font-family:'Arial';font-size:12px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],e:{l:[[3,[[5,232]]]],s:-1},uts:1,t:0}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]],[43,[40,0]],[14,57],[14,58]]]]}},{at:"BeeBFieldY",i:179,de:"",a:false,n:"<p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeBFieldY</p>",d:3000,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste",[[40,[[1006,0,0]]]]]],cc:[{i:117,m:15,k:21,cc:[{i:70,m:15,k:2,rs:true,n:"flowerBackground",ti:-1,s:[{w:[{r:[0,0,988,556]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10014,1]}],f:169869696,e:{s:-1,f:8},uts:1,t:0},{i:39,m:15,k:0,rs:true,n:"correct1",ti:-1,s:[{w:[{r:[0,230,94,143]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[0,230,94,143]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[39,0,1,""]],[33,[0,"pointsBeeBFieldY","2",0]],[14,59]]]]]],s:-1},uts:1,t:0},{i:99,m:15,k:0,rs:true,n:"correct2",ti:-1,s:[{w:[{r:[73,373,76,107]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[73,373,76,107]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[99,0,1,""]],[33,[0,"pointsBeeBFieldY","2",0]],[14,60]]]]]],s:-1},uts:1,t:0},{i:102,m:15,k:0,rs:true,n:"correct3",ti:-1,s:[{w:[{r:[256,329,76,72]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[256,329,76,72]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[102,0,1,""]],[33,[0,"pointsBeeBFieldY","2",0]],[14,61]]]]]],s:-1},uts:1,t:0},{i:105,m:15,k:0,rs:true,n:"correct4",ti:-1,s:[{w:[{r:[246,448,70,108]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[246,448,70,108]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[105,0,1,""]],[33,[0,"pointsBeeBFieldY","2",0]],[14,62]]]]]],s:-1},uts:1,t:0},{i:106,m:15,k:0,rs:true,n:"correct5",ti:-1,s:[{w:[{r:[426,279,54,62]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[426,279,54,62]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[106,0,1,""]],[33,[0,"pointsBeeBFieldY","2",0]],[14,63]]]]]],s:-1},uts:1,t:0},{i:110,m:15,k:0,rs:true,n:"correct6",ti:-1,s:[{w:[{r:[566,365,76,191]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[566,365,76,191]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[110,0,1,""]],[33,[0,"pointsBeeBFieldY","2",0]],[14,64]]]]]],s:-1},uts:1,t:0},{i:111,m:15,k:0,rs:true,n:"correct7",ti:-1,s:[{w:[{r:[660,340,61,191]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[660,340,61,191]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[111,0,1,""]],[33,[0,"pointsBeeBFieldY","2",0]],[14,65]]]]]],s:-1},uts:1,t:0},{i:112,m:15,k:0,rs:true,n:"correct8",ti:-1,s:[{w:[{r:[642,214,110,126]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[642,214,110,126]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[112,0,1,""]],[33,[0,"pointsBeeBFieldY","2",0]],[14,66]]]]]],s:-1},uts:1,t:0},{i:73,m:15,k:0,rs:true,n:"false1",ti:-1,s:[{w:[{r:[20,480,63,64]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[20,480,63,64]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[73,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:100,m:15,k:0,rs:true,n:"false2",ti:-1,s:[{w:[{r:[168,247,63,64]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[168,247,63,64]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[100,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:101,m:15,k:0,rs:true,n:"false3",ti:-1,s:[{w:[{r:[285,265,63,64]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[285,265,63,64]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[101,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:103,m:15,k:0,rs:true,n:"false4",ti:-1,s:[{w:[{r:[363,354,63,64]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[363,354,63,64]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[103,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:104,m:15,k:0,rs:true,n:"false5",ti:-1,s:[{w:[{r:[332,448,63,64]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[332,448,63,64]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[104,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:107,m:15,k:0,rs:true,n:"false6",ti:-1,s:[{w:[{r:[395,492,63,64]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[395,492,63,64]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[107,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:108,m:15,k:0,rs:true,n:"false7",ti:-1,s:[{w:[{r:[458,354,84,190]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[458,354,84,190]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[108,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:109,m:15,k:0,rs:true,n:"false8",ti:-1,s:[{w:[{r:[551,279,66,75]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[551,279,66,75]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[109,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:113,m:15,k:0,rs:true,n:"false9",ti:-1,s:[{w:[{r:[767,244,84,158]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[767,244,84,158]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[113,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:114,m:15,k:0,rs:true,n:"false10",ti:-1,s:[{w:[{r:[721,418,84,68]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[721,418,84,68]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[114,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:115,m:15,k:0,rs:true,n:"false11",ti:-1,s:[{w:[{r:[809,411,84,68]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[809,411,84,68]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[115,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:116,m:15,k:0,rs:true,n:"false12",ti:-1,s:[{w:[{r:[725,487,84,68]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[725,487,84,68]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[116,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:118,m:15,k:0,rs:true,n:"false13",ti:-1,s:[{w:[{r:[893,230,84,215]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[893,230,84,215]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[118,0,1,""]],[33,[1,"pointsBeeBFieldY","1",0]]]]]]],s:-1},uts:1,t:0}],n:"hotspotGame",ti:-1,s:[{w:[{r:["21885%","15760%","77200%","77195%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1},uts:1},{i:2,m:15,k:2,rs:true,n:"ImageBee",ti:-1,s:[{w:[{r:[29,113,228,160]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10021,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"textboxIntroduction",ti:-1,s:[{w:[{r:[29,344,228,326]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Klicke auf die richtigen Blüten für diese Bienenart. Für jede richtige Blüte erhältst du +2 Punkte, für jede falsche -1 Punkt. Insgesamt hast du %pointsBeeBFieldY% von %maxPointsBeeBFieldY% Punkten erreicht.</p>","font-family:'Arial';font-size:24px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:40,m:15,k:23,rs:true,n:"timer",ti:-1,s:[{w:[{r:[1066,34,130,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"> </p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[10]}],f:35651584,e:{l:[[40,[[27,[44,0,[200,0,0]]]]]],s:-1},uts:0,t:0,tmp:{duration:30000,type:0,subType:2,countdown:true}},{i:41,m:15,k:0,rs:true,n:"textboxTime",ti:-1,s:[{w:[{r:[978,39,124,37]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zeit:</p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35651584,e:{s:-1},uts:1,t:2},{i:44,m:15,k:21,cc:[{i:43,m:15,k:0,rs:true,n:"Form_43",ti:-1,s:[{w:[{r:[542,294,339,155]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Deine Zeit ist leider abgelaufen.</p>","font-family:'Arial';font-size:28px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:2097152,e:{s:-1},uts:1,t:0},{i:42,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0}],n:"timeOut",ti:-1,s:[{w:[{r:["-456%","-810%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:2359296,e:{s:-1},uts:1},{i:128,m:15,k:21,cc:[{i:129,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0},{i:126,m:15,k:0,rs:true,n:"allFlowersCorrectText",ti:-1,s:[{w:[{r:[560,130,273,182]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sehr gut, du hast alle richtigen Blüten gefunden</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:127,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[628,236,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73]]]],s:-1,f:8},uts:1,t:0}],n:"allFlowersCorrect",ti:-1,s:[{w:[{r:["325%","579%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35913728,e:{s:-1},uts:1},{i:6,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[29,34,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73],[45,[40,0]]]]],s:-1,f:8},uts:0,t:0},{i:121,m:15,k:0,rs:true,n:"Form_121",ti:-1,s:[{w:[{r:[29,269,228,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"><span style=\"font-weight:bold;\">Garten-Wollbiene</span></p>","font-family:'Arial';font-size:22px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:131,m:15,k:0,rs:true,c:6,n:"Form_131",ti:-1,f:35682304,s:[{w:[{r:[271,699,771,17]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum &amp; Datenschutz </p>","font-family:'Arial';font-size:12px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],e:{l:[[3,[[5,232]]]],s:-1},uts:1,t:0}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]],[43,[40,0]],[14,67],[14,68]]]]}},{at:"BeeCFieldX",i:181,de:"",a:false,n:"<p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeCFieldX</p>",d:3000,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste",[[40,[[1006,0,0]]]]]],cc:[{i:123,m:15,k:21,cc:[{i:70,m:15,k:2,rs:true,n:"flowerBackground",ti:-1,s:[{w:[{r:[0,0,988,556]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10013,1]}],f:169869696,e:{s:-1,f:8},uts:1,t:0},{i:39,m:15,k:0,rs:true,n:"correct1",ti:-1,s:[{w:[{r:[186,244,116,73]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[186,244,116,73]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[39,0,1,""]],[33,[0,"pointsBeeCFieldX","2",0]],[14,69]]]]]],s:-1},uts:1,t:0},{i:103,m:15,k:0,rs:true,n:"correct2",ti:-1,s:[{w:[{r:[630,268,68,73]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[630,268,68,73]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[103,0,1,""]],[33,[0,"pointsBeeCFieldX","2",0]],[14,70]]]]]],s:-1},uts:1,t:0},{i:104,m:15,k:0,rs:true,n:"correct3",ti:-1,s:[{w:[{r:[726,195,68,73]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[726,195,68,73]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[104,0,1,""]],[33,[0,"pointsBeeCFieldX","2",0]],[14,71]]]]]],s:-1},uts:1,t:0},{i:105,m:15,k:0,rs:true,n:"correct4",ti:-1,s:[{w:[{r:[794,195,78,109]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[794,195,78,109]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[105,0,1,""]],[33,[0,"pointsBeeCFieldX","2",0]],[14,72]]]]]],s:-1},uts:1,t:0},{i:100,m:15,k:0,rs:true,n:"false1",ti:-1,s:[{w:[{r:[11,280,84,276]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[11,280,84,276]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[100,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:101,m:15,k:0,rs:true,n:"false2",ti:-1,s:[{w:[{r:[201,453,55,50]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[201,453,55,50]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[101,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:102,m:15,k:0,rs:true,n:"false3",ti:-1,s:[{w:[{r:[186,403,71,50]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[186,403,71,50]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[102,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:106,m:15,k:0,rs:true,n:"false4",ti:-1,s:[{w:[{r:[201,317,71,77]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[201,317,71,77]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[106,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:107,m:15,k:0,rs:true,n:"false5",ti:-1,s:[{w:[{r:[302,302,100,176]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[302,302,100,176]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[107,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:108,m:15,k:0,rs:true,n:"false6",ti:-1,s:[{w:[{r:[318,492,67,64]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[318,492,67,64]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[108,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:109,m:15,k:0,rs:true,n:"false7",ti:-1,s:[{w:[{r:[402,403,68,152]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[402,403,68,152]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[109,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:110,m:15,k:0,rs:true,n:"false8",ti:-1,s:[{w:[{r:[352,222,68,81]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[352,222,68,81]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[110,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:111,m:15,k:0,rs:true,n:"false9",ti:-1,s:[{w:[{r:[436,268,68,81]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[436,268,68,81]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[111,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:112,m:15,k:0,rs:true,n:"false10",ti:-1,s:[{w:[{r:[469,390,68,68]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[469,390,68,68]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[112,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:113,m:15,k:0,rs:true,n:"false11",ti:-1,s:[{w:[{r:[481,458,68,68]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[481,458,68,68]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[113,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:114,m:15,k:0,rs:true,n:"false12",ti:-1,s:[{w:[{r:[549,365,80,182]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[549,365,80,182]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[114,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:115,m:15,k:0,rs:true,n:"false13",ti:-1,s:[{w:[{r:[503,278,80,87]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[503,278,80,87]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[115,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:116,m:15,k:0,rs:true,n:"false14",ti:-1,s:[{w:[{r:[583,321,46,43]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[583,321,46,43]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[116,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:117,m:15,k:0,rs:true,n:"false15",ti:-1,s:[{w:[{r:[562,147,89,121]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[562,147,89,121]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[117,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:118,m:15,k:0,rs:true,n:"false16",ti:-1,s:[{w:[{r:[887,201,89,121]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[887,201,89,121]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[118,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:119,m:15,k:0,rs:true,n:"false17",ti:-1,s:[{w:[{r:[887,329,89,72]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[887,329,89,72]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[119,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:120,m:15,k:0,rs:true,n:"false18",ti:-1,s:[{w:[{r:[798,343,89,72]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[798,343,89,72]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[120,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:121,m:15,k:0,rs:true,n:"false19",ti:-1,s:[{w:[{r:[705,276,89,270]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[705,276,89,270]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[121,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:122,m:15,k:0,rs:true,n:"false20",ti:-1,s:[{w:[{r:[862,415,89,141]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[862,415,89,141]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[122,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0},{i:73,m:15,k:0,rs:true,n:"false21",ti:-1,s:[{w:[{r:[123,222,63,215]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[123,222,63,215]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[73,0,1,""]],[33,[1,"pointsBeeCFieldX","1",0]]]]]]],s:-1},uts:1,t:0}],n:"hotspotGame",ti:-1,s:[{w:[{r:["21885%","15760%","77200%","77195%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1},uts:1},{i:2,m:15,k:2,rs:true,n:"ImageBee",ti:-1,s:[{w:[{r:[29,113,228,160]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10020,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"textboxIntroduction",ti:-1,s:[{w:[{r:[29,345,228,325]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Klicke auf die richtigen Blüten für diese Bienenart. Für jede richtige Blüte erhältst du +2 Punkte, für jede falsche -1 Punkt. Insgesamt hast du %pointsBeeCFieldX% von %maxPointsBeeCFieldX% Punkten erreicht.</p>","font-family:'Arial';font-size:24px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:40,m:15,k:23,rs:true,n:"timer",ti:-1,s:[{w:[{r:[1066,34,130,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"> </p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[10]}],f:35651584,e:{l:[[40,[[27,[44,0,[200,0,0]]]]]],s:-1},uts:0,t:0,tmp:{duration:30000,type:0,subType:2,countdown:true}},{i:41,m:15,k:0,rs:true,n:"textboxTime",ti:-1,s:[{w:[{r:[978,39,124,37]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zeit:</p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35651584,e:{s:-1},uts:1,t:2},{i:44,m:15,k:21,cc:[{i:43,m:15,k:0,rs:true,n:"Form_43",ti:-1,s:[{w:[{r:[542,294,339,155]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Deine Zeit ist leider abgelaufen.</p>","font-family:'Arial';font-size:28px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:2097152,e:{s:-1},uts:1,t:0},{i:42,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0}],n:"timeOut",ti:-1,s:[{w:[{r:["-456%","-810%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:2359296,e:{s:-1},uts:1},{i:131,m:15,k:21,cc:[{i:132,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0},{i:129,m:15,k:0,rs:true,n:"allFlowersCorrectText",ti:-1,s:[{w:[{r:[560,130,273,182]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sehr gut, du hast alle richtigen Blüten gefunden</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:130,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[628,236,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73]]]],s:-1,f:8},uts:1,t:0}],n:"allFlowersCorrect",ti:-1,s:[{w:[{r:["325%","579%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35913728,e:{s:-1},uts:1},{i:6,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[29,34,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73],[45,[40,0]]]]],s:-1,f:8},uts:0,t:0},{i:124,m:15,k:0,rs:true,n:"Form_124",ti:-1,s:[{w:[{r:[29,271,228,64]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"><span style=\"font-weight:bold;\">Glockenblumen-Scherenbiene</span></p>","font-family:'Arial';font-size:22px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:134,m:15,k:0,rs:true,c:6,n:"Form_134",ti:-1,f:35682304,s:[{w:[{r:[271,699,771,17]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum &amp; Datenschutz </p>","font-family:'Arial';font-size:12px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],e:{l:[[3,[[5,232]]]],s:-1},uts:1,t:0}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]],[43,[40,0]],[14,73],[14,74]]]]}},{at:"BeeCFieldY",i:182,de:"",a:false,n:"<p style=\"margin-top: 0px; margin-bottom: 0px; \">BeeCFieldY</p>",d:3000,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste",[[40,[[1006,0,0]]]]]],cc:[{i:138,m:15,k:21,cc:[{i:70,m:15,k:2,rs:true,n:"flowerBackground",ti:-1,s:[{w:[{r:[0,0,988,556]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10014,1]}],f:169869696,e:{s:-1,f:8},uts:1,t:0},{i:39,m:15,k:0,rs:true,n:"correct1",ti:-1,s:[{w:[{r:[554,278,58,71]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[554,278,58,71]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2693976144],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[39,0,1,""]],[33,[0,"pointsBeeCFieldY","2",0]],[14,75]]]]]],s:-1},uts:1,t:0},{i:73,m:15,k:0,rs:true,n:"false1",ti:-1,s:[{w:[{r:[20,480,63,64]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[20,480,63,64]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[73,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:119,m:15,k:0,rs:true,n:"false2",ti:-1,s:[{w:[{r:[83,365,63,132]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[83,365,63,132]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[119,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:120,m:15,k:0,rs:true,n:"false3",ti:-1,s:[{w:[{r:[20,231,74,134]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[20,231,74,134]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[120,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:121,m:15,k:0,rs:true,n:"false4",ti:-1,s:[{w:[{r:[164,244,74,75]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[164,244,74,75]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[121,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:122,m:15,k:0,rs:true,n:"false5",ti:-1,s:[{w:[{r:[283,254,74,75]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[283,254,74,75]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[122,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:123,m:15,k:0,rs:true,n:"false6",ti:-1,s:[{w:[{r:[256,329,74,75]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[256,329,74,75]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[123,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:124,m:15,k:0,rs:true,n:"false7",ti:-1,s:[{w:[{r:[245,437,74,119]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[245,437,74,119]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[124,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:125,m:15,k:0,rs:true,n:"false8",ti:-1,s:[{w:[{r:[331,438,66,74]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[331,438,66,74]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[125,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:126,m:15,k:0,rs:true,n:"false9",ti:-1,s:[{w:[{r:[360,349,66,74]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[360,349,66,74]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[126,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:127,m:15,k:0,rs:true,n:"false10",ti:-1,s:[{w:[{r:[428,292,49,43]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[428,292,49,43]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[127,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:128,m:15,k:0,rs:true,n:"false11",ti:-1,s:[{w:[{r:[403,500,49,43]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[403,500,49,43]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[128,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:129,m:15,k:0,rs:true,n:"false12",ti:-1,s:[{w:[{r:[460,365,94,157]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[460,365,94,157]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[129,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:130,m:15,k:0,rs:true,n:"false13",ti:-1,s:[{w:[{r:[565,386,94,157]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[565,386,94,157]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[130,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:131,m:15,k:0,rs:true,n:"false14",ti:-1,s:[{w:[{r:[666,345,57,199]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[666,345,57,199]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[131,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:132,m:15,k:0,rs:true,n:"false15",ti:-1,s:[{w:[{r:[659,214,101,129]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[659,214,101,129]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[132,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:133,m:15,k:0,rs:true,n:"false16",ti:-1,s:[{w:[{r:[760,254,101,129]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[760,254,101,129]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[133,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:134,m:15,k:0,rs:true,n:"false17",ti:-1,s:[{w:[{r:[723,424,78,65]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[723,424,78,65]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[134,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:135,m:15,k:0,rs:true,n:"false18",ti:-1,s:[{w:[{r:[812,415,78,65]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[812,415,78,65]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[135,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:136,m:15,k:0,rs:true,n:"false19",ti:-1,s:[{w:[{r:[723,490,78,65]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[723,490,78,65]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[136,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0},{i:137,m:15,k:0,rs:true,n:"false20",ti:-1,s:[{w:[{r:[898,227,78,220]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,3190371],a:[0]},{l:[1,4286611584,321],w:[{r:[898,227,78,220]}],t:["","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:1,p:8,n:"Disabled",r:0,f:[1,2701066240],a:[0]}],f:35651584,e:{l:[[3,[[41,[[28,[137,0,1,""]],[33,[1,"pointsBeeCFieldY","1",0]]]]]]],s:-1},uts:1,t:0}],n:"hotspotGame",ti:-1,s:[{w:[{r:["21885%","15760%","77200%","77195%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,e:{s:-1},uts:1},{i:2,m:15,k:2,rs:true,n:"ImageBee",ti:-1,s:[{w:[{r:[29,113,228,160]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10020,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"textboxIntroduction",ti:-1,s:[{w:[{r:[29,345,228,325]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Klicke auf die richtigen Blüten für diese Bienenart. Für jede richtige Blüte erhältst du +2 Punkte, für jede falsche -1 Punkt. Insgesamt hast du %pointsBeeCFieldY% von %maxPointsBeeCFieldY% Punkten erreicht.</p>","font-family:'Arial';font-size:24px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:40,m:15,k:23,rs:true,n:"timer",ti:-1,s:[{w:[{r:[1066,34,130,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"> </p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[10]}],f:35651584,e:{l:[[40,[[27,[44,0,[200,0,0]]]]]],s:-1},uts:0,t:0,tmp:{duration:30000,type:0,subType:2,countdown:true}},{i:41,m:15,k:0,rs:true,n:"textboxTime",ti:-1,s:[{w:[{r:[978,39,124,37]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zeit:</p>","font-family:'Arial';font-size:24px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35651584,e:{s:-1},uts:1,t:2},{i:44,m:15,k:21,cc:[{i:43,m:15,k:0,rs:true,n:"Form_43",ti:-1,s:[{w:[{r:[542,294,339,155]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Deine Zeit ist leider abgelaufen.</p>","font-family:'Arial';font-size:28px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:2097152,e:{s:-1},uts:1,t:0},{i:42,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0}],n:"timeOut",ti:-1,s:[{w:[{r:["-456%","-810%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:2359296,e:{s:-1},uts:1},{i:142,m:15,k:21,cc:[{i:145,m:15,k:0,rs:true,n:"timeOutOverlay",ti:-1,s:[{w:[{r:[0,0,1286,726]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,10074807],a:[0]}],f:2097152,e:{s:-1},uts:1,t:0},{i:140,m:15,k:0,rs:true,n:"allFlowersCorrectText",ti:-1,s:[{w:[{r:[560,130,273,182]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sehr gut, du hast alle richtigen Blüten gefunden</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p><p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4288264887],a:[1,[100]]}],f:35651584,e:{s:-1},uts:1,t:0},{i:141,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[628,236,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[628,236,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73]]]],s:-1,f:8},uts:1,t:0}],n:"allFlowersCorrect",ti:-1,s:[{w:[{r:["325%","579%","100470%","100833%"]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35913728,e:{s:-1},uts:1},{i:6,m:15,k:10,rs:true,c:6,n:"buttonZurück",ti:0,f:35651584,s:[{w:[{r:[29,34,137,48]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[29,34,137,48]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[5,73],[45,[40,0]]]]],s:-1,f:8},uts:0,t:0},{i:139,m:15,k:0,rs:true,n:"Form_139",ti:-1,s:[{w:[{r:[29,271,228,64]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \"><span style=\"font-weight:bold;\">Glockenblumen-Scherenbiene</span></p>","font-family:'Arial';font-size:22px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294895257],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:147,m:15,k:0,rs:true,c:6,n:"Form_147",ti:-1,f:35682304,s:[{w:[{r:[271,699,771,17]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum &amp; Datenschutz </p>","font-family:'Arial';font-size:12px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],e:{l:[[3,[[5,232]]]],s:-1},uts:1,t:0}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]],[43,[40,0]],[14,76],[14,77]]]]}},{at:"FinalSlide",i:183,de:"",a:false,n:"<p style=\"margin-top: 0px; margin-bottom: 0px; \">FinalSlide</p>",d:3000,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste"]],cc:[{i:2,m:15,k:0,rs:true,n:"Form_2",ti:-1,s:[{w:[{r:[-10,-8,1299,178]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:3,m:15,k:2,rs:true,n:"Bild_3",ti:-1,s:[{w:[{r:[0,94,407,152]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10006,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:4,m:15,k:2,rs:true,n:"Bild_4",ti:-1,s:[{w:[{r:[1005,21,241,118]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10007,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:5,m:15,k:0,rs:true,n:"Textfeld_5",ti:-1,s:[{w:[{r:[384,252,656,99]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sehr gut, du hast es geschafft und deine Zeit war: %timeInGame%.</p>","font-family:'Arial';font-size:22px;color:#000000;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35651584,e:{s:-1},uts:1,t:2},{i:11,m:15,k:27,n:"Tabelle_11",e:{s:-1,f:8},ti:-1,s:[{w:[{r:[404,360,617,201]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null}],f:35651584,table:{l:1,r:[{c:[{t:["","font-family:'Arial';font-size:18px;font-weight:bold;color:#FFFFFF;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4278731577],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:25000,crs:1},{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Garten-Wollbiene</p>","font-family:'Arial';font-size:18px;font-weight:bold;color:#FFFFFF;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4278731577],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:25000,crs:1},{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Glockenblumen-Scherenbiene</p>","font-family:'Arial';font-size:18px;font-weight:bold;color:#FFFFFF;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4278731577],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:25641,crs:1},{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiesenhummel</p>","font-family:'Arial';font-size:18px;font-weight:bold;color:#FFFFFF;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4278731577],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:24359,crs:1}],g:1},{c:[{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 1</p>","font-family:'Arial';font-size:18px;font-weight:normal;color:#000000;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4292273122],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:25000,crs:1},{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">%pointsBeeBFieldX%</p>","font-family:'Arial';font-size:18px;font-weight:normal;color:#000000;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4292273122],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:25000,crs:1},{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">%pointsBeeCFieldX%</p>","font-family:'Arial';font-size:18px;font-weight:normal;color:#000000;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4292273122],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:25641,crs:1},{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">%pointsBeeAFieldX%</p>","font-family:'Arial';font-size:18px;font-weight:normal;color:#000000;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4292273122],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:24359,crs:1}],g:1},{c:[{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Wiese 2</p>","font-family:'Arial';font-size:18px;font-weight:normal;color:#000000;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4293587440],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:25000,crs:1},{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">%pointsBeeBFieldY%</p>","font-family:'Arial';font-size:18px;font-weight:normal;color:#000000;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4293587440],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:25000,crs:1},{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">%pointsBeeCFieldY%</p>","font-family:'Arial';font-size:18px;font-weight:normal;color:#000000;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4293587440],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:25641,crs:1},{t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">%pointsBeeAFieldY%</p>","font-family:'Arial';font-size:18px;font-weight:normal;color:#000000;text-align:left;word-break: break-word;","top"],ccs:1,lb:[1500,4294967295,321],lr:[1500,4294967295,321],f:[1,4293587440],l:[1500,4294967295,321],h:33333,ll:[1500,4294967295,321],lt:[1500,4294967295,321],w:24359,crs:1}],g:1}]},uts:1},{i:12,m:15,k:10,rs:true,c:6,n:"Schaltfläche_12",ti:0,f:35651584,s:[{w:[{r:[1025,641,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nochmal</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[1025,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nochmal</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[1025,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nochmal</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[1025,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Nochmal</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[46]]]],s:-1,f:8},uts:0,t:0},{i:16,m:15,k:0,rs:true,c:6,n:"Form_16",ti:-1,f:35682304,s:[{w:[{r:[271,699,771,17]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum &amp; Datenschutz </p>","font-family:'Arial';font-size:12px;color:#FFFFFF;text-align:center;","top"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],e:{l:[[3,[[5,232]]]],s:-1},uts:1,t:0}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]],[33,[4,"timeInGame","apElapsedTime",1]]]]]}},{at:"Impressum und Datenschutz",i:232,de:"",a:false,n:"<p style=\"margin-top: 0px; margin-bottom: 0px; \">Impressum und Datenschutz</p><p style=\"margin-top: 0px; margin-bottom: 0px; \"></p>",d:3000,m:15,b:{f:[1,4288264887],ct:[]},h:[720],tl:[[0,"Hauptzeitleiste"]],cc:[{i:2,m:15,k:0,rs:true,n:"Form_2",ti:-1,s:[{w:[{r:[-10,-8,1299,178]}],d:1,t:["","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4294967295],a:[0]}],f:35651584,e:{s:-1},uts:1,t:0},{i:3,m:15,k:2,rs:true,n:"Bild_3",ti:-1,s:[{w:[{r:[0,94,407,152]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10006,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:4,m:15,k:2,rs:true,n:"Bild_4",ti:-1,s:[{w:[{r:[1005,21,241,118]}],d:1,t:[""],i:0,p:0,n:"Normal",r:0,f:null,a:[0],im:[10007,0]}],f:169869312,e:{s:-1,f:8},uts:1,t:0},{i:12,m:15,k:10,rs:true,c:6,n:"Schaltfläche_12",ti:0,f:35651584,s:[{w:[{r:[1025,641,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[1025,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[1025,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[1025,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Zurück</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[9]]]],s:-1,f:8},uts:0,t:0},{i:13,m:15,k:0,rs:true,n:"Form_13",ti:-1,s:[{w:[{r:[120,151,1040,94]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Impressum</p>","font-family:'Arial';font-size:60px;color:#FFFFFF;text-align:center;","bottom"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35683328,e:{s:-1},uts:1,t:0},{i:14,m:15,k:10,rs:true,c:6,n:"Schaltfläche_14",ti:0,f:35651584,s:[{w:[{r:[533,641,214,62]}],d:1,t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Datenschutz</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:0,p:0,n:"Normal",r:0,f:[1,4278731577],l:[1,4286750363,321],a:[1,[220]]},{l:[1,4285235840,321],w:[{r:[533,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Datenschutz</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:1,p:4,n:"Hover",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4283721316,321],w:[{r:[533,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Datenschutz</p>","font-family:'Arial';font-size:22px;color:#FFFFFF;text-align:center;","middle"],i:2,p:2,n:"Pressed",r:0,f:[1,4278731577],a:[1,[220]]},{l:[1,4286611584,321],w:[{r:[533,641,214,62]}],t:["<p style=\"text-align:center;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Datenschutz</p>","font-family:'Arial';font-size:22px;color:#969696;text-align:center;","middle"],i:3,p:8,n:"Disabled",r:0,f:[1,4278731577],a:[1,[220]]}],e:{l:[[3,[[13,["https://www.tu-braunschweig.de/datenschutzerklaerung","_blank"]]]]],s:-1,f:8},uts:0,t:0},{i:15,m:15,k:0,rs:true,n:"Textfeld_15",ti:-1,s:[{w:[{r:[51,286,1140,310]}],d:1,t:["<p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Verantwortlich für den Inhalt</p><p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p><p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">PD Dr. Dagmar Hilfert-Rüppell</p><p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Bienroder Weg 82</p><p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">38106 Braunschweig</p><p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">d.hilfert-rueppell(at)tu-bs.de</p><p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">0531 391 94110</p><p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">&nbsp;</p><p style=\"text-align:left;line-height: 1.20; margin-top: 0px; margin-bottom: 0px; \">Sofern nicht anders angegeben, stehen die Inhalte dieser Anwendung unter der Lizenz Creative Commons Namensnennung – Nicht kommerziell – Weitergabe unter gleichen Bedingungen 4.0 International (CC BY-NC-SA 4.0). CC-BY-NC-SA 4.0 Schmidt et al. (2026)</p>","font-family:'Arial';font-size:22px;color:#000000;text-align:left;","middle"],i:0,p:0,n:"Normal",r:0,f:null,a:[0]}],f:35651584,e:{s:-1},uts:1,t:2}],e:{l:[[16,[[42,[0,0,1,1,1,1],[[0,0,3,[true,"apReviewMode",0]]]],[38,["300_7",-1,0],[[0,0,3,[true,"apReviewMode",0]]]],[33,[4,"timeInGame","apElapsedTime",1]]]]]}}],textDir:"ltr",hasEquation:false,hasChart:false,has3DModel:false,ssid:"aW035KFI"},
	f = [
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
const numberOfObjects = 30;

for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    
    prez.object('correct' + i).disable(false); 
}
},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
const numberOfObjects = 30;

for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    
    prez.object('correct' + i).disable(false); 
}
},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
const numberOfObjects = 10;

for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    prez.object('correct' + i).disable(false); 
}

},
function(e, prez) {
const numberOfObjects = 18;


for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    prez.object('false' + i).disable(false);
}
},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
const numberOfObjects = 10;

for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    prez.object('correct' + i).disable(false); 
}

},
function(e, prez) {
const numberOfObjects = 18;


for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    prez.object('false' + i).disable(false);
}
},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
const numberOfObjects = 10;

for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    prez.object('correct' + i).disable(false); 
}

},
function(e, prez) {
const numberOfObjects = 22;


for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    prez.object('false' + i).disable(false);
}
},
function(e, prez) {
// get the slide index and assess the number of correct answers
var slideIndex = prez.currentSlideIndex() ;

var numberOfIterations;

switch(slideIndex) {
    case 3:
        numberOfIterations = prez.variable('maxPointsBeeAFieldX')/2;
        break;
    case 4:
        numberOfIterations = prez.variable('maxPointsBeeAFieldY')/2;
        break;
    case 5:
        numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;
        break;
    case 6:
        numberOfIterations = prez.variable('maxPointsBeeBFieldY')/2;
        break;
    case 7:
        numberOfIterations = prez.variable('maxPointsBeeCFieldX')/2;
        break;
    case 8:
        numberOfIterations = prez.variable('maxPointsBeeCFieldY')/2;
        break; 
    default: 
        break;
}

//prez.object('Console').text(numberOfIterations);

//var numberOfIterations = prez.variable('maxPointsBeeBFieldX')/2;

let allFlowCor = true;


// iterate over all correct objects
for (let i = 1; i <= numberOfIterations; i++) {

    let thisFlowCor = prez.object('correct' + i).disabled(); 

if(!thisFlowCor) //is true, when obj is disabled
    {
        allFlowCor = false;
    }

}

if (allFlowCor)
{
    prez.object('allFlowersCorrect').show();
    
}

},
function(e, prez) {
const numberOfObjects = 10;

for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    prez.object('correct' + i).disable(false); 
}

},
function(e, prez) {
const numberOfObjects = 20;


for (let i = 1; i <= numberOfObjects; i++) {
    // Dynamically access the object using window global object
    prez.object('false' + i).disable(false);
}
}
];
	d.f = f;
	d.playerIcons = {pause:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><rect x=\"12\" y=\"8\" width=\"4\" height=\"13\"/><rect x=\"20\" y=\"8\" width=\"4\" height=\"13\"/></svg>",restart:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><path d=\"M22,18c1.103,0,2-0.897,2-2v-5c0-1.103-0.897-2-2-2h-7c-1.103,0-2,0.897-2,2v3h-2v-3c0-2.206,1.794-4,4-4h7\tc2.206,0,4,1.794,4,4v5c0,2.206-1.794,4-4,4h-3v2l-4-3l4-3v2H22z\"/></svg>",cchide:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><path d=\"M17,21h-3c-2.205,0-4-1.794-4-4v-6c0-2.205,1.795-4,4-4h3v2h-3c-1.104,0-2,0.896-2,2v6c0,1.103,0.896,2,2,2h3V21z\"/><path d=\"M26,21h-3c-2.205,0-4-1.794-4-4v-6c0-2.205,1.795-4,4-4h3v2h-3c-1.104,0-2,0.896-2,2v6c0,1.103,0.896,2,2,2h3V21z\"/><rect x=\"10\" y=\"13\" width=\"16\" height=\"2\"/></svg>",last:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polyline points=\"12,7 12,22 21,16 21,22 24,22 24,7 21,7 21,13 \"/></svg>",exit:"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">  <g>    <rect x=\"15\" y=\"8\" width=\"2\" height=\"16\" transform=\"translate(-6.63 16) rotate(-45)\"/>    <rect x=\"8\" y=\"15\" width=\"16\" height=\"2\" transform=\"translate(-6.63 16) rotate(-45)\"/>  </g></svg>",next:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polygon points=\"18,22 26,14.5 18,7 18,12 12,7 12,22 18,17 \"/></svg>",speed20:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><circle cx=\"18\" cy=\"19\" r=\"2\"/><path d=\"M18,7.5c5.592,0,10.259,4.014,11.285,9.31l0.892-0.594C28.906,10.661,23.935,6.5,18,6.5\t\tc-5.877,0-10.807,4.082-12.135,9.557l0.957,0.288C8.025,11.281,12.574,7.5,18,7.5z\"/><polygon points=\"18.347,19.133 18.054,18.292 25.625,16.057 25.963,16.81 \"/></svg>",first:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polyline points=\"24,7 24,22 15,16 15,22 12,22 12,7 15,7 15,13 \"/></svg>",mute:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" enable-background=\"new 0 0 36 28\" xml:space=\"preserve\"><polygon points=\"14,17 18,21 18,7 14,11 11,11 11,17 \"/><path d=\"M20.687,18.5l-0.707-0.707c1.015-1.014,1.573-2.36,1.573-3.793c0-1.432-0.559-2.78-1.573-3.794l0.707-0.707\tc1.203,1.204,1.866,2.802,1.866,4.501S21.89,17.298,20.687,18.5z\"/><path d=\"M22.854,20.854l-0.707-0.707c1.644-1.643,2.549-3.826,2.549-6.147s-0.905-4.503-2.549-6.146l0.707-0.707\tc1.832,1.831,2.842,4.265,2.842,6.853S24.687,19.022,22.854,20.854z\"/></svg>",prev:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polygon points=\"18,22 10,14.5 18,7 18,12 24,7 24,22 18,17 \"/></svg>",play:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polygon points=\"12,22 12,7 25,14.5 \"/></svg>",about:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><rect x=\"16\" y=\"12\" width=\"4\" height=\"10\"/><path d=\"M20,8c0,1.105-0.672,2-1.5,2h-1C16.671,10,16,9.105,16,8l0,0c0-1.105,0.671-2,1.5-2h1C19.328,6,20,6.895,20,8L20,8z\"/></svg>",speed05:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><circle cx=\"18\" cy=\"19\" r=\"2\"/><polygon points=\"17.675,19.38 11,14 12,13 18.325,18.62 \"/><path d=\"M18,7.5c5.592,0,10.259,4.014,11.285,9.31l0.892-0.594C28.906,10.661,23.935,6.5,18,6.5\t\tc-5.877,0-10.807,4.082-12.135,9.557l0.957,0.288C8.025,11.281,12.574,7.5,18,7.5z\"/></svg>",autofit:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polyline points=\"12,9.414 15.293,12.707 16.707,11.293 13.414,8 13,8 16,8 16,6 10,6 10,12 12,12 12,9 \"/><polyline points=\"23.854,9.414 20.487,12.707 19.037,11.293 22.293,8 22.707,8 20,8 20,6 26,6 26,12 24,12 24,9 \"/><polyline points=\"12,18.439 15.293,15.073 16.707,16.598 13.414,20 13,20 16,20 16,22 10,22 10,16 12,16 12,19 \"/><polyline points=\"23.854,18.439 20.487,15.073 19.037,16.598 22.293,20 22.707,20 20,20 20,22 26,22 26,16 24,16 24,19 \"/></svg>",speed10:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><circle cx=\"18\" cy=\"19\" r=\"2\"/><path d=\"M18,7.5c5.592,0,10.259,4.014,11.285,9.31l0.892-0.594C28.906,10.661,23.935,6.5,18,6.5\t\tc-5.877,0-10.807,4.082-12.135,9.557l0.957,0.288C8.025,11.281,12.574,7.5,18,7.5z\"/><polygon points=\"18.542,19 17.583,19 17.25,11 18.054,11 \"/></svg>",closemenu:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><polygon points=\"7,8 11,4 11,2 5,8 11,14 11,12 \"/></svg>",check:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><polygon points=\"14,3 15,4 6,13 1,8 2,7 6,11 \"/></svg>",speed15:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><circle cx=\"18\" cy=\"19\" r=\"2\"/><path d=\"M18,7.5c5.592,0,10.259,4.014,11.285,9.31l0.892-0.594C28.906,10.661,23.935,6.5,18,6.5\t\tc-5.877,0-10.807,4.082-12.135,9.557l0.957,0.288C8.025,11.281,12.574,7.5,18,7.5z\"/><polygon points=\"18.542,19 18.054,18.292 23.333,13.375 23.917,14 \"/></svg>",sound:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polygon points=\"15,17 19,21 19,7 15,11 12,11 12,17 \"/><rect x=\"19.757\" y=\"13.5\" transform=\"matrix(0.7071 0.7071 -0.7071 0.7071 16.9289 -12.8701)\" width=\"8.485\" height=\"1\"/><rect x=\"23.5\" y=\"9.757\" transform=\"matrix(0.7071 0.7071 -0.7071 0.7071 16.9289 -12.8701)\" width=\"1\" height=\"8.485\"/></svg>",ccshow:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><path d=\"M17,21h-3c-2.205,0-4-1.794-4-4v-6c0-2.205,1.795-4,4-4h3v2h-3c-1.104,0-2,0.896-2,2v6c0,1.103,0.896,2,2,2h3V21z\"/><path d=\"M26,21h-3c-2.205,0-4-1.794-4-4v-6c0-2.205,1.795-4,4-4h3v2h-3c-1.104,0-2,0.896-2,2v6c0,1.103,0.896,2,2,2h3V21z\"/></svg>",sidebarshow:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><path d=\"M10,6v14h16V6H10z M24,18h-6V8h6V18z\"/></svg>",sidebarhide:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><path d=\"M10,6v14h16V6H10z M17,18h-5V8h5V18z M24,18h-5V8h5V18z\"/></svg>",fullscreen:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polygon points=\"12,8 16,8 16,6 10,6 10,12 12,12 \"/><polygon points=\"24,8 24,12 26,12 26,6 20,6 20,8 \"/><polygon points=\"24,20 20,20 20,22 26,22 26,16 24,16 \"/><polygon points=\"12,20 12,16 10,16 10,22 16,22 16,20 \"/></svg>",exitfullscreen:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\">\t<polygon points=\"14,10 14,6 16,6 16,12 10,12 10,10 \"/>\t<polygon points=\"22,10 22,6 20,6 20,12 26,12 26,10 \"/>\t<polygon points=\"22,18 22,22 20,22 20,16 26,16 26,18 \"/>\t<polygon points=\"14,18 10,18 10,16 16,16 16,22 14,22 \"/></svg>",actualsize:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polyline points=\"14.854,18.598 11.487,21.982 10.037,20.43 13.293,17 13.707,17 10,17 10,15 17,15 17,22 15,22 15,18 \"/><polyline points=\"14.854,9.439 11.487,6.073 10.037,7.598 13.293,11 13.707,11 10,11 10,13 17,13 17,6 15,6 15,10 \"/><polyline points=\"21.165,18.598 24.541,21.982 25.995,20.43 22.744,17 22.33,17 26,17 26,15 19,15 19,22 21,22 21,18 \"/><polyline points=\"21.165,9.439 24.541,6.073 25.995,7.598 22.744,11 22.33,11 26,11 26,13 19,13 19,6 21,6 21,10 \"/></svg>",correctvalues:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"18px\" height=\"18px\" viewBox=\"0 0 18 18\" enable-background=\"new 0 0 18 18\" xml:space=\"preserve\"><g>\t<defs>\t\t<rect id=\"SVGID_1_\" width=\"18\" height=\"18\"/>\t</defs>\t<clipPath id=\"SVGID_2_\">\t\t<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\t</clipPath>\t<path clip-path=\"url(#SVGID_2_)\" fill=\"#F05A28\" d=\"M17,13H3.5C2.671,13,2,12.328,2,11.5v-8C2,2.671,2.671,2,3.5,2H17V13z\"/>\t<polygon clip-path=\"url(#SVGID_2_)\" fill=\"#B23E1F\" points=\"14,16 14,13 17,13 \t\"/>\t<rect x=\"5\" y=\"5\" clip-path=\"url(#SVGID_2_)\" fill=\"#FFFFFF\" width=\"9\" height=\"1\"/>\t<rect x=\"5\" y=\"7\" clip-path=\"url(#SVGID_2_)\" fill=\"#FFFFFF\" width=\"9\" height=\"1\"/>\t<rect x=\"5\" y=\"9\" clip-path=\"url(#SVGID_2_)\" fill=\"#FFFFFF\" width=\"9\" height=\"1\"/></g></svg>",setting:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><path d=\"M24,13h1.912c-0.174-1.388-0.694-2.74-1.597-3.901l-1.365,1.365L21.536,9.05l1.365-1.365C21.74,6.782,20.388,6.262,19,6.087\tV8h-2V6.087c-1.388,0.174-2.741,0.695-3.901,1.598l1.365,1.365l-1.414,1.414l-1.365-1.365c-0.903,1.161-1.423,2.513-1.598,3.901H12\tv2h-1.913c0.175,1.388,0.695,2.74,1.598,3.9l1.365-1.365l1.414,1.414l-1.365,1.365c1.161,0.903,2.514,1.423,3.901,1.598V20h2v1.912\tc1.388-0.175,2.74-0.694,3.901-1.598l-1.365-1.365l1.414-1.414l1.365,1.365c0.902-1.16,1.423-2.513,1.597-3.9H24V13z M20.121,16.121\tc-1.171,1.172-3.071,1.172-4.243,0c-1.171-1.171-1.171-3.071,0-4.243c1.172-1.172,3.072-1.171,4.243,0\tC21.293,13.051,21.293,14.949,20.121,16.121z\"/></svg>",tochide:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><rect x=\"15\" y=\"6\" width=\"11\" height=\"2\"/><rect x=\"15\" y=\"18\" width=\"11\" height=\"2\"/><rect x=\"15\" y=\"12\" width=\"11\" height=\"2\"/><circle cx=\"11.5\" cy=\"7.5\" r=\"1.5\"/><circle cx=\"11.5\" cy=\"13\" r=\"1.5\"/><circle cx=\"11.5\" cy=\"18.5\" r=\"1.5\"/><rect x=\"19\" y=\"3.292\" transform=\"matrix(0.8242 0.5664 -0.5664 0.8242 10.7917 -8.7581)\" width=\"1\" height=\"19.416\"/></svg>",tocshow:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><rect x=\"15\" y=\"6\" width=\"11\" height=\"2\"/><rect x=\"15\" y=\"18\" width=\"11\" height=\"2\"/><rect x=\"15\" y=\"12\" width=\"11\" height=\"2\"/><circle cx=\"11.5\" cy=\"7.5\" r=\"1.5\"/><circle cx=\"11.5\" cy=\"13\" r=\"1.5\"/><circle cx=\"11.5\" cy=\"18.5\" r=\"1.5\"/></svg>",resources:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"36px\" height=\"28px\" viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><polygon points=\"20.155,12.416 10.496,9.827 17.845,5.584 27.504,8.173 \"/><polygon points=\"20.155,17.415 10.496,14.827 14.43,13.231 20.031,14.594 24.042,12.271 27.504,13.173 \"/><polygon points=\"20.155,22.415 10.496,19.827 15,18 20.031,19.5 23.976,17.254 27.504,18.173 \"/></svg>",correct:"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">  <g id=\"Layer_1\" data-name=\"Layer 1\">    <circle cx=\"16\" cy=\"16\" r=\"12\" fill=\"none\" stroke=\"#2fae62\" stroke-miterlimit=\"10\" stroke-width=\"1.77778\"/>    <polyline points=\"8.982 15.518 13.982 20.518 23.018 11.482\" fill=\"none\" stroke=\"#2fae62\" stroke-miterlimit=\"10\" stroke-width=\"2\"/>  </g></svg>",incorrect:"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">  <g id=\"Layer_1\" data-name=\"Layer 1\">    <circle cx=\"16\" cy=\"16\" r=\"12\" fill=\"none\" stroke=\"#d15327\" stroke-miterlimit=\"10\" stroke-width=\"1.77778\"/>    <line x1=\"10.5\" y1=\"21.5\" x2=\"21.5\" y2=\"10.5\" fill=\"none\" stroke=\"#d15327\" stroke-miterlimit=\"10\" stroke-width=\"2\"/>    <line x1=\"10.5\" y1=\"10.5\" x2=\"21.5\" y2=\"21.5\" fill=\"none\" stroke=\"#d15327\" stroke-miterlimit=\"10\" stroke-width=\"2\"/>  </g></svg>",closepane:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" enable-background=\"new 0 0 16 16\" xml:space=\"preserve\"><polygon points=\"8,9 4,5 2,5 8,11 14,5 12,5 \"/></svg>",current:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><polygon points=\"14,8 8,2 8,5 2,5 2,11 8,11 8,14 \"/></svg>",expanded:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><polygon points=\"2,6 14,6 8,12 \"/></svg>",collapsed:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><polygon points=\"6,14 6,2 12,8 \"/></svg>",completed:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><polygon points=\"12,3 6,11 3,8 1,10 6,15 16,2 \"/></svg>",openmenu:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><polygon points=\"9,8 5,4 5,2 11,8 5,14 5,12 \"/></svg>",rightarrow:"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t viewBox=\"0 0 36 28\" style=\"enable-background:new 0 0 36 28;\" xml:space=\"preserve\"><path d=\"M19.5,14c0,0.1-0.1,0.3-0.2,0.4l-7.2,7.2c-0.1,0.1-0.2,0.2-0.4,0.2s-0.3-0.1-0.4-0.2l-0.8-0.8c-0.1-0.1-0.2-0.2-0.2-0.4\ts0.1-0.3,0.2-0.4l6.1-6.1l-6.1-6.1c-0.1-0.1-0.2-0.2-0.2-0.4s0.1-0.3,0.2-0.4l0.8-0.8c0.1-0.1,0.2-0.2,0.4-0.2s0.3,0.1,0.4,0.2\tl7.2,7.2C19.5,13.7,19.5,13.9,19.5,14z M25.5,14c0,0.1-0.1,0.3-0.2,0.4l-7.2,7.2c-0.1,0.1-0.2,0.2-0.4,0.2c-0.1,0-0.3-0.1-0.4-0.2\tl-0.8-0.8c-0.1-0.1-0.2-0.2-0.2-0.4s0.1-0.3,0.2-0.4l6.1-6.1l-6.1-6.1c-0.1-0.1-0.2-0.2-0.2-0.4s0.1-0.3,0.2-0.4l0.8-0.8\tc0.1-0.1,0.2-0.2,0.4-0.2c0.1,0,0.3,0.1,0.4,0.2l7.2,7.2C25.4,13.7,25.5,13.9,25.5,14z\"/></svg>"};
	d.playerLayouts = {topbar:"<div class=\"ap-toolbar-top ap-toolbar\" style=\"padding:5px;\" role=\"toolbar\" tabindex=\"0\">    <div class=\"ap-tool-projectname\"></div>    <div class=\"ap-button ap-tool-resources\" data-has-label=\"true\"></div></div>",bottombar:"<div class=\"ap-toolbar ap-toolbar-bottom\" style=\"display:flex;flex-direction:column;padding:0px;align-items:stretch;\" role=\"toolbar\" tabindex=\"0\">\t<style>\t\t.ap-toolbar-bottom .ap-tool-progress {\t\t\tmargin: 0px;\t\t\theight: 6px;\t\t}\t\t.ap-toolbar-bottom .ap-tool-progress .ap-slider-track {\t\t\theight: 6px;\t\t\tborder-radius: 0px;\t\t\tbox-shadow: 0px 0px 5px grey;\t\t}\t\t.ap-toolbar-bottom .ap-tool-progress .ap-slider-thumb {\t\t\tbox-shadow: 0px 0px 5px grey;\t\t}\t\t.ap-toolbar-bottom .ap-tool-progress .ap-slider-track-lower {\t\t\tborder-radius: 0px;\t\t}\t\t.ap-label-slash {\t\t\tpadding: 0px;\t\t\tmin-width: 1px;\t\t}\t\t.ap-tool-spacer {\t\t\tflex-grow: 1;\t\t}\t\t.ap-tool-container {\t\t\tdisplay: flex; \t\t\tpadding: 5px;\t\t\t/*IE11*/\t\t\tmin-height: 1px;\t\t\talign-items: center;\t\t}\t\t.ap-tool-position[data-enabled='false'] + .ap-label-slash {\t\t\tdisplay: none;\t\t}\t\t.ap-tool-position[data-enabled='false'] ~ .ap-tool-duration {\t\t\tdisplay: none;\t\t}\t</style>\t<div class=\"ap-slider ap-tool-progress\"></div>\t<div class=\"ap-tool-container\">\t\t<div class=\"ap-button ap-tool-restart\" data-priority=12></div>\t\t<div class=\"ap-button ap-tool-play\" data-priority=7></div>\t\t<div class=\"ap-button ap-tool-speed\" data-priority=3></div>\t\t<div class=\"ap-label ap-tool-position\" data-priority=6></div>\t\t<div class=\"ap-label ap-label-slash ap-time-slash\" data-priority=6>/</div>\t\t<div class=\"ap-label ap-tool-duration\" data-priority=6></div>\t\t<div class=\"ap-tool-spacer\" data-priority=9></div>\t\t<div class=\"ap-button ap-tool-first\" data-priority=4></div>\t\t<div class=\"ap-button ap-tool-prev\" data-priority=5></div>\t\t<div class=\"ap-label ap-tool-slide-index\" data-priority=5>1</div>\t\t<div class=\"ap-label ap-label-slash\" data-priority=5>/</div>\t\t<div class=\"ap-label ap-tool-slide-count\" data-priority=5>1</div>\t\t<div class=\"ap-button ap-tool-next\" data-priority=5></div>\t\t<div class=\"ap-button ap-tool-last\" data-priority=4></div>\t\t<div class=\"ap-tool-spacer\" data-priority=9></div>\t\t<div class=\"ap-button ap-tool-sound\" data-priority=10></div>\t\t<div class=\"ap-slider ap-tool-volume\" data-priority=11></div>\t\t<div class=\"ap-button ap-tool-cc\" data-priority=2></div>\t\t<div class=\"ap-button ap-tool-about\" data-priority=1></div>\t\t<div class=\"ap-button ap-tool-setting\" data-priority=14></div>\t\t<div class=\"ap-button ap-tool-displaymode\" data-priority=1></div>\t\t<div class=\"ap-button ap-tool-toc\" data-priority=8></div>\t\t<div class=\"ap-button ap-tool-sidebar\" data-priority=8></div>\t\t<div class=\"ap-button ap-tool-exit\" data-priority=13></div>\t</div></div>",sidebar:"<div class=\"ap-side-bar\">\t<div class=\"ap-company-logo\"></div>\t<div class=\"ap-presenter-info\"></div>\t<div class=\"ap-toc-container ap-no-select\"></div>\t<div class=\"ap-resources-container\"></div></div><div class=\"ap-side-bar-expand\"></div>"};
	d.mediaPreloading = true;
	d.ignoreScormEntryStatus = false;
	d.playbackRates = [ 0.5, 1.0, 1.5, 2.0 ];

	/* xAPI configuration */
	// ActivityID that is sent for the statement's object
	d.xAPICourseId = "";
	// Course name for the activity
	d.xAPICourseName = {"en-US": ""};
	// Course description for the activity
	d.xAPICourseDescription = {"en-US": ""};
	// Pre-configured LRSes that should receive data, added to what is included
	// in the URL and/or passed to the constructor function.
	//
	// An array of objects where each object may have the following properties:
	//
	//    endpoint: (including trailing slash '/')
	//    auth:
	//    allowFail: (boolean, default true)
	//    version: (string, defaults to high version supported by TinCanJS)
	d.xAPIRecordStores = [];

	AP.loadedPrezs.push(d);
})(AtomiAP);
