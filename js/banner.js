!function(T){var o=function(i,t){var e=T.extend({},T.fn.nivoSlider.defaults,t),a={currentSlide:0,currentImage:"",totalSlides:0,running:!1,paused:!1,stop:!1,controlNavEl:!1},n=T(i);n.data("nivo:vars",a).addClass("nivoSlider");var o=n.children();o.each(function(){var i=T(this).find("a"),t="";i.is("img")||(i.is("a")&&(i.addClass("nivo-imageLink"),t=i),i=i.find("img:first"));var e=0===e?i.attr("width"):i.width(),n=0===n?i.attr("height"):i.height();""!==t&&t.css("display","none"),i.css("display","none"),a.totalSlides++}),e.randomStart&&(e.startSlide=Math.floor(Math.random()*a.totalSlides)),0<e.startSlide&&(e.startSlide>=a.totalSlides&&(e.startSlide=a.totalSlides-1),a.currentSlide=e.startSlide),T(o[a.currentSlide]).is("img")?a.currentImage=T(o[a.currentSlide]):a.currentImage=T(o[a.currentSlide]).find("img:first"),T(o[a.currentSlide]).is("a")&&T(o[a.currentSlide]).css("display","block");var S=T("<img/>").addClass("nivo-main-image");S.attr("src",a.currentImage.attr("src")).show(),n.append(S),T(window).resize(function(){n.children("img").width(n.width()),S.attr("src",a.currentImage.attr("src")),S.stop().height("auto"),T(".nivo-slice").remove(),T(".nivo-box").remove()}),n.append(T('<div class="nivo-caption"></div>'));var b=function(i){var t=T(".nivo-caption",n);if(""!=a.currentImage.attr("title")&&null!=a.currentImage.attr("title")){var e=a.currentImage.attr("title");"#"==e.substr(0,1)&&(e=T(e).html()),"block"==t.css("display")?setTimeout(function(){t.html(e)},i.animSpeed):(t.html(e),t.stop().fadeIn(i.animSpeed))}else t.stop().fadeOut(i.animSpeed)};b(e);var r=0;if(!e.manualAdvance&&1<o.length&&(r=setInterval(function(){l(n,o,e,!1)},e.pauseTime)),e.directionNav&&(n.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+e.prevText+'</a><a class="nivo-nextNav">'+e.nextText+"</a></div>"),T(n).on("click","a.nivo-prevNav",function(){if(a.running)return!1;clearInterval(r),r="",a.currentSlide-=2,l(n,o,e,"prev")}),T(n).on("click","a.nivo-nextNav",function(){if(a.running)return!1;clearInterval(r),r="",l(n,o,e,"next")})),e.controlNav){a.controlNavEl=T('<div class="nivo-controlNav"></div>'),n.after(a.controlNavEl);for(var s=0;s<o.length;s++)if(e.controlNavThumbs){a.controlNavEl.addClass("nivo-thumbs-enabled");var c=o.eq(s);c.is("img")||(c=c.find("img:first")),c.attr("data-thumb")&&a.controlNavEl.append('<a class="nivo-control" rel="'+s+'"><img src="'+c.attr("data-thumb")+'" alt="" /></a>')}else a.controlNavEl.append('<a class="nivo-control" rel="'+s+'">'+(s+1)+"</a>");T("a:eq("+a.currentSlide+")",a.controlNavEl).addClass("active"),T("a",a.controlNavEl).bind("click",function(){return!a.running&&(!T(this).hasClass("active")&&(clearInterval(r),r="",S.attr("src",a.currentImage.attr("src")),a.currentSlide=T(this).attr("rel")-1,void l(n,o,e,"control")))})}e.pauseOnHover&&n.hover(function(){a.paused=!0,clearInterval(r),r=""},function(){a.paused=!1,""!==r||e.manualAdvance||(r=setInterval(function(){l(n,o,e,!1)},e.pauseTime))}),n.bind("nivo:animFinished",function(){S.attr("src",a.currentImage.attr("src")),a.running=!1,T(o).each(function(){T(this).is("a")&&T(this).css("display","none")}),T(o[a.currentSlide]).is("a")&&T(o[a.currentSlide]).css("display","block"),""!==r||a.paused||e.manualAdvance||(r=setInterval(function(){l(n,o,e,!1)},e.pauseTime)),e.afterChange.call(this)});var I=function(i,t,e){T(e.currentImage).parent().is("a")&&T(e.currentImage).parent().css("display","block"),T('img[src="'+e.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").width(i.width()).css("visibility","hidden").show();for(var n=T('img[src="'+e.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").parent().is("a")?T('img[src="'+e.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").parent().height():T('img[src="'+e.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").height(),a=0;a<t.slices;a++){var o=Math.round(i.width()/t.slices);a===t.slices-1?i.append(T('<div class="nivo-slice" name="'+a+'"><img src="'+e.currentImage.attr("src")+'" style="position:absolute; width:'+i.width()+"px; height:auto; display:block !important; top:0; left:-"+(o+a*o-o)+'px;" /></div>').css({left:o*a+"px",width:i.width()-o*a+"px",height:n+"px",opacity:"0",overflow:"hidden"})):i.append(T('<div class="nivo-slice" name="'+a+'"><img src="'+e.currentImage.attr("src")+'" style="position:absolute; width:'+i.width()+"px; height:auto; display:block !important; top:0; left:-"+(o+a*o-o)+'px;" /></div>').css({left:o*a+"px",width:o+"px",height:n+"px",opacity:"0",overflow:"hidden"}))}T(".nivo-slice",i).height(n),S.stop().animate({height:T(e.currentImage).height()},t.animSpeed)},y=function(i,t,e){T(e.currentImage).parent().is("a")&&T(e.currentImage).parent().css("display","block"),T('img[src="'+e.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").width(i.width()).css("visibility","hidden").show();for(var n=Math.round(i.width()/t.boxCols),a=Math.round(T('img[src="'+e.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").height()/t.boxRows),o=0;o<t.boxRows;o++)for(var r=0;r<t.boxCols;r++)r===t.boxCols-1?i.append(T('<div class="nivo-box" name="'+r+'" rel="'+o+'"><img src="'+e.currentImage.attr("src")+'" style="position:absolute; width:'+i.width()+"px; height:auto; display:block; top:-"+a*o+"px; left:-"+n*r+'px;" /></div>').css({opacity:0,left:n*r+"px",top:a*o+"px",width:i.width()-n*r+"px"})):i.append(T('<div class="nivo-box" name="'+r+'" rel="'+o+'"><img src="'+e.currentImage.attr("src")+'" style="position:absolute; width:'+i.width()+"px; height:auto; display:block; top:-"+a*o+"px; left:-"+n*r+'px;" /></div>').css({opacity:0,left:n*r+"px",top:a*o+"px",width:n+"px"})),T('.nivo-box[name="'+r+'"]',i).height(T('.nivo-box[name="'+r+'"] img',i).height()+"px");S.stop().animate({height:T(e.currentImage).height()},t.animSpeed)},l=function(c,i,l,t){var e=c.data("nivo:vars");if(e&&e.currentSlide===e.totalSlides-1&&l.lastSlide.call(this),(!e||e.stop)&&!t)return!1;l.beforeChange.call(this),t?("prev"===t&&S.attr("src",e.currentImage.attr("src")),"next"===t&&S.attr("src",e.currentImage.attr("src"))):S.attr("src",e.currentImage.attr("src")),e.currentSlide++,e.currentSlide===e.totalSlides&&(e.currentSlide=0,l.slideshowEnd.call(this)),e.currentSlide<0&&(e.currentSlide=e.totalSlides-1),T(i[e.currentSlide]).is("img")?e.currentImage=T(i[e.currentSlide]):e.currentImage=T(i[e.currentSlide]).find("img:first"),l.controlNav&&(T("a",e.controlNavEl).removeClass("active"),T("a:eq("+e.currentSlide+")",e.controlNavEl).addClass("active")),b(l),T(".nivo-slice",c).remove(),T(".nivo-box",c).remove();var d=l.effect,n="";"random"===l.effect&&(n=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse"),void 0===(d=n[Math.floor(Math.random()*(n.length+1))])&&(d="fade")),-1!==l.effect.indexOf(",")&&(n=l.effect.split(","),void 0===(d=n[Math.floor(Math.random()*n.length)])&&(d="fade")),e.currentImage.attr("data-transition")&&(d=e.currentImage.attr("data-transition")),e.running=!0;var a=0,o=0,r="",s="",v="",m="";if("sliceDown"===d||"sliceDownRight"===d||"sliceDownLeft"===d)I(c,l,e),o=a=0,r=T(".nivo-slice",c),"sliceDownLeft"===d&&(r=T(".nivo-slice",c)._reverse()),r.each(function(){var i=T(this);i.css({top:"0px"}),o===l.slices-1?setTimeout(function(){i.animate({opacity:"1.0"},l.animSpeed,"",function(){c.trigger("nivo:animFinished")})},100+a):setTimeout(function(){i.animate({opacity:"1.0"},l.animSpeed)},100+a),a+=50,o++});else if("sliceUp"===d||"sliceUpRight"===d||"sliceUpLeft"===d)I(c,l,e),o=a=0,r=T(".nivo-slice",c),"sliceUpLeft"===d&&(r=T(".nivo-slice",c)._reverse()),r.each(function(){var i=T(this);i.css({bottom:"0px"}),o===l.slices-1?setTimeout(function(){i.animate({opacity:"1.0"},l.animSpeed,"",function(){c.trigger("nivo:animFinished")})},100+a):setTimeout(function(){i.animate({opacity:"1.0"},l.animSpeed)},100+a),a+=50,o++});else if("sliceUpDown"===d||"sliceUpDownRight"===d||"sliceUpDownLeft"===d){I(c,l,e);var u=o=a=0;r=T(".nivo-slice",c),"sliceUpDownLeft"===d&&(r=T(".nivo-slice",c)._reverse()),r.each(function(){var i=T(this);0===o?(i.css("top","0px"),o++):(i.css("bottom","0px"),o=0),u===l.slices-1?setTimeout(function(){i.animate({opacity:"1.0"},l.animSpeed,"",function(){c.trigger("nivo:animFinished")})},100+a):setTimeout(function(){i.animate({opacity:"1.0"},l.animSpeed)},100+a),a+=50,u++})}else if("fold"===d)I(c,l,e),o=a=0,T(".nivo-slice",c).each(function(){var i=T(this),t=i.width();i.css({top:"0px",width:"0px"}),o===l.slices-1?setTimeout(function(){i.animate({width:t,opacity:"1.0"},l.animSpeed,"",function(){c.trigger("nivo:animFinished")})},100+a):setTimeout(function(){i.animate({width:t,opacity:"1.0"},l.animSpeed)},100+a),a+=50,o++});else if("fade"===d)I(c,l,e),(s=T(".nivo-slice:first",c)).css({width:c.width()+"px"}),s.animate({opacity:"1.0"},2*l.animSpeed,"",function(){c.trigger("nivo:animFinished")});else if("slideInRight"===d)I(c,l,e),(s=T(".nivo-slice:first",c)).css({width:"0px",opacity:"1"}),s.animate({width:c.width()+"px"},2*l.animSpeed,"",function(){c.trigger("nivo:animFinished")});else if("slideInLeft"===d)I(c,l,e),(s=T(".nivo-slice:first",c)).css({width:"0px",opacity:"1",left:"",right:"0px"}),s.animate({width:c.width()+"px"},2*l.animSpeed,"",function(){s.css({left:"0px",right:""}),c.trigger("nivo:animFinished")});else if("boxRandom"===d)y(c,l,e),v=l.boxCols*l.boxRows,a=o=0,(m=R(T(".nivo-box",c))).each(function(){var i=T(this);o===v-1?setTimeout(function(){i.animate({opacity:"1"},l.animSpeed,"",function(){c.trigger("nivo:animFinished")})},100+a):setTimeout(function(){i.animate({opacity:"1"},l.animSpeed)},100+a),a+=20,o++});else if("boxRain"===d||"boxRainReverse"===d||"boxRainGrow"===d||"boxRainGrowReverse"===d){y(c,l,e),v=l.boxCols*l.boxRows;var h=a=o=0,p=0,f=[];f[h]=[],m=T(".nivo-box",c),"boxRainReverse"!==d&&"boxRainGrowReverse"!==d||(m=T(".nivo-box",c)._reverse()),m.each(function(){f[h][p]=T(this),++p===l.boxCols&&(p=0,f[++h]=[])});for(var g=0;g<2*l.boxCols;g++){for(var x=g,w=0;w<l.boxRows;w++)0<=x&&x<l.boxCols&&(!function(i,t,e,n,a){var o=T(f[w][t]),r=o.width(),s=o.height();"boxRainGrow"!==d&&"boxRainGrowReverse"!==d||o.width(0).height(0),n===a-1?setTimeout(function(){o.animate({opacity:"1",width:r,height:s},l.animSpeed/1.3,"",function(){c.trigger("nivo:animFinished")})},100+e):setTimeout(function(){o.animate({opacity:"1",width:r,height:s},l.animSpeed/1.3)},100+e)}(0,x,a,o,v),o++),x--;a+=100}}},R=function(i){for(var t,e,n=i.length;n;t=parseInt(Math.random()*n,10),e=i[--n],i[n]=i[t],i[t]=e);return i},d=function(i){this.console&&void 0!==console.log&&console.log(i)};return this.stop=function(){T(i).data("nivo:vars").stop||(T(i).data("nivo:vars").stop=!0,d("Stop Slider"))},this.start=function(){T(i).data("nivo:vars").stop&&(T(i).data("nivo:vars").stop=!1,d("Start Slider"))},e.afterLoad.call(this),this};T.fn.nivoSlider=function(a){return this.each(function(i,t){var e=T(this);if(e.data("nivoslider"))return e.data("nivoslider");var n=new o(this,a);e.data("nivoslider",n)})},T.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:!0,controlNav:!0,controlNavThumbs:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next",randomStart:!1,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}},T.fn._reverse=[].reverse}(jQuery),$(function(){$("#slider").nivoSlider({prevText:"<",nextText:">",controlNav:!0,effect:"random",boxCols:8,boxRows:4,animSpeed:500,pauseTime:4e3,directionNav:!0,controlNav:!0,prevText:"<",nextText:">"})});