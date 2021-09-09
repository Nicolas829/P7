
import { getData } from "./api.js";

async function dropDownFill () {
    let data = await getData();
    let listIngredients=[]
   for (let i=0; i<data.length;i++) {
    listIngredients.push(array[i].ingredients)
    console.log(listIngredients)}
}

dropDownFill()