if(initCheck()){var sidebarHtml='<div class="container">    <div class="menu-wrap optiscroll" id="menuWrap" style="display:none">        <nav class="menu">            \x3c!-- 个人简介 --\x3e            <div class="introduce-box">                <div class="introduce-head">                    <div class="introduce-via" id="menuBlogAvatar"></div>                </div>                <div id="introduce"></div>            </div>            \x3c!-- 导航 --\x3e            <div class="nav-title"></div>            <div class="icon-list">                <ul id="m-nav-list">                </ul>            </div>            \x3c!-- 日历 --\x3e            <span id="calendar-box"></span>            \x3c!-- 找找看 --\x3e            <div class="m-list-title"><span>找找看</span></div>            <div class="m-icon-list" id="sb-sidebarSearchBox"></div>            \x3c!-- 积分与排名 --\x3e            <div class="m-list-title"><span>积分排名<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-sidebarScorerank"></div>            \x3c!-- 最新随笔 --\x3e            <div class="m-list-title"><span>最新随笔<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-sidebarRecentposts"></div>            \x3c!-- 我的标签 --\x3e            <div class="m-list-title"><span>我的标签<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-toptags"></div>            \x3c!-- 随笔分类 --\x3e            <div class="m-list-title"><span>随笔分类<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-classify"></div>            \x3c!-- 文章分类 --\x3e            <div class="m-list-title"><span>文章分类<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-ArticleCategory"></div>            \x3c!-- 阅读排行 --\x3e            <div class="m-list-title"><span>阅读排行<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-topview"></div>            \x3c!-- 推荐排行 --\x3e            <div class="m-list-title"><span>推荐排行<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-topDiggPosts"></div>            \x3c!-- 最新评论 --\x3e            <div class="m-list-title"><span>最新评论<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-recentComments"></div>            \x3c!-- 文章档案 --\x3e            <div class="m-list-title"><span>文章档案<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-articlearchive"></div>            \x3c!-- 随笔档案 --\x3e            <div class="m-list-title"><span>随笔档案<span class="iconfont icon-select m-list-title-select"></span></span></div>            <div class="m-icon-list" id="sb-record"></div>            \x3c!-- 自定义列表 --\x3e            <span id="menuCustomList"></span>        </nav>        <button class="close-button" id="close-button">Close Menu</button>        <div class="morph-shape" id="morph-shape" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z">            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">                <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/>            </svg>        </div>    </div>    <button class="menu-button" id="open-button">MENU</button>    <div class="content-wrap" id="content-wrap"></div>\x3c!-- /content-wrap --\x3e</div><div class="main-header">    <canvas id="notHomeTopCanvas"></canvas>    <div class="vertical">        <div class="main-header-content inner">            <h1 class="page-title" id="homeTopTitle"></h1>            <h2 class="page-description" id="hitokoto"></h2>            <h3 class="page-author" id="hitokotoAuthor"></h3>            <h1 class="sb-title" id="sbTitle"></h1>            <p class="article-info" id="articleInfo"></p>        </div>    </div>    <a class="scroll-down" href="javascript:void(0);" data-offset="-45">        <span class="hidden">Scroll Down</span>        <i class="scroll-down-icon iconfont icon-fanhui"></i>    </a></div><div id="loading"></div><div id="bottomProgressBar"></div><div id="rightMenu"></div>';window.cnblogsConfigDefault={GhUserName:"BNDong",GhRepositories:"Cnblogs-Theme-SimpleMemory",GhVersions:"v1.3.0",CnVersions:"",blogUser:"",blogAvatar:"",blogStartDate:"2019-01-01",menuCustomList:{},menuNavList:[],menuUserInfoBgImg:"",webpageTitleOnblur:"Trotyl's Blog",webpageTitleOnblurTimeOut:500,webpageTitleFocus:"Trotyl's Blog",webpageTitleFocusTimeOut:1e3,webpageIcon:"",fontIconExtend:"",progressBar:{id:"top-progress-bar",color:"#77b6ff",height:"2px",duration:.2},loading:{rebound:{tension:16,friction:5},spinner:{id:"spinner",radius:90,sides:3,depth:4,colors:{background:"#f0f0f0",stroke:"#272633",base:null,child:"#272633"},alwaysForward:!0,restAt:.5,renderBase:!1}},homeTopAnimationRendered:!0,homeTopAnimation:{radius:15,density:.2,color:"rgba(255,255,255, .2)",clearOffset:.3},essayTopAnimationRendered:!0,essayTopAnimation:{triW:14,triH:20,neighbours:["side","top","bottom"],speedTrailAppear:.1,speedTrailDisappear:.1,speedTriOpen:1,trailMaxLength:30,trailIntervalCreation:100,delayBeforeDisappear:2,colorsRandom:!1,colors:["#96EDA6","#5BC6A9","#38668C","#374D84","#BED5CB","#62ADC6","#8EE5DE","#304E7B"]},bgAnimationRendered:!0,backgroundAnimation:{colorSaturation:"60%",colorBrightness:"50%",colorAlpha:.5,colorCycleSpeed:5,verticalPosition:"random",horizontalSpeed:200,ribbonCount:3,strokeSize:0,parallaxAmount:-.2,animateSections:!0},homeTopImg:["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=354644634,1472517863&fm=26&gp=0.jpg/*https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@master/img/webp/home_top_bg.webp*/"],homeBannerText:"",homeBannerTextType:"jinrishici",essayTopImg:["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=354644634,1472517863&fm=26&gp=0.jpg/*https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@master/img/webp/nothome_top_bg.webp*/"],essayCodeHighlightingType:"cnblogs",essayCodeHighlighting:"",essayCodeLanguages:[],essayCode:{fontFamily:"'Ubuntu Mono',monospace",fontSize:"14px"},codeMaxHeight:!1,codeLineNumber:!1,essayTitleStyle:!1,essaySuffix:{codeImgUrl:"",aboutHtml:"",copyrightHtml:"",supportHtml:""},bottomBlogroll:[],bottomText:{iconFont:{icon:"icon-xl",color:"red",fontSize:"16px"},left:"",right:""},footerStyle:2,consoleList:[],bookList:[],themeAuthor:!1,isVersionMapping:!1,switchDayNight:{enable:!0,auto:{enable:!1,dayHour:5,nightHour:19}},reward:{enable:!1,wechatpay:"",alipay:""},weChatOfficialAccounts:"",advertising:!0},window.cnblogsConfigDefault.hook={beforeLoading:function(i){},afterLoading:function(i,e){},pageLabelChanges:function(i,e){},beforeCodeHighlighting:function(i){},afterCodeHighlighting:function(i){},dayNightControl:function(i,e){},pageInitEnd:function(i){}},window.cnblogsConfig=$.extend(!0,window.cnblogsConfigDefault,window.cnblogsConfig),getVersionConfig()}else $('a[name="top"]').text("SimpleMemory：基础配置有误，请阅读文档，检查配置！").css({display:"block","text-align":"center","padding-top":"45vh","font-size":"20px",color:"#333"});function initCheck(){var i=$("#mobile-style").attr("href");if(void 0!==i){var e=i.split("/");if(-1!==$.inArray("SimpleMemory",e))return!0}return!1}function getVersionConfig(){if(window.cnblogsConfig.CnVersions=window.cnblogsConfig.GhVersions,window.cnblogsConfig.isVersionMapping){var i="https://raw.githubusercontent.com/"+window.cnblogsConfig.GhUserName+"/"+window.cnblogsConfig.GhRepositories+"/master/version.conf";$.ajax({type:"get",url:i,dataType:"text",async:!1,success:function(i){window.themeVersion=!!i&&JSON.parse(i),window.themeVersion&&e()}})}else"BNDong"===window.cnblogsConfig.GhUserName?(window.themeVersion=[["v1.1.6","d8adfb50252062f658350bda29d7145f5eff0b80"],["v1.1.8","461aab69de17a84f0af9ff0c326bfcb94438b06c"],["v1.2.2","08eab99303d7c463a495adabd8feccc784a8507d"],["v1.2.3","36901bf16e2aa3656d4e6f78d44486273b0b8972"],["v1.2.4","9354db2147c11fc56cfe02a502f1f8229332fc2f"],["v1.2.5","4d744f980758500078df349520472e3b360fb841"]],e()):init();function e(){var i=function i(e){var s="";window.themeVersion&&$.each(window.themeVersion,function(i){if(window.themeVersion[i][0]===e)return s=window.themeVersion[i][1],!1});return""===s?e:i(s)}(window.cnblogsConfig.GhVersions);i&&(window.cnblogsConfig.GhVersions=i),init()}}function init(){var i=window.location.href.split("/")[3],e='<li><a href="https://www.cnblogs.com/'+i+'/" target="_self"><i class="iconfont icon-homepage_fill"></i>Homepage</a></li><li><a href="https://msg.cnblogs.com/send/'+i+'" target="_blank"><i class="iconfont icon-zhifeiji"></i>Contact</a></li><li><a href="javascript:void(0)" onclick="$(\'#blog_nav_rss\').trigger(\'click\');" data-rss="https://www.cnblogs.com/'+i+'/rss/"><i class="iconfont icon-qinmifu"></i>Book</a></li><li><a href="https://i.cnblogs.com/" target="_blank"><i class="iconfont icon-setup_fill"></i>Admin</a></li>',s=window.cnblogsConfig.menuNavList;s.length>0&&$.each(s,function(i){let n=s[i].length>2?s[i][2]:"icon-qianzishenhe";e+='<li><a href="'+s[i][1]+'" target="_blank"><i class="iconfont '+n+'"></i>'+s[i][0]+"</a></li>"}),$("#blog-news").prepend(sidebarHtml),$("#m-nav-list").append(e),""===window.cnblogsConfig.blogUser&&(window.cnblogsConfig.blogUser=i),$.ajaxSetup({cache:!0}),$.getScript(getJsDelivrUrl("loading.js"),function(){window.cnblogsConfig.hook.beforeLoading(pageLoading),pageLoading.initRebound(),pageLoading.initSpinner(),pageLoading.spinner.init(pageLoading.spring,!0),$.getScript(getJsDelivrUrl("lib/jquery.mCustomScrollbar.min.js"),function(){$.getScript(getJsDelivrUrl("lib/require.min.js"),function(){$.getScript(getJsDelivrUrl("config.js"),function(){require(["optiscroll_ToProgress_rotate","snapSvg","classie","main4","tools"],function(){require(["base"],function(){(new Base).init()})})})})})})}function getJsDelivrUrl(i,e){return i=setFileNameMin(i,e),"https://cdn.jsdelivr.net/gh/"+window.cnblogsConfig.GhUserName+"/"+window.cnblogsConfig.GhRepositories+"@"+window.cnblogsConfig.GhVersions+"/"+(i||"")}function setFileNameMin(i,e){if(void 0===i)return"";var s=null,n=i.split(".");if(n.length>0&&-1!==$.inArray(n[n.length-1],["js","css"]))switch(s=n.pop()){case"js":e="script";break;case"css":e="style"}else{if(void 0===e)return"";switch(e){case"js":e="script";break;case"css":e="style"}}return-1===i.search(".min")&&n.push("min"),null!=s&&n.push(s),void 0!==e?"src/"+e+"/"+n.join("."):n.join(".")}
//# sourceMappingURL=/sm/aafbe3a4e45dac4d9e61e626ac2638bb823d54a4205e0139af835db3e47f125e.map
