//greeting.html

//2초 간격으로 인사말이 변경할 것
//콜백함수 기능(반복 기능) - 자기가 자기자신을 부르는 재귀적 용법
//배열의 인덱스가 1증가하면 인사말이 바뀜
window.onload = function(){//window.onload 함수로 스크립트를 헤드에 쓰는게 가능해짐
  let message = ["오늘도 좋은 하루!!", "행운을 빌어요", "잘 지내니?"];

  let msgIdx = 0;

  myGreeting();   //함수 호출

  function myGreeting(){
    let msg = document.getElementById("demo");
    msg.innerHTML = message[msgIdx];
    msg.style.color = "blue";
    msgIdx++;
    if(msgIdx === message.length){
      msgIdx = 0;
    }
    setTimeout(myGreeting, 2000); //myGreeting()을 호출
  };
}