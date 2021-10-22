import { getData} from "./api.js";
//DOM
let inputSearch=document.getElementById("search")


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
let result=[]
function search(result){
inputSearch.addEventListener("input",(event, result)=> {
    
if(event.target.value.length>2) {
    result=[]
    result.push(event.target.value)
    if (data.includes(result)){
        
    }
    return result
}}
)}

















