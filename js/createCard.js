
import {variables} from "./variables.js";
import { getData } from "./api.js";
//appel DOM
let cardTitle = document.getElementById("card-title")
let cardPreparation=document.getElementById("card-preparation")
let cardTime=document.getElementById("card-time")
let card=document.getElementById("recette")
let container=document.getElementById("main-row")
let ingredients=document.getElementById("ingredient")
let ul=document.getElementById("liste-ingredient")

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
        cardTitle.id=[i]
        cardPreparation.innerText=data[i].description
        cardPreparation.id=data[i].id
        cardTime.innerText=data[i].time+" min"
        cardTime.id=data[i].time+data[i].id       
        
        container.appendChild(cloneCard)
      
         ul.id="ingredients pour "+data[i].name
        for(let p=0;p<data[i].ingredients.length;p++){
         let cloneIngredient=ingredients.cloneNode()
        
         cloneIngredient.innerText=data[i].ingredients[p].ingredient
         cloneIngredient.id=data[i].ingredients[p].ingredient+" pour "+data[i].name
            console.log(cloneIngredient.id.replace(data[i].ingredients[p].ingredient+" pour ",""))
            
            if(cloneIngredient.id.replace(data[i].ingredients[p].ingredient+" pour ","")==data[i].name){             
               console.log(cloneIngredient.id.replace(data[i].ingredients[p].ingredient+" pour ","")==data[i].name)
           cardTitle.appendChild(cloneIngredient)
           cloneIngredient.style.fontSize="0.8em"
            
        }}

        
               
       
           
        
    if(cloneCard.id=="recette de Card title"){
       
        cloneCard.style.display="none"
    }
       
        }
  
}

export { createCard}