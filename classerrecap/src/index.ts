// class Player {
//     public readonly first: string;
//     public readonly last:string;
//     private score:number = 0;

//     constructor(first: string , last: string){
//         this.first = first;
//         this.last = last;
//     }
//     secretMethod():void {
//         console.log("SECRET METHOD!!")
//     }
// }

//파라미터 프로퍼티 단축 구문
class Player {
    constructor(public first: string ,public last: string, protected _score:number){
    }
    secretMethod():void {
        console.log("SECRET METHOD!!")
    }
    get fullName(): string{
        return `${this.first} ${this.last}`
    }

    get score(): number{
        return this._score;
    }
    set score(newScore:number){
        if(newScore < 0){
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}

class SuperPlayer extends Player{
    public isAdmin: boolean = true;
    maxScore(){
        this._score = 999999;
    }
}


const elton = new Player("Elton", "Steele",100);
elton.secretMethod();

interface Colorful{
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful{
    constructor(public color: string){}
}

class Jacket implements Colorful{
    constructor(public brand: string, public color:string){}
    print(){
        console.log(`${this.color}`)
    }
}

const bike1 = new Bike("red");
const jacket = new Jacket("Prada", "black");

//abstract는 인스턴스화는 못하지만, 메서드를 필수로 표시해 자식 클래스가 해당 메서드를 반드시 시행하도록 설정할 수 있습니다.
abstract class Employee {
    constructor(public first:string, public last:string){}
    abstract getPay(): number;
    greet(){
        console.log("HELLO!");
    }
}

class FullTimeEmployee extends Employee{
    constructor(first: string, last: string, private salary: number){
        super(first,last);
    }
    getPay(): number {
        return this.salary
    }
}

class PartTimeEmployee extends Employee {
    constructor(
        first: string,
        last:string,
        private hourlyRate: number,
        private hoursWorked:number
    ){
        super(first, last);
    }
    getPay(): number{
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000)
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill","Billerson",24,1100);
console.log(bill.getPay());







