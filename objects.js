//TypeScript에서는 객체를 설명하는 애너테이션을 만들 수 있습니다.
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
printName({ first: "Mick", last: "Jagger", age: 473 }); //직접 객체 리터럴을 전달하는 경우
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer); //직접 객체 리터럴을 전달하는 경우에는 오류를 띄우지만 사전에 별도의 변수로 정의하는 과정을 거치면 필요한 프로퍼티만 있는 지 확인하니 오류가 발생하지 않음
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
