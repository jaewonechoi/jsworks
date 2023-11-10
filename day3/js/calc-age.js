// calc-age.html

//나이 계산 프로그램
//write() -> getElementById().innerHTML
function calcAge(){
  //조건 : 현재 연도는 상수로 선언할 것
  //나이 : 현재 연도 - 태어난 해
  const CURRENT_YEAR = 2023;
  let birth = prompt("태어난 연도를 입력하세요.(YYYY)", "YYYY");

  /*let birth = parseInt(prompt("태어난 연도를 입력하세요.(YYYY)", "YYYY"));
  -> 취소를 눌렀을시 null이 나오므로 숫자가 아니기 때문에 NaN이 나옴
  document.write(birth);*/
  
  if(birth === null){
    document.getElementById("print").innerHTML = "다시 입력해 주세요.";
  }else if(isNaN(birth)){
    document.getElementById("print").innerHTML = "숫자를 입력해 주세요.";
  }else{
    birth = parseInt(birth);  //문자를 숫자로 바꿈
    myAge = CURRENT_YEAR - birth;
    document.getElementById("print").innerHTML =
     CURRENT_YEAR + "년 현재<br>" + birth + "년에 태어난 사람의 나이는 " + myAge + "세 입니다."
  }
}