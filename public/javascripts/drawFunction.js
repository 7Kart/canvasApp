function drawCircle(ctx, Xo, Yo, r, fill){
	ctx.beginPath();
	ctx.arc(Xo, Yo, r, 0, Math.PI*2, true);
	(fill) ? ctx.fill() : ctx.stroke();
}


