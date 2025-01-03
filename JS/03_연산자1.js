/* (중요!!) HTML 문서에서 얻어온 자료형은 무조건 string(문자열)!!! */

/* 계산기 동작 코드 */
// 전역 변수 선언
// document : HTML 문서
// . (점 연산자) : 네부(하위) 접근 연산자
// Element : HTML 요소
// ById : Id가 일치하는
// -> 문서 내에서 id가 일치하는 요소 얻어오기
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const calcResult = document.getElementById("calcResult");

/* 더하기 함수 (DOC 주석, 함수 설명 작성용 주석) */
function plusFn(){
    //  input1.value : #input1 요소에 작성된 값(string) 얻어오기

    // Number('숫자 형태의 문자열') -> 숫자로 변경
    // 단, '숫자형태의 문자열'이 아닌 경우 NaN(Not a Number) 결과 반환
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    console.log("두 수의 합 : ", value1+value2, typeof value1, typeof value2);
    // string + string -> 이어쓰기
    // number + number -> 덧셈

    // 결과(#calcResult)를 .innerText로 나타낸다.
    calcResult.innerText = value1 + value2;
}
/* 뺴기 함수 */
function minusFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    console.log("두 수의 차 : ", value1-value2, typeof value1, typeof value2);

    calcResult.innerText = value1 - value2;
}
/* 곱하기 함수 */
function multifyFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    console.log("두 수의 곱 : ", value1*value2, typeof value1, typeof value2);

    calcResult.innerText = value1 * value2;
}
/* 나누기 함수 */
function divideFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    console.log("두 수의 분 : ", value1/value2, typeof value1, typeof value2);

    calcResult.innerText = value1 / value2;
}
/* 나머지 함수 */
function modFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    console.log("나머지 : ", value1%value2, typeof value1, typeof value2);

    calcResult.innerText = value1 % value2;
}
// 전역변수로 const value1 = Number(input1.value);를
// 설정해 놓으면 처음 페이지로딩 시점에 .js코드를 읽을 때
// 아무 값도 있지 않으므로
// const value1 = 0;과 같은 의미를 가지고
// {}블럭 함수 내에서 다시 const value1 = Number(input1.value);를
// 해주지 않는다면 값이 갱신되지 않으므로
// 계속 0으로만 뜬다.
// 그래서 전역변수에서 const value1 = Number(input1.value);를
// 쓰기보다는 반드시 {}블록 함수 내에서 써라.

// ----------------------------------------------------------------------------
/* 산술 연산자 응용 */
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const calcResult2 = document.getElementById("calcResult2");

/* 첫 번째 값 *2 */
function doubleFn(){
    const value3 = Number(input3.value);

    calcResult2.innerText = value3 * 2;
}

/* 두 번째 값 ^2 */
function squareFn(){
    const value4 = Number(input4.value);

    calcResult2.innerText = value4 * value4;
}

/* 모든 산술 연산 결과 일괄 출력 */
function AllFn(){
    const value3 = Number(input3.value); 
    const value4 = Number(input4.value);

    const plus = value3 + value4;
    const minus = value3 - value4;
    const multi = value3 * value4;
    const div = value3 / value4;
    const mod = value3 % value4;
    
    calcResult2.innerHTML = 
        "<ul>"
        + "<ul> + 결과 : " + plus + "</ul>"
        + "<ul> - 결과 : " + minus + "</ul>"
        + "<ul> * 결과 : " + multi + "</ul>"
        + "<ul> / 결과 : " + div + "</ul>"
        + "<ul> % 결과 : " + mod + "</ul>"
        + "</ul>";

    // 요소.innertext = "문자열";
    // -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
    // -> HTML 코드 해석 X
    
    // 요소.innerHTML = "문자열";
    // -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
    // -> HTML 코드 해석 O
}

// ---------------------------------------------------------------------------

/* 증감 연산자 */
const countResult = document.getElementById("countResult");
function increase(){
    // 요소.innerText = "문자열"; // "문자열" 화면에 출력
    // 요소.innerText; // 요소에 작성된 내용 얻어오기

    // 1) countResult에 작서오딘 내용(숫자) 알아오기
    let count = Number(countResult.innerText);

    // 2) 얻어온 숫자를 1 증가시켜 출력하기
    countResult.innerText = ++count;
}
function decrease(){
    // 1) countResult에 작서오딘 내용(숫자) 알아오기
    let count = Number(countResult.innerText);

    // 2) 얻어온 숫자를 1 감소시켜 출력하기
    countResult.innerText = --count;
}

/* 전위/후위 연산 확인하기 */

// 연산이란?
// - 코드/값을 읽고, 실행하는 행위
// ex) +, -, *, /, %, ++, --, 
//     변수에 값 대입, console 출력, innerText ... 모두 다
function checkFn(){
    let num = 100;

    // 전위 연산 : 다른 연산 보다도 최우선으로 실행
    // ++num을 하고 "++num : "과 같이 console에 출력
    console.log("++num : ", ++num); // 100
    console.log("++num : ", ++num); // 101
    console.log("++num : ", ++num); // 102

    console.log("------------------------------------");

    //후위 연산 : 다른 연산 보다도 최후순으로 실행
    num = 100;
    console.log("num : ", num++); // 100 출력 -> num 1 증가(101)
    console.log("num : ", num++); // 101 출력 -> num 1 증가(102)
    console.log("num : ", num++); // 102 출력 -> num 1 증가(103)
    console.log("num : ", num); // 103

    // 문제
    let a = 10;
    let b = 5;
    let c = ++a * b--;

    /* 최종 a, b, c의 값은? */
    // a : 11
    // b : 4
    // c : 55

    console.log("a : ", a);
    console.log("b : ", b);
    console.log("c : ", c);
}