import { getData} from "./api.js";
//DOM
let inputSearch=document.getElementById("search")
let card=document.getElementsByClassName("col-4")
let searhIngredients=document.getElementById("btn_ingredients")
let searchUstensils=document.getElementById("btn_ustensils")
let searchAppareils=document.getElementById("btn_appareils")
let a=document.getElementsByTagName("a")
let placeholder=document.getElementById("search")

let result=[]



let data=await getData()
let p=document.createElement("p")


 
    //inputSearch.addEventListener("input", search(inputSearch))

function listenInput(element) {   
   element.addEventListener("input", (e)=>{
     console.log(e.target.value)
     let search=e.target.value
     let array=[].slice.call(a)
     array.forEach(element=>{  
      if (search.length>2&&element.innerText.toLowerCase().includes(search)){ 
        let result=element.innerText
        if(result){
        console.log(result)          
        searchId(data, result)}
          
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
    //data.forEach(element=>{
      //  element.ingredients.forEach(object=>{
        

//fonction recherche par click dans liste déroulante

    let id=[]

 function searchId(object, result){
     console.log(result)
        let array=[].slice.call(object)          
          
       array.filter(element=>{
           card[element.id+1].style.display="none" ; let ingredients=element.ingredients;let ustensils=element.ustensils
          
                    
        if(element.appliance===result){
            card[element.id+1].style.display="block"            
            
        }
        ingredients.forEach(items=>{
            if(items.ingredient===result){
                card[element.id+1].style.display="block"               
            }
        } )
        ustensils.forEach(items=>{
            if(items===result){
                card[element.id+1].style.display="block"
                id.push[element.id+1]
                console.log(id)
               
            } 
        } )        
}
         ) }

    



export{searchId, listenInput}















