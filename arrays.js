// 타입 선안 배열 만들기
var activeUsers = [];
activeUsers.push("Tony");
var ageList = [45, 56, 13];
ageList[0] = 99;
//배열 구문 더 알아보기
//const bools:Array<boolean>=[]
var bools = [];
var coords = [];
coords.push({ x: 23, y: 8 });
//다차원 배열
var board = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]];
function getTotal(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
}
console.log(getTotal)