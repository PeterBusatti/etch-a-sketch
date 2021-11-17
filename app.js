const container = document.getElementById("middle-main-container");
const colorSelect = document.getElementById("colorSelect");
const gridSelect = document.getElementById("gridSelect");
const gridOutputNum = document.getElementById("gridOutputNum");

// setting page load values
let color = "black";
colorSelect.value = "black";
gridSelect.value = 30;

let squareNum = gridSelect.value;
let individualBox = [];

function playGridCreate(base) {
    let gridCount = base * base;
    createSquares(gridCount); 
    individualBox = Array.from(document.getElementsByClassName("box")); 
    individualBox.forEach(box => box.addEventListener("mouseenter", passChanger));
    let output = document.createElement('p');
    output.textContent = squareNum + "x" + squareNum;
    gridOutputNum.appendChild(output);
}

function createSquares(num) {
    const boxHeight = (document.getElementById("middle-main-container").clientHeight / squareNum) + "px";
    const boxWidth = (document.getElementById("middle-main-container").clientWidth / squareNum) + "px";
    for (let i = 1; i <= num; i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.style.height = boxHeight;
        box.style.width = boxWidth;
        container.appendChild(box);
    }
}

playGridCreate(squareNum);

function passChanger(e) {
    if(color === "black") {
        e.target.style.backgroundColor = "black";
    }
    else if (color === "rainbow") {
        e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    else if (color === "eraser") {
        e.target.style.backgroundColor = "#a5a5a5"
    }
}

colorSelect.addEventListener("change", changeColor);

function changeColor() {
    color = this.value;
    console.log(color);
}

gridSelect.addEventListener("change", changeGridValue);

function changeGridValue() {
    refresh();
    squareNum = this.value;
    playGridCreate(squareNum);
}

function refresh () {
    gridOutputNum.removeChild(gridOutputNum.firstChild);
    individualBox.forEach(box => box.removeEventListener("mouseenter", passChanger));
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    individualBox = [];
}

