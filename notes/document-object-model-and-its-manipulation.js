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

/*
    - Events
    : 사용자와의 interaction, DOM Node construction 등의 특정한 트리거 (trigger) 를 통해
      발생하는 사건들을 Event 라고 함.

    - HTML DOM Events

        - Click Events
            => click
            : 마우스로 해당 element 를 클릭했을 때 발생.
            => dbclick
            : 마우스로 해당 element 를 더블클릭했을 때 발생.

        - Mouse Events
            => mouseover
            : 마우스 커서를 해당 element 내에 올려놓을 때 발생.
            => mouseout
            : 마우스 커서를 해당 element 내에서 외부 element 로 이동시킬 때 발생. 

            => mouseenter
            : 마우스 커서를 해당 element 내에 올려놓을 때 발생.
            => mouseleave
            : 마우스 커서를 해당 element 내에서 외부 element 로 이동시킬 때 발생. 

            ** mouseover vs mouseenter & mouseout vs mouseleave
            : mouseover 와 mouseout 은 해당 element 의 child element 도 외부 element 로 취급해
              해당 element 내부에 있는 child element 내부로 또는 child element 밖의 해당 element 로
              이동시킬 때도 발생함.
              반면에 mouseenter 와 mouseleave 는 child element 도 해당 element 의 내부로 인식해
              해당 element 내부 -> 외부 또는 외부 -> 내부 로 마우스를 이동시킬 시 단 한번씩 밖에 발생되지 않음.

            => mousedown
            : 특정 element 에서 마우스 버튼이 눌려졌을 경우 (왼쪽/오른쪽) 발생.
            => mouseup
            : 특정 element 에서 마우스 버튼이 눌려있다 떼어졌을 경우 발생.
            => contextmenu
            : 특정 element 에서 마우스 우클릭될 때 contextmenu 를 띄우려 할 때 발생.

            ** 마우스 좌클릭 이벤트 발생 순서
            : mousedown -> mouseup -> click
            ** 마우스 우클릭 이벤트 발생 순서
            :mousedown -> mouseup -> contextmenu

        - Keyboard Events
            => keydown
            : 해당 element 에서 키가 눌려졌을 때 발생.
            => keypress
            : 해당 element 에서 키가 눌려졌을 때 발생.
            (Alt, Ctrl, Shift, Esc 와 같은 키들이 눌려질 때는 발생하지 않는 경우도 있음.)
            => keyup
            : 해당 element 에서 키가 눌려져있다 떼어졌을 때 발생.

            ** event.key, event.keyCode, event.altKey, event.ctrlKey, event.shiftKey,

        - Animation Events
            => animationstart
            : 해당 element 의 CSS Animation 이 시작될 때 발생.
            => animationend
            : 해당 element 의 CSS Animation 이 끝날 때 발생.
            => animationiteration
            : 해당 element 의 

        - Print Events
            => beforeprint
            : print dialogue 박스가 표시되기 전, 해당 페이지가 프린트 되기 전에 호출됨.
            (body 태그에만 적용 가능)
            => afterprint
            : print dialogue 박스가 닫혔거나 해당 페이지 프린트가 시작될 때 호출됨.
            (body 태그에만 적용 가능)

        - Focus Events
            => focus
            : 해당 element 에 focus 가 되었을 경우 발생.
            => blur
            : 해당 element 가 focus 를 잃었을 경우 발생.

            => focusin
            : 해당 element 에 focus 가 되었을 경우 발생.
            => focuseout
            : 해당 element 가 focus 를 잃었을 경우 발생.

            ** focus vs focusin & blur vs focusout
            : focus 와 blur 의 경우에는 child element 에 focus 가 되거나
              해당 element 에서 child element 로 focus 가 옮겨가는 경우에도 따로 영향을 받지 않음.

        - Load Events
            => load
            : 해당 페이지의 로드가 완료되었을 때 발생.
            (body 태그에만 적용 가능)
            => unload
            : 해당 페이지가 unload 되거나 (즉, 브라우저 창이 닫힐경우)
              혹은 해당 페이지로부터 벗어날 경우 (form 을 submit 하거나 link 를 클릭하는 등),
              또는 해당 페이지를 refresh 할 경우 발생.
            (body 태그에만 적용 가능)

        - Clipboard Events
            => copy
            : 해당 element 의 content 나 해당 element 자체가 복사되었을 때 발생.
            => cut
            : 해당 element 의 content 나 해당 element 자체가 오려졌을 떄 발생.
            (일반적으로 html element 는 오려낼 수 없음.
             다만, contenteditable attribute 값을 true 로 설정할 경우 가능.)
            => paste
            : 해당 element 에 어떤 데이터를 붙여넣으려 할 때 발생.
            (일반적으로 html element 는 수정할 수 없음.
             다만, contenteditable attribute 값을 true 로 설정할 경우 가능.)

            ** event.clipboardData
            : 클립보드 이벤트에서 복사/오리기/붙여넣기 등의 동작의 대상이 되는 데이터 오브젝트.

        - Drag Events
          : draggable attribute 의 값이 true 인 element 에만 적용됨.
                => dragstart
                : 해당 element 를 드래그 시작했을 때 발생.
                => drag
                : 해당 element 가 드래그 되는 중일 때 발생.
                  (즉, 마우스가 눌린 상태에서 드래그 될 때)
                => dragend
                : 해당 element 를 드래그 하는게 끝날 때 발생.

        - Drop Events
                => dragenter
                : 드래그된 element 가 드랍 가능한 element 에 들어갔을 떄 발생.
                => dragover
                : 드래그된 element 가 드랍 가능한 element 내에서 드래그 될때 발생.
                => dragleave
                : 드래그된 element 가 드랍 가능한 element 내에서 벗어났을 때 발생.
                => drop
                : 드래그된 element 가 해당 element 에 드랍되었을 때 발생.

    - Event handler/listener

    - HTML 내에서 각 element 에 event handler 를 지정하는 법
    : html 파일 내에서 각 element 의 attribute 으로 on<event-name> 을 사용.
      이 때, attribute 의 값으로는 자바스크립트 코드를 넣을 수 있음.
      e.g.) 
      <div onclick="event_handler()"></div>

    - Javascript 내에서 각 element 에 event handler 를 지정하는 법
    : document.querySelector() 를 통해서 HTML Node 를 가져온 후, 해당 node 에
      addEventListener() (이벤트 핸들러 등록) 혹은 removeEventListener() (이벤트 핸들러 제거) 를 호출.
      e.g.)
      const testElement = document.querySelector('.test');
      testElement.addEventListener("focus", onTestFocused; // event listener 를 binding (바인딩)

      function onTestFocused(e) {
          ...
          e.target.style.backgroundColor = "red";
          e.preventDefault();
      }

      testElement.removeEventListener("focus", onTestFocused);

    - Event 가 발생되었을 때 해당 이벤트의 기본 동작을 막는 법
    : parameter 로 넘겨받은 event object 에서 preventDefault() 를 호출하면 됨.
*/