// const
// const는 상수라는 뜻으로 값을 변경할 수 없는 변수이다.
// 즉 const에 값을 할당한 후에는 할당된 값을 변경할 수 없다는 뜻(Read - Only).
// 이는 앞으로 코드를 작성함에 있어 값이 변경되지 말아야 할 변수의 값 변경을 방지함으로 오류를 사전에 방지 할 수 있다.

// const는 중복 선언이 안된다.
const number = 10;
const number = 10; // SyntaxError: Identifier 'number' has already been declared

// const는 값이 변경되지 않는 상수이다.
const age = 10;
age = 20; // Assignment to constant variable.