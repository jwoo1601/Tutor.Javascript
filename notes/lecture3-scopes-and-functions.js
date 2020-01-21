/*
    1. Scopes
    : 어떠한 identifier (혹은 이름) 가 알려지는 범위 (정확히는 code block).

    - types of scopes
        1. global scope
        : 어떤 scope 에도 속하지 않는, 제일 default scope 을 global scope 이라고 함.

        2. function scope
        : 특정한 function 내에서 선언된 identifier 는 해당 function 안에서만 알려지게 됨.
          즉, 해당 function 이 return 되면 선언된 identifier 는 사라짐. (외부에서 사용할 수 없음)

        3. block scope
        : 특정한 코드 블럭 ({}) 내에서 선언된 identifier 들을 해당 block scope 에 속한다고 말함.
          코드 블럭의 예시로는 for, if, switch-case, while 등이 있음.

        4. class scope
        : Javascript 의 클래스 선언 내에서 사용되는 identifier 들은 해당 클래스의 class scope 에 속함.

    - shadowing
    : 바깥 (outer) scope 에서 선언된 identifier 와 동일한 identifier 가 inner scope 에서 선언될 경우, outer scope 의 해당 identifier 를 가림.

    - hoisting
    : javascript 의 기본 동작으로, 선언 (declaration) 들을 현재 scope 의 제일 상단으로 옮기는 행위를 뜻함.
      즉, declaration 들이 상단으로 옮겨지므로, 어떤 identifier 가 선언되기 전에 먼저 해당 identifier 를 사용 혹은 대입할 수 있음.
      
      - const/let vs var
      : var 로 선언된 identifier 는 자동적으로 hoisting 됨. 반면에, let 혹은 const 로 선언된 identifier 는 hoisting 되지 않음.

      - hoisting 의 문제점
      : javascript 의 기본 동작인 hoisting 은 identifier 가 선언되기 전에 사용될 수 있게하므로, 코드를 짤 때 심각한 버그의 원인이 되기도 함.
        따라서, hoisting 을 막기위해 var 보다는 let 혹은 const 를 가급적 사용하고, 항상 identifier 들을 사용되는 scope 의 최상단에 선언하도록 해야함.
*/

let data = "abcdef";

function getDataFromServer(param1, param2) {
  let data = 50;

  console.log(data);
}

console.log(ab);
("use strict");

abc = 300;

console.log(abc); //300

let abc;

