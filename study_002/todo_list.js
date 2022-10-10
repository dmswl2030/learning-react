// input창에 텍스트 입력 후 등록 버튼을 누르면
// 하단 목록에 입력한 값이 마지막에 노출

// 1. 필요한 변수 생성하기
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const btn = document.querySelector("button");
const input = document.querySelector("input");

// 2. 목록을 담은 배열 todos 변수 생성
let todos = ["밥먹기", "숙제하기", "공부하기"];

// 3. 목록을 나타내는 printing 함수 생성
function printing() {

  // 3-1. todos를 반복하는 
  todos.map((todo) => {

    // 3-2. html에 li 태그 생성 
    const li = document.createElement("li");

    // 3-3. ul 태그의 자식요소로 li생성
    ul.appendChild(li);

    // 3-4. li 태그에 todo 출력
    li.innerText = todo;
  });
}

// 4. 버튼을 눌렀을 때 text 가져오기
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // 4-1. todos배열에 input의 텍스트 값을 추가해줌
  todos = [...todos, input.value];

  // 4-2. ul의 텍스트를 초기화
  ul.innerHTML = null;

  // 4-3. printing 함수 호출
  printing();

  // 4-4. input 입력값 초기화
  input.value = "";
});

// 5. printing 함수 호출
printing();