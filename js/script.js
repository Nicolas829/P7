

import { createCard } from "./createCard.js";
import{dropDown} from "./dropdown.js"

import { getElements } from "./api.js";
import { searchEngine, searchInChamp } from "./algo.js";


let listElements=await getElements()

dropDown(listElements)
createCard()
searchInChamp()

    