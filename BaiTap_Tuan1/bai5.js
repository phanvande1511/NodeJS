const readline = require('readline').createInterface({
	input: process.stdin, 
	output: process.stdout
})

readline.question("Nhap ho ten: ", hoten => {
	readline.question("Nhap diem trung binh: ", dtb=> {
		if (dtb >= 5) {
			console.log("Ho ten: ", hoten.toUpperCase()); 
			console.log("Xep loai hoc luc: Dau");
		} else {
			console.log("Ho ten: ", hoten.toUpperCase()); 
			console.log("Xep loai hoc luc: Rot");
		}
		readline.close();
	})
})