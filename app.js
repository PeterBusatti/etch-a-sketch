const container = document.getElementById("middle-main-container");
const colorSelect = document.getElementById("color-select");
const gridSelect = document.getElementById("grid-select");
const gridOutputNum = document.getElementById("grid-output-num");
const resetBtn = document.getElementById("reset-btn");

// setting page load values
let color = "black";
colorSelect.value = "black";
gridSelect.value = 30;

let gridValue = gridSelect.value;
let individualBox = [];

resetBtn.addEventListener("click", () => {
    individualBox.forEach(box => box.style.backgroundColor = "#a5a5a5")
});
colorSelect.addEventListener("change", function() {
    color = this.value
});

function playGridCreate(base) {
    let gridCount = base * base;
    
    let output = document.createElement('p');
    output.textContent = gridValue + "x" + gridValue;
    gridOutputNum.appendChild(output);

    if (gridValue == 70) {
        container.style.height = "595px";
        container.style.width = "595px";
    } 
    else {
        container.style.height = "600px";
        container.style.width = "600px";
    }

    createSquares(gridCount); 
    
    individualBox = Array.from(document.getElementsByClassName("box")); 
    individualBox.forEach(box => box.addEventListener("mouseenter", passChanger));
}

function createSquares(num) {
    const boxHeight = (document.getElementById("middle-main-container").clientHeight / gridValue) + "px";
    const boxWidth = (document.getElementById("middle-main-container").clientWidth / gridValue) + "px";
    
    for (let i = 1; i <= num; i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.style.height = boxHeight;
        box.style.width = boxWidth;
        container.appendChild(box);
    }
}

playGridCreate(gridValue);

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

gridSelect.addEventListener("change", changeGridValue);

function changeGridValue() {
    refresh();
    gridValue = this.value;
    playGridCreate(gridValue);
}

function refresh () {
    gridOutputNum.removeChild(gridOutputNum.firstChild);
    individualBox.forEach(box => box.removeEventListener("mouseenter", passChanger));
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    individualBox = [];
}


