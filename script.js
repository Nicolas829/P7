console.log('test')

let myRequest = fetch("recipes.json")
let newRequest = myRequest.clone()

console.log(newRequest)

const getData = async function  () {
    let response = await fetch ("recipes.json")
    let data = await response.json ()
    
    let media=data.media;
    let photographers=data.photographers; 
    const boxFilter = [];
 console.log(data)   
}
getData()