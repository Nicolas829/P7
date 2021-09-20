import { getData, getElements } from "./api.js";


let cardTitle = document.querySelector("h5")
const ingredients=document.querySelectorAll("li.ingredient")
const appareils= document.getElementById("appareils")
const ustensils= document.getElementById("ustensils")
console.log(ingredients)
let card=document.querySelectorAll("div[data-main='main-card']")


let listElements= await getElements()
let search;

function lookFor(card) {

    let placeholder=document.getElementById("search")
    placeholder.addEventListener("input", e=>{ 
      
            search=e.target.value                      
            console.log(search)      
            
            if (search.length>=3&&ingredients.includes(search)){                              
                card.style.display="block"
            }
            else {card.style.display="none"}
        
    })        
}
    



lookFor()






export{lookFor}