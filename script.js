
const container = document.querySelector("#container");


function createGrid(){
    for(let i = 0; i < (16*16); i++){
        const square = document.createElement('div');
        square.classList.add('squares');
        container.appendChild(square);
        
        square.addEventListener('mouseover', function(){
            square.classList.add('hovered');
        })
    }
}

createGrid();

