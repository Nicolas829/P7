async function getData  () {

    let data = await fetch ("/../recipes.json")
    .then((response) => response.json ())
    .then ((data)=> {
        return data.recipes;
    });
   
    return data;
    
}
    
   
   
 export { getData };