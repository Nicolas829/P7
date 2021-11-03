
import { createCard } from "./createCard.js";
import{dropDown} from "./dropdown.js"

import { getElements } from "./api.js";



let listElements=await getElements()

dropDown(listElements)
createCard()



    
