const ex01 = function(param, callback) {
    // 
    // 비동기 코드
    // 파일 시스템 접근, 네트워크 통신, sql to DB, setTimer
    // 
    setTimeout(function() {
        if (param === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error('fail'), null);
        }
    }, 2000);
}

// test01
ex01('param-data', function(error, res) {
    if (error) {
        console.error(error);
    } else {
        console.log(res);
    }
});

// test02
ex01('param-error', function(error, res) {
    if (error) {
        console.error(error);
    } else {
        console.log(res);
    }
});

console.log("wait...........");