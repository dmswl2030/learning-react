const ul = document.querySelector("ul");
const form = document.querySelector("form");
const btn = document.querySelector("button");
const input = document.querySelector("input");

let todos = ["밥먹기", "숙제하기", "공부하기"];

function printing() {
  todos.map((todo) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = todo;
  });
}

// 버튼을 눌렀을 때 text 가져오기
form.addEventListener("submit", (event) => {
  event.preventDefault();
  todos = [...todos, input.value];
  ul.innerHTML = null;
  printing();
  input.value = "";
});

printing();