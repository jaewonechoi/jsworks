// mainjs.js
// 입장객 수에 따른 행과 열, 줄수 계산
let customer, colNum, rowNum;

customer = prompt("입장객 수 입력: ", "30");
colNum = prompt("좌석 열 수 입력: ", "7");

//나머지의 유무에 따른 조건문
if(customer % colNum == 0){
  rowNum = customer / colNum; //몫
}else{
  rowNum = parseInt(customer / colNum) + 1;
}

//좌석 번호 배치
document.write("<table>");
for(let i = 0; i < rowNum; i++){   //행
  document.write("<tr>");
  for(let j = 1; j <= colNum; j++){
    let seatNum = colNum * i + j;
    //좌석 번호가 입장객 수보다 크면 멈춤
    if(seatNum > customer){
      break;
    }
    document.write("<td>좌석" + seatNum + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");