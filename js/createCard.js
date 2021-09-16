
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

function createCard() {


for (let i=0;i<listElements.length;i++){
        newCard=card.cloneNode(true),   
        newCard.id=listElements[i].id,
        cardTitle.id=listElements[i].id,
        cardTitle.innerText=listElements[i].name,       
        cardPreparation.innerText=listElements[i].description,
        cardTime.innerText=listElements[i].time+" min"
       
        if(listElements[i].id==newCard.id){
       
        let newIngredients=ingredients.cloneNode(true)   
        newIngredients.innerText=listElements[i].ingredients  
        console.log(newIngredients)
        newCard.appendChild(newIngredients)
       
          }
          container.appendChild(newCard)
        }
         
    }

    


export { createCard}