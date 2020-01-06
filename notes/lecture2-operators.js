/*
    1. Expression (표현식)
    : value, variable 로 대표되는 operand (피연산자) 와 operator (연산자) 로 구성되며, 어떠한 값으로 최종적으로 
     "평가"되는 식을 의미함.
*/

// Examples
5 + 3; // binary operator 인 + 와 operand 인 5, 3 (이때 둘다 value) 으로 구성되는 expression
abc && true // binary operator 인 && 와 operand 인 abc (variable), true (value) 로 구성되는 expression
!isRunning // unary operator ! 와 operand 인 isRunning (variable) 로 구성되는 expression
3 + 2 - 5 ** 6 * 3 // operators: +, -, **, * operands: 3, 2, 5, 6, 3 (전부 value) 

/*
    2. Operand (피연산자)
    : operation 의 대상이 되는 value 혹은 variable.
*/

// Examples
let a3 = 5.3;
a + 50; // 이 expression 에서 operand 는 2개 (a, 50)
"abc" + "ab" + "b" // 이 expression 에서 operand 는 3개 ("abc", "ab", "b") 다만, 각 + operator 당 operand 는 2개.

/*
    3. Operator (연산자)
    : 연산 (operation) 의 주체. 실제적으로 어떤 연산을 "수행"하는 logic 을 가지고 실행시킴.

    - types of operators
    : operator 는 여러 분류 기준 (criteria) 에 따라 다양하게 구분할 수 있음.

        1. by number of terms (항의 갯수에 따른 구분)
        : operator 는 항의 갯수에 따라 구분이 가능함. 이 때, 항(term) 은 연산의 대상이 되는 피연산자(operand) 를 가리킴.
            - unary operator (단항 연산자)
            : 항이 1개인 연산자. operand operator 혹은 operator operand 형태로 연산식이 구성됨.
            e.g.) !(not), ++(prefix), ++(postfix), --(prefix), --(postfix), ~(bitwise not), -, +, typeof, instanceof, new, delete, await

            - binary operator (이항 연산자)
            : 항이 2개인 연산자. operand operator operand 형태로 연산식이 구성됨.
            e.g.) +, -, *, /, %, +=, -=, *=, /=, %=, ==, ===, !=, !==, =, &, &&, |, ||, <<, >>, &=, |=, <<=, >>=, ^, ^=,  

            - ternary operator (삼항 연산자)
            : 항이 3개인 연산자. operand operator operand operand 형태로 연산식이 구성됨.
            e.g.) ?: (conditional expression)

        2. by roles (기능에 따른 구분)
        : operator 는 기능 혹은 역할에 따라 구분이 가능함.
            - arithmetic operators
            : numerical value (literals/variables) 들을 operand 로 취하는 연산자로써, 결과값도 number 가 됨.

            - assignment operators
            : = (equal sign, or 등호) 를 기준으로 좌변과 우변으로 구분되며, 우변의 값을 평가해 좌변해 "대입"하는 역할을 함.

            - logical operators
            : boolean value (true/false) 와 관련된 연산자. operand 가 boolean 일 경우, boolean 으로 평가되며,
             non-boolean type 일 경우, operator 에 따라 특정한 operand 의 값으로 평가됨.

            - comparison operators
            :  두 operand 를 비교해서 해당 비교 연산의 동작에 따라 boolean value 를 리턴함.

            - bitwise operators
            : operand 들을 32 bit 의 2진수로써 다루는 연산자로, binary operation 을 수행하며, numeric value 를 결과값으로 리턴함.

            - string operators
            : 두 string 을 operand 로 취해서, 주로 concatenation 을 수행함.

            - conditional operators
            : 자바스크립트에서 유일한 ternary operator 이며, 첫번쨰 operand 로 condition 을 취해서 해당 condition 이 true 인지 false 인지에
             따라 나머지 두 operand 중 하나를 리턴함.
             조건 ? true 일떄 값 : false 일떄 값

            - comma operator
            : 두 operand 를 모두 평가한 뒤, 마지막 operand 를 결과값으로 리턴함.
            let a = 1, 5;

            - relational operators
            : operand 를 비교해서 해당 비교 결과에 따라 boolean value 를 리턴함.

            - misc. unary operators
            : delete, typeof, void 등이 있으며, 모두 operand 를 하나만 취하는 unary operator 임.
             다만, 상세한 동작은 각각의 operator 에 따라 다름.
*/

