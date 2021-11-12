
import { createCard } from "./createCard.js";
import{dropDown} from "./dropdown.js"

import { getElements } from "./api.js";

let main= document.getElementsByTagName("main")
let card = document.getElementsByClassName("test")
let listElements=await getElements()



    

 

dropDown(listElements)
createCard()


if (window.matchMedia("(max-width: 981px)").matches) {

card[0].classList.add("col-6")}

          

 
    
