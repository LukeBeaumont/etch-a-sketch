const mainContainer = document.querySelector(".main-container");

function createGrid(size) {
    for(i=0; i<size; i++) {
        
        const row = document.createElement("div");
        row.classList.add("row");
        mainContainer.append(row);

        for(j=0; j<size; j++) {
        
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
    
}
    }
    
}
createGrid(10);