document.addEventListener("DOMContentLoaded", createBoard(15));

function createBoard (size) {
    let grid = document.querySelector(".grid");

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
  let numOfDiv = size * size;

  for(let i = 0; i < numOfDiv; i++) {
    let div = document.createElement("div");

    grid.insertAdjacentElement("beforeend", div);
    
  }
}