/*
    4. Operation (연산)
    : 임의의 expression 에서 어떤 operator 가 등장할 떄, 그 operator 와 해당 operator 가 필요로 하는 operand 들을 묶은 식 (혹은 set).

    - result of operation
    : 모든 operation 은 하나 이상의 operand 를 취하며, 한 operation 에서 operator 는 단 하나만 존재함. (operator 가 여러개인 경우에는
     하나의 operation 이 아닌, 여러 operation 이 결합된 형태.) 또한, 모든 operation 은 "결과값"이 존재함.

    - combination of multiple operations
    : 한 expression 내에서 두 개 이상의 operation 을 결합하는 경우를 의미함. 이 때, 여러 operation 들이 독립적으로 시행되는게 "아닌",
     각 operation 들의 연산 순서가 operator precedence 에 의해서 정해지고, 제일 precedence 가 높은 operation 부터 "순차적"으로
     시행되며, 그 다음 순위의 operation 은 이전에 실행된 operation 의 결과를 operand 로써 취하게 됨.
*/
let a4 = true, b4 = false, c4 = 0, d4;
"1" + '234' + '56'; // 이 expression 에서 operation 은 총 2개 ("1" + '234', ... + '56')
!a4 && b4 || (c4)
!a4 && b4 || 0
false && b4 || 0
false && false || 0
false || 0
false || false
false

let kk = a4 && b4;

/*
    5. Operator Precedence (연산자 우선순위)
    : 한 expression 에서 다른 종류의 operator 가 섞여있을 떄, 어떤 operation 부터 평가 되어야 하는지,
     즉 어떤 연산자가 더 우선권을 가지는 지에 대한 순서.

    e.g.) expression A OP1 B OP2 C OP3 D 이 있을 때, 서로 다른 operator OP1, OP2, OP3 중 어떤 operator 의 연산이 먼저
     수행되어야 하는지를 나타냄.
*/
    5 + 3 >= 4 * 3 ** 3
/*
    operator 의 종류: +, >=, *, **
    이 떄, 각각의 precedence 는: 14, 12, 15, 16 이므로 ** -> * -> + -> >= 순서로 연산이 수행되어야 함.
    (1) 5 + 3 >= 4 * 27 (** 연산이 수행되어 3 ** 3 이 결과값 27로 대체됨)
    (2) 5 + 3 >= 108 (* 연산이 수행되어 4 * 27 이 결과값 108로 대체됨)
    (3) 8 >= 108 (+ 연산이 수행되어 5 + 3 이 결과값 8로 대체됨)
    (4) false (>= 연산이 수행되어 8 >= 108 이 결과값 false 로 대체됨)
*/

/*
    6. Associativity (결합 순서)
    : 한 expression 에서 같은 precedence 를 가진 operator 들이 여러 번 등장할 때, 
     좌측 혹은 우측 둘 중에서 어느 방향에서부터 operation 이 수행되어야 하는지를 규정함.
*/
    let a6 = "haha", b6 = " ", c6, d6 = "hehe", k6;
    k6 = a6 += b6 += c6 = d6;
