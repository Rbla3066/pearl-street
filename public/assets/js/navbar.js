

$(document).ready(function(){
	var height = $(window).height();
	var width = $(window).width();
	
	$(".loadingPage").attr("style", "position: fixed; z-index: 9999; background-color: #005795; height: "+(height)+"px; width: 100%;");
	$("button").on("tap", function(e){
		$(this).trigger("click");
		e.preventDefault();
		return false;
	});
	function closePopup(){
		$("#linkPopup").remove();
		$(".linkButton").attr("aria-expanded", "false");
		$(".socialImg").attr("style", "");
	}
	$("body").on("click", ".closePopup", closePopup);
	
	$(".linkButton").on("click", function(){
		if($("#linkPopup").data("isopen") == "true") return;
		$("body").prepend("<div id='linkPopup' style='height: "+(height)+"px' data-isopen='true'><div class='closeButton closePopup pull-right' aria-label='Close'>&times</div></div>");
		$(".popUp1").map(function(){
			$("#linkPopup").append($(this).html() + "<br>");
		});
		$(".socialImg").attr("style", "height: 100px; margin: 10px 0px 10px 100px;");
		$(".linkButton").attr("aria-expanded", "true");
	});
	$(".scrollEffect").attr("style", "visibility: hidden;");
	$.fn.isOnScreen = function(){

    	var win = $(window);

    	var viewport = {
       	 top : win.scrollTop(),
       	 left : win.scrollLeft()
    	};
    	viewport.right = viewport.left + width;
    	viewport.bottom = viewport.top + height;

    	var bounds = this.offset();
    	bounds.right = bounds.left + this.outerWidth();
    	bounds.bottom = bounds.top + this.outerHeight();

    	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	}

	$(".fitToScreen").attr("style", "min-height: "+(height + 75)+"px;");
	$(".scrollEffect").map(function(){
		if($(this).isOnScreen()){
            $(this).addClass($(this).data("effect"));
            $(this).attr("style", "");
		}
	});
	$(".mainHeader").attr("style", "font-size: "+( $(window).height() * 0.20 < 64 ? $(window).height() * 0.20 : 64)+";");
});




