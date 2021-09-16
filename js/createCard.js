
import {variables} from "./variables.js";
import { getData, getElements } from "./api.js";

//appel DOM

let cardPreparation=document.getElementById("card-preparation")
let cardTime=document.getElementById("card-time")
let card=document.getElementById("recette")
let container=document.getElementById("main-row")
let ingredients=document.getElementById("ingredient-recette")
let ul=document.getElementById("liste-ingredient")
let cardTitle=document.getElementById("card-title")

//create DOM
let p=document.createElement("p")
let data = await getData();  
let listElements = await getElements()


//fonction creation des cards

let newCard;
let newIngredients=ingredients.cloneNode()
function createCard() {


for (let i=0;i<data.length;i++){
        newCard=card.cloneNode(true),   
        
        cardTitle.id=data[i].id,
        cardTitle.innerText=data[i].name,
        cardPreparation.innerText=data[i].description,
        cardTime.innerText=data[i].time+" min"
        container.appendChild(newCard) 
        ul.appendChild(newIngredients)
     
          }
    }

    for (let i=0;i<listElements.length;i++){
              
        ingredients.innerText=listElements[i].ingredients 
        console.log(ingredients)
  
}



export { createCard}