/*
    2. Functions (함수)
    : 하나 이상의 statement 들을 특정한 "기능"에 따라 묶어놓은, 입력값과 결과값 (혹은 출력값) 을 가지는 실행 단위 (execution unit).

    - function identifier
    : variable 과 마찬가지로 naming rule 을 따름. 즉, [_$a-zA-Z][_$a-zA-Z0-9]*.

    - function header
    : 어떤 function 의 선언부에서 해당 function 의 identifier, parameter 이 나오는 () 까지를 해당 function 의 header 라고 함.

    - function body
    : 어떤 function 의 { } 로 감싸진 statement 들을 가리키는 말로, 해당 function 의 실제 실행부를 의미함.

    - function declaration (or function definition/statement)
    : javascript 에서 function 키워드를 통해 function 을 선언 (또는 정의) 하는 형태를 말함.
      즉, function <identifier>([parameters...]) {
          <statements...>
      }

      function addTwoElements(a, b) {
        return a + b;
      }

      let array = [ ];
      let n1 = new Number(5);
      let n2 = 5;

      let abc = function addNewItem(item1, item2) {
        if (typeof item1 === 'number' || item1 instanceof Number) {
          array.push(item * 10);
        }

        if (item2 === undefined) {
          return;
        }

        array.push(item1);
        array.push(item2);
        array.push(3);

        return 5;
        ~~~~~~~

        let arr = [ ]
        arr.push(item1);
        if (~~) {
          let a;
        }
      }

      abc(5, 3);

      const createNewEntry = function abc() {
        
      }

      abc();

      createNewEntry();

      console.log(createNewEntry.name); // abc

      let t = createNewEntry;

      t();

      t.name // 

      let abc = addNewItem('1', 2);

      addNewItem(5, 4);

    - function expression
    : javascript 에서 어떤 expression 내에서 function 을 선언하는 동시에 대입을 하는 형태.
      즉, let <identifier> = function [function-name]([parameters...]) {
        <statements...>
    }
    ** 이 때, function name 은 해당 function body 에 local 함. (즉, function name 의 scope 은 ㄱ function 의 function body 내부에 한정됨.)
    ** function name 은 debugging 시에 function 들을 식별하는 용도로 사용될 수 있음.
    ** function expression 이 대입된 variable 은 "name" property 를 가짐. 이 때, 이 값은 function name (explicit name) 또는 implicit name (해당 variable 의 이름) 이 됨.
    ** name property 의 값은 해당 function 이 다른 variable 에 대입되었을 때에도 같은 값을 유지함.

    - anonymous function (익명 함수)
    : function expression 형태로 어떤 function 을 선언할 때, function 키워드 뒤에 나오는 function name 을 생략할 수 있음.
      funciton name 이 생략된 형태를 anonymous function 이라고 함.
      즉, let <identifier> = function([parameters...]) {
        <statements...>
      }

    - calling functions (함수 호출)
    : function 이 선언된 뒤에는 해당 function 을 직접 불러서 해당 function 내의 코드들을 실행시킬 수 있음.
      이 때, 어떤 function 을 실행시키는 작업을 해당 function 을 호출 (call) 한다고 표현함.

    - Immediately Invoked Function Expression (IIFE)
    : 정의됨과 동시에 실행 (또는 호출) 이 되는 function expression 으로써, 아래와 같은 형태를 지님:
      (function() {
        <statements...>
      })()
      이 때, 위 function 은 정의됨과 동시에 즉시 호출이 되며, 해당 function 내에서 선언된 variable 들은 외부에서 접근이 불가능.

    - function expression vs function statement
    : function expression 에서는 anonymous function 을 선언하기 위해 function name 이 생략될 수 있음.
      또한, function expresison 은 hoisting 되지 않음.

    - caller and callee
    : 어떤 function 을 호출 (call) 할 때, 호출된 function 을 callee 라고 하며, 호출한 주체 (subject) 를 caller 라고 함.

    3. parameters (매개변수)
    : arguments (인수) 라고도 불리며, 어떤 function 이 외부로부터 전달받는 정보들을 의미함.
      function 의 선언부에서 해당 function 뒤에 나오는 () 에 해당 parameter 의 identifier 를 나열해 선언하며,
      두 개 이상의 parameter 는 , 로 연결함. 

    4. Return (반환)
    : 어떤 function 이 호출되었을 때, 해당 function 내부의 statement 들이 실행된 후
      해당 function 을 호출한 호출원 (caller) 로 프로그램의 제어 (control) 를 되돌리면서 "결과값"을 돌려주는 작업을 return (반환) 이라고 함.

    - return statement (반환문)
    : 어떤 function 내부의 statement 중에서 return <value> 형태의 statement 를 return statement 라고 하며,
      해당 statement 를 만날시 즉시 해당 value 와 함께 control 을 caller 로 되돌려줌.

    - return value (리턴값)
    : 어떤 function 의 return statement 에서 return 하는 값을 리턴값 (return value) 라고 함.

    - return type (리턴 타입)
    : 어떤 function 이 리턴하는 값의 타입 (type) 을 의미하며, Javascript 에서는 return type 을 명시하지 않음.

    6. Closures
    : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

    7. lambda expression
    : 익명 함수를 선언할 때, function statement 형태로 적지 않고, 간단히 (parameters...) => { statements... } 형태로 표현할 수 있음.
      즉, 아래 두 함수는 같은 표현:
      function (a, b) {
        return a + b;
      }

      (a, b) => a + b

      ** 이 때, lambda function 의 parameter 가 하나일 경우, parameter 괄호 (parenthesis) 를 생략할 수 있음.
      즉, (a) => a * 5 에서 괄호를 생략하고 a => a * 5 형태로 표현 가능.

      ** lambda function 의 function body 가 하나의 return statement 만을 가지는 경우, function body 를 표시하는 코드 블럭과 return 키워드 없이
      쓸 수 있음.
      즉, a => { return a + 5; } 를 a => a + 5 와 같은 형태로 쓸 수 있음.

      ** lambda expression 과 function statement 의 차이점:
      this 키워드를 사용할 때, function statement 에서는 this 가 사용된 해당 function 자체를 가리키지만,
      lambda function 에서는 해당 lambda function 이 아닌, 그 상위 scope 의 오브젝트를 가리키게 됨.
*/

/*
    8. callback functions
    : Javascript 에서는 함수 (function) 를 어떤 variable 에 대입하는게 가능하기 때문에 variable 이라고 볼 수 있는 parameter 에 함수를 전달하는 것도 가능하며,
      리턴 값으로도 함수 자체를 줄 수 있음. (이 때, 전달되는 함수들은 function object 형태로 전달됨.)
      이 메커니즘을 이용해 어떤 function 을 통해서 작업을 실행할 때, 주로 해당 작업이 언제 완료가 되는지 정확히 결정되지 않은경우,
      임의의 function 을 parameter 로 전달해줌으로써 해당 작업이 완료된 후 parameter 로 전달된 function 이 호출되게 하는 패턴을 만들 수 있음.
      이 때, 작업이 완료된 후 (혹은 에러가 났을 경우) 역으로 호출되는 function 들을 callback function (콜백 함수) 라고 부름.
*/

