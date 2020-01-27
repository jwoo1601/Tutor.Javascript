부품 -> component

OOP Object-oriented Programming

let animationDuration;

function playAnimation() {

}

// Procedural Programming
// Program 의 State (상태) 와 Logic (동작) 따로 관리해줘야함

// Object-Oriented Programming
// 어떤 주제 (Subject) 와 관련된 State & Logic 이 전부 해당 Object 내에서 관리가됨

class Player {
    constructor(playerName, username?) {
        this.playerName = playerName;
        this.username = username;
    }

    login() {
        connect();
        sendData(this.playerName, this.username);
    }
}

import { Player } from './player.js';

/* let player1 = new Player("unnamed");
player1.login(); */

function decoratePropertyName(name) {
    return `@${name}`;
}

let a = decoratePropertyName('password'); // @password

// object literal
let player1 = {
    "player-name": "unnamed", // Property (프로퍼티) -> key (프로퍼티의 이름), value (프로퍼티의 값)
    username: "unnamed",
    login: function() {
        this.playerName
    },
    [decoratePropertyName('password')]: '12345678', // computed property name
}

player1["@password"]

player1["player-name"]
player1.login();

if (player1.level) {
    console.log("")
}

// array literal
// element (원소)
// 선형의 공간에 연속적으로 element 를 배열해놓은 구조
// array 의 각각의 element 접근하기 위해서는 index operator []
// index operator 에다 접근할 index (첨자) 를 넣어줌
let arr = [1, "53asfd", { a: 'a'} ];
console.log(arr[2]); // { a: "a" }

typeof arr ; // object
arr.length // 해당 array 의 element 의 갯수

arr.push("abc") // 제일 끝에다가 새로운 element 를 추가
// arr = [1, "53asfd", { a: 'a' }, "abc"]

arr.shift(); // 제일 앞의 element 를 제거 후 리턴
arr.unshift("aa"); // arr = ["aa", ...]

let newArr = [];

for (let i =0; i < arr.length; i++) {
    if (i == 3) {
        newArr.push(5);
    } else if (i > 3) {
        newArr.push(arr[i - 1]);
    } else {
        newArr.push(arr[i]);
    }
}

let arr = [0, 1, 2, 3, 4, 5, 6]; // lastIndex: 6

let arr2 = arr.slice(0, 3); // arr2 = [0, 1, 2]
arr2.push(7); // arr2 = [0, 1, 2, 7]
arr2.push(arr.slice(3)); // arr2 = [0, 1, 2, 7, 3, 4, 5, 6]

let lastElement = arr.pop() // 제일 마지막 element 를 지우고 리턴
arr.splice(1); // splice(시작 index, 지울 갯수)

// array 의 모든 elemetn 순회 (iteration)

// 1. 고전적인 for loop
for (let i =0; i < arr.length; i++) {
    console.log("Element at " + i + "=" + arr[i]); // Element at 0=0
}

let playerList = [ { name: 'player1' }, { name: 'player2'} ];

// 2. for ... of statement
for (const player of playerList) {
    console.log(player);
}
for (const player of playerList){

}

playerList.forEach(player => {

})

playerList.forEach(p => {
    console.log(p);
})

// 3. array manipulation functions
playerList.forEach(player => {
    console.log(player);
})

playerList.forEach(function (player) {
    console.log(player);
})

//////////////////////////////////////////////

// 1.
let foundPlayer;
for (let i=0; i < playerList.length; i++) {
    if (playerList[i].name === "player2") {
        foundPlayer = playerList[i];
    }
}

let foundPlayer;
if (playerList[0].name === "player2") {
    foundPlayer = playerList[0];
} else if (playerList[1].name === "player2") {
    foundPlayer = playerList[1];
}

// Property injection
foundPlayer.okay = true; // { name: 'player2', okay: true }

// 2.
for (const player of playerList) {
    if (player.name === "player2") {
        foundPlayer = player;
    }
}

// 3.
playerList.forEach((p) => {
    if(p.name === "player2"){
        foundPlayer = p;
    }
});

function callback(player) {
    return p.name === "player2";
}

foundPlayer = playerList.filter(p => p.name === "player2");
// 만약 filter 로 받은 callback function 의 조건을 만족하는 element 가 없으면
// undefined 를 리턴

let foundIndex = playerList.findIndex(p => p.name === "player2");
// 만약 findIndex 로 넣어준 callback function 의 조건을 만족하는 element 가 없으면
// -1을 리턴 (이유: -1이 index 로는 유효하지 않기 때문)

// { name: 'player2' } => { name: 'player2', server: 'asia' }

let newPlayerList = [ ];
for (const player of playerList) {
    newPlayerList.push({ name: player.name, server: 'asia' });
} // [ { name: 'player1', server: 'asia' }, { name: 'player2', server: 'asia' } ]

function map_callback(p) {
    return {
        name: p.name,
        server: 'asia'
    }
}

// p = { name: 'player1' }
// { name: 'name', server: 'asia' }
// => { name: 'player1', server: 'asia' }

let newPlayerList2 = playerList.map(p => ({ name: p.name, server: 'asia' }));

function main() {
    let input = 5;
    let state1;
    let state2;
    let result = aaa(input);
    bb(result);
}