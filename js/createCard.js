
import {variables} from "./variables.js";
import { getData, getElements } from "./api.js";

//appel DOM

let cardPreparation=document.getElementById("card-preparation")
let cardTime=document.getElementById("card-time")
let card=document.getElementById("recette")
let container=document.getElementById("main-row")
let ingredients=document.getElementById("ingredient-recette")
let ul=document.getElementById("liste-ingredient")
let name=document.getElementById("name")

//create DOM
let p=document.createElement("p")
let data = await getData();  
let listElements = await getElements()

//fonction creation des cards


function createCard() {
let listeId=[]
let listeName=[]
let newCard;
let cardTitle=document.createElement("h5")
 

listElements.forEach(element=> {listeId.push(element.id), listeId=[...new Set (listeId)]})

listeId.forEach(element=> {
    newCard=card.cloneNode(true), 
    name.appendChild(cardTitle)
    cardTitle.className="card-title"
    newCard.id=element,
   container.appendChild(newCard)
    
     })

listElements.forEach(element=> cardTitle.innerText=element.name)
    }

export { createCard}