/*
    위 expression 에서 = 와 += 의 precedence 는 모두 3으로 동일함. 이 때, assignment operator 들의
    결합 순서는 right-to-left 이므로 맨 우측에서부터 연산이 실행됨.
    (1) k6 = a6 += b6 += "hehe" (c6 = d6 연산이 수행되어 c6 에 "hehe" 가 대입되고, 그 후 대입된 값 "hehe" 가 리턴됨)
    (2) k6 = a6 += " hehe" (b6 += "hehe" 연산이 수행되어 b6 에 "hehe" 가 concatenate 되고, 그 후 b6 의 값 " hehe" 가 리턴됨)
    (3) k6 = "haha hehe" (a6 += " hehe" 연산이 수행되어 a6 에 " hehe" 가 concatenate 되고, 그 후 a6 의 값 "haha hehe" 가 리턴됨)
    (4) "haha hehe" (k6 = "haha hehe" 연산이 수행되어 k6 에 "haha hehe" 가 대입되고, 그 후 대입된 값 "haha hehe" 가 리턴됨)
*/

/*
    자세한 사항은 MDN 관련 문서 참조:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

/*
    7. Arithmetic Operators (산술 연산자)
    
    - addition (덧셈) operand + operand
    : binary operator 로써, 두 operand 의 산술적 뎃셈 결과를 리턴함.

    - subtraction (뺼셈) operand - operand
    : binary operator 로써, 두 operand 의 산술적 뺼셈 결과를 리턴함.

    - multiplication (곱셈) operand * operand
    : binary operator 로써, 두 operand 의 산술적 곱셈 결과를 리턴함.

    - division (나눗셈) operand / operand
    : binary operator 로써, 두 operand 의 산술적 나눗셈을 수행한 뒤, 그 몫을 결과로써 리턴함.

    - remainder (or modulo) (나머지) operand % operand
    : binary operator 로써, 두 operand 의 산술적 나머지 연산을 수행함. (즉, 나눗셈 연산을 수행한 뒤, 그 나머지를 결과로써 리턴함.)

    - increment/decrement (증감) ++/--
    : unary operator 로써, prefix 와 postfix 두 가지의 종류가 있으며, operand 의 값을 1만큼 증가/감소시킴.

        - prefix increment ++operand / --operand
        : operand 의 값을 1 만큼 먼저 증가/감소시킨 뒤, 증가/감소된 값을 평가 (evaluate) 함.
        - postfix increment operand++ / operand--
        : operand 의 값을 먼저 평가한 뒤, 그 값을 1만큼 증가/감소시킴.

    - unary plus +operand
    : unary operator 로써, operand 의 타입이 number 가 아닐 경우, number 로 변환함.
    4 + 4
    3 + +'5' = 8

    - unary negation -operand
    : unary operator 로써, operand 의 부호를 뒤집은 값을 리턴함.
    -5 - 3 = -8

    - exponentation (제곱) operand ** operand
    : binary operator 로써, 좌측 operand 가 base, 우측 operand 가 exponent 가 되어 base 의 exponent 제곱 연산이 수행됨.
*/

let a = 3, b = 7, c = 5, d = 4, k;
k = a + 2; // 
k = b - a; // 
k = c * a; // 
k = d / 3; //
k = b % 5; //
k = a ** k; //
+"564"; // number 인 564 로 변환됨
+true; // number 인 1로 변환됨
+false; // number 인 0 로 변환됨

/*
    8. Comparison Operators
    : 두 operand 를 비교해 boolean value 로 평가함. 이 때, 두 operand 의 타입이 일치하지 않을 경우,
     두 operand 를 호환되는 특정한 타입으로 변환해 비교를 시도함. numeric value 가 아닌 경우에는 타입에 따라 특수한 comparison logic 을 따름.
     (예: string 의 비교에서는 unicode 값을 이용한 standard lexicographical ordering 을 사용함.)

    - Greater than (-보다 크다) >
    : 좌변의 operand 가 우변의 operand 보다 크면 true, 아니면 false 를 리턴함.

    - Less than (-보다 작다) <
    : 좌변의 operand 가 우변의 operand 보다 작으면 true, 아니면 false 를 리턴함.

    - Greater Than or Equal (-보다 크거나 같다) >=
    : 좌변의 operand 가 우변의 operand 보다 크거나 같으면 true, 아니면 false 를 리턴함.

    - Less Than or Equal (-보다 작거나 같다) <=
    : 좌변의 operand 가 우변의 operand 보다 작거나 같으면 true, 아니면 false 를 리턴함.

    - Equal (-와 같다, 동등) ==
    : 좌변의 operand 가 우변의 operand 와 같으면 true, 아니면 false 를 리턴함.

    - Not Equal (-와 같지 않다, 부등) !=
    : 좌변의 operand 가 우변의 operand 와 같지 않으면 true, 같으면 false 를 리턴함.

    - Strict Equal (-와 일치한다, 일치) ===
    : 좌변의 operand 와 우변의 operand 와 타입이 일치하고, 값이 같으면 true, 아니면 false 를 리턴함. 

    - Strict Not Equal (-와 일치하지 않는다, 불일치) !==
    : 좌변의 operand 와 우변의 operand 와 타입이 다르거나, 같은 타입인 경우에 값이 같지 않으면 true, 아니면 false 를 리턴함.
*/

