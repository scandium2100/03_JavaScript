/* 변수 선언 : 값을 저장하기 위한 공간 생성 */

var number1;
var number2;

/* 변수에 값 대입 : 생성된 공간에 원하는 값을 넣기 */
// 변수명 = 값; -> 오른쪽 값을 왼쪽 변수에 대입한다.
number1 = 10;
number2 = 20;


/* var */
// 변수(값 변경 가능), 변수명 중복 가능
function varCheck(){
    var menu = "제육볶음";
    console.log("menu : ", menu);

    //  값 변경 확인(var 키워드 X)
    menu = "라면";
    console.log("menu : ", menu);

    /* 변수명 중복 확인 (var 키워드 O) */
    var menu = "김밥";
    console.log("menu : ", menu);

    // var 사용의 문제점
    //  -> 잘 사용하고 있던 변수를 실수로 없애는 경우가 자꾸 발생
}

/* let */
// 변수(값 변경 O), 변수명 중복 X (var 문제점 해결)
function letCheck(){
    let name = "홍길동"; /* 변수 선언 + "홍길동" 대입 */
    console.log("name : ", name);

    /* 값 변경 */
    name = "장보고";
    console.log("name : ", name);

    /* 변수명 중복 확인 */
    // var name = "이순신";
    // console.log("name : ", name); /* 오류 발생! */
    // 블록 범위 변수 'name'을(를) 다시 선언할 수 없습니다.

    /* 해결방법 : 다른 이름의 변수에 저장! */
    let name2 = "이순신";
    console.log("name2 : ", name2);
}

/* const (Constant : 상수) */
// 상수(값 변경 X), 변수명 중복 X
function constCheck(){
    const nationalCode = 82;
    console.log("nationalCode : ", nationalCode);

    /* 상수(값 변경 X) */
    // nationalCode = 1;
    // Assignment to constant variable. -> 상수에 값을 대입 (오류)
    console.log("nationalCode : ", nationalCode);

    /* 변수명 중복 X */
    // const nationalCode = 1;
}

/* var, let, const의 범위 확인 */
function scopeTest1()/* 함수 선언 */{
    // 함수 정의
    var num1 = 100;

    // if(num1 === 100) : 만약에 num1과 100이 같다면 {}블럭 실행
    if(num1 === 100){
        var num2 = 200; /* var을 이용해서 num2 변수 선언 */
    }
    // var은 함수 레벨 범위
    // -> var은 함수 정의 시작-끝 사이에 존재하면
    //    어디서든 존재 가능
    //    (함수 종료 직전까지 사용가능!)
    console.log("num2 : ", num2);
    // -------------------------------------------------------------
    /* let */
    let num3 = 300;

    if(num3 === 300){
        let num4 = 400;
    }
    console.log("num4 : ", num4);
    // num4 is not defined -> num4라는 것이 없음
    // -> let은 {}블럭 내에서만 사용되고 외부에서는 사용 불가능(global하지 않다.)
} /* 함수 정의 끝 */
// scopeTest1(); // 함수 호출

/* 변수 선언 위치에 따른 범위 */
/* 
    1. 전역(global) 변수
        - 어디서든 사용 가능한 변수

    2. 지역(local) 변수
        - {} 블럭 내부에서 작성된 변수
*/

// 전역 변수 선언 기본적으로 {} 블럭 밖에 선언
const global1 = '전역변수1';

function scopeTest2(){
    const fn1 = '함수지역변수';
    let fn2 = '함수지역변수2';

    console.log("if실행 전 fn2 : ", fn2);
    const temp = 123; /* 임시 변수 */
    if(temp === 123){
        // 바깥쪽에서 안쪽으로 변수 사용확인 -> 사용가능
        console.log("if내부에서 fn2 : ", fn2);

        // {{}} 바깥쪽에서 안쪽으로 변수 사용 확인 -> 사용가능
        console.log("전역 변수 global1 : ", global1);

        /* 
            {}바깥쪽 변수 값을
            {}내부에서 변경하면 어떤일이 발생할까?
        */
       fn2 = "변경된 fn2";
       console.log("fn2 변경 확인 : ", fn2); /* 변경된 fn2 */
    }

    console.log("if외부에서 fn2 : ", fn2); /* 변경된 fn2 */

    const name = "홍길동"; //상수, 함수{} 블록 레벨
    console.log("if 전 이름 : ", name); /* 홍길동 */
    if(temp===123){
        // 외부에서 들어온 홍길동은 name = '홍길동'이고
        // if문 내에서는 name = '김미영'이므로
        // 내부 함수의 우선순위가 더 높아 if문 내부의 변수가 우선순위가 된다.
        const name = "김미영";
        console.log("if 중 이름 : ", name); /* 김미영 */
    }
    console.log("if 후 이름 : ", name); /* 홍길동 */
}

// 자료형 확인
function typeCheck(){
    /* typeof 연산자 : 변수/값의 자료형을 확인하는 연산자 */
    /* undefined : 정의되지 않음 == 변수에 값 대입 X */

    let undef;
    console.log("undef : ", undef, typeof undef);
    
    // 문자열(String) : "", '' 형태로 작성된 리터럴(값)
    const name = "성기훈"
    const phone = '01012341234';
    console.log("name : ", name, typeof name);
    console.log("phone number : ", phone, typeof phone);

    // number(숫자) : 정수나 실수 형태으 리터럴(값)
    const age = 26;
    const height = 178;
    const sight = -2;
    console.log("age : ", age, typeof age);
    console.log("height : ", height, typeof height);
    console.log("sight : ", sight, typeof sight);

    // boolean(논리값) : true, false
    const bool1 = true;
    const bool2 = false;
    console.log("bool1 : ", bool1, typeof bool1);
    console.log("bool2 : ", bool2, typeof bool2);

    // object(객체) : 값을 여러개 저장 할 수 있는 형태
    //  1) 배열(Array) : 변수의 묶음, 
    //                   묶인 변수에 0부터 1씩 증가하는 숫자를 부여(index)
    const numbers = [1, 2, 3];
    console.log("numbers : ", numbers, typeof numbers);
    // 배열 내 요소(저장된 값) 하나씩 꺼내기
    console.log("numbers[0] : ", numbers[0], typeof numbers[0]);
    console.log("numbers[1] : ", numbers[1], typeof numbers[1]);
    console.log("numbers[2] : ", numbers[2], typeof numbers[2]);

    // JS 객체 { k:v, k:v, k:v }
    // k(key) == 값을 구분하는 이름(변수명과 비슷)
    // v(value) == 값 자체(변수에 대입되는 값)
    const user = { id:"user01",
                   pw:"pass01", 
                   point:13000 }
    console.log("user : ", user, typeof user); //object type
    console.log("user['id'] : ", user['id'], typeof user['id']);
    console.log("user['pw'] : ", user['pw'], typeof user['pw']);
    console.log("user['point'] : ", user['point'], typeof user['point']);
    
    // function(함수) : 함수도 변수에 대입 가능!!!
    // sumFn == 함수명
    const sumFn = function(a, b){
        return a + b;
    }
    console.log("sumFn : ", sumFn, typeof sumFn);
    //  sumFn 호출
    console.log(sumFn(111, 987), typeof sumFn);
    console.log(sumFn(1, 9), typeof sumFn);
    console.log(sumFn(-182, 100), typeof sumFn);
}