/*
  예제: 주어진 주소를 이용해 어떤 서버에 연결하는 동작을 하는 함수가 있을 때, 일반적으로 networking 을 통한 통신은 변수가 많기에
        해당 작업이 언제 완료되는지 시점을 특정하기 어려움. 따라서 일반적인 함수 호출 - 함수 실행 대기 - 완료 - 리턴 후 작업을 계속 진행하는
        방식 (blocking) 보다는 기존 프로그램 로직을 가로막지 않고, 대신 parameter 로 callback 함수를 전달받아 해당 작업이 완료가 됬을 경우
        callback 함수를 호출해 알려주는 패턴을 많이 사용함.
*/
function connectToServer(serverAddress, callback) {
  const connectionStatus = nonBlockingConnect(serverAddress); // nonBlockingConnect 함수는 서버에 연결이 될때까지 기다리지 않고 연결 요청만 보낸 뒤 바로 리턴됨.

  // nonBlockingConnect 함수가 리턴한 값으로 현재 연결 여부를 알 수 있음.
  if (connectionStatus.isConnected()) {
    callback("Success"); // 연결 되었을 경우, 전달받은 callback 함수를 호출함.
  }
}

// 아래는 callback 함수와 function expressions, lambda expression 들을 결합해 사용한 형태.
connectToServer("192.342.34.2", function(message) {
  console.log(`Connected to server - message: ${message}`);
});

// 위에서 parameter 로 전달된 anonymous function 을 labmda expression 형태로 변환하면,
connectToServer("192.342.34.2", message => {
  // 파라미터 괄호 () 는 optional; 이유: parameter 가 하나이기 때문
  console.log(`Connected to server - message: ${message}`);
});

connectToServer("192.342.34.2", () => {
  // parameter 괄호 () 는 mandatory (필수); 이유: parameter 가 하나도 없기 때문
  console.log(`Connected to server`);
});

function doAction(a, b, fn) {
  return fn(a, b); // 이 떄, fn 은 callback function
}

function add(a, b) {
  return a + b;
}

// 아래 코드들은 전부 같은 동작을 함.
let result;
result = doAction(3, 5, add); // parameter 로 function statement (declaration) 을 전달함.
result = doAction(3, 5, function(a, b) {
  // parameter 로 anonymous function (즉, function expression) 을 전달함.
  return a + b;
});
result = doAction(3, 5, (a, b) => {
  // parameter 로 lambda expression 을 전달함.
  return a + b;
});
result = doAction(3, 5, (a, b) => a + b); // 좀 더 간략화된 lambda expression: function body 가 return statement 한 줄로만 구성되어 있을 경우 { } 와 return 을 생략가능.

/*
  9. Variadic functions
  : function 의 parameter 로 알려지지 않은 갯수의 parameter 들을 전달받는 function 들을 뜻함.
    즉, parameter 의 갯수가 function 이 선언될 때 정해지는게 아닌, function 이 호출될 때 정해짐.

    * Javascript 에서는 모든 function 들이 선언된 parameter 외에 extra parameter 를 전달받을 수 있음.
*/

function funcWithExtraParams(par1, par2, par3) {
  return par1 + par2 + par3;
}

// funcWithExtraParams 함수를 호출할 때, 함수의 프로토타입에 나와있는 첫 3개의 파라미터 (par1, par2, par3) 외에
// 추가적으로 2개를 더 전달함. 이 때, Javascript 에서는 이 동작이 오류가 나지 않음.
funcWithExtraParams(1, " + ", 3, 5, 7);

/*
  - How to access extra parameters
  : 프로토타입에 선언된 parameter 이외에 추가적으로 전달받은 parameter 들에 접근하는 방법은 2가지가 있음.

    (1) Using arguments
    : Javascript 에서 어떤 function 이 호출되었을 때, 기본적으로 따로 선언을 하지 않더라도 arguments 라는 variable 에 접근할 수 있음.
      이 때, 이 variable 은 해당 function 이 전달받은 파라미터들의 array 라고 볼 수 있음.
      (즉, 제일 첫번째 parameter 가 index 0 에 매핑되어 갯수에 상관없이 전달받은 parameter 들을 전부 담고 있음.)

    (2) Using rest parameters
    : 직접적으로 function 프로토타입에서 parameter 로써 명시해주며, ...<identifier> 형태를 이용함.
      이 때, 해당 identifier 를 가지는 array 가 생성되며, 해당 array 는 그 이전에 명시된 parameter 들을 제외한
      나머지 parameter 들을 순서대로 index 0 부터 매핑해 가지고 있음.
*/

function variadicFunc1(a, b, c) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);

  for (let i = 3; i < arguments.length; i++) {
    console.log(`arguments[${i}]: ${arguments[i]}`);
  }
}

function variadicFunc2(a, b, c, ...d) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);

  for (let i = 0; i < d.length; i++) {
    console.log(`d[${i}]: ${d[i]}`);
  }
}
