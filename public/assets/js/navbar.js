
$(document).ready(function(){
	$("button").on("tap", function(e){
		$(this).trigger("click");
		e.preventDefault();
		return false;
	});
	$(".princetonLogo").on("mouseover", function(){
		this.src = "/assets/logos/princetonlogo2.png";
	}).on("mouseleave", function(){
		this.src = "/assets/logos/princetonlogo.png";
	})
});


