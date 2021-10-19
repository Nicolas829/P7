import { getData } from "./api.js";

//DOM
let ingredients=document.getElementById("btn_ingredients")
let liste=[]
let listeIngredients=[]
let listeIngre=[]
let data=await getData()

data.forEach(element=>liste.push(element))



//on remplit les dropDown
function dropDownFill (){
  listeIngredients= liste.map(element=>element.ingredients)
  console.log(listeIngredients)


}
dropDownFill()

export{dropDownFill}