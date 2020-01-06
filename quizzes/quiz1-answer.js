/*
    Quiz 1: due on 5th, January 2020.
    출제범위: lecture 1
    
    ----------------------- Reminder -----------------------
    | * 퀴즈 시작 전 lecture 노트들을 정독해주세요.           |
    | * 또한, 퀴즈 중간에 노트를 보는 걸 가급적 삼가해주세요.  |
    --------------------------------------------------------
*/

/*
    1. 다음은 Javascript 기본 문법에 대한 설명이다. 올바르지 않은 것을 모두 고르시오.

    (A) Javascript 에서 statement 는 실행 가능한 코드를 기능적으로 묶은 단위이며, semi-colon (;) 으로만 구분된다.  
    (B) Statement 를 하나 이상 한 줄에 연결할 때, semi-colon 은 optional 이다.
    (C) Statement 내에 사용된 whitespace character 들은 갯수에 상관없이 무시된다.
    (D) Javascript 에서 identifier 는 $, 영문자 대소문자, # 로만 시작할 수 있으며, 그 다음 character 부터 숫자도 올 수 있다.
    (E) Javascript 에서 identifier 에는 reserved words 인 keyword 를 쓰는 것이 권장된다.
    (F) Javascript 에서 identifier 를 선언할 때에는 반드시 let, var, const, 혹은 auto 와 같은 keyword 들을 앞에 명시하여야 한다.
    (G) Initialization 은 variable 을 선언할 떄에 필수적인 작업이며, 이 작업 없이 variable 을 선언할 시 syntax error 가 나게 된다.
    (I) Javascript 에서 여러 variable 들을 하나의 statement 에 선언하기 위해서는 , (comma) 로 각각의 variable 들을 구분해야 한다.

    Answer) A, B, D, E, F, G
*/

/*
    2. 다음 중 number 타입의 literal 인 것을 모두 고르시오.

    (A) 07732
    (B) '325.32'
    (C) `465`
    (D) 0XABC
    (E) 23E-6
    (F) '0b0110001'
    (G) [123]
    (H) 224.1205
    (I) Infinity

    Answer) A, D, E, H, I
*/

/*
    3. Javascript 에서의 value 의 종류를 쓰고, 각각의 특징점을 핵심 "키워드"를 이용해 설명하시오.

    Answer)
        1. Literal
        : 사용하기 전에 선언할 필요가 없음. 또한, 각 literal 이 의미하는 값은 항상 고정되어 있음. 따라서, 변경이 불가능함.
          (표현 형태에 따라 각기 다른 타입을 가짐.)

        2. Variable
        : 이름을 가지며, 사용되기 전에 선언이 되어야 함. 또한, 값을 가지며 저장하는 값이 변경될 수 있음.
          (저장하는 값의 타입에 따라 variable 의 타입이 결정됨.)
*/

/*
    4. Javascript 에서 어떤 이름 (identifier) 의 선언 (declaration) 과 정의 (definition) 에 대해 서술하시오.

    Answer)
    - 선언 (Declaration): identifier 의 존재를 최초로 알리는 작업. 해당 identifier 을 사용하기 전에 필수적으로 선언이 되어야 함.
    - 정의 (Definition): identifier 와 해당 identifier 의 의미를 연결해주는 작업. 먼저 선언이 된 identifier 에만 정의가 가능함.
*/

/*
    5. 아래 Literal 과 그에 대한 설명을 올바르게 짝지으시오.

    (1) `5324.1223`
    (2) { id: 123, name: 'Steve', job: 'Social Service Worker' }
    (3) [ ["apple", 1], ["banana", 12], ["blueberry", 5] ]
    (4) 0x1AEA
    (5) undefined
    (6) false
    (7) null
    (8) -Infinity
    (9) NaN
    (10) 0104
    (11) 32e-4

    (A) Object literal
    (B) Number literal (hexadecimal representation)
    (C) Boolean literal
    (D) Number literal (number 와 number 가 아닌 값을 산술 연산했을 떄 얻을 수 있는 값)
    (E) Number literal (scientific representation)
    (F) Number literal (어떤 number 를 -0으로 나누었을 떄 얻을 수 있는 값)
    (G) 정의되지 않았다는 뜻을 가지는 literal
    (H) Array Literal
    (I) Object literal (어떠한 object 도 가리키고 있지 않다는 의미로 쓰이는 값)
    (J) Number literal (Octal Representation)
    (K) String literal

    Answer)
    (1) - K
    (2) - A
    (3) - H
    (4) - B
    (5) - G
    (6) - C
    (7) - I
    (8) - F
    (9) - D
    (10) - J
    (11) - E
*/

/*
    6. 일반적으로 어떤 프로그래밍 언어인지에 상관 없이 값에 따라 data type 을 구분하게 되는데, data type 을 구분하는 이유에 대해
       "키워드"를 이용해 간략히 설명하시오.

    Answer) 각 정보 (혹은 데이터) 가 실제적으로 점유하는 물리적 메모리 크기와 해당 데이터의 메모리 상의 표현 형태 (즉, 해당 데이터의 비트 구조) 를 식별하기 위해서 data type 을 구분함.
*/

/*
    <Bonus Questions>

    1. git 과 같은 version control system 을 사용하는 이유에 대해 쓰시오.
    Answer) 어떤 프로젝트를 작업할 때에 (특히 다수의 사람들이) 해당 프로젝트의 버전을 효율적으로 관리하고, 프로젝트 내의 코드들에 대한 변경 사항 관리를 자동화하기 위해서.

    2. local repo 와 remote repo 의 차이점에 대해 쓰시오.
    Answer)
        - local repo: 사용자의 file system 에 직접적으로 저장되는 repository 로써, 주로 remote repo 의 사본 (clone) 으로써 역할을 함.
        - remote repo: 원격 (remote) 서버에 저장이 되는 repository 로써, 사용자들의 여러 local repository 들과 연동되어, 실제적으로 원본 (original) 데이터로써의 역할을 함.

    3. local repo 와 remote repo 를 동기화 (Synchronization) 하는데에 필요한 command 를 쓰시오.
    Answer) git push (local repo 의 commit 된 사항들을 remote repo 에 동기화 할 때)

    4. git 을 사용하는 프로젝트에서 변경 혹은 추가사항을 local repo 부터 시작해 remote repo 에 반영하기 위해 필요한 process 들을 모두 나열하시오.
    Answer) staging -> commit -> synchronize -> conflict management

    5. git command 중 remote repo 를 복제해 새로운 local repo 를 만들 때 사용하는 command 를 쓰시오.
    Answer) git clone

    6. git command 중 연동된 remote repo 의 변경 사항을 확인할 때 사용하는 command 는?
    Answer) git fetch
*/
