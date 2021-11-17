const container = document.getElementById("middle-main-container");
let testNum = 16; //will be user selection later


function playGridCreate(base) {
    let gridCount = base * base;
    createSquares(gridCount);
}

function createSquares(num) {
    const boxHeight = (document.getElementById("middle-main-container").clientHeight / testNum) + "px";
    const boxWidth = (document.getElementById("middle-main-container").clientWidth / testNum) + "px";
    for (let i = 1; i <= num; i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.style.height = boxHeight;
        box.style.width = boxWidth;
        container.appendChild(box);
    }
}

playGridCreate(testNum);

const individualBox = Array.from(document.getElementsByClassName("box"));

individualBox.forEach(box => box.addEventListener("mouseenter", passChanger) );

function passChanger(e) {
    if(this.classList.contains("box")) {
        e.target.className = "box-first-pass";
    }
    /*else if(this.classList.contains("box-first-pass")) {
        e.target.className = "box-second-pass";
    }*/
}