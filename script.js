let color = "black";

document.addEventListener("DOMContentLoaded", ()=> {
    createBoard(16);

    let sizeButton = document.querySelector(".size-button");
    sizeButton.addEventListener("click", ()=> {
    
    let size = selectSize();
    createBoard(size);
  })
})

function createBoard (size) {
    let grid = document.querySelector(".grid");

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
  let numOfDiv = size * size;

  for(let i = 0; i < numOfDiv; i++) {
    let div = document.createElement("div");

    grid.insertAdjacentElement("beforeend", div);
   // div.addEventListener("mouseover", colorDiv());
  }
}

function selectSize () {
    let input = prompt("What size grid would you like?");
    let info = document.querySelector(".info");
    if (input == "") {
        info.textContent = "Please input number";
    }
    else if (input <= 0 || input > 100) {
        info.textContent = "Number must be between 1 and 100";
    }
    else {info.textContent = `Grid size: ${input}`;
    return input;
    }
}