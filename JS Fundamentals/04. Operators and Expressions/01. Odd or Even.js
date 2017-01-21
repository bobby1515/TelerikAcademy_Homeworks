function solve(args) {
	var num = +args[0];

	if (num % 2) {
		console.log('odd ' + num);
	} 
	else {// !(n % 2) 
		console.log('even ' + num);
	}
}