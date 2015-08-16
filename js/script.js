$(document).ready(function() {
	createGrid(64);
	monitorGrid();
	newGrid();
});

function createGrid(gridSize){
	clearGrid();

	var squareSize = (512/gridSize);
	var totalSquares = gridSize * gridSize;

	for(i = 0; i < totalSquares; i++){
		$('#grid').prepend('<div class="square"></div>');
	}

	$(".square").width(squareSize);
	$(".square").height(squareSize);

}

function monitorGrid(){
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

function clearGrid(){
	$("#grid").empty();
}