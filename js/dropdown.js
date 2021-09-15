import { getData } from "./api.js";
import { createCard } from "./createCard.js";
import {variables} from "./variables.js";



let list=[]
let list2=[]
let list3=[]
let ingredientDropdown = document.getElementById('dropdown-ingredients')
let appareils=document.getElementById("appareils")
let ustensils= document.getElementById("ustensils")
let placeHolder=document.getElementById("search")
let ulIngredient = document.getElementById('dropdown-ingredients')
let buttonIngredient = document.getElementsByName("btn_ingredients")



async function dropDownListAppareil () {
    let data = await getData();  
   
   for (let i=0;i<data.length;i++){
   

        let liAppareils=document.createElement("li")
        liAppareils.innerText=data[i].appliance   
        liAppareils.className=data[i].appliance       
        appareils.appendChild(liAppareils)

   }}

   async function dropDownListUstensils () {
    
    let data = await getData();  
   
   for (let i=0;i<data.length;i++){

    for (let p=0;p<data[i].ustensils.length;p++){

    let liUstensils=document.createElement("li")
    
    liUstensils.innerText= data[i].ustensils[p]
    liUstensils.className= data[i].ustensils[p]
    

    ustensils.appendChild(liUstensils)}}}

    
     async function dropDownListIngredients () {

      let data = await getData();  
     
     for (let i=0;i<data.length;i++){
  
   
      for(let p=0;p<data[i].ingredients.length;p++)
      {
        
      
    let li=document.createElement("li")
    li.innerText=data[i].ingredients[p].ingredient
    li.className=data[i].ingredients[p].ingredient.toLowerCase()
      
    //list2.sort()+"\n\n"
   
   
    
    ingredientDropdown.appendChild(li)
    
    let search=[]
   
    placeHolder.addEventListener("input", e=> {
        
     search=e.target.value 
     console.log(search)
      if(search.length>2 &&li.className.includes(search)){li.style.display="block"}
      else{li.style.display="none"}
 
    
         
        
    
    })
       
       
    }
          }}

         

       async   function dropDownList () {
            dropDownListIngredients ()
            dropDownListUstensils ()
            dropDownListAppareil ()
          }


        

export { dropDownList };