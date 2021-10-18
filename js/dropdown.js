import { getData } from "./api.js";

//DOM
let ingredients=document.getElementById("btn_ingredients")
let liste=[]
let listeIngredients=[]
let data=await getData()

data.forEach(element=>liste.push(element))



//on remplit les dropDown
function dropDownFill (){
   
  
   liste.forEach(element=> listeIngredients.push(element.ingredients))
   listeIngredients.forEach(element=> liste.push(element.ingredient))
   

}
dropDownFill()

export{dropDownFill}