window.onload = function(){
	var width  = window.innerWidth ||document.documentElement.clientWidth ||document.body.clientWidth;
	var height = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
	var containerEle = document.getElementById("container");
	containerEle.style.width = width+"px";
	containerEle.style.height = height+"px";
	
	var photoParent  = document.getElementById("photoalbum");
	photoParentWidth = photoParent.style.width||photoParent.style.offsetWidth;
	var photoElement =document.getElementById("photo");
	photoElement.style.left = (photoParentWidth - 100)+"px";
	var photos = [];
};