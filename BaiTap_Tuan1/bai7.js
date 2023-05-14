 const readline = require('readline').createInterface({
 	input: process.stdin,
 	output: process.stdout
 })

 readline.question("Nhap so 'a': ", numberA => {
 	readline.question("Nhap so 'b': ", numberB => {
 		readline.question("Nhap so 'c': ", numberC => {
 			var delta = (+numberB * +numberB) - (4 * +numberA * +numberC);
 			console.log("Delta: ", delta);

 			if (delta < 0) {
 				console.log("Phuont trinh vo nghiem");
 			} else if (delta == 0) {
 				console.log("Phuong trinh co nghiem kep: x1 = x2 = ", (-(+numberB / (2 * +numberA))));
 			} else {
 				var x1 = (-numberB + Math.sqrt(delta)) / (2 * +numberA);
 				var x2 = (-numberB - Math.sqrt(delta)) / (2 * +numberA);

 				console.log("Phuong trinh co 2 nghiem phan biet: x1 = ", x1 + ", x2 = ", x2);
 			}


 			readline.close();
 		})
 	})
 })