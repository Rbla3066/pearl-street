
$(document).ready(function(){
	$("button").on("tap", function(e){
		$(this).trigger("click");
		e.preventDefault();
		return false;
	});
});


