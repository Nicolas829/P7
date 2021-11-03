import { getElements } from "./api.js";
import{dropDown, createTags, closeTags} from "./dropdown.js"


//DOM
let searhIngredients=document.getElementById("btn_ingredients")
let searchUstensils=document.getElementById("btn_ustensils")
let searchAppareils=document.getElementById("btn_appareils")
let placeholder=document.getElementById("search")
let card=document.getElementsByClassName("col-4")
let a=document.getElementsByTagName("a")
let tags=document.getElementsByClassName("tags")
let container=document.getElementById("main-container")

lookFor(searhIngredients)
function lookFor(element){

    element.addEventListener("input", e=> {
        search=e.target.value
      
        if (search.length>2){  
           
        for (let i=0;i<element.nextElementSibling.childNodes.length;i++){    
            
          
        if(element.nextElementSibling.childNodes[i].innerText.toLowerCase().includes(search))   
          {       
                     
          element.nextElementSibling.childNodes[i].style.display="block"   
                  
           }               
        
        else{ element.nextElementSibling.childNodes[i].style.display="none"}
    }
    }})}
//création de tableau
let listElements= await getElements()
let search;
let p=document.createElement("p")

function listenInput(element) {   
    element.addEventListener("input", (e)=>{
      console.log(e.target.value)
      let search=e.target.value
      let arrayCard=[].slice.call(card)
      let array=[].slice.call(a)
      array.forEach(element=>{  
       if (search.length>2&&element.innerText.toLowerCase().includes(search)){ 
         let result=element.innerText
       
         if(result ){
         console.log(result) 
               
         searchEngine(result)}
           
       } else if(search.length>2){
        
         searchUstensils.parentNode.appendChild(p)
         p.innerText="Désolé nous n'avons pas de recette correspondante"
         p.style.marginLeft="-15em"
         p.style.marginTop="4em"
       }
      
       
 }
      
     
       
     )
     })}
 listenInput(placeholder)
 listenInput(searhIngredients)
 listenInput(searchUstensils)
 listenInput(searchAppareils)


//création des id
function searchEngine (result) {


listElements.forEach(element=>{ 
 
    if(element.ingredients===result||
       element.ustensils===result||
       element.appliance===result){
     
        let id=(element.id)
        
        let listElementsFilter=listElements.filter(element=>element.id==id)      
        card[element.id+1].style.display="block" 
        dropDown(listElementsFilter)
          
       
     }
    })
    
}




export{searchEngine}