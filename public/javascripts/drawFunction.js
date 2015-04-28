function drawCircle(ctx, Xo, Yo, r, fill){
	ctx.beginPath();
	ctx.arc(Xo, Yo, r, 0, Math.PI*2, true);
	(fill) ? ctx.fill() : ctx.stroke();
}

function drawMechanik(){
	var clickX = [];
	var clickY = [];
	var clickDrag = [];

	function addClick(x, y, dragging){
		clickX.push(x);
		clickY.push(y);
		clickDrag(dragging);
	}
}