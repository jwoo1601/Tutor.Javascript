/*
    1. Scopes
    : 어떠한 identifier (혹은 이름) 가 알려지는 범위 (정확히는 code block).

    - types of scopes
        1. global scope
        : 어떤 scope 에도 속하지 않는, 제일 default scope 을 global scope 이라고 함.

        2. function scope
        :

        3. block scope
        :

        4. class scope
        :

    - shadowing
    :
*/

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

      let array = [ ];
      function addNewItem(item1, item2) {
        array.push(item1);
        array.push(item2);

        let arr = [ ]
        arr.push(item1);
        if (~~) {
          let a;
        }
      }

      addNewItem('1', 2);

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

    7. lambda expression
    () =>  
*/