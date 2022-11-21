// 타입 선안 배열 만들기
const activeUsers: string[] = []
activeUsers.push("Tony")

const ageList: number[] = [45,56,13];
ageList[0] = 99

//배열 구문 더 알아보기
//const bools:Array<boolean>=[]
const bools: boolean[] = []

type Point = {//커스텀 타입도 배열로 만들 수 있다.
    x: number,
    y: number
}

const coords: Point[] = []
coords.push({x:23, y:8})

//다차원 배열
const board: string[][] = [["X","O","X"],["X","O","X"],["X","O","X"]]

//배열 타입 연습 문제
type Product = {
    name:string;
    price:number;
}

function getTotal(products: Product[]): number{
    let total = 0;
    for(let product of products){
        total += product.price;
    }
    return total;
}