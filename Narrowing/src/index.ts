//Narrowing
function triple(value: number | string){
    if(typeof value === "string"){
        return value.repeat(3)
    }
    return value * 3
}

//Truthiness 가드
const printLetters = (word?: string) => {
    if(word){
        for(let char of word){
            console.log(char)
        }
    }else{
        console.log("YOU DID NOT PASS IN A WORD!");
    }
}

//EQUALITY NARROWING
function someDemo(x: string | number, y: string | boolean){
    if(x === y){//비교연산자 사용, 삼중등호
        x.toUpperCase();
    }
}

//In연산자
interface Movie{
    title: string,
    duration: number
}

interface TVShow{
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow){
    if("numEpisodes" in media){
        return media.numEpisodes*media.episodeDuration
    }
    return media.duration
}

console.log(getRuntime({title:"Amadeus", duration:140}));
console.log(getRuntime({title:"Spongebob", numEpisodes:80, episodeDuration:30}));

//Instanceof
function printFullDate(date: string | Date){
    if(date instanceof Date){
        console.log(date.toUTCString());
    }else{
        console.log(new Date(date).toUTCString());
    }
}

//타입 명제(Predicate)
interface Cat{
    name: string;
    numLives: number;
}

interface Dog{
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat{
    return (animal as Cat).numLives ! == undefined;
}

function makeNoise(animal: Cat | Dog): string{
    if(isCat(animal)){
        animal
        return "Meow"
    }else{
        animal
        return ""
    }
}


//Discriminated Unions
interface Rooster{
    name: string;
    weight: number;
    age:number;
    kind: "rooster"
}

interface Cow{
    name:string;
    weight:number;
    age:number;
    kind:"cow"
}

interface Pig{
    name:string;
    weight:number;
    age:number;
    kind:"pig"
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal){
    switch(animal.kind){
        case "pig":
            return "Oink!";
        case "cow":
            return "Moooo!";
        case "cow":
            return "Cockadoodledoo!";
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight:2,
    age: 1.5,
    kind:"rooster"
}

console.log(getFarmAnimalSound(stevie))


