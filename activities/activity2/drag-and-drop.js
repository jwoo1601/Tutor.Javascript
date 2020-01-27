const page = document.querySelector("body");
document.addEventListener("dragover", onPageDragOver);
document.addEventListener("drop", onCancelDrop);

function onPageDragOver(e) {
  e.preventDefault();
}

function onCancelDrop(e) {
  e.preventDefault();

  const filesArray = Array.from(e.dataTransfer.files);
  filesArray.forEach(f => {
    const newElement = document.createElement("p");
    newElement.innerHTML = f.name;

    e.target.appendChild(newElement);
  });

  const dropTarget = e.target;
  if (
    dropTarget.classList.contains("drop-target") ||
    dropTarget.parentNode.classList.contains("drop-target") ||
    dropTarget.parentNode.parentNode.classList.contains("drop-target")
  ) {
    const targetId = e.dataTransfer.getData("Id");
    if (targetId) {
      const targetBox = document.querySelector(`#${targetId}`);
      const order = e.dataTransfer.getData("Order");
      const targetArea = document.querySelector(".sorted-box-list").children[
        order
      ];

      targetArea.append(targetBox);
    }
  }
}

const draggables = document.querySelectorAll(".drag-box");

for (const draggable of draggables) {
  draggable.addEventListener("dragstart", onBoxDragStart);
  draggable.addEventListener("drag", onBoxDragged);
  draggable.addEventListener("dragend", onBoxDragEnd);
}

function onBoxDragStart(e) {
  const boxList = Array.from(e.target.parentNode.parentNode.children);
  e.dataTransfer.setData("Id", e.target.id);
  e.dataTransfer.setData(
    "Order",
    boxList.findIndex(b => b.children[0] == e.target)
  );
}

function onBoxDragged(e) {
  e.target.classList.add("dragged");
}

function onBoxDragEnd(e) {
  e.target.classList.remove("dragged");
}

function a() {
  return "a";
}

"#" + a();
