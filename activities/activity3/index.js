// JSON (Javascript Object Notation)
// 자바스크립트 오브젝프 표기법

// {} (root object) or [ ] (root array)
// 각 프로퍼티의 키 값은 무조건 "" 안에 들어가야됨
// 각 프로퍼티의 value 로 허용된 형태: literal
// 자바스크립트 문법이 들어가면 X
// String literal, number, object literal, array literal. boolean literal

const data = require("./sample1.json");

let filtered = data.filter(
  //filter 자체가 어레이를 리턴함!!
  tm => tm.members === undefined || tm.members.length === 0
);

console.log(filtered);

let arr = [];
let filtered2 = data.filter(tm => tm.allowNewMember === true);
filtered2.forEach(tm => {
  arr.push(tm.teamId);
});
/*
[
  {
    teamId: 1222016,
    teamName: 'mercury',
    createdAt: '2019/08/22',
    allowNewMember: false,
    members: []
  },
  {
    teamId: 1345606,
    teamName: 'saturn',
    createdAt: '2020/01/10',
    allowNewMember: false
  }
]
*/

console.log(data.filter(t => t.allowNewMember).map(t => t.teamId));

console.log(
  data
    .filter(t => t.allowNewMember) // allowNewMember 의 값이 true 혹은 false 로 boolean 값이 리턴되기 때문에 따로 === 를 이용해 비교할 필요가 없음.
    .map(t => t.teamId)
);

//멤버들이 30살이상인멤버의 이름이랑 직업을 출력
//이름이랑 잡을 어떤 오브젝트에 넣어서 출력 , 그걸또 어레이형태로 출력.

// normalization

// 1.
let members = [];
data.forEach(t => {
  if (t.members) {
    t.members.forEach(m => {
      members.push(m);
    });
  }
});

// console.log(
//   // lambda function 에서 오브젝트를 리턴할 떄, 오브젝트 리터럴 ({}) 만 => 뒤에 바로 적게되면
//   // 자바스크립트 컴파일러는 function body 로 인식해버림. 따라서, 오브젝트 리터럴을 바로 리턴하기 위해서는
//   // () 로 한번 더 감싸줘야 함.
//   members.filter(m => m.age >= 30).map(m => ({ name: m.name, job: m.job }))
// );

// -----------------------------------------------

// 2.

// null == undefined => true
// null === undefined == false

// let obj = [
//   {
//     teamName: "t",
//     members: [
//       {
//         name: "a"
//       },
//       {
//         name: "b"
//       }
//     ]
//   },
//   {
//     teamName: "t2",
//     members: [
//       {
//         name: "c"
//       },
//       {
//         name: "d"
//       }
//     ]
//   }
// ];

// let result = [
//   [
//     {
//       name: "a"
//     },
//     {
//       name: "b"
//     }
//   ],
//   [
//     {
//       name: "c"
//     },
//     {
//       name: "d"
//     }
//   ]
// ];

// [
//   {
//     name: "a"
//   },
//   {
//     name: "b"
//   },
//   {
//     name: "c"
//   },
//   {
//     name: "d"
//   }
// ];

console.log("START-------------------------------------\n");

let totalMembers = [];
data
  .filter(t => t.members && t.members.length > 0)
  .map(t => t.members)
  .forEach(members => {
    totalMembers.push(...members);
  });

totalMembers = totalMembers
  .filter(m => m.age >= 30)
  .map(m => ({ name: m.name, job: m.job }));

console.log(totalMembers);

// data.filter(t => t.members)
// => [ { team }, { team } ]

// .map(t => t.members)
// => [ [members], [members] ]

// ...[ [members], [members] ]
// => [members], [members]

// ... ...[[members]]

// console.log(members);

// let filtered3 = data.filter(t => {
//   t.members.forEach(m => { m.age >= 30 })

//   if (t.members[i].age >= 30) {
//     return true;
//   }
// });

// let arr1;
// filtered3.forEach(t => {
//   arr1 = t.members.name;
//   arr1 = t.members.age;
// });

// console.log(arr1);
