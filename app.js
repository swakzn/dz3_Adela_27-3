// var list = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
// // var countList = {};
//
// for (var i = 0; i < list.length; i++) {
//   count[list[i]] = count[list[i]] ? count[list[i]] + 1 : 1;
// }
// console.log(count);

var numbers = [10, 20, 30, 50, 235, 3000, 5000439857];
var i = 0;
while (i < numbers.length) {
  var number = numbers[i].toString();
  var firstNumber = number[0];

  if (firstNumber === '1' || firstNumber === '2' || firstNumber === '5') {
    console.log(numbers[i]);
  }
  i++;
}

var count = 20
while (count >= 0){
    console.log(count)
    count--
}