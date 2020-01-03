/*
    Javascript 란?
    : 1995년 Netscape 사의 Netscape Navigator v2.0 에서 처음 등장한, 웹 브라우저에서 동작하는 
     Client-Side Embedded Programming Language 로써, 1996년 Netscape 사에서 Javascript 의 표준화를 위해
     ECMA (European Computer Manufacturers Association) 에 요청, 그 뒤 1997년에 처음 표준이 제정됨.
     이때부터 ECMA 에서 표준 스펙을 만드는 이 언어를 ECMA Script 라고 부르며, 큰 의미에서 Javascript = ECMA Script 라고 볼 수 있음.
     
     즉, Javascript 는 ECMA Script 표준을 따르는 언어.

     ECMA Script 는 연도별로 계속해서 새로운 표준이 제정됨.
*/

/*
    1. Statement
    : 어떤 프로그래밍 언어든 기본적으로 해당 언어로 짜여진 "코드"는 실행가능한 한 개 이상의 statement로 구성되어 있음.
     즉, statement 는 코드에서 제일 작은 실행 단위라고 볼 수 있음. (글에서 한 "문장(sentence)" 와 같다고 볼 수 있음.)

    - how to write a statement
    : statement 는 기본적으로 세미콜론 (;) 으로 구분됨. 단, 한 줄에 하나의 statement 만 올 경우 세미콜론(;) 을 생략할 수 있음.

    - javascript ignores whitespace within statements
    : 자바스크립트에서는 기본적으로 statement 내에서 whitespace character 들(space, newline, \t, \r...)을 무시함.
     따라서, 가독성(readibility) 을 위해 statement 내의 구성 요소들을 기본적으로 스페이스를 통해 구분하는게 권장됨.
*/

// Examples
var a = 5 // statement 하나
let b = 10; var c = 3; // 한 줄에 multiple statements (seperated by semi-colon)
b = a + c + 3; // statement 하나
c = a
+ b + 5; // 28 번 줄과 29번 줄은 하나의 statement 임. (newline 과 space 를 통해 구분되었을 뿐)
var d           =     30 // 이런거도 가능

/*
    2. Literal (리터럴)
    : 자바스크립트에서 두 종류의 value 중 하나로써, 고정된 값을 표현하는 식을 의미함.
     literal 들은 기본적으로 value 이므로 타입을 가짐.

    - immutability
    : literal 은 고정된 값이기에 변경이 불가능함. 이런 변경이 불가능한 속성을 immutability 라고 부름.
     (실제 메모리에 저장되는 값일수도, 아닐수도 있지만 둘 중 어느 경우에도 literal 은 값 자체를 변경할 수 없음.)
*/

// Examples
"05050" // string 타입의 literal
50 // number 타입의 literal
{ abc: 3 } // object 타입의 literal
'dsfsfs' // string 타입의 literal
532.33 // number 타입의 literal
[ 1, 2, 3 ] // array 타입의 literal
/[a-zA-Z0-9]/ // Regex 타입의 literal
undefined // undefined literal
null // null literal
3e-5 // number 타입의 literal
080 // number 타입의 literal (octal)
0x2F // number 타입의 literal (hexadecimal)
0b0001010 // number 타입의 literal (binary)
Infinity // number 타입의 literal; 양의 무한대를 의미함. (0 으로 다른 number 을 나눈 경우에 결과값으로 리턴됨.)
NaN // number 타입의 literal; Not-A-Number 의 약자로, number 와 number 타입이 아닌 값을 연산한 경우 얻을 수 있음. (결과 값이 number 가 아니라는 뜻.)

