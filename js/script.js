
import { getData } from "./api.js";
import { createCard } from "./createCard.js";
import {variables} from "./variables.js";

variables()

async function cardFill () {
    let data = await getData();  
    createCard()
   
}

cardFill()
    