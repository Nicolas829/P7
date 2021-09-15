
import { getData } from "./api.js";
import { createCard } from "./createCard.js";
import {variables} from "./variables.js";
import {dropDownList} from "./dropdown.js";
import {searchIngredient} from "./algo.js";

variables()

async function cardFill () {
    let data = await getData();  
    createCard()
    dropDownList()
    searchIngredient()
   
}

cardFill()
    
