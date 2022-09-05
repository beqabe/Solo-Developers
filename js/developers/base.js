export class Base{
    constructor(){

    }

    setContent(id, value){
        document.getElementById(id).innerHTML=value;
    }
}