let a8 = 57.5, b8 = 45, c8 = "57.5", d8 = "abc", k8;
a8 > b8; // true
c8 > d8; // true
a8 < b8; // false
a8 - 12.5 >= b8; // true
a8 <= b8; // false
a8 == c8; // true (c8 이 a8 과 비교될 때 number type 으로 변환되어서 비교됨. 따라서, "57.5" => 57.5 로 변환됨. 그렇기 때문에 true)
a8 != 56.5; // true
a8 === c8; // false (a8 의 타입은 number, c8 의 타입은 string 이므로 strict equal 연산을 하게되면 타입이 같지 않아서 false)
a8 !== c8; // true

/*
    9. Logical Operators (논리 연산자)

    - Logical AND (논리 곱) &&
    : binary operator 로써, 좌변의 operand 가 false 로 변환될 수 있으면 해당 operand 를, 아닌 경우 우변의 operand 를 리턴함.
     (두 operand 가 boolean 인 경우 두 operand 가 전부 true 여야 결과값도 true. 둘 중 하나라도 false 인 경우 결과값도 false.)

    - Logical OR (논리 합) ||
    : binary operator 로써, 좌변의 operand 가 true 로 변환될 수 있으면 해당 operand 를, 아닌 경우 우변의 operand 를 리턴함.
     (두 operand 가 boolean 인 경우 두 operand 중 하나라도 true 면 결과값도 true. 둘 다 false 인 경우에만 결과값도 false.)

    - Logical NOT (논리 부정) !
    : unary operator 로써, 해당 operand 가 true 로 변환될 수 있으면 false 를, 아니라면 true 를 리턴함.
     i.e.) !true = false, !false = true

    ** false 로 변환될 수 있는 값(value):
    null, 0, NaN, "", undefined

    - Short-circuit Evaluation
    : Logical AND 와 OR 에서 AND 인 경우에는 좌변이 false, OR 인 경우에는 좌변이 true 인 경우에
     우변의 값과 상관 없이 "항상" false 혹은 true 로 평가될 수 있으므로, 애초에 우변의 값을 평가를 하지 않음.

    ----------------------------------                     ----------------------------------
    |  Logial AND (&&) Truth Table   |                     |   Logial OR (||) Truth Table   |
    ----------------------------------                     ----------------------------------
    | operand1 | operand2 |  Result  |                     | operand1 | operand2 |  Result  |
    ----------------------------------                     ----------------------------------
    |   true   |   true   |   true   |                     |   true   |   true   |   true   |
    ----------------------------------                     ----------------------------------
    |   true   |   false  |   false  |                     |   true   |   false  |   true   |
    ----------------------------------                     ----------------------------------
    |   false  |   true   |   false  |                     |   false  |   true   |   true   |
    ----------------------------------                     ----------------------------------
    |   false  |   false  |   false  |                     |   false  |   false  |   false  |
    ----------------------------------                     ----------------------------------

*/
let a9 = true, b9 = false, c9 = "Left", d9 = 'Right';

a9 && b9 || !b9 && !a9;



let originalSecuriyInfo = "asfsdf3432$#";
let securyInfo = originalSecuriyInfo || "sadfsdf#$22";

