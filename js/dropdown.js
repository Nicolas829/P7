import {getElements } from "./api.js";
import{searchEngine} from "./algo.js"


//DOM

const ingredients=document.getElementById("ingredients")
const appareils= document.getElementById("appareils")
const ustensils= document.getElementById("ustensils")
let container=document.getElementById("main-container")
let showA=document.querySelectorAll("a")



//appel array
let listElements = await getElements ()


//création de DOM
let li
let a 


//création du contenu des liste déroulantes
function dropDown (objet) {  
    

    
  
     let listIngredients=[]
     let listUstensils=[]
     let listAppliance=[]
     objet.forEach(element=> listIngredients.push(element.ingredients))
     objet.forEach(element=> listAppliance.push(element.appliance))
     objet.forEach(element=> listUstensils.push(element.ustensils))
    
     listIngredients=[... new Set(listIngredients)]
     listUstensils=[... new Set(listUstensils)]
     listAppliance=[... new Set(listAppliance)]
     
     listIngredients.sort()
     listAppliance.sort()
     listUstensils.sort()
     
     listIngredients.forEach(element=> dropDownStyle(ingredients,element)  )  
     listAppliance.forEach(element=> dropDownStyle(appareils, element)) 
     listUstensils.forEach(element=> {dropDownStyle(ustensils, element)})   
     
}




//fonction création du contenu des listes déroulantes + création tags au clic
function dropDownStyle (target, element) {
   
    li=document.createElement("li"), 
    a =document.createElement("a")    
    a.innerText=element
    a.className="dropTags"    
    a.style.cursor="pointer"        
    a.style.textDecoration="none"       
    a.style.color="white"
    target.appendChild(li)  
   
               
        li.appendChild(a)
            
    if(a.innerText=="undefined"){
        a.style.display="none"
    }
   
  
   //evenement click dans les dropdown
    a.addEventListener("click", e=> {     
      function deleteOld(list) {
         while (list.hasChildNodes()) {  
             list.removeChild(list.firstChild);

           }}
     
         deleteOld(ingredients)
         deleteOld(appareils)
         deleteOld(ustensils)
        
         let clickValue=e.target.innerText
        let tags=document.createElement("p")
        let closeTags=document.createElement("i")     
        tags.className="tags"            
        tags.style.backgroundColor="#ED6454"
        tags.style.fontSize="1em"
        tags.style.borderRadius="0.5em"     
        tags.style.flexWrap="wrap"
        tags.style.color="white"      
        closeTags.style.marginLeft="0.5em"
        closeTags.style.cursor="pointer"
        tags.innerText=e.target.innerText
        closeTags.className="fas fa-times-circle"      
        closeTags.style.backgroundColor="#ED6454"

        container.insertAdjacentElement("afterend",tags)
        tags.appendChild(closeTags)
       
        searchEngine(clickValue)       
       
        closeTags.addEventListener("click", e=> {   
        
        tags.remove()   
       searchEngine()
        
          
        })    
        return tags    
    })
}





export{dropDown, dropDownStyle}