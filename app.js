// 함수란?
// 특정 기능을 모아둔 집합체
// 또는 특정 계산된 값을 재사용하기 위해

// 함수 선언 방법
// 매개변수(parameter)는 함수 호출시 값을 받아오는 변수명이라고 생각하면된다.
function 함수명(매개변수) {
    //... 함수 실행시 작동할 코드 내용
  }
  
  // 함수에 대한 예제
  // function greeting(username) {
  //   console.log(`${username}님 안녕하세요.`);
  // }
  
  const app = document.getElementById("app");
  
  function greeting(username) {
    console.log(`${username}님 안녕하세요.`);
    // 함수내의 값이 어딘가에 할당이 되려면 return 적어줘야 한다.
    return `${username}님 안녕하세요.`;
  }
  
  app.innerText = greeting("이은지");
  
  function sum(a, b) {
    // 주의 사항으로 return 아래 줄에는 코드를 적지 않는다.
    return a + b;
  }
  
  const result = sum(10, 10);
  console.log(result);