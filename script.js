let color = "black";
let click = "false";

document.addEventListener("DOMContentLoaded", ()=> {
    createBoard(16);

    document.querySelector("body").addEventListener("click", (e)=> {
     if (e.target.tagName != "BUTTON") {
        click = !click;

     let drawing = document.querySelector(".on-or-off");
        if (click){
            drawing.textContent = "Drawing: On";
        } else 
                drawing.textContent = "Drawing: Off";
     }
    })
     
    

    let sizeButton = document.querySelector(".size-button");
    sizeButton.addEventListener("click", ()=> {
    reset();
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
    div.addEventListener("mouseover", colorDiv);
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

function colorDiv() {
   if (click){
    if(color == "rainbow"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color == "red") {
        this.style.backgroundColor = "red";
    } else if (color == "white"){
        this.style.backgroundColor = "white";
    } else 
        this.style.backgroundColor = "black";
}}

function setColor(colorChoice) {
    color = colorChoice;
    console.log(color);
}

function reset() {
    document.querySelectorAll('div').forEach((div)=>
      div.style.backgroundColor = "white");
    }

function gradient () {
    let currentOpacity = this.style.opacity;
    console.log (this)
}