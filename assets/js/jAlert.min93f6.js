/*
	jAlert
	https://github.com/HTMLGuyLLC/jAlert
	Made with love by HTMLGuy, LLC
	MIT Licensed
*/
!function(d){var n;Date.now||(Date.now=function(){return+new Date}),d.fn.jAlert=function(o){d("body").focus(),d("body").blur();var e={xsmall:"xsm",small:"sm",medium:"md",large:"lg",xlarge:"xlg"},i=[],a=["animated"],r=[];if(1<this.length)return this.each(function(){d.fn.jAlert(o)}),this;if(void 0!==d(this)[0]&&"undefined"!=d(this)[0].jAlert)return d(this)[0].jAlert;if(d.each(d.fn.jAlert.defaults,function(e,t){var n=e.toLowerCase();void 0!==o[n]&&(o[e]=o[n])}),(o=d.extend({},d.fn.jAlert.defaults,o)).id)t=o.id;else var t="ja_"+(Date.now().toString()+Math.floor(1e5*Math.random()));var l={set:function(e,t){return l[e]=t,l},__set:function(e,t){return l.set(e,t)},get:function(e){return l[e]},__get:function(e){return l.get(e)},animateAlert:function(e){return"hide"==e?(l.instance.jAlert().blurBackground&&d("body").removeClass("ja_blur"),l.instance.removeClass(l.showAnimation).addClass(l.hideAnimation)):(l.instance.jAlert().blurBackground&&d("body").addClass("ja_blur"),l.instance.addClass(l.showAnimation).removeClass(l.hideAnimation).show()),l},closeAlert:function(t,n){return 0!=t&&(t=!0),l.instance&&(l.animateAlert("hide"),window.setTimeout(function(){var e=l.instance.parents(".ja_wrap");t?e.remove():e.hide(),"function"==typeof n?n(l.instance):"function"==typeof l.onClose&&l.onClose(l.instance),0===d(".jAlert:visible").length&&d("html,body").css("overflow","")},l.animationTimeout)),l},showAlert:function(e,t,n,o){0!=e&&(e=!0),!1!==t&&(t=!0),e&&d(".jAlert:visible").jAlert().closeAlert(t);var i=l.instance.parents(".ja_wrap");return d("body").append(i),l.animateAlert("show"),"function"==typeof o&&(l.onClose=o),window.setTimeout(function(){"function"==typeof n&&n(l.instance)},l.animationTimeout),l}};if(d.each(o,function(e,t){l.set(e,t)}),l.set("id",t),l.content&&0===l.content.indexOf("#")&&0<d(l.content).length&&(l.content=d(l.content).html()),l.video&&-1<l.video.indexOf("youtube.com/watch?v=")&&-1===l.video.indexOf("embed")&&(l.video=l.video.replace("watch?v=","embed/index.html")),"confirm"==l.type&&(l.content||(l.content=l.confirmQuestion),l.btns=[{text:l.confirmBtnText,theme:"green",class:"confirmBtn",closeAlert:!0,onClick:l.onConfirm},{text:l.denyBtnText,theme:"red",class:"denyBtn",closeAlert:!0,onClick:l.onDeny}],l.autofocus=l.confirmAutofocus),l.color&&(l.theme=l.color),-1==d.inArray(l.theme,["default","green","dark_green","red","dark_red","black","brown","gray","dark_gray","blue","dark_blue","yellow","custom"]))return console.log("jAlert Config Error: Invalid theme selection."),!1;if(a.push("ja_"+l.theme),l.class&&a.push(l.class),l.classes&&a.push(l.classes),l.fullscreen&&a.push("ja_fullscreen"),l.noPadContent&&a.push("ja_no_pad"),l.title||a.push("ja_noTitle"),l.width&&(l.size=l.width),l.size&&"object"==typeof l.size&&(void 0===l.size.width||void 0===l.size.height))return console.log("jAlert Config Error: Invalid size selection (try a preset or make sure you're including height and width in your size object)."),!1;if(l.size?"object"==typeof l.size?(i.push("width: "+l.size.width+";"),i.push("height: "+l.size.height+";"),a.push("ja_setheight")):(void 0!==e[l.size]&&(l.size=e[l.size]),-1<d.inArray(l.size,["xsm","sm","md","lg","xlg","full","auto"])?a.push("ja_"+l.size):i.push("width: "+l.size+";")):a.push("ja_sm"),-1==d.inArray(l.backgroundColor,["white","black"]))return console.log("jAlert Config Error: Invalid background color selection."),!1;r.push("ja_wrap_"+l.backgroundColor),l.onOpen=[l.onOpen];var n="<div class='ja_loader'>Loading...</div>";l.picture&&(l.image=l.picture),l.image?(l.content="<div class='ja_media_wrap'>"+n+"<img src='"+l.image+"' class='ja_img' onload='$.fn.jAlert.mediaLoaded($(this))''",l.imageWidth&&(l.content+=" style='width: "+l.imageWidth+"'"),l.content+="></div>"):l.video?(l.content="<div class='ja_media_wrap'>"+n+"<div class='ja_video'></div></div>",l.onOpen.unshift(function(e){var t=document.createElement("iframe");t.src=e.jAlert().video,t.addEventListener?t.addEventListener("load",function(){d.fn.jAlert.mediaLoaded(d(this))},!0):t.attachEvent?t.attachEvent("onload",function(){d.fn.jAlert.mediaLoaded(d(this))}):t.onload=function(){d.fn.jAlert.mediaLoaded(d(this))},e.find(".ja_video").append(t)})):l.iframe?(l.iframeHeight||(l.iframeHeight=d(window).height()+"px"),l.content="<div class='ja_media_wrap'>"+n+"</div>",l.onOpen.unshift(function(e){var t=document.createElement("iframe");t.src=e.jAlert().iframe,t.className="ja_iframe",t.addEventListener?t.addEventListener("load",function(){d.fn.jAlert.mediaLoaded(d(this))},!0):t.attachEvent?t.attachEvent("onload",function(){d.fn.jAlert.mediaLoaded(d(this))}):t.onload=function(){d.fn.jAlert.mediaLoaded(d(this))},e.find(".ja_media_wrap").append(t)})):l.ajax&&(l.content="<div class='ja_media_wrap'>"+n+"</div>",onAjaxCallbacks=l.onOpen,l.onOpen=[function(o){d.ajax(o.jAlert().ajax,{async:!0,complete:function(e,t){o.find(".ja_media_wrap").replaceWith(e.responseText),d.each(onAjaxCallbacks,function(e,t){t(o)})},error:function(e,t,n){l.onAjaxFail(o,"Error getting content: Code: "+e.status+" : Msg: "+e.statusText)}})}]);var s=function(o){if(void 0===o.href&&(o.href=""),void 0===o.class&&(o.class=""),void 0===o.theme?o.class+=" ja_btn_default":o.class+=" ja_btn_"+o.theme,void 0===o.text&&(o.text=""),void 0===o.id){var e=Date.now().toString()+Math.floor(1e5*Math.random());o.id="ja_btn_"+e}return void 0===o.target&&(o.target="_self"),void 0===o.closeAlert&&(o.closeAlert=!0),d("body").off("click","#"+o.id),d("body").on("click","#"+o.id,function(e){var t=d(this);o.closeAlert&&t.parents(".jAlert").jAlert().closeAlert();var n=!0;return"function"==typeof o.onClick&&(n=o.onClick(e,t)),!n||o.closeAlert?(e.preventDefault(),!1):n}),"<a href='"+o.href+"' id='"+o.id+"' target='"+o.target+"' class='ja_btn "+o.class+"'>"+o.text+"</a> "},c=function(e){var n="";n+='<div class="ja_wrap '+r.join(" ")+'"><div class="jAlert '+a.join(" ")+'" style="'+i.join(" ")+'" id="'+l.id+'"><div>',l.closeBtn&&(n+="<div class='closejAlert ja_close",l.closeBtnAlt?n+=" ja_close_alt":l.closeBtnRoundWhite?n+=" ja_close_round_white":l.closeBtnRound&&(n+=" ja_close_round"),n+="'>&times;</div>"),l.title&&(n+="<div class='ja_title'><div>"+l.title+"</div></div>"),n+='<div class="ja_body">'+e,l.btns&&(n+='<div class="ja_btn_wrap ',l.btnBackground&&(n+="optBack"),n+='">'),"object"==typeof l.btns[0]?d.each(l.btns,function(e,t){"object"==typeof t&&(n+=s(t))}):"object"==typeof l.btns?n+=s(l.btns):l.btns&&console.log("jAlert Config Error: Incorrect value for btns (must be object or array of objects): "+l.btns),l.btns&&(n+="</div>");var t=d(n+="</div></div></div></div>");l.replaceOtherAlerts&&d(".jAlert:visible").each(function(){d(this).jAlert().closeAlert()});return d("body").append(t),l.instance=d("#"+l.id),l.instance[0].jAlert=l,d("html,body").css("overflow","hidden"),l.animateAlert("show"),l.closeBtn&&l.instance.on("click",".closejAlert",function(e){return e.preventDefault(),d(this).parents(".jAlert:first").jAlert().closeAlert(),!1}),l.closeOnClick&&(d(document).off("mouseup touchstart",d.fn.jAlert.onMouseUp),d(document).on("mouseup touchstart",d.fn.jAlert.onMouseUp)),l.closeOnEsc&&(d(document).off("keydown",d.fn.jAlert.onEscKeyDown),d(document).on("keydown",d.fn.jAlert.onEscKeyDown)),l.onOpen&&d.each(l.onOpen,function(e,t){t(l.instance)}),l.autofocus?l.instance.find(l.autofocus).focus():l.instance.focus(),l.autoClose&&d.fn.closeTimer(function(){var e=d.jAlert("current");!1!==e&&e.closeAlert()},l.autoClose),l.instance};return this.initialize=function(){return l.content||l.image||l.video||l.iframe||l.ajax?(l.content||(l.content=""),c(l.content)):(console.log("jAlert potential error: No content defined"),c(""))},this.initialize(),l},d.fn.closeTimer=(jQuery,n=0,function(e,t){clearTimeout(n),n=setTimeout(e,t)}),d.fn.jAlert.defaults={title:!1,content:!1,noPadContent:!1,fullscreen:!1,image:!1,imageWidth:"auto",video:!1,ajax:!1,onAjaxFail:function(e,t){e.jAlert().closeAlert(),errorAlert(t)},iframe:!1,iframeHeight:!1,class:"",classes:"",id:!1,showAnimation:"fadeInUp",hideAnimation:"fadeOutDown",animationTimeout:600,theme:"default",backgroundColor:"black",blurBackground:!1,size:!1,replaceOtherAlerts:!1,closeOnClick:!1,closeOnEsc:!0,closeBtn:!0,closeBtnAlt:!1,closeBtnRound:!0,closeBtnRoundWhite:!1,btns:!1,autoClose:!1,btnBackground:!0,autofocus:!1,onOpen:function(e){return!1},onClose:function(e){return!1},type:"modal",confirmQuestion:"Are you sure?",confirmBtnText:"Yes",denyBtnText:"No",confirmAutofocus:".confirmBtn",onConfirm:function(e,t){return e.preventDefault(),console.log("confirmed"),!1},onDeny:function(e,t){return e.preventDefault(),!1}},d.fn.jAlert.onMouseUp=function(e){var t=e.target?e.target:e.srcElement,n=d(".jAlert:visible:last");0<n.length&&n.jAlert().closeOnClick&&(d(t).is(".jAlert *")||n.jAlert().closeAlert())},d.fn.jAlert.onEscKeyDown=function(e){if(27===e.keyCode){var t=d(".jAlert:visible:last");0<t.length&&t.jAlert().closeOnEsc&&t.jAlert().closeAlert()}},d.fn.attachjAlert=function(e){return e.preventDefault(),d.jAlert(d(this).data()),!1},d.jAlert=function(e){if("current"==e){var t=d(".jAlert:visible:last");return 0<t.length&&t.jAlert()}return"attach"==e?(d("[data-jAlert]").off("click",d.fn.attachjAlert),d("[data-jAlert]").on("click",d.fn.attachjAlert),d("[data-jalert]").off("click",d.fn.attachjAlert),d("[data-jalert]").on("click",d.fn.attachjAlert),!1):d.fn.jAlert(e)},d.fn.alertOnClick=function(t){d(this).on("click",function(e){return e.preventDefault(),d.jAlert(t),!1})},d.alertOnClick=function(e,t){d("body").on("click",e,function(e){return e.preventDefault(),d.jAlert(t),!1})},d.fn.closeAlert=function(e,t){d(this).jAlert().closeAlert(e,t)},d.fn.jAlert.mediaLoaded=function(e){var t=e.parents(".ja_media_wrap"),n=t.find(".ja_video"),o=e.parents(".jAlert:first").jAlert();t.find(".ja_loader").remove(),0<n.length?n.fadeIn("fast"):e.fadeIn("fast"),void 0!==o.iframeHeight&&o.iframeHeight&&(e.css("display","block"),e.height(o.iframeHeight))}}(jQuery);