
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
        let ingredientQuantity= document.createElement("div")
        ingredientQuantity.style.listStyle="none"
         let cloneIngredient=ingredients.cloneNode()
         let quantity=document.createElement("p")
        
         cloneIngredient.innerText=data[i].ingredients[p].ingredient+" : "
       
         ingredientQuantity.style.display="flex"
         ingredientQuantity.style.gap="0.8em"
          
        
        
         cloneIngredient.id=data[i].ingredients[p].ingredient+" pour "+data[i].name
            console.log(cloneIngredient.id.replace(data[i].ingredients[p].ingredient+" pour ",""))
            
            if(cloneIngredient.id.replace(data[i].ingredients[p].ingredient+" pour ","")==data[i].name){             
               console.log(cloneIngredient.id.replace(data[i].ingredients[p].ingredient+" pour ","")==data[i].name)
           cardTitle.appendChild(ingredientQuantity)
           ingredientQuantity.appendChild(cloneIngredient)
           ingredientQuantity.style.fontSize="0.5em"
           ingredientQuantity.appendChild(quantity)
          
            if(data[i].ingredients[p].quantity==undefined){
                ingredientQuantity.removeChild(quantity),
                cloneIngredient.innerText=data[i].ingredients[p].ingredient+" "}
            if(data[i].ingredients[p].unit==undefined){
                    quantity.innerText="  "+data[i].ingredients[p].quantity}

            else{ quantity.innerText="  "+data[i].ingredients[p].quantity+" "+data[i].ingredients[p].unit}
            
        }}

        
               
       
           
        
    if(cloneCard.id=="recette de Card title"){
       
        cloneCard.style.display="none"
    }
       
        }
  
}

export { createCard}