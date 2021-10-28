import { getData } from "./api.js";
import {searchId} from "./algo.js";

//DOM
let dropDownIngredients=document.getElementById("dropdown-ingredients")
let dropDownUstensils=document.getElementById("ustensils")
let dropDownAppliance= document.getElementById("appareils")
let card=document.getElementsByClassName("col-4")

//Tableau général
let data=await getData()

//on crée les tableau avec les éléments et on les trie
// Ingrédients



function getIngredients (data){
 let ingredients =data.map(element=>element.ingredients)
 let ingredient=[]
ingredients.forEach(element=>{for (let i=0;i<element.length;i++){(ingredient.push(element[i].ingredient))}})
ingredient.sort()
ingredient=[...new Set(ingredient)]
return ingredient
}

//Ustensiles
function getUstensils (data){
   let ustensils =data.map(element=>element.ustensils)
   let ustensil=[]
   ustensils.forEach(element=>{for (let i=0;i<element.length;i++){(ustensil.push(element[i]))}})
   ustensil.sort()
   ustensil=[...new Set(ustensil)]
   
   return ustensil
   }

//On appelle les tableaux
let ingredient = getIngredients(data)
let ustensil=getUstensils(data)

//on crée le tableau d'appareils
let appliance=data.map(element=>element.appliance)
appliance.sort()
appliance=[...new Set(appliance)]


//on crée la fonction de remplissage des dropdown
function dropDownFill(elements, target){
    elements.forEach(element=>{
    let li=document.createElement("li")
    let a=document.createElement("a")
    target.appendChild(li)
    li.appendChild(a)
    a.innerText=element
    a.style.cursor="pointer"
  
 
    a.addEventListener("click", ()=>{
      let result=a.innerText
       
       searchId(data, result)})
})
}

//on apelle les fonctions avec les paramètres tableaux triés
dropDownFill(appliance, dropDownAppliance)
dropDownFill(ingredient, dropDownIngredients)
dropDownFill(ustensil, dropDownUstensils)




export{dropDownFill}