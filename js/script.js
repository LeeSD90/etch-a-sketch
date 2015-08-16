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
	$(".square").hover(function(){
		$(this).css("background-color", "black");
	});
}

function newGrid(){
	$("#create").click(function(){
		createGrid($("input[name=gridSize]").val());
		monitorGrid();
	});
}