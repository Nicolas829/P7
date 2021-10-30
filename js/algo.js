import { getElements } from "./api.js";
import{dropDown} from "./dropdown.js"


//DOM
let searhIngredients=document.getElementById("btn_ingredients")
let searchUstensils=document.getElementById("btn_ustensils")
let searchAppareils=document.getElementById("btn_appareils")
let placeholder=document.getElementById("search")
let card=document.getElementsByClassName("col-4")
let tags=document.getElementsByClassName("tags")

//création de tableau
let listElements= await getElements()
let search;
let p=document.createElement("p")
lookFor(placeholder)
lookFor(searhIngredients)
lookFor(searchAppareils)
lookFor(searchUstensils)


function searchInChamp (){

    placeholder.addEventListener("input", e=>{
        search=e.target.value
      console.log(search)
        if (search.length>2 ){
            
            for(let i=0;i<card.length;i++){ 
                console.log(card[i])
                card[i].style.display="none"
                if(card[i].innerText.toLowerCase().includes(search)){
                    card[i].style.display="block"
                }
                
                
        }
    }})}



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
 
    if(listElements[i].ingredients===tags[0].innerText||
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




export{searchEngine, searchInChamp}