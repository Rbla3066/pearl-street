

$(document).ready(function(){
	$(".loadingPage").attr("style", "position: fixed; z-index: 9999; background-color: #005795; height: "+(height)+"px; width: 100%;");
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
	$(".scrollEffect").map(function(){
		if($(this).isOnScreen()){
            $(this).addClass($(this).data("effect"));
            $(this).attr("style", "");
		}
	});
	$(".mainHeader").attr("style", "font-size: "+( $(window).height() * 0.20 < 64 ? $(window).height() * 0.20 : 64)+";");
});




