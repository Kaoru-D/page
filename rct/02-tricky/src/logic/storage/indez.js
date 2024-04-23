export const saveGameToStorage=({board,turn})=>{
    windows.localStorage.setItem('board',JSON.stringify(newBoard))
    windows.localStorage.setItem('turn',newTurn)
}

export const resetGameStorage=()=>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}