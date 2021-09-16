import { getData, getElements } from "./api.js";

//DOM

const ingredients=document.getElementById("ingredients")
const appareils= document.getElementById("appareils")
const ustensils= document.getElementById("ustensils")


let listElements=await getElements()



let li;
let listeIngredients=[]
let listeTriIngredients=[]

let listeUstensils=[]
let listeTriUstensils=[]

let listeAppliance=[]
let listeTriAppliance= []

function dropDown () {

    listElements.forEach(element=>  {
        li=document.createElement("li"),
        listeIngredients.push(element.ingredients), 
        listeTriIngredients=[... new Set(listeIngredients)],
        listeAppliance.push(element.appliance),
        listeTriAppliance=[... new Set(listeAppliance)]
        listeUstensils.push(element.ustensils)
        listeTriUstensils=[... new Set(listeUstensils)]
    })


    listeTriAppliance.sort()
    listeTriIngredients.sort()
    listeTriUstensils.sort()

    listeTriIngredients.forEach(element=> {
        li=document.createElement("li"), 
        li.innerText=element, 
        ingredients.appendChild(li)
    })
    listeTriAppliance.forEach(element=> {
        li=document.createElement("li"), 
        li.innerText=element, 
       appareils.appendChild(li)
    })
  
    listeTriUstensils.forEach(element=> {
        li=document.createElement("li"), 
        li.innerText=element, 
       ustensils.appendChild(li)
    })
}



export{dropDown}