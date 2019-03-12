
const container = document.querySelector("#container");
const resetButton = document.querySelector('#reset');


createFirstGrid();

// the reset button removes all divs inside container and calls the createNewGrid function
resetButton.addEventListener('click', function () {
    let allSquares = document.querySelectorAll(".squares");
    console.log(allSquares);
    console.log(allSquares[0]);
    for (i = 0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = "transparent";
        container.removeChild(allSquares[i]);
    }
    createNewGrid();
});


// this function creates the initial 16x16 grid
function createFirstGrid() {
    for (let i = 0; i < (48 * 48); i++) {
        let square = document.createElement('div');
        square.classList.add('squares');
        square.style.width = '"' + (540 / 48) + 'px' + '"';
        square.style.height = '"' + (540 / 48) + 'px' + '"';
        container.appendChild(square);

        let randomColor = generateRandomColor();

        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = randomColor;
        })
    }
}


// this function creates a new grid with the prompted number of squares
function createNewGrid() {

    let squaresPerSide = Number(prompt("How many squares per side?"));

    container.style.gridTemplateColumns = 'repeat(' + squaresPerSide + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + squaresPerSide + ', 1fr)';

    for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
        let square = document.createElement('div');
        square.classList.add('squares');
        square.style.width = '"' + (540 / squaresPerSide) + 'px' + '"';
        square.style.height = '"' + (540 / squaresPerSide) + 'px' + '"';
        container.appendChild(square);

        let randomColor = generateRandomColor();

        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = randomColor;
        })
    }
}


// this function generates ONE random color
function generateRandomColor() {
    let rValue = (Math.floor(Math.random() * 255));
    let gValue = (Math.floor(Math.random() * 255));
    let bValue = (Math.floor(Math.random() * 255));

    return 'rgb(' + rValue + ', ' + gValue + ', ' + bValue + ')';
}