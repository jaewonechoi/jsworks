let bigPic = document.querySelector("#pic");
let smallPics = document.querySelectorAll(".small");

//실행함수
for(let i = 0; i < smallPics.length; i++){
  //this.src - 클릭한 대상 이미지 소스 경로 ****
  smallPics[i].onclick = function(){
    bigPic.setAttribute("src", this.src);
  };
}

//상세설명 보이기/숨기기(토글 구현)
let view = document.querySelector("#view"); //상세설명 보기
let detail = document.querySelector("#detail");
let sw = true;

//객체의 onclick 속성을 사용하여 구현
view.onclick = function(){  //실행 함수
  if(sw){
    detail.style.display = "block";
    view.innerText = "상세설명 닫기";
    sw = false;
  }else{
    detail.style.display = "none";
    view.innerText = "상세설명 보기";
    sw = true;
  }
}
