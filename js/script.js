$(document).ready(function() {
	var color = $("input[name=color_select]:checked").val();
	var drawing = true;

	createGrid($("input[name=grid_size]").val());

	$(':button').click(function(){
		switch($(this).attr('id')){
			case 'create':
				if($("input[name=grid_size]").val() <= 128 && $("input[name=grid_size]").val() >= 0){
					createGrid($("input[name=grid_size]").val());
				} else alert("Please enter a value between 0 and 128");
				break;
			default:
				break;
		}
	})

	$("#grid").click(function(){
		drawing = !drawing;
	});

	$('input[name=color_select]').change(function(){
		color = $("input[name=color_select]:checked").val();
		$('.square').off("mouseenter mouseleave");		//Important to unbind old hover event handlers!
		draw(color);
	});

});

function createGrid(gridSize){
	$("#grid").empty();

	var squareSize = (512/gridSize);
	var totalSquares = gridSize * gridSize;

	for(i = 0; i < totalSquares; i++){
		$('#grid').prepend('<div class="square"></div>');
	}

	$(".square").width(squareSize);
	$(".square").height(squareSize);

	$('.square').off("mouseenter mouseleave");		//Important to unbind old hover event handlers!
	draw($("input[name=color_select]:checked").val());
}

function draw(color){
	switch(color){
		case 'black':
			drawBlack();
			break;
		case 'random':
			drawRandom();
			break;
		case 'gradient':
			drawGradient();
			break;
		case 'erase':
			erase();
			break;
		default:
			break;
	}
}

function drawBlack(){
	$(".square").hover(function(){
		console.log("black");
		$(this).css("background-color", "black");
		$(this).css("opacity", 1);
	});
}

function drawRandom(){
	$(".square").hover(function(){
		var rgbaVals = [1+Math.floor(Math.random()*255),1+Math.floor(Math.random()*255),1+Math.floor(Math.random()*255),1]
		$(this).css("background-color", "rgba("+rgbaVals+")");
		$(this).css("opacity", 1);
	});
}

function drawGradient(){

}

function erase(){
	$(".square").hover(function(){
		var opacity = $(this).css("opacity");
		var newOpacity = opacity - 0.2;
		if(newOpacity > 0){
			$(this).css("opacity", newOpacity);
		} else $(this).css("opacity", 0);
	});
}
