$(document).ready(function(){
	var container = $(".container");
	for(i=0;i<256;i++){
		$(".container").append("<div class='square'></div>");
	}
	function turnBlack(){
		var rgb = [];
		for(i=0;i<3;i++){
			min = 0;
			max = 256;
  			rgb[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  			var color = "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
		};
		$(this).css('background-color', color);
	}
	$("button#reset").click(reset);
	function reset(){
		$(".container").empty();
		var number = prompt("How many sqaures do you want for each row and column?", 16);
		for(i=0;i<number*number;i++){
			$(".container").append("<div class='square'></div>");
		};
		var pixels = (500-number++)/number;
		$(".square").css('width', pixels+"px");
		$(".square").css('height', pixels+"px");
		container.find(".square").on('mouseover',turnBlack);
	};
	container.find(".square").on('mouseover',turnBlack);
});