/*
    3. Variable (변수)
    : 자바스크립트에서 두 종류의 value 중 하나로써, 값을 저장하며 변경이 가능함.
     literal 과 마찬가지로 항상 타입을 가짐. 이 때, javascript 에서 variable 의 타입은 해당 variable 이 가지고 있는 값
     (혹은 데이터) 에 따라 달라짐.

    - mutability (비상수성)
    : variable 은 메모리에서 실제 공간을 점유하며, 그에따라 해당 variable 이 저장하는 값은 해당 variable 의 메모리 공간에
     물리적으로 저장이 됨.

    - declaring variables (변수의 선언)
    : variable 들은 기본적으로 사용되기 전에 선언 (declare) 되어야 함. 이 떄, variable 의 선언은 자바스크립트 interpreter 에
     해당 variable 의 존재를 알려주는 역할을 함.
     variable 의 선언은 아래와 같이 var 또는 let 키워드를 통해 할 수 있음:
     var <identifier>;
     let <identifier>;
     (이 때, identifier 는 variable 의 이름을 지정하는 역할을 함. identifier 는 naming rule 에 따라 정해진 문자 혹은 숫자만 올 수 있음.)

    - naming rule (이름 규칙)
    : variable 뿐만 아니라 javascript 에서 모든 identifier 에 적용되는 이름 규칙.
     identifier 는 $_a-zA-Z 로만 시작할 수 있으며, 두번째 캐릭터부터 숫자도 올 수 있음.

    - defining variables (변수의 정의)
    : variable 의 선언이 variable 의 존재를 interpreter 에 알리는 역할을 했다면, 정의(definition) 는 해당 variable 이 저장하고 있는 값을
     알려주는 역할을 함. 이 떄, variable 을 define 하는 방법은 아래와 같음:
     <identifier> = <value>;
     (identifier 는 정의할 variable 의 이름, value 는 해당 variable 에 대입할 값을 의미함.)
     즉, variable 은 = operator 를 통해 define 할 수 있음.

    - initialization (초기화)
    : variable 을 선언하면서 동시에 정의를 할 수 있음. 이 때, 이 동작을 초기화(initialization) 이라고 함.
     즉, 아래와 같은 표현이 가능함:
     var <identifier> = <value>;
     let <identifier> = <value>;

    - declaring multiple variables in one statement
    : 여러 개의 variable 을 한 statement 에 동시에 선언할 수 있음. (initialization 도 동시에 가능함.)
     var|let <identifier1> [= <value1>], <identifier2> [= <value2>], <identifier3> [= <value3>];
*/

// Examples
var var1; // declaring a variable named "var1"
var $v2; // valid identifier
var _$v3; // still valid
var 32a; // invalid identifier (must not start with a number)
let abc;
let $a;
let $1;

// defining variables
var1 = "abc";
$v2 = 50;
_$v3 = 20.5;

var init = 50; // initialization; variable 을 선언과 동시에 초기화 함.
let init2 = "init2"

// mutiple variables in one statement
var a1, a2 = 30, a3 = "hello";

/*
    Javascript 의 naming convention
    : javascript 에서는 camelCase 형태의 naming 을 권장함. 이 때, camelCase 란 identifier 의 첫 글자를 소문자로 시작하고,
    그 뒤부터 새로운 단어의 시작마다 capitalize 해주는 형태. (헝가리안 표기법이라고도 부름.)

    e.g.)
    thisIsCamelCase
    isRunning
    hasStopped
    numWheels

    camelCase 가 아닌 경우:
    FinalAssignment (PascalCase)
    _new_array
    top_results
*/

/*
    4. Keywords (예약어)
    : 프로그래밍 언어의 표준에서 이미 사용하기로 예약되어 있는, 특수한 기능이나 의미를 지정해주는 단어들을 의미함.
     이 떄, keyword 로 지정되어 있는 단어들은 identifier 로써 사용될 수 없음.

    - javascript 의 keywords
    :   abstract    arguments	await*	        boolean
        break	    byte	    case	        catch
        char	    class*	    const	        continue
        debugger	default	    delete	        do
        double	    else	    enum*	        eval
        export*	    extends*	false	        final
        finally	    float	    for	            function
        goto	    if	        implements	    import*
        in	        instanceof	int	            interface
        let*	    long	    native	        new
        null	    package	    private	        protected
        public	    return	    short	        static
        super*	    switch	    synchronized    this
        throw	    throws	    transient	    true
        try	        typeof	    var	            void
        volatile	while	    with	        yield
    (위의 단어들은 identifier 로써 사용될 수 없음. * 표시된 단어들은 ES5, ES6 표준에서 새로 추가된 키워드.)

    - 그 외 사용을 피해야 하는 단어들 목록
    : https://www.w3schools.com/js/js_reserved.asp
*/

