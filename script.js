
const container = document.querySelector("#container");
const resetButton = document.querySelector('#reset');
let squaresPerSide;


// this function generates ONE random color
function generateRandomColor(){
    let rValue = (Math.floor(Math.random()*255));
    let gValue = (Math.floor(Math.random()*255));
    let bValue = (Math.floor(Math.random()*255));
    
    return  'rgb(' + rValue + ', ' + gValue + ', ' + bValue + ')';
}

// this function creates the square grid
function createGrid(){

    squaresPerSide = Number(prompt("How many squares per side?"));

    container.style.gridTemplateColumns = 'repeat(' + squaresPerSide + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + squaresPerSide + ', 1fr)';

    for(let i = 0; i < (squaresPerSide*squaresPerSide); i++){
        let square = document.createElement('div');
        square.classList.add('squares');
        square.style.width = '"' + (540/squaresPerSide) + 'px' + '"';
        square.style.height = '"' + (540/squaresPerSide) + 'px' + '"';
        container.appendChild(square);

        let randomColor = generateRandomColor();
        
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = randomColor;
        })
    }
}



createGrid();


resetButton.addEventListener('click', function(){
    let allSquares = document.querySelectorAll(".squares");
    console.log(allSquares);
    console.log(allSquares[0]);
    for(i = 0; i < allSquares.length; i++){
        // squares[i].style.backgroundColor = "transparent";
        container.removeChild(allSquares[i]);
    }
    createGrid();
});

