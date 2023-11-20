//order.html

//체크박스 객체 선택
let check = document.getElementById("shippingInfo");

//주문 정보
let billingName = document.getElementById("billingName");
let billingTel = document.getElementById("billingTel");
let billingAddr = document.getElementById("billingAddr");

//배송 정보
let shippingName = document.getElementById("shippingName");
let shippingTel = document.getElementById("shippingTel");
let shippingAddr = document.getElementById("shippingAddr");

check.addEventListener("click", function(){
  if(check.checked){  //check.checked == true
    shippingName.value = billingName.value; //주문정보의 이름을 배송정보의 이름에 대입
    shippingTel.value = billingTel.value;
    shippingAddr.value = billingAddr.value;
  }else{  //check.checked == false
    shippingName.value = null;
    shippingTel.value = null;
    shippingAddr.value = null;
  }
})