let menuElement = document.querySelector(".menu");
if (menuElement && (some1 = some2)) {

}

/*
    operator 종류: &&, ||, !
    operator 별 precedence: && - 6, || - 5, ! - 17
    operator 별 associativity: && - left-to-right, || - left-to-right, ! - right-to-left
    따라서 ! -> && -> || 순서대로 operator 연산이 실행되며, 두 && 중 left-most 부터, 두 ! 중 right-most 부터 실행됨.
    
    1. ! 연산 실행 (right-to-left)
    => a9 && b9 || !b9 && false;
    => a9 && b9 || true && false;

    2. && 연산 실행 (left-to-right)
    true && false || true && false;
    => false || true && false;
    => false || false;
    
    3. || 연산 실행
    => false;

    최종 결과값: false
*/

c9 && d9; // 결과값: 'Right'; 좌변의 c9 이 false 로 변환되지 않으므로 d9 을 리턴함.
c9 || d9; // 결과값: 'Left'; 좌변의 c9 이 true 로 변환되므로 c9 을 리턴함.
false && c9; // false
true || c9; // true 

// Short-circuit evaluation 의 예제
let isReady = false, readyState;
let shouldStop = isReady && (readyState = 2);
console.log(`isReady: ${isReady}, readyState: ${readyState}, shouldStop: ${shouldStop}`);

// Output: isReady: false, readyState: undefined, shouldStop: false
/*
    일반적으로 && operator 에서 좌변과 우변을 둘 다 평가한 뒤, 연산이 진행된다고 생각하겠지만
    short-circuit evalution 이 적용되어 && (AND) 의 경우에는 좌변이 false 인 경우 우변에 어떠한 값이 오더라도
    결과값이 false 가 되므로 우변을 평가하지 않고 바로 false 를 리턴해버림.
    따라서, isReady 가 false 이므로 우변의 readyState = 2 의 assignment expression 이 평가되지 않고 false 가 리턴되므로
    최종적으로 shouldStop 의 값은 false, readyState 는 undefined 가 됨. (declaration 에서 readyState 에 어떠한 값도 대입되지 않았으므로)
*/

/*
    10. Bitwise Operators (비트 연산자)
    : 비트 연산자들의 경우 operand 를 32-bit number 로 변환한 뒤, 해당 number 의 각 비트마다 연산이 독립적으로 적용됨.
    
    - Bitwise AND (비트단위 논리곱) &
    : binary operator 로써, 두 operand 의 각 자리 비트값이 둘다 1일 경우 해당 비트의 결과값도 1, 그외에는 0.

    - Bitwise OR (비트단위 논리합) |
    : binary operator 로써, 두 operand 이 각 자리 비트값 중 둘 중 하나라도 1일 경우 해당 비트의 결과값도 1, 둘다 0일 경우 결과값도 0.

    - Bitwise Exclusive OR (XOR, 비트단위 배타적 논리합) ^
    : binary operator 로써, 두 operand 의 각 자리 비트값이 서로 다를 경우 결과값이 1, 서로 같은경우 결과값은 0.

    - Bitwise NOT (비트단위 부정, 비트 반전) ~
    : unary operator 로써, operand 의 모든 비트를 반전시킨 결과를 리턴함. (1인 경우 0으로, 0인 경우 1로)
     (operand 를 직접 수정하지 않음)

    - Left Shift (왼쪽 시프트) <<
    : binary operator 로써, 왼쪽 operand 의 각 비트를 오른쪽 operand 비트 만큼 왼쪽으로 이동시킨 결과를 리턴함.
     이때, shift 된 자리의 비트들은 0으로 채워지고, overflow 된 비트들은 버려짐.

    - Sign-propagating Right Shift (부호전파(유지) 오른쪽 시프트) >>
    : binary operator 로써, sign (부호) 를 유지한채로 왼쪽 operand 의 각 비트들을 오른쪽 operand 비트 만큼 오른쪽으로 이동시킨 결과를 리턴함.
     이떄, shift 된 자리의 비트들은 0으로 채워지고, 경계 밖의 비트들은 버려짐.

    - Zero-fill Right Shift (부호없는 오른쪽 시프트) >>>
    : binary operator 로써, >> 와 메커니즘은 동일하지만 왼쪽 operand 의 sign (부호) 를 무시한다는 차이가 있음.

    00000000000000000000000000001001 => +9
    11111111111111111111111111110110 => ~9
    11111111111111111111111111110111 => -9

    -9 >> 1 = -5
    -9 >> 2 = -3

    11111111111111111111111111110111 => -9 >>> 0
    01111111111111111111111111111011 => -9 >>> 1
    00111111111111111111111111111101 => -9 >>> 2
*/

