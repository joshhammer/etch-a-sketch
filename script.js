
const container = document.querySelector("#container");
const resetButton = document.querySelector('#reset');

// this function generates ONE random color
function generateRandomColor(){
    let rValue = (Math.floor(Math.random()*255));
    let gValue = (Math.floor(Math.random()*255));
    let bValue = (Math.floor(Math.random()*255));
    
    return  'rgb(' + rValue + ', ' + gValue + ', ' + bValue + ')';
}

// this function creates the square grid
function createGrid(){
    for(let i = 0; i < (16*16); i++){
        let square = document.createElement('div');
        square.classList.add('squares');
        container.appendChild(square);

        let randomColor = generateRandomColor();
        
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = randomColor;
        })
    }
}

createGrid();


let squares = document.querySelectorAll('.squares');
resetButton.addEventListener('click', function(){
    for(i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = "transparent";
    }
});

