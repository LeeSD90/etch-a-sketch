$(document).ready(function() {
	createGrid(64);
	draw();
	newGrid();
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

function draw(){
	var color = $("input[name=color_select]:checked").val();
	$('input[name=color_select]').change(function(){
		color = $("input[name=color_select]:checked").val();
	});

	$(".square").hover(function(){
		if(color === "black"){
			$(this).css("background-color", "black");
		}
		else if(color === "random"){
			var rgbVals = [1+Math.floor(Math.random()*255),1+Math.floor(Math.random()*255),1+Math.floor(Math.random()*255)]
			$(this).css("background-color", "rgb("+rgbVals+")");
		}
	});
}

function newGrid(){
	$("#create").click(function(){
		createGrid($("input[name=grid_size]").val());
		draw();
	});
}