let a10 = 3, b10 = 5, c10 = 124, d10 = -14;
a10 & b10;
/*
    a10: 3 = 0000 0000 0000 0000 0000 0000 0000 0011
    b10: 5 = 0000 0000 0000 0000 0000 0000 0000 0101  & (bitwise and)
    -----------------------------------------------------------------
             0000 0000 0000 0000 0000 0000 0000 0001 = 1
    
    두 비트 전부 1인 경우에만 결과값이 1이 되는 것을 알 수 있음.
    (간단히 말해, AND 연산은 원래 정보를 보존하는 용도로 사용될 수 있음.)
*/

a10 | b10;
/*
    a10: 3 = 0000 0000 0000 0000 0000 0000 0000 0011
    b10: 5 = 0000 0000 0000 0000 0000 0000 0000 0101  | (bitwise or)
    -----------------------------------------------------------------
             0000 0000 0000 0000 0000 0000 0000 0111 = 7
    
    두 비트중 하나의 비트라도 1인 경우, 결과값이 1이 되는 것을 알 수 있음.
    (간단히 말해, OR 연산은 두 정보를 합치는 용도로 사용될 수 있음.)
*/

a10 ^ b10;
/*
    a10: 3 = 0000 0000 0000 0000 0000 0000 0000 0011
    b10: 5 = 0000 0000 0000 0000 0000 0000 0000 0101  ^ (bitwise exclusive or)
    -----------------------------------------------------------------
             0000 0000 0000 0000 0000 0000 0000 0110 = 6
             0000 0000 0000 0000 0000 0000 0000 0101 = 5 = b10 ^
             ------------------------------------------------------
             0000 0000 0000 0000 0000 0000 0000 0011 = 3
    
    두 비트의 값이 다른 경우 결과값이 1, 같은 경우 결과값이 0이 되는 것을 알 수 있음.
    (간단히 말해, Exlusive OR 연산은 두 정보의 차이를 알아내는 용도로 사용될 수 있음.)
    (또한, xor 연산의 경우에는 연산의 결과값과 연산에 사용된 operand 중 하나를 다시 XOR 연산할 경우, 다른 operand 가 결과값으로 나오며
     이 성질을 이용해 암호화-복호화 메커니즘에 응용할 수 있음.)

    예시) 124 ^ 53 = 73
          이 때, 124 를 원본 데이터, 53을 암호화 키 (key), 73 을 암호화된 데이터로 생각할 수 있음.
          이후 73 을 이용해 원본 데이터를 복원하기 위해서는 키 값인 53 과 73을 한번 더 XOR 연산을 해주면 됨.
          즉, 73 ^ 53 = 124
*/

~b10;
/*
    b10: 5 = 0000 0000 0000 0000 0000 0000 0000 0101  ~ (bitwise negate)
    -----------------------------------------------------------------
             1111 1111 1111 1111 1111 1111 1111 1010 = 4,294,967,290
    
    각 자리의 비트를 뒤집음. 즉, 비트의 값이 1인 경우 0, 0인 경우 1이 되는 것을 알 수 있음.
    (정수를 표현할 때 어떤 양수에 대해 해당 양수와 동일한 절댓값을 가진 음수를 표현하는데에 사용됨.)
*/

