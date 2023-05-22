const readline = require('readline').createInterface({
	input: process.stdin, 
	output: process.stdout
}) 

readline.question("Nhap so muon kiem tra: ", number => {
	var total = 0;

	for (var i = 2; i < number; i++) {
		if (number % i == 0) {
			total += 1;
		}
	}

	if (total == 0) {
		console.log(number + " la so nguyen to");
	} else {
		console.log(number + " khong phai la so nguyen to");
	}
	// console.log(total);
	readline.close();
})