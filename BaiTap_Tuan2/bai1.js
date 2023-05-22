const rl = require('rl');

rl = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nhập độ dài của mảng: ', length => {
  let arr = [];

  function getArrayElements(index) {
  	var indexNumber = +index + 1;

    if (index < length) {
      rl.question("Nhập phần tử thứ " + indexNumber + " của mảng: ", (element) => {
        arr.push(parseInt(element));
        getArrayElements(index + 1);
      });
    } else {
      const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      console.log('Tổng của mảng là:', total);
      rl.close();
    }
  };

  getArrayElements(0);
});
