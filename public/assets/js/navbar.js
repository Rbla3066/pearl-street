
$("button").on("tap", function(e){
	$(this).trigger("click");
	e.preventDefault();
	return false;
});
$("a").on("tap", function(e){
	$(this).trigger("click");
	e.preventDefault();
	return false;
});