/*
    5. Data types (자료형)
    : 어떤 값(value) 혹은 데이터(data) 의 타입 혹은 형태로써, 해당 데이터가 메모리에서 어떤 structure 로 표현되어 있고,
     그 값이 어떤식으로 해석되어야 하는지를 알려줌.

    - javascript 에서의 data types
    : 어떤 값(value) 즉, literal 혹은 variable 의 타입을 의미하며, literal 은 고정된 값이기에 고정된 타입을, variable 은
     저장하는 값이 바뀔 수 있기에 저장된 값에 따라 변하는 동적인(dynamic) 타입을 가짐.

        - number
        : 정수와 실수를 포함한 일반적인 "수"를 표현하는 타입. 표현 방식은 정수(integer) 인지 부동소수점(floating point number) 인지에 따라
         여러가지 방법으로 나눠짐.

            - representation of integers (정수의 표현)
            : 진법에 따라 binary(2진수), octal(8진수), decimal(10진수), hexadecimal(16진수) 이렇게 4 종류로 나뉨.
                - binary literal (2진수 리터럴)
                : "0b" 혹은 "0B" 라는 접두사(prefix) 로 시작하며, 사용 가능한 digit 에는 0과 1만 있음.
                e.g. 0b0101 (= 0101 즉, 10진수로 5)

                - octal literal (8진수 리터럴)
                : "0" 이라는 접두사(prefix) 로 시작하며, 사용 가능한 digit 의 범위는 0 - 7 까지임.
                e.g. 071 (= 71 즉, 10진수로 57)

                - decimal literal (10진수 리터럴)
                : 제일 기본적인 표현방식으로, 아무런 접두사(prefix) 가 오지 않음.
                e.g. 10231

                - hexadecimal literal (16진수 리터럴)
                : "0x" 혹은 "0X" 라는 접두사(prefix) 로 시작하며, 사용 가능한 digit 의 범위는 0 - f 혹은 F 까지임.
                e.g. 0x1f (= 1f 즉, 10진수로 31)

            - representation of floating point numbers (부동소수점의 표현)
            : fixed point 형태와 scientific 형태로 나뉨.
                - fixed point literal
                : 제일 기본적인 소수점 표현방식으로, 수학적 표기와 동일함.
                e.g. 32.32432

                - scientific (exponential) literal
                : <정수부>e|E<exponents> 의 형태를 가지며, exponents 의 값이 10 의 승수로 해석되어 정수부에 곱해짐.
                e.g. 2E-5 (= 2 x 10^-5 = 0.00002)


        - string (문자열)
        : 연속된 character(문자) 의 배열로써, quotes 로 감싸져 표현되며, 세 가지 종류의 quote 이 있음.
            - single quotes (')
            e.g. 'Hello, world!'
            - double quotes (")
            e.g. "Hello, World!"
            - template quotes (`) => ES6+
            e.g. `Hello, ${"World!"}`
            (위 quotes 중 single quote 과 double quote 은 차이가 없이 동일하게 인식됨.
             단, template quote 의 경우 ES6 부터 추가된 기능으로, ${} quote 내부에 블록을 통해 javascript 코드를 삽입할 수 있고
             해당 코드 내용은 substitute (치환) 되서 인식됨.)

             ** Punctuation Symbols (문장 부호) **
             {} => curly brackets
             [] => square brackets
             () => braces / parenthesis
             ; => semi-colon
             : => colon
             ^ => carrot
             ~ => tilde
             @ => at
             # => hashtag
             ! => exclamation mark
             ? => question mark
             * => asterisk
             & => ampersand
             % => percentage
             $ => dollar sign
             < => less than &lt;
             > => greater than &gt;
             | => vertical bar
             - => dash
             _ => underscore
             / => forward slash
             \ => backslash
             . => period
             , => comma

             greater than or equal to
             "" => double quotes
             '' => single quotes

        - object (오브젝트 혹은 객체)
        : key 와 value 로 이루어진 property 들을 가질 수 있는, property 들의 집합이며, "{}" 로 감싸서 표현함.
         각 property 들은 "," 로 구분함.
        e.g. {
            key1: 50,
            key2: "value2",
            "key 3 ": 'value3'
        }
        (이 떄, key 와 value pair 를 하나의 variable 이라고 생각할 수 있음.
         또한, key 는 quotes 로 감싸는 것도 가능하며, 주로 key 에 whitespace 가 있을 경우 이런 형태를 사용함.)
        (아예 property 가 하나도 없는 empty object 도 object 임.)

            ** null
            : 어떤 variable 이 어떠한 오브젝트도 가리키고 있지 않다는 것을 표현하는 object 타입의 리터럴. undefined 와 마찬가지로
              Boolean 타입으로 변환시 false 로 평가됨.

        - array
        : 여러 개의 element(원소) 를 연속적인 메모리 공간에 선형으로 배열한 형태로써, "[]" 로 감싸서 표현하며,
         여러개의 element 가 있을 경우, "," 로 구분함.
        e.g. let arr = [1, "2", 2e-30, {key: "object1"}]
        (이 떄, javascript 의 array 는 각각의 element인 data 의 타입이 같지 않아도 됨.)

        - boolean
        : 참(true) 인지 거짓(false) 를 표현하는 타입으로써, true 또는 false 만 리터럴로써 boolean 데이터를 표현하는데 쓰임.
        e.g.
        var bRunning = true;

        - undefined
        : 어떤 variable 에 값이 대입되지 않았다는 것을 표현하는 타입. Boolean 타입으로 변환시 false 로 평가됨.

    - data type 이 왜 필요한가?
    : data type 은 메모리 상에서 어떠한 정보가 저장 혹은 로드될 떄, 어떠한 크기를 가지고 어떤 구조로 표현 또는 해석되어야 하는지를 알려주는
      역할을 하게됨. (데이터 타입 별 메모리 상의 표현 형태는 관련 노트 참조)
      data type 이 존재하지 않을 경우, 메모리 공간의 특성상 연속적인 비트의 배열에서 얼마만큼의 비트를 어떤식으로 해석해야 되는지에 대해
      심각한 모호성을 갖게 됨. 따라서, 어떤 프로그래밍 언어이든 data type 은 필수적인 존재임.

      ** Javascript 와 data type
      : javascript 에서는 data type 이 존재하지 않는게 아닌, 단순히 variable 이 저장하는 값에 따라 해당 variable 의 타입이 "유동적으로"
        바뀔 수 있음. 따라서 javascript 에서도 data type 이 당연히 존재하며 정보를 표현하는 데에 있어 굉장히 중요한 역할을 함.
*/
arr[3] = 5;
arr[3].key = 5;


/*
    6. Comments (주석)
    : Javascript interpreter 에 의해 코드로 인식되지 "않는" 부분.

    - single line comment
    : // 로 시작하며, 해당 줄 전체를 comment 로 처리함.

    - multi-line comment
    : /* 로 시작하며, * / 전까지의 내용들을 전부 comment 로 처리함.
*/

// Examples
// this is a single line comment
// this only applies to one line
/*
                this is a multi-line comment
                it spans until the closing marker
                */


let a = {
    b: 20,
    c: "30",
    "background-color": 50
}

a.c = 50;
let d = a["c"];

a["d  d"]

let k = {
    key1: {
        key2: {
            
        }
    }
}

k.key1 = undefined;

delete k.key1;

console.log(aa2);

let aa2 = undefined;
console.log(aa2);
