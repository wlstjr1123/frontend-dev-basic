/*
    변수의 범위(Scope)
    1. 자바스크립트는 어휘ㅏ에서 변수의 범위를 알수 있는 정적 범위이다. (Lexical Scope)
    2. ESG 이전
        - 자바와 같은 블록 범위를 지원하지 못했다.
        - 함수 범위(Function Scope)만 지원했다.
        - function() {...} 안에서 변수 앞에 ㅍㅁㄱ 키워드를 사용하면 함수 범위를 가지게 된다.
        - 만일, var 키워드 없이 함수안에서 변수를 저으이하게 되면 전역 범위를 가지게 된다.
    3. ESG 이후
        - 새롭게 BLock Scope이 생기게 두 키워드를 지원한다.
        - let : 변수
        - const : 상수
    4. const/let 만 사용하고 반드시 붙히자.
*/
var i = 10
var f = function() {
    var i = 20
    j = 100;
    console.log(i);
    i = j - 1;
}

{
    y = 90;
    let x = 100000;
    const PI = 3.14;
    x = 100;
    // 상수이기 때문에 에러
    //PI = 0;
}

// error: 접근이 안됨
// console.log(x);

console.log(y);

f();
console.log(i);
console.log(j);