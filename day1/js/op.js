//op.js
let num1 = 8, num2 = 5;
let result;

//산술 연산
/*result = num1 + num2;
console.log(result);

result = num1 - num2;
console.log(result);

result = num1 * num2;
console.log(result);

result = num1 / num2;
console.log(result);

result = num1 % num2;
console.log(result);*/

//비교 연산
result = num1 > num2;
console.log(result);
console.log(typeof(result));

result = (num1 === num2);
console.log(result);

result = (num1 !== num2);
console.log(result);

//논리 연산
//논리곱 - and
result = (num1 == num2) && (num1 > num2);
console.log(result);

//논리합 - or
result = (num1 == num2) || (num1 > num2);
console.log(result);

//논리 부정 - not
result = !(num1 == num2);
console.log(result);

//조건 연산자
result = (num1 < num2) ? 'T' : 'F';
console.log(result);

//짝수/홀수 판정
result = (num2 % 2 == 0) ? '짝수' : '홀수'
console.log(result);
// window.alert("판정 결과: " + result);
document.write("<span class='acess'>판정 결과: " +
       result + "</span>");