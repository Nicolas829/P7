import { getData} from "./api.js";

let data=await getData()

console.log(data)
//binarysearch test
function search (data, index, column, element) {

    let first=0
    let last = data.length -1
    while(first<=last){
        let middle = Math.floor((first+last)/2)
        console.log(data[middle][column])
        if(data[middle][column]<index){
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

console.log(search(data,10, "id", "ingredients"))

//test 








