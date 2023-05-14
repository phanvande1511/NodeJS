const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question("Nhap so muon kiem tra: " , number => {
	if(number >= 0 & number % 2 == 0) {
		console.log("Day la so chan."); 
	}else if (number >= 0 & number % 2 != 0) {
		console.log("Day la so le.");
	} else {
		console.log("Khong hop le.");
	}
	readline.close();
})