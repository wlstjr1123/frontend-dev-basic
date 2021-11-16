/**
 * 배열
 */

//1. 내장객체(생성자 함수)
console.log("====생성1:  내장객체(생성자 함수)============")

var a1 = new Array(0, 2, 4, 6, 8);
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 2. 리터럴
console.log("====생성2:  리터럴============")
var a4 = [function() {
    console.log("Hello");
}, 20, "JavaScript", true, {
    name: "마이콜",
    email: "michol@gmail.com"
}];

console.log(a4.length)
for (var i = 0; i <a4.length; i++) {
    console.log(a4[i]);
}

// Array VS Object
console.log("====Array VS Object======================")
a5 = [];
a5[0] = 0;
a5["1"] = 1;
a5["name"] = "둘리"
console.log(a5["0"], a5[1], a5.length);
for(prop in a5) {
    console.log(prop);
}

console.log("====Array VS Object======================")
o5 = {};
o5.length = 3;
o5[0] = 0;
o5["1"] = 1;
o5["name"] = "둘리"
console.log(o5["0"], o5[1], o5.length);
for(prop in o5) {
    console.log(prop);
}

console.log("===========");
a5.forEach(function(e, index) {
    console.log(index + ":" + e);
});

console.log("===========");
Array.prototype.forEach.call(o5, function(e, index) {
    console.log(index + ":" + e);
});

