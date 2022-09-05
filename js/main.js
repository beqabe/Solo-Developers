import { devcontent } from "./common/common.js";
import { Develop } from "./developers/develop.js";

import { citycontent } from "./common/common.js";
import { City } from "./developers/citycont.js";

// DEVELOPER ITEMS CONTENT

fetch(devcontent).then((res)=>{
    return res=res.json()
}).then((res)=>{
    let develop = new Develop(res);
    develop.render();
})


// CITY FILTER CONTENT

fetch(citycontent).then((res)=>{
    return res=res.json()
}).then((res)=>{
    let city = new City(res);
    city.render();
})

let city = document.getElementById('filterCity');
//console.log(city.value);

city.addEventListener('click', (array)=>{
   // console.log(e.target.value);
   if(array.target.value === undefined)
      return;

    let checkCity=getCheckedCity();
   
  
    fetch(`https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?cityParam=${checkCity}&skip=0&limit=9`)
        .then((res)=>{
            return res=res.json()
        }).then((res)=>{
            let develop = new Develop(res);
            develop.render();
        })
});

function getCheckedCity() {
    let arr='';
    for(let a of city){
        if(a.checked){
            if(arr===""){
                arr+=a.value;
            }   
        else 
            arr+=','+a.value;
        }
    }
    return arr;
}


//  PRICE FILTER

let price = document.getElementById('price');
let from = document.getElementById('fromPrice');
let to = document.getElementById('toPrice');

price.addEventListener('click', (arr)=>{

    let priceValue = arr.target.value;

    if (priceValue === undefined)
        return;

    if (priceValue === '0'){
        from.value = '';
        to.value= '';
    } else {
        from.value = priceValue.split(' ')[0];
        to.value=priceValue.split(' ')[1];
    }


    fetch(`https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?fromParam=${priceValue.split(' ')[0]}&toParam=${priceValue.split(' ')[1]}&skip=0&limit=9`)
        .then((res)=>{
            return res=res.json()
        }).then((res)=>{
            let develop = new Develop(res);
            develop.render();
        })
    // console.log(arr.target.value.split(' ')[0]);
})



// INPUT TYPE SEARCH CONTENT

let searchArray = document.getElementById('searchDev');

searchArray.addEventListener('keyup', ()=>{

    fetch(`https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?searchStr=${searchArray.value}&skip=0&limit=9`)
        .then((res)=>{
            return res=res.json()
        }).then((res)=>{
            let develop = new Develop(res);
            develop.render();
             if(res.data.total===0){
                document.getElementById('devContent').innerHTML=`
                    <div class="noItems">
                        <img src="undefined">
                        <h4>კატეგორია ცარიელია</h4>
                        <p>მონიშნულ კატეგორიაში ვერ მოიძებნა მონაცემები, გთხოვთ მონიშნოთ სხვა კატეგორია<p>
                    </div>`
             }    
        })
})
