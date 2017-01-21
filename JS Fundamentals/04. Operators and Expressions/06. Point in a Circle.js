function isPointInCircle(args) {
	var x = parseFloat(args[0]),
		y = parseFloat(args[1]),
		radius = 2;
	var condition = (Math.sqrt((x - 0) * (x - 0) + (y - 0) * (y - 0)));
	if (condition <= radius) {
		return 'yes' + ' ' + condition.toFixed(2);
	}
	else {
		return 'no' + ' ' + condition.toFixed(2);
	}
}
console.log(isPointInCircle(['-2', '0']));//yes 2.00