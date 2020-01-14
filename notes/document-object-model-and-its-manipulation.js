/*
    1. Document Object Model (a.k.a. DOM)
    : 어떤 웹페이지 (html 파일) 가 로드될 때, 해당 html 파일 내에 있는 각종 정보들 (html element, attributes, comments, texts) 을 바탕으로
      스크립트 내에서 해당 정보들이 다 개별적인 노드 (node) 로 표현되는 트리 (tree) 형태의 자료구조를 형성함.
      이 때, 각각의 노드들은 object 형태로 저장되며, 이러한 형태로 html document 가 모델링된 것을 Document Object Model 이라 부름.
      DOM 을 이용하면 html document 를 직접 수정하지 않고도 javascript 를 통해 해당 document 의 표현 형태를 변경할 수 있음.

      ** DOM 은 XML DOM, HTML DOM 등 여러 종류가 있지만 일반적으로 DOM 은 대표적으로 사용되는 HTML DOM 을 의미함.
         또한, DOM 은 원래 language-neutral interface 임. (즉, 사용하는 언어에 제약되지 않는 언어 중립적인 프로그래밍 인터페이스.)

    - visual representation of DOM nodes:
                                                <html>
                                                    <body>
                                                        <!-- some comment -->
                                                        <h2>Heading 2</h2>
                                                    </body>
                                                </html>

                                                            document
                                                                |
                                                        html (root element)
                                                                |
                                                               body
                                                                |
                                                        -----------------
                                                        |               |
                                                     comment            h2
                                                   some comment      Heading 2

    2. HTML DOM Manipulation
    : html document 를 구성하는 node 들을 javascript function 혹은 document object 의 property 들을 이용해 조작하는 것을 뜻함.

    - html element 를 query 하는데 사용되는 function (혹은 method) 들:
        > 더 이상 사용 권장되지 않는 functions:
        - document.getElementById(id)
        - doucment.getElementsByClassName(classname)
        - document.getElementsByTagName(tagName)

        > CSS Selector 를 이용하는 functions:
        - document.querySelector(selector)
        - document.querySelectorAll(selector)

    - DOM node 를 생성/제거/변경 하는데에 사용되는 functions:
        - document.createElement(tag)
        - document.createTextNode(text)
        - document.createComment(comment)
        - document.createAttribute(attributeName)
        - document.appendChild(element)
        - document.removeChild(element)
        - document.replaceChild(new, old)

    - html element 에 attribute 을 추가/제거 하는데에 사용되는 functions:
        - HTMLElement.setAttribute(attributeName, value)
        - HTMLElement.getAttribute(attributeName)

    - html element 에 event handler (혹은 listener) 를 추가/제거 하는데 사용되는 functions:
        - document.addEventListener(type, callback)
        - document.removeEventListener(type, callback)

    - 현재 focus 되어있는 html element 를 가져오는 방법:
        - document.activeElement
*/

<html>
    <body>
        <h2 id="title" class="title-heading">Welcome</h2>
        <h2 class="title-heading">Hello</h2>
        <p id="paragraph2">ABC</p>
    </body>
</html>

let title = document.getElementById('title');
title.innerHTML = "Welcome to My Page";

let title = document.querySelector("#title");
title.innerHTML = "Welcome to My Page";

//-----------------------------------------//

let titleHeadings = document.getElementsByClassName('title-heading');
titleHeadings[0] ->         <h2 id="title" class="title-heading">Welcome</h2>
titleHeadings[1] ->         <h2 class="title-heading">Hello</h2>

let titleHeadings = document.querySelectorAll('.title-heading');
titleHeadings[0] ->         <h2 id="title" class="title-heading">Welcome</h2>
titleHeadings[1] ->         <h2 class="title-heading">Hello</h2>

//------------------------------------------//
let paragraphList = document.getElementsByTagName('p');

let paragraphList = document.querySelectorAll('p');