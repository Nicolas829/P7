import { getData } from "./api.js";

//DOM
let dropDownIngredients=document.getElementById("dropdown-ingredients")
let dropDownUstensils=document.getElementById("ustensils")
let dropDownAppliance= document.getElementById("appareils")

let data=await getData()

let name = data.map(element=>element.name)

//on crée le tableau avec les ingrédients

function getIngredients (ingredient){
 let ingredients =data.map(element=>element.ingredients)
 ingredient=[]
ingredients.forEach(element=>{for (let i=0;i<element.length;i++){(ingredient.push(element[i].ingredient))}})

return ingredient
}


//on trie les élements
let ingredient = getIngredients()
ingredient.sort()
ingredient=[...new Set(ingredient)]

let ustensils=data.map(element=>element.ustensils)
console.log(ustensils)

function getUstensils (ustensils){
    ustensils =data.map(element=>element.ustensils)
   let ustensil=[]

   console.log(ustensils.ustensils)
   ustensils.forEach(element=>{for (let i=0;i<element.length;i++){(ustensil.push(element[i]))}})
   
   return ustensil
   }
//on crée le tableau d'appareils
let appliance=data.map(element=>element.appliance)
appliance.sort()
appliance=[...new Set(appliance)]
console.log(appliance)

let ustensil=getUstensils(ustensils)
ustensil.sort()
ustensil=[...new Set(ustensil)]


//on crée la fonction de remplissage des dropdown
function dropDownFill(elements, target){
    elements.forEach(element=>{
    let li=document.createElement("li")
    target.appendChild(li)
    li.innerText=element})
}




dropDownFill(appliance, dropDownAppliance)
dropDownFill(ingredient, dropDownIngredients)
dropDownFill(ustensil, dropDownUstensils)


export{dropDownFill}