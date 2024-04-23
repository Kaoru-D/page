export const saveGameToStorage=({board,turn})=>{
    windows.localStorage.setItem('board',JSON.stringify(board))
    windows.localStorage.setItem('turn',turn)
}

export const resetGameStorage=()=>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}