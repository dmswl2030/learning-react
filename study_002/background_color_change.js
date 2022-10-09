// 버튼을 누른다.
const app = document.getElementById("app");
const btn = document.querySelector(".btn");

// 배경색은 5가지가있다.
const bgColor = ["tomato", "hotpink", "red", "blue", "pupple"];

// 버튼을 클릭하면 배경색 5가지중 한가지 색으로 변경된다.
btn.addEventListener("click", () => {
    //floor : 올림
    const random = Math.floor(Math.random()*5);
    app.style.backgroundColor = bgColor[random];
});

