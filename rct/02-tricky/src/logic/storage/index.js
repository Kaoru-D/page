import FileSaver from "file-saver"

export const saveGameToStorage = ({ board, turn }) => {
    var file = new File([('board', JSON.stringify(board))], "tablero.txt" ,{ type: "text/plain;charset=utf-8" })
    FileSaver.saveAs(file)
    var file = new File([('turn', turn)], "turno.txt", { type: "text/plain;charset=utf-8" })
    FileSaver.saveAs(file)/* var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file); */
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}/*  */