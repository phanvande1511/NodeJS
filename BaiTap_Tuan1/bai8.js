const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nhập giá trị của a: ', (a) => {
  rl.question('Nhập giá trị của b: ', (b) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      console.log('Vui lòng nhập vào hai số hợp lệ!');
      rl.close();
      return;
    }

    const sum = numA + numB;
    const difference = numA - numB;
    const product = numA * numB;
    const quotient = numA / numB;

    console.log(`Kết quả cộng: ${sum}`);
    console.log(`Kết quả trừ: ${difference}`);
    console.log(`Kết quả nhân: ${product}`);
    console.log(`Kết quả chia: ${quotient}`);

    rl.close();
  });
});
