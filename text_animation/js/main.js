window.onload = function(){
  //스크롤 했을때 y좌표값을 알아내서
  //200px 이상이면 backward 애니메이션을 실행하고
  //200px 미만이면 forward 애니메이션 실행
  let text = document.querySelector("h1");

  //이벤트 함수
  window.addEventListener("scroll", function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value > 200){
      text.style.animation = "backward 1s ease-out";
      text.style.opacity = 0;
    }if(value < 200){
      text.style.animation = "forward 1s ease-out";
      text.style.opacity = 1;
    }
  })
}