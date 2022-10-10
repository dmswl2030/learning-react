//5가지의 랜덤한 배경이
//버튼을 누를때마다 바뀐다

// 1. 버튼을 누를 btn 변수 생성 
const app = document.getElementById("app");
const btn = document.querySelector(".btn");

// 2. 배경색을 담을 배열 bgColor를 생성
const bgColor = ["tomato", "hotpink", "red", "blue", "pupple"];

// 3. 버튼을 클릭하면 배경색 5가지중 한가지 색으로 변경된다.
btn.addEventListener("click", () => {
  
  // 3-1. 5가지를 랜덤하게 계산할 변수 random 생성 (floor: 올림)
  const random = Math.floor(Math.random()*5);

  // 3-2. bgColor의 배열에 random변수를 담아 backgroundColor의 스타일을 바꿈
  app.style.backgroundColor = bgColor[random];
});