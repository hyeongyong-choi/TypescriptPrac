//원하는 만큼의 파라미터를 가질 수 있습니다.
function square(num) {
    return num * num;
}
function greet(person) {
    if (person === void 0) { person = 'stranger'; }
    return "Hi there, ".concat(person);
}
var doSomething = function (person, age, isFunny) { };
square(3);
greet('Tonya Harding');
doSomething('ChickenFace', 76, true); //올바른 순서로 입력
var add = function (x, y) {
    return x + y;
};
//문자열의 배열
var colors = ['red', 'orange', 'yellow'];
colors.map(function (color) {
    return color.toUpperCase();
});
//void 타입 - 아무값도 반환하지 않음
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
//never 타입 - 아무값도 반환하면 안됨
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log('Game Loop Running');
    }
}
//1번 Prac
function twoFer(person) {
    if (person === void 0) { person = 'you'; }
    return "one for ".concat(person, ", one for me");
}
console.log(twoFer());
console.log(twoFer('Elvis'));
//2번 prac - 윤년인지 확인
// const isLeapYear = (year:number):boolean =>{
//     if(year % 4 === 0 && year % 100 !== 0){
//         return true;
//     }else if(year % 400 === 0){
//         return true;
//     }
//     return false;
// };
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