c10 << 4;
/*
    c10: 124 = 0000 0000 0000 0000 0000 0000 0111 1100 << 4 (left shift)
    ---------------------------------------------------------------------
               0000 0000 0000 0000 0000 0111 1100 0000 = 1,984

    (각 자리의 비트가 왼쪽으로 4칸 만큼 밀린 뒤, 왼쪽 끝 밀린 4 비트는 무시되고, 오른쪽 끝 비워진 비트들은 0으로 채워진 걸 확인할 수 있음.)
*/

d10 >> 2;

0000 ... 0101 = +5
1111 ... 1011 = -5
/*
    d10: -14 = 1111 1111 1111 1111 1111 1111 1111 0010 >> 2 (sign-propagating right shift)
    --------------------------------------------------------------------------------------
               1111 1111 1111 1111 1111 1111 1111 1101 = -3

    (음수의 표현 방식: 2's complements - 어떤 음수 x 의 binary 표현은 해당 음수의 절댓값의 binary 표현의 모든 비트를 뒤집은 뒤,
     1을 더한 값. 따라서, 음수의 특성상 양수와 완전히 다른 비트를 가지게 되는데, 이 때 음수를 >> 연산 하게 될 경우,
     부호 (sign) 을 보존하기 때문에 해당 음수의 비트 자체를 shift 하는게 아닌, 해당 음수의 절댓값의 비트들을 shift 한 뒤
     그 결과의 음수표현을 리턴함.)

    ** 간단히 말해, -14 인 1111 1111 1111 1111 1111 1111 1111 0010 를 >> 2 만큼 하게 될 경우, 
    결과가 0011 1111 1111 1111 1111 1111 1111 1100 가 아닌, -14의 절댓값 14의 binary 표현 0000 0000 0000 0000 0000 0000 0000 1110 을
    >> 2 만큼 한 0000 0000 0000 0000 0000 0000 0000 0011 에서 다시 이 절댓값을 가지는 음수의 binary 표현,
    1111 1111 1111 1111 1111 1111 1111 1101 이 최종 연산의 결과값이 됨.
*/

d10 >>> 2;
/*
    d10: -14 = 1111 1111 1111 1111 1111 1111 1111 0010 >> 2 (zero-fill right shift)
    --------------------------------------------------------------------------------------
               0011 1111 1111 1111 1111 1111 1111 1100 = 4,294,967,292

    (Sign-propagating right shift 와 다르게 음수의 경우에도 특별한 메커니즘이 적용되지 않고 전체 비트들을 오른쪽으로 2만큼
     shift 함.)
*/

0000 0000 1101 1000
0000 0000 0101 0101  << 8

serialNumber1
serialNumber2

let networkSerialNumber = serialNumber1 | (serialNumber2 << 8);
network.sendData(networkSerialNumber);

/*
    간략한 Bitwise 연산의 활용 용도
    : 주로 embedded system 이나 hardware engineering 과 같이 low-level 분야에서
      bit-packing (메모리 공간의 활용을 위해 분리된 여러 종류의 정보를 비트 연산을 활용해 최소한의 공간에 압축하는 기능)
      등에 사용함.
      그 외에도 대표적인 software 개발 측면에서 활용 용도는 bitfield 를 통한 여러 종류의 상태를 한 번에 가질 수 있는 정보를 표시하는 역할을 함.
      (암호화 관련 비트의 조작이 필요한 경우에도 빈번히 사용됨.)
*/

/*
    11. String Operators (문자열 연산자)

    - string concatenation (문자열 결합) +
    : binary operator 로써, operand 로 string 을 취하며, 두 string 을 연결한 결과를 리턴함.

    - string concatenation assignment +=
    : binary operator 로써, operand 로 string 을 취하며, 우변의 string 을 좌변의 string 에 연결해서 좌변에 대입함.
*/

let a11 = "Hello", b11 = ", ", c11 = "World";
let k11 = a11 + b11 + c11 + "!"; // k11 의 값은 "Hello, World!", a11, b11, c11 의 값은 변경하지 않음.

