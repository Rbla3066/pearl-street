
$(document).ready(function(){
	$("button").on("tap", function(e){
		$(this).trigger("click");
		e.preventDefault();
		return false;
	});
	$(".scrollEffect").attr("style", "visibility: hidden");
	$.fn.isOnScreen = function(){

    	var win = $(window);

    	var viewport = {
       	 top : win.scrollTop(),
       	 left : win.scrollLeft()
    	};
    	viewport.right = viewport.left + win.width();
    	viewport.bottom = viewport.top + win.height();

    	var bounds = this.offset();
    	bounds.right = bounds.left + this.outerWidth();
    	bounds.bottom = bounds.top + this.outerHeight();

    	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};
	var height = $(window).height();
	
	$(".fitToScreen").attr("style", "min-height: "+(height + 75)+"px;");
	$(".homeLogo").attr("style", "margin-top: "+ (height/2 - 150) + "px;");
	$(".scrollEffect").map(function(){
		if($(this).isOnScreen()){
            $(this).addClass($(this).data("effect"));
            $(this).attr("style", "");
		}
	});
	$(".loadingPage").attr("style", "position: fixed; z-index: 9999; background-color: #005795; height: "+(height - 50)+"px; width: 100%; top: 50px;");
});




