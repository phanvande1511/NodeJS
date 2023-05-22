const prompt = require('prompt-sync')();

let arr = [];

function showWork() {
	for(let i = 0; i < arr.length; i++) {
		console.log(parseInt(i + 1) + ". " + arr[i]);
	}
}

function addWork() {
	var input = prompt('Nhập công việc muốn thêm: ');
	arr.push(input);
}

function editWork() {
	var choose = prompt('Chọn số thứ tự công việc muốn chỉnh sửa: ');
	arr[parseInt(choose - 1)] = prompt("Nhập công việc: ");
}

function removeWork() {
	var remove = prompt('Chọn số thứ tự công việc cần xóa: ');
	arr.splice(parseInt(remove - 1), 1);
}

var index = 0;
function main() {
	console.log('\n\t\t-----Menu-----\n\t1. Thêm công việc.\n\t2. Sửa công việc.\n\t3. Xóa công việc.\n\t4. Hiển thị công việc.\n\t5. Thoát.\n\t\t--------------\n');

	do {
		index = prompt('Chọn chức năng: ');

		if (index == 1) {
			addWork();
		} else if (index == 2) {
			editWork();
		} else if (index == 3) {
			removeWork();
		} else if (index == 4) {
			showWork();
		}
	} while (parseInt(index) < 5 && parseInt(index) > 0);
}

main();