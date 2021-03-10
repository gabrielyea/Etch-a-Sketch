
const button = document.querySelector(".btn");
const input = document.querySelector("#numberInput");
const grid = document.querySelector(".sketch");

const r = document.querySelector(":root");


button.addEventListener("click", setNumberOfBlocks);
document.addEventListener("keyup", checkInputValidity);
document.addEventListener("onclick", checkInputValidity);

function checkInputValidity() {

    if (input.checkValidity()) {
        button.disabled = false;
        return;
    }
    button.disabled = true;
}

function getBlocksNumber() {
    return input.value;
}

function setNumberOfBlocks() {

    clearGrid();

    let usrInput = getBlocksNumber();
    let gridSize = Math.pow(usrInput, 2);

    r.style.setProperty("--numberOfBlocks", usrInput);

    for (let index = 1; index <= gridSize; index++) {
        let block = document.createElement("div");
        block.classList.add("gridBlock");
       
        block.addEventListener("mouseenter", function(e){
            this.classList.add("paint");
        })
        block.addEventListener("mouseleave", function(e){
            this.classList.add("clear");
        })
        grid.appendChild(block);
    }
}

function clearGrid() {

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}
