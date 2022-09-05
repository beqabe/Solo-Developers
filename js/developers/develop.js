import { Base } from "./base.js";

export class Develop extends Base{
    constructor(app){
        super();
        this.app=app;
    }

    getContent(){
        return this.app.data.items.map((obj)=>{
            return`
            <div class="developer-item">
                <div class="developer-item-img">
                    <img src="https://solo.ge/images/87b4e30e-47c3-40ce-9fe9-2aaae0b1d0aa.jpg" alt="img">
                </div>
                <div class="developer-item-desc">
                    <h4>${obj.projectName}</h4>
                    <h3>${obj.priceLabel}</h3>
                    <p>${obj.address}</p>
                    <p><a href="#">გაიგეთ მეტი</a></p>
                </div>
            </div>`
        }).join(' ');
    }

    render(){
        this.setContent('devContent', this.getContent());
    }
}