/*  Copyright 2014 gokoururi
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */

/*  Remove mascot class from element "main" if its width is <= mascotMinWidth */
function controlMascot(mascot, mascotMinWidth) {
    $(window).resize(function(event) {
        if ( $(window).width() <= mascotMinWidth && $("main").hasClass("mascot") ) {
            removeMascot();
        } else if( $(window).width() > mascotMinWidth && ! $("main").hasClass("mascot") ) {
            setMascot(mascot);
			setcolour(mascot);
        }
    });
}
function setcolour(mascot) {

}
function setMascot(mascot) {
    $('div.sqr1').addClass("mascot");
    $('div.sqr1').css("background-image", "url(" + mascot + ")");
	var img = new Image();
	img.src = mascot;
	var sqr = document.querySelectorAll(".sqr");
    
    for(var i = 0; i < sqr.length; ++i){
            sqr[i].acount = sqr[i].getElementsByTagName("a").length;
            sqr[i].addEventListener("mouseover", expand, false);
            sqr[i].addEventListener("mouseout", contract, false);
    }
	img.onload=function(){window.onload=function() {
		var colorThief = new ColorThief();
		var palette = colorThief.getPalette(img, 7);
		$('div.sqr').css({"background-color":"rgb("+palette[3]+")"});
		$('div.sqr').css({"border-color":"rgb("+palette[4]+")"});
		$('span').css({"color":"rgb("+palette[0]+")"});
		$('a').css({"color":"rgb("+palette[0]+")"});
		$('input').css({"background-color":"rgb("+palette[0]+")"});
		$('input').css({"color":"rgb("+palette[3]+")"});
		$('div.sqr1').css({"border-color":"rgb("+palette[1]+")"});
		document.getElementById("cell").style.backgroundColor = "rgb("+palette[2]+")";
		$('h1').css({"color":"rgb("+palette[3]+")","text-shadow":"0 0 2px #000","text-shadow":"0 0 2px #000","text-shadow":"0 0 2px #000"});
		$('h2').css({"color":"rgb("+palette[6]+")","text-shadow":"0 0 2px #000","text-shadow":"0 0 2px #000","text-shadow":"0 0 2px #000"});
		$('h1.home').css({"color":"rgb("+palette[4]+")","text-shadow":"0 0 2px #000","text-shadow":"0 0 2px #000","text-shadow":"0 0 2px #000"});
		$('p.subtitle').css({"font-size":"16px","color":"rgb("+palette[3]+")","text-shadow":"0 0 2px #000","text-shadow":"0 0 2px #000","text-shadow":"0 0 2px #000"});

	}}




}

function removeMascot() {
    $('main').removeClass("mascot");
    $('main').css("background-image", "");
    $('main').addClass("plain");
}

$(document).ready(function(event) {
	
    var mascotEnable    = true;
    var mascot          = mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
    var mascotMinWidth  = 750;
	if ( mascotEnable ) {
        setMascot(mascot);
		
		
        controlMascot(mascot, mascotMinWidth);
    } else { removeMascot(); }
});
