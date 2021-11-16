const container = document.getElementById("container");
let testNum = 16; //will be user selection later


function playGridCreate(base) {
    let gridCount = base * base;
    createSquares(gridCount);
}

function createSquares(num) {
    const boxHeight = (document.getElementById("container").clientHeight / testNum) + "px";
    const boxWidth = (document.getElementById("container").clientWidth / testNum) + "px";
    for (let i = 1; i <= num; i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.style.height = boxHeight;
        box.style.width = boxWidth;
        container.appendChild(box);
        
        console.log(box.style.height);
    }
}



playGridCreate(testNum);