// if-else.js

let num = 12;

//조건연산자(? :) - 짝수/홀수 판정, 3의 배수인지 판정
let result = (num % 3 === 0) ? "3의 배수" : "3의 배수가 아님";
console.log(result);

//if ~ else문
if(num % 3 === 0){
  document.write("3의 배수입니다.");
}else{
  document.write("3의 배수가 아닙니다.");
}