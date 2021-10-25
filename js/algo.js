import { getData} from "./api.js";
//DOM
let inputSearch=document.getElementById("search")
let card=document.getElementsByClassName("col-4")


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





function lookForId(inputTarget){

    let cardArray=[]
    cardArray.push(card)
    cardArray.forEach(element=>{console.log(element.nex)
        
    })
    
}




 function inputTarget (){
    
    inputSearch.addEventListener("input", (e)=> {
        result =e.target.value
        console.log( result)
        return result})

}



lookForId(inputTarget)

















