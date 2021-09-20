import {variables} from "./variables.js";
import { getData, getElements } from "./api.js";
import {lookFor} from "./algo.js"

//appel DOM
let cardTitle = document.querySelector("h5")
let cardPreparation=document.getElementById("card-preparation")
let cardTime=document.getElementById("card-time")
let card=document.querySelector("div[data-main='main-card']")
let container=document.getElementById("main-row")

let ul=document.querySelector("ul[data-list='element-recette']")
console.log(card)
//create DOM
let p=document.createElement("p")

let listElements=await getElements()
//fonction creation des cards
async function createCard () {
   
    let data = await getData();  
    for (let i=0; i<data.length;i++) {
      
    
        //on crée les carte pour chacune des recettes
        let cloneCard=card.cloneNode(true)   
        cloneCard.id=cloneCard.id+" de "+cardTitle.innerText
      
        // on apelle les élements de chaque recette et on le flèche dans la card
        cardTitle.innerText = data[i].name;
        cardTitle.id=data[i].id
        cardPreparation.innerText=data[i].description       
        cardTime.innerText=data[i].time+" min"
        cardTime.id=data[i].time+data[i].id       
        
        container.appendChild(cloneCard)
        
       card.style.display="none"
         ul.id="ingredients pour "+data[i].name

        
      
        
    if(cloneCard.id=="recette de Card title"){
       
        cloneCard.style.display="none"
    }         



           
for(let p=0;p<data[i].ingredients.length;p++){
   
        let ingredientQuantity= document.createElement("li")
        ingredientQuantity.style.listStyle="none"
         let cloneIngredient=document.createElement("p")
         let quantity=document.createElement("p")
        
         cloneIngredient.innerText=data[i].ingredients[p].ingredient+" : "
         
       
         ingredientQuantity.style.display="flex"
         ingredientQuantity.style.gap="0.8em"
          
        
         cloneIngredient.id=data[i].id+" pour "+data[i].name
        
                    
         if(cloneIngredient.id.replace(data[i].id+" pour ","")==ul.id.replace("ingredients pour ","")){             
               
           cardTitle.appendChild( ingredientQuantity)
           ingredientQuantity.appendChild(cloneIngredient)
           ingredientQuantity.style.fontSize="0.5em"
           ingredientQuantity.appendChild(quantity)
          
            if(listElements[i].quantity==undefined){
                ingredientQuantity.removeChild(quantity),
                cloneIngredient.innerText=data[i].ingredients[p].ingredient+" "}
            if(listElements[i].unit==undefined){
                    quantity.innerText="  "+data[i].ingredients[p].quantity}

            else{ quantity.innerText="  "+data[i].ingredients[p].quantity+" "+data[i].ingredients[p].unit}
            
        }}

        
               
       
           
   
       
        }
  
    }

export { createCard}