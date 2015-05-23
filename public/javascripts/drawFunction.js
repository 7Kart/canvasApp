function drawSettings(ctx, lineWidth, lineJoin, lineCap, strokeStyle, fillStyle){
	ctx.lineWidth = lineWidth;
	ctx.lineJoin = lineJoin;
	ctx.lineCap = lineCap;
	ctx.strokeStyle = strokeStyle;
	ctx.fillStyle = fillStyle;
}

function drawCircle(ctx, Xo, Yo, r, fill){
	ctx.beginPath();
	ctx.arc(Xo, Yo, r, 0, Math.PI*2, true);
	(fill) ? ctx.fill() : ctx.stroke();
}


function drawArc(ctx, x, y, r, startAngle, endAngle, counterclockwise, fill){
	ctx.beginPath();
	ctx.arc(x, y, ctx.lineWidth/2, startAngle, endAngle, counterclockwise)
	if (fill)
		ctx.fill()
	else
		ctx.stroke();
	ctx.closePath();
}


function drawQuadraticCurveTo(ctx, Xo, Yo, Xc, Yc, Xk, YK, fill){
	ctx.beginPath();
	context.moveTo(Xo, Yo);
	ctx.quadraticCurveTo(Xc, Yc, Xk, YK);
	if (fill)
		ctx.fill()
	else
		ctx.stroke();
	ctx.closePath();
}

