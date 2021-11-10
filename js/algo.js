
import { getElements } from "./api.js";
import{dropDown, createTags, closeTags} from "./dropdown.js"


//DOM
let searhIngredients=document.getElementById("btn_ingredients")
let searchUstensils=document.getElementById("btn_ustensils")
let searchAppareils=document.getElementById("btn_appareils")
let placeholder=document.getElementById("search")
let card=document.getElementsByClassName("col-4")
let tags=document.getElementsByClassName("tags")
let a=document.getElementsByTagName("a")
let container=document.getElementById("main-container")


lookFor(searhIngredients)
lookFor(searchUstensils)
lookFor(searchAppareils)

//fonction de recherche liste déroulante
function lookFor(element){

    element.addEventListener("input", e=> {
        search=e.target.value
    
        element.nextElementSibling.childNodes.forEach(element=>{
        if (search.length>2&&element.innerText!=undefined){      
      
           console.log(element.innerText)
          
        if(element.innerText.toLowerCase().includes(search))   
          {       
                     
         element.style.display="block"   
                  
           }               
        
        else{ element.style.display="none"}
    }})
    })}
//création de tableau
let listElements= await getElements()
let search;
let p=document.createElement("p")
let id=[]

placeholder.addEventListener("input", (e)=>{
 
    let search=e.target.value
    let arrayCard=[].slice.call(card)
    id=[]
    console.log(arrayCard)
    arrayCard.forEach(element=>{  card[element.id].style.display="none"
     if (search.length>2&&element.innerText.toLowerCase().includes(search)){       
       
       id.push(element.id)
       console.log(id)
       id.forEach(element=>{card[element].style.display="block"})      
      
      }
     
   
     
}
     
   )}
   )


let n=0


//création des id
function searchEngine (result, arrayId) {
n++

listElements.forEach(element=>{ 
 
 card[element.id-1].style.display="none"
 card[1].style.display="none"
 card[0].style.display="none"
    if(element.ingredients===result||
       element.ustensils===result||
       element.appliance===result       ){
     
   
     arrayId.push(element.id)      
          
      }})
    
      //let arrayFilter=[]
      if(n===1){
      id=id.concat(arrayId)}

      let arrayFilter=[];

      id.forEach(object=>{if(arrayId.includes(object)){arrayFilter.push(object)}else{}})
      console.log(arrayFilter)
         
        
      let listElementsFilter=listElements.filter(element=>arrayFilter.includes(element.id))      
      
      arrayFilter.forEach(element=>{
         if(element===50){card[0].style.display="block"}
         else{card[element].style.display="block"
         card[1].style.display="none"}}
        )  
      
      
      dropDown(listElementsFilter)
        
       

        
}




export{searchEngine}