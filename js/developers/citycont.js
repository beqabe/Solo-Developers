import { Base } from "./base.js";

export class City extends Base{
    constructor(app){
        super();
        this.app=app;
    }

    getCity(){
        return this.app.data.citiesFilter.map((obj)=>{
            return`
                <div id="click12" class="filter-city-checkbox">
                    <input type="checkbox" name="city1" id="${obj.name}" value="${obj.name}">
                    <label for="city1">${obj.name}</label>
                </div>`

            // console.log(obj.name);
        }).join(' ');
    }

    render(){
        this.setContent('filterCity', this.getCity());
    }
}