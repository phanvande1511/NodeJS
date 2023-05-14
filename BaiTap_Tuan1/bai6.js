var numberX = 10 + Math.round(5 * Math.random());

const readline = require('readline').createInterface({
	input: process.stdin, 
	output: process.stdout
})

readline.question("Nhap so bi mat tu 10 - 15: ", number => {
	if ((number <= 15 & number >= 10) & number == numberX) {
		console.log("Chuc mung ban da doan dung");
	} else if (number < numberX) {
		console.log("Ban da doan nho hon so bi mat");
	} else if (number > numberX) {
		console.log("Ban da doan lon hon so bi mat");
	} else {
		console.log("Loi");
	}
	readline.close();
});