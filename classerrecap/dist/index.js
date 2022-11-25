
//Class 키워드
class Player {
    //클래스 필드
    #score = 0; //#기호를 통해 프라이빗 필드로 만들 수 있다.
    numLives = 10;
    constructor(first,last){
        this.first = first;
        this.last = last;        
    }
    static randomPlayer(){
        return new Player("Andy", "Samberg")
    }
    get score(){
        return this.#score
    }

    set score(newScore){
        if(newScore < 0){
            throw new Error("Score must be positive!!")
        }
        this.#score = newScore
    }

    get fullName(){
        return `${this.first} ${this.last}`;
    }
    set fullName(newName){
        const [first,last] = newName.split(" ")
        this.first = first;
        this.last = last;
    }

    // updateScore(newScore){
    //     this.#scroe = newScore
    // }
    taunt(){
        console.log("BOOYAH!!")
    }
    loseLife(){
        this.numLives -= 1
    }
}

//클래스 확장
class AdminPlayer extends Player{
    constructor(first,last,powers){
        super(first, last);
        this.powers = powers;
    }
    isAdmib = true;
}
const admin = new AdminPlayer("admin", "mCadmin", ["delete","restore world"]);

// const player1 = new Player("blue","steele");

// console.log(player1.fullName)
// console.log(player1.score)

// console.log(player1.fullName);
// player1.fullName = "Amy Adams"
// console.log(player1.fullName);

// const player2 = new Player("charlie","brown");
// player2.taunt();