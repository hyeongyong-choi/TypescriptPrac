
//유니온 타입
function printAge(age: number | string): void{
    console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax:number){
    //타입좁히기
    if(typeof price === "string"){
        price = parseFloat(price.replace("$",""));
    } 
       return price * tax
    }   


console.log(calculateTax(45,.07))
console.log(calculateTax("$45",.07))

//유니온 타입과 배열
type Point = {
    x : number;
    y : number;
}

type Loc = {
    lat: number;
    long: number;
}
let coordinates: Point | Loc = { x: 1 , y: 34};
coordinates = {lat:321.213, long:23.334};

// const stuff: (number | string)[] = [1,2,3,"das"]
const coords: (Point | Loc)[] = []
coords.push({lat:321.213, long:23.334})


//리터럴 타입
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad"

type DayOfWeek = 
    | "Monday"
    | "Tuesday"
    | "Wendesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"

let today:DayOfWeek = "Thursday"

