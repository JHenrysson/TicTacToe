
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay= document.querySelector('#player')

    let currentPlayer ='playerX'

//event listener to each square in the grid
squares.forEach(squares => {
    squares.addEventListener('click',clickOutcome)
})
    // array used to identify each square
    function clickOutcome(e){
    const squareArray= Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer
        if(currentPlayer ==='playerX') {
            squares[index].classList.add('playerX')
            currentPlayer = 'playerO'
        }else{
            squares[index].classList.add('playerO')
            currentPlayer = 'playerX'
        }
    }
})