
const container = document.querySelector("#container");
const resetButton = document.querySelector('#reset');


function createGrid(){
    for(let i = 0; i < (16*16); i++){
        let square = document.createElement('div');
        square.classList.add('squares');
        container.appendChild(square);
        
        square.addEventListener('mouseover', function(){
            square.classList.add('hovered');
        })
    }
}

createGrid();

let squares = document.querySelectorAll('.squares');

resetButton.addEventListener('click', function(){
    for(i = 0; i < squares.length; i++){
        squares[i].classList.remove('hovered');
    }
});




