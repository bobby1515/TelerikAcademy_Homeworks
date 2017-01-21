function solve(args) {
	var a = +args[0],
		b = +args[1],
		h = +args[2],
		area;

	area = (((a + b) / 2) * h);
	console.log(area.tofixed(7));
}
