//Date 객체(현재 날짜와 시간)

const NOW = new Date();

document.write("현재 년도: " + NOW.getFullYear() + "년<br>");
document.write("현재 월: " + (NOW.getMonth() + 1) + "월<br>");
document.write("현재 일: " + NOW.getDate() + "일<br>");

document.write("현재 시: " + NOW.getHours() + "시<br>");
document.write("현재 분: " + NOW.getMinutes() + "분<br>");
document.write("현재 초: " + NOW.getSeconds() + "초<br>");

// 현재까지의 시간 측정(1970. 1. 1 자정부터 밀리초로 반환)
document.write("현재까지의 시간: " + 
        NOW.getTime()/1000 + "<br>");

document.write("날(일)로 환산: " + 
        Math.floor(NOW.getTime()/(1000*24*60*60)) + "<br>");