// var er man golo ki typer ortat string,numeric,boolean kina ta check kora jai nicher niome
var price = 100;
// console.log(typeof price);
var price = '100';
// console.log(typeof price)
var isHappy = true;
console.log(typeof isHappy);

// kono man na dile undefined asbe output
var romantic;
console.log(romantic);

// javaScrift e sudu mattoro 0.1 r 0.2 jog korte gele dosomiker por onekgolo songa dekabe,r ata fixed korte hoi toFixed like tar vitore dosomiser por koto songka porjnto dekte cai seta dite hoi r outout ta tkn string hoie jai,parseFloat kore ata numeric korte hoi(onno anno dosomic er ketre ata hoina)
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2);
sum =parseFloat(sum);
console.log(sum);
