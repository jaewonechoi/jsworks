// array3.html

//1 ~ 10 자연수를 배열에 저장
//10개의 길이를 가진 배열 생성
let number = new Array(10);
console.log(number.length);

//저장
/*number[0] = 1;
number[1] = 2;
number[2] = 3;
*/

/*for(let i = 0; i < number.length; i++){
  number[i] = i + 1;
}*/

for(let num in number){
  number[i] = i + 1;
}

//출력
console.log(number);
document.write(number + " ");

//알파벳 대문자를 저장 - 26개
//문자셋 - 아스키코드(128개) 'A' = 65
//코드값으로 저장 후 출력 - 아스키코드
let alphabet = new Array(26);
let ch = 'ABCD';
console.log(ch.charCodeAt(3));
ch = ch.charCodeAt(); //()의 인덱스값을 지정하지 않으면 기본값인 0이 들어감

//저장
for(let i = 0; i < alphabet.length; i++){
  alphabet[i] = ch;
  ch++;
}

//출력
for(let i = 0; i < alphabet.length; i++){
  console.log(alphabet[i] + " " + String.fromCharCode(alphabet[i]));
}