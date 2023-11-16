// array2.html

//Array 객체를 사용한 배열
let num = new Array();  //비어있는 배열 생성
console.log(num);
console.log(num.length + "개");

//저장(입력)
num[0] = 10;
num[1] = 20;
num[2] = 30;

console.log(num);

//특정 요소 1개 조회
console.log(num[0]);

//수정
num[1] = 40;

//전체 요소 검색
for(let i = 0; i < num.length; i++){
  document.write(num[i] + " ");
}

document.write("<br> for ~ in문 검색 <br>");

for(let number in num){
  document.write(num[number] + " ");
}

//연산
console.log("인덱스로 연산하기");
console.log(num[1] - num[2]);
console.log(num[1] <= num[2]);

//합계 및 평균
let sum = 0;
let avg;
for(let i = 0; i < num.length; i++){
  // sum = sum + num[i];
  sum += num[i];  //누적 합계
}
avg = sum / num.length;   //평균 = 합계 / 개수
console.log(sum);
console.log(avg.toFixed(2));  //소수점 (2)자리까지 출력


