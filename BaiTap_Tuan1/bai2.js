const readline = require('readline').createInterface({
	input: process.stdin, 
	output: process.stdout
})

readline.question("Nhap so muon kiem tra: ", number => {
	readline.close();

	if (number % 2 == 0) {
		console.log(number + " la so chan");
	} else if (+number < 0) {
		console.log("Vui long nhap so lon hon 0");
 	} else {
		console.log(number + " la so le");
	}
})