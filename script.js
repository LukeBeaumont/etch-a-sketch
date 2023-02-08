const mainContainer = document.querySelector(".main-container");

function createGrid(size) {
    for(i=0; i<size; i++) {
        
        const row = document.createElement("div");
        row.classList.add("row");
        mainContainer.appendChild(row);
}
    }
    

createGrid(5);