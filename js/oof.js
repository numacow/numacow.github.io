$(document).ready(function(event) {

	var bgPath="bgs/"
	console.log(bgPath);
    var bg= bgPath + bgList[Math.floor(Math.random() * bgList.length)];
	console.log(bg);
	window.onload=function(){
    $('div.container').css("background-image", "url(" + bg + ")");
	}

});