let d11 = " in Javascript";
k11 += d11; // k11 의 값은 "Hello, World! in Javascript", d11 의 값은 변경하지 않음.
k11 + d11;

/*
    12. Relational Operators (관계 연산자)
    : 주어진 operand 를 비교해 해당 비교 결과에 따라 적절한 boolean 값을 리턴함.

    - in
    : binary operator 로써, property-name in object-name 형태로 구성되며, object-name 을 가진 object 안에
      property-name 에 해당하는 프로퍼티가 있을 경우 true 를 리턴함.
      ** 이 때, array 의 경우에는 Javascript 에서 object 의 일종이므로 index 를 property-name 으로써 사용할 수 있음.

    - instanceof
    : binary operator 로써, object-name in object-type 형태로 구성되며, 주어진 object-name 의 타입이 
      object-type 타입일 경우 true 를 리턴함.
*/

console.log('someProp1' in { someProp1: 1, someProp2: 123 }); // true
console.log(3 in ['banana', 'apple', 'pear', 'plum', 'peach', 'blueberry']); // true
console.log('banana' in ['banana', 'apple', 'pear', 'plum', 'peach', 'blueberry']); // false; array 에서 각 element 의 키 값은 해당 element 의 index 값이기 때문.

let obj1 = ['11', '111', '1111'], obj2 = new Date(2020, 1, 1);
console.log(obj1 instanceof Array); // true
console.log("Some String" instanceof Object); // false
console.log(obj2 instanceof Date); // true

/*
    13. Miscellaneous Unary Operators (그 외 단항 연산자)

    - typeof
    : unary operator 로써, operand 를 평가하지 않은 타입 이름을 string 형태로 리턴함. operand 에는 string, variable, keyword 혹은 object
      등이 올 수 있음. 또한, operand 에 () 를 씌워 사용할 수도 있음. (이떄 () 는 optional.)

    - void
    : unary operator 로써, operand 에 () 를 씌워 사용할 수도 있으며, 어떠한 결과도 리턴하지 않고 단순히 operand 를 "평가" 하기만 함.
      따라서, void 연산의 결과값은 항상 undefined 인 것을 알 수 있음.

    - delete
    : unary operator 로써, operand 가 object 내의 멤버일 경우, 해당 멤버를 삭제함. 즉, 해당 멤버를 undefined 로 만듦.
*/

if (typeof a === "number") {
    // a가 넘버일떄 동작
}

console.log(typeof 123); // "number"
console.log(typeof "1231"); // string
console.log(typeof { a1: "a1", b1: "b1" }); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Infinity); // number
console.log(typeof NaN); // number
console.log(typeof function(a) { return a ** 5; }); // function
console.log(typeof false); // boolean

void(0); // 0의 값을 평가; 실제로는 아무런 동작도 하지 않음.

let a13 = 52;
console.log(void(a13 = typeof a13 === "number"? "this is a number" : a13));
// void 내의 expression 을 "평가"만 하고 아무 값도 리턴하지 않음; 즉, undefined 가 출력됨.

let b13 = {
    id: 123,
    firstName: "John",
    lastName: "Billings",
    age: 24,
    someUselessProp: null
};

let obj1 = null, obj2 = undefined, obj3 = { };
obj3.name = "sdfs";

console.log(b13.someUselessProp); // null 이 출력됨.

delete b13.someUselessProp; // b13 의 프로퍼티인 someUselessProp 을 삭제함.
console.log(b13.someUselessProp); // undefined 가 출력됨.

/*
    14. Ternary Conditional Expression (삼항 조건 연산자)
    : ternary operator 로써, expression? true-value : false-value 형태로 구성되며, 주어진 expression 을 평가해
      true 일 경우, true-value 를, 아닌 경우 false-value 를 리턴함.
*/

console.log(typeof "123" === "number"? "This is a number" : "This is not a number");

/*
    기타 자세한 operator 에 대한 내용은 아래 MDN 문서 참조:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/