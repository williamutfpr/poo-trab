
export default class FailToListEvent extends Error{
    constructor(s: string){
        super(s+", This event dont have a peaple ");   
    }

}