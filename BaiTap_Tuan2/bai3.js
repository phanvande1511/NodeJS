const prompt = require('prompt-sync')();

console.log("\nChon loai nhiet do muon quy doi: \n 1. C -> F. \n 2. F -> C.\n");

let inputTemperature = prompt("Chon muc muon quy doi: ");

if(inputTemperature == 1) {
	let celsius = prompt("\nNhap so do C: ");
	var fahrenheit = ((9/5) * parseInt(celsius)) + 32;
	console.log(celsius + "°C = " + fahrenheit + "°F");

} else if(inputTemperature == 2) {
	let fahrenheit = prompt("Nhap so do F: ");
	var celsius = (5 / 9) * (parseInt(fahrenheit) - 32);
	console.log(fahrenheit + "°F = " + celsius + "°C")
} else {
	console.log("Loi!!!");
}


