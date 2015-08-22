//Need to add something to start the drawing on an initial refresh
//Figure out how to stop the listeners in each colour function? Couldnt work this out tonight while implementing a gradient effect.
//Will start over next time instead
//fiddler?
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

function draw(color){
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
}

function drawBlack(){
	$(".square").hover(function(){
		console.log("black");
		$(this).css("background-color", "black");
	});
}

function drawRandom(){
	$(".square").hover(function(){
		var rgbVals = [1+Math.floor(Math.random()*255),1+Math.floor(Math.random()*255),1+Math.floor(Math.random()*255)]
		$(this).css("background-color", "rgb("+rgbVals+")");
	});
}

$(document).ready(function() {
	var color = $("input[name=color_select]:checked").val();
	var drawing = true;

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
		drawing = !drawing;
	});

	$('input[name=color_select]').change(function(){
		color = $("input[name=color_select]:checked").val();
		$('.square').off("mouseenter mouseleave");		//Important to unbind old hover event handlers!
		draw(color);
	});

});
