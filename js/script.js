$(document).ready(function() {
	createGrid(64);
	monitor();
});

function createGrid(gridSize){
	var squareSize = (512/gridSize);
	var totalSquares = gridSize * gridSize;

	for(i = 0; i < totalSquares; i++){
		$('#grid').prepend('<div class="square"></div>');
	}

	$(".square").width(squareSize);
	$(".square").height(squareSize);

}

function monitor(){
	$(".square").hover(function(){
		$(this).css("background-color", "black");
	});
}