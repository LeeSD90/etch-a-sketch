//Need to add something to start the drawing on an initial refresh

$(document).ready(function() {
	var color = $("input[name=color_select]:checked").val();
	var draw = true;

	createGrid($("input[name=grid_size]").val());


	$(':button').click(function(){
		switch($(this).attr('id')){
			case 'create':
				createGrid($("input[name=grid_size]").val());
				break;
			default:
				break;
		}
	})

	$("#grid").click(function(){
		draw = !draw;
	});

	$('input[name=color_select]').change(function(){
		color = $("input[name=color_select]:checked").val();

		switch(color){
			case 'black':
				drawBlack();
				break;
			case 'random':
				drawRandom();
				break;
			default:
				break;
		}
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
}

function drawBlack(){
	$(".square").hover(function(){
		$(this).css("background-color", "black");
	});
}

function drawRandom(){
	$(".square").hover(function(){
		var rgbVals = [1+Math.floor(Math.random()*255),1+Math.floor(Math.random()*255),1+Math.floor(Math.random()*255)]
		$(this).css("background-color", "rgb("+rgbVals+")");
	});
}