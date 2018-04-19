export class Player {
    constructor(){
        this.mark = "O";

    }
    setMark(mark){
        this.mark = mark;
    }

    getMark() {
        return this.mark;
    }

}