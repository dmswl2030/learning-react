//화면에 숫자 a, b의 곱셈한 후 값을
//html ID가 app인 div에 3개 출력하시오.


// 1. a, b를 곱하는 함수 multiply
function multiply(a, b) {
  return a * b;
};

// 2. div id app을 담을 변수 app
const app = document.getElementById("app");
const ul = document.querySelector("ul");

// 3. 3번 반복하는 for문
for(let i = 0; i < 3; i++) {
  // 3-1. 추가할 li element 생성
  const li = document.createElement("li");

  // 3-2. ul의 자식요소로 li를 추가
  ul.appendChild(li);

  // 3-3. multiply의 함수를 이용해 li안에 텍스트 넣기
  li.innerText = multiply(10, 10);
}
