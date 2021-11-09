import { getElements } from "./api.js";
import{dropDown} from "./dropdown.js"


//DOM
let searhIngredients=document.getElementById("btn_ingredients")
let searchUstensils=document.getElementById("btn_ustensils")
let searchAppareils=document.getElementById("btn_appareils")
let placeholder=document.getElementById("search")
let card=document.getElementsByClassName("col-4")
let tags=document.getElementsByClassName("tags")
let a=document.getElementsByTagName("a")

//création de tableau
let listElements= await getElements()
let search;
let p=document.createElement("p")

lookFor(placeholder)
lookFor(searhIngredients)
lookFor(searchAppareils)
lookFor(searchUstensils)

let id=[]
function listenInput(element) {   
  element.addEventListener("input", (e)=>{
    
    let search=e.target.value
    let arrayCard=[].slice.call(card)
        

    arrayCard.forEach(element=>{   
     if (search.length>2&&element.innerText.toLowerCase().includes(search)){ 
      
       id.push(element.id)
       console.log(id) 
      
       id.forEach(element=>{card[element].style.display="block";card[1].style.display="none"})     
       searchUstensils.parentNode.removeChild(p)
     } 
    
         
      else {
       
       searchUstensils.parentNode.appendChild(p)
       p.innerText="Désolé nous n'avons pas de recette correspondante"
       p.style.marginLeft="-15em"
       p.style.marginTop="4em"
     }
    
     
}
    
   
     
   )}
   )}
 listenInput(placeholder)
 



//recherche dans les sections déroulantes
function lookFor(element){

element.addEventListener("input", e=> {
    search=e.target.value
  
    if (search.length>2){  
       
    for (let i=0;i<element.nextElementSibling.childNodes.length;i++){    
         element.nextElementSibling.childNodes[i].style.display="block"    
      
    if(element.nextElementSibling.childNodes[i].innerText.toLowerCase().includes(search))   
      {       
                 
      element.nextElementSibling.childNodes[i].style.display="block"   
              
       }               
    
    else{ element.nextElementSibling.childNodes[i].style.display="none"}
}
}})}





//création des id
function searchEngine (clickValue) {


for(let i=0;i<listElements.length;i++){    
 
    if( listElements[i].ingredients===tags[0].innerText||
        listElements[i].ustensils===tags[0].innerText||
        listElements[i].appliance===tags[0].innerText){
     
        let id=(listElements[i].id)
        let listElementsFilter=listElements.filter(element=>element.id==id)      
            
        dropDown(listElementsFilter)
        
        searchCard(id)     
       
     }
    }
    
}

//recherche de la card recette
function searchCard (id){
  
    for(let i=0;i<card.length;i++){        
        
        if(id==card[i].id){

            card[i].style.display="block"            
          
            
}       
  
}
}




export{searchEngine}