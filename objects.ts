
//TypeScript에서는 객체를 설명하는 애너테이션을 만들 수 있습니다.
function printName(person: {first:string; last:string}){
    console.log(`${person.first} ${person.last}`)
}

printName({first: "Thomas" , last: "Jenkins"})
printName({first: "Mick" , last: "Jagger", age:473}) //직접 객체 리터럴을 전달하는 경우

const singer = {first:"Mick" , last:"Jagger", age:473 , isAlive:true}
printName(singer) //직접 객체 리터럴을 전달하는 경우에는 오류를 띄우지만 사전에 별도의 변수로 정의하는 과정을 거치면 필요한 프로퍼티만 있는 지 확인하니 오류가 발생하지 않음

//중첩객체
type Song = { //타입을 정의한 변수는 대문자여야 합니다.
    title: string;
    artist:string;
    numStreams:number;
    credits:{producer:string; writer:string};
};

function calculatePayout(song:Song) : number{
   return song.numStreams * 0.0033
}

function printSong(song : Song): void{
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title:"Unchained Melody",
    artist:"Righteous Brothers",
    numStreams:12873321,
    credits:{
        producer:"Phil Spector",
        writer:"Alex North"
    }
}

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong)

//선택적 프로퍼티
type point = {
    x:number;
    y:number;
    z?:number; 
}

const mypoint:point = {x:1, y:3};


//readonly를 통해 읽기만 가능
type User = {
    readonly id: number;
    username:string;
}

const user: User = {
    id:12837,
    username: "guddyd"
}

//교차 타입
type Circle = {
    radius: number;
};

type Colorful = {
    color:string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius:4,
    color:"yellow"
}

type Cat={
    numLives: number;
};
type Dog={
    breed: string;
}
type CatDog = Cat & Dog &{
    age:number
};

const christy: CatDog = {
    numLives:7,
    breed:"Husky",
    age:9
}
