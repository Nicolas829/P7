
import {variables} from "./variables.js";
import { getData } from "./api.js";
//appel DOM
let cardTitle = document.getElementById("card-title")
let cardPreparation=document.getElementById("card-preparation")
let cardTime=document.getElementById("card-time")
let card=document.getElementById("recette")
let container=document.getElementById("main-row")

//create DOM
let p=document.createElement("p")


//fonction creation des cards
async function createCard () {
   
    let data = await getData();  
    for (let i=0; i<data.length;i++) {
      
    
        //on crée les carte pour chacune des recettes
        let cloneCard=card.cloneNode(true)   
        cloneCard.id=cloneCard.id+" de "+cardTitle.innerText
    
        // on apelle les élements de chaque recette et on le flèche dans la card
        cardTitle.innerText = data[i].name;
        cardTitle.id=cardTitle.innerText
        cardPreparation.innerText=data[i].description
        cardPreparation.id=data[i].id
        cardTime.innerText=data[i].time+" min"
        cardTime.id=data[i].time+data[i].id
        
        
        
               
        container.appendChild(cloneCard)
           
        
    if(cloneCard.id=="recette de Card title"){
       
        cloneCard.style.display="none"
    }
       
        }
  
}

export { createCard}