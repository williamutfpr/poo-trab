
export default class FailEvent extends Error{
    constructor(s: string){
        super(s+", musque the root error");   
    }

}