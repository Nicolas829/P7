import { getData } from "./api.js";

//DOM
let dropDownIngredients=document.getElementById("dropdown-ingredients")
let dropDownUstensils=document.getElementById("ustensils")
let dropDownAppliance= document.getElementById("appareils")

//Tableau général
let data=await getData()

//on crée les tableau avec les éléments et on les trie
// Ingrédients

function getIngredients (){
 let ingredients =data.map(element=>element.ingredients)
 let ingredient=[]
ingredients.forEach(element=>{for (let i=0;i<element.length;i++){(ingredient.push(element[i].ingredient))}})
ingredient.sort()
ingredient=[...new Set(ingredient)]
return ingredient
}

//Ustensiles
function getUstensils (ustensils){
   ustensils =data.map(element=>element.ustensils)
   let ustensil=[]
   ustensils.forEach(element=>{for (let i=0;i<element.length;i++){(ustensil.push(element[i]))}})
   ustensil.sort()
   ustensil=[...new Set(ustensil)]
   return ustensil
   }

//On appelle les tableaux
let ingredient = getIngredients()
let ustensil=getUstensils(ustensils)

//on crée le tableau d'appareils
let appliance=data.map(element=>element.appliance)
appliance.sort()
appliance=[...new Set(appliance)]


//on crée la fonction de remplissage des dropdown
function dropDownFill(elements, target){
    elements.forEach(element=>{
    let li=document.createElement("li")
    target.appendChild(li)
    li.innerText=element})
}

//on apelle les fonctions avec les paramètres tableaux triés
dropDownFill(appliance, dropDownAppliance)
dropDownFill(ingredient, dropDownIngredients)
dropDownFill(ustensil, dropDownUstensils)




export{dropDownFill}