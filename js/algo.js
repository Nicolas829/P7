import { getData} from "./api.js";
//DOM
let inputSearch=document.getElementById("search")
let card=document.getElementsByClassName("col-4")
let searhIngredients=document.getElementById("btn_ingredients")
let searchUstensils=document.getElementById("btn_ustensils")
let searchAppareils=document.getElementById("btn_appareils")
let placeholder=document.getElementById("search")
let result;



let data=await getData()


//binarysearch test
function showCardSearch (data, index, column, element) {

    let first=0
    let last = data.length -1
    while(first<=last){
        let middle = Math.floor((first+last)/2)
        console.log(data[middle][column])
        if(data[middle][column] <index){
            first = middle+1            
        }
        else if(data[middle][column]>index) {
            last=middle-1
        }
        else {
            return data[middle][element]
        }

    }
    return false
}


//fonction qui compare
function compareId (searchId, showId){


}

function lookForId(element, inputTarget){

   
   
    

    
    
}




function resultat(){
    inputSearch.addEventListener("input", (e)=> {
        result=e.target.value
        
        return  
        }) 
    }
    let input = resultat()
console.log(input)


lookForId(searchAppareils)


















