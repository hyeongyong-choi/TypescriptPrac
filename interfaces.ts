//인터페이스
interface Point{
    x: number;
    y: number;
}

const pt: Point = {x: 123, y:1234};

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    // sayHi:()=> string;
    sayHi():string;
}

const thomas: Person = {
    first: "Thomas", 
    last:"Hardy", 
    nickname: "Tom", 
    id:218, 
    sayHi: ()=>{return "Hello!";}
}

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number){
        const newPrice = this.price * (1-amount);
        this.price = newPrice;
        return this.price;
    },
};

console.log(shoes.applyDiscount(0.4));

//인터페이스 다시열기
interface Dog {
    name: string,
    age: number
}
interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark(){
        return "WOOF WOOF";
    }
}

//인터페이스 확장
interface ServiceDog extends Dog{
    job: "drug sniffer" | "bomb" | "guide dog"
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed:"Lab",
    bark(){
        return "Bark!"
    },
    job:"guide dog"
}


//인터페이스 다중확장
interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human,Employee{
    level: string,
    languages: string[]
}

const pierre:Engineer = {
    name: "Pierre",
    id:123875,
    email:"pierre@gmail.com",
    level:"senior",
    languages: ["JS", "Python"]
}

//Types vs interface
//인터페이스는 객체 형태 묘사에만 사용이 되지만, 타입 별칭은 어떤 타입이든지 묘사가 가능합니다.
//객체형태에서는 인터페이스는 다시 열어 확장할 수 있을 뿐만 아니라 다중상혹이 가능하지만, 타입 별칭은 불가능합니다.










