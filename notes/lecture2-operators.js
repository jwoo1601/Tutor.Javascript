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
            e.g.) !(not), ++(prefix), ++(postfix), --(prefix), --(postfix), ~(), -, +, typeof, instanceof, new, delete, await

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

            - comma operator
            : 두 operand 를 모두 평가한 뒤, 마지막 operand 를 결과값으로 리턴함.

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
let a4, b4, c4, d4;
"1" + '234' + '56'; // 이 expression 에서 operation 은 총 2개 ("1" + '234', ... + '56')
!a4 && b4 || (c4)

/*
    5. Operator Precedence (연산자 우선순위)
    : 한 expression 에서 다른 종류의 operator 가 섞여있을 떄, 어떤 operation 부터 평가 되어야 하는지,
     즉 어떤 연산자가 더 우선권을 가지는 지에 대한 순서.

    e.g.) expression A OP1 B OP2 C OP3 4 이 있을 때, 서로 다른 operator OP1, OP2, OP3 중 어떤 operator 의 연산이 먼저
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

    - unary negation -operand
    : unary operator 로써, operand 의 부호를 뒤집은 값을 리턴함.

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
+false; // number 인 false 로 변환됨

/*
    8. Comparison Operators
    : 두 operand 를 비교해 boolean value 로 평가함. 이 때, 두 operand 의 타입이 일치하지 않을 경우,
     두 operand 를 호환되는 특정한 타입으로 변환해 비교를 시도함. numeric value 가 아닌 경우에는 타입에 따라 특수한 comparison logic 을 따름.
     (예: string 의 비교에서는 unicode 값을 이용한 standard lexicographical ordering 을 사용함.)

    - Greater than >
    : 좌변의 operand 가 우변의 operand 보다 크면 true, 아니면 false 를 리턴함.

    - Less than <
    : 좌변의 operand 가 우변의 operand 보다 작으면 true, 아니면 false 를 리턴함.

    - Greater Than or Equal >=
    : 좌변의 operand 가 우변의 operand 보다 크거나 같으면 true, 아니면 false 를 리턴함.

    - Less Than or Equal <=
    : 좌변의 operand 가 우변의 operand 보다 작거나 같으면 true, 아니면 false 를 리턴함.

    - Equal ==
    : 좌변의 operand 가 우변의 operand 와 같으면 true, 아니면 false 를 리턴함.

    - Not Equal !=
    : 좌변의 operand 가 우변의 operand 와 같지 않으면 true, 같으면 false 를 리턴함.

    - Strict Equal ===
    : 좌변의 operand 와 우변의 operand 와 타입이 일치하고, 값이 같으면 true, 아니면 false 를 리턴함. 

    - Strict Not Equal !==
    : 좌변의 operand 와 우변의 operand 와 타입이 다르거나, 같은 타입인 경우에 값이 같지 않으면 true, 아니면 false 를 리턴함.
*/

>
<
>=
<=
==
!=
===
!==

/*
    9. Logical Operators (논리 연산자)

    - Logical AND
    : binary operator 로써, 좌변의 operand 가 false 로 변환될 수 있으면 해당 operand 를, 아닌 경우 우변의 operand 를 리턴함.

    - Logical OR
    : binary operator 로써, 좌변의 operand 가 true 로 변환될 수 있으면 해당 operand 를, 아닌 경우 우변의 operand 를 리턴함.

    - Logical NOT
    : unary operator 로써, 해당 operand 가 true 로 변환될 수 있으면 false 를, 아니라면 true 를 리턴함.

    ** false 로 변환될 수 있는 값(value):
    null, 0, NaN, "", undefined

    - Short-circuit Evaluation
    : Logical AND 와 OR 에서 AND 인 경우에는 좌변이 false, OR 인 경우에는 좌변이 true 인 경우에
     우변의 값과 상관 없이 "항상" false 혹은 true 로 평가될 수 있으므로, 애초에 우변의 값을 평가를 하지 않음.

*/
let a2, b2, c3, d2, k2;

&&
||
!

/*
    10. Bitwise Operators (비트 연산자)
    
    - Bitwise AND
    - Bitwise OR
    - Bitwise XOR
    - Bitwise NOT
    - Left Shift
    - Sign-propagating Right Shift
    - Zero-fill Right Shift

    00000000000000000000000000001001 => +9
    11111111111111111111111111110110 => ~9
    11111111111111111111111111110111 => -9

    -9 >> 1 = -5
    -9 >> 2 = -3

    11111111111111111111111111110111 => -9 >>> 0
    01111111111111111111111111111011 => -9 >>> 1
    00111111111111111111111111111101 => -9 >>> 2
*/

&
|
^
>>
<<
>>>

/*
    기타 자세한 operator 에 대한 내용은 아래 MDN 문서 참조:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/