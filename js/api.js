async function getData  () {

    let data = await fetch ("/../recipes.json")
    .then((response) => response.json ())
    .then ((data)=> {
        return data.recipes;
    });
   
    return data;
    
}

async function getElements (){
    let data=await getData()    
    let listElements=[]
    
    for(let i=0;i<data.length;i++){  
       
        for(let p=0;p<data[i].ingredients.length;p++) {   
    listElements.push(elementFactory(data[i],data[i].ingredients[p], data[i].ustensils[p]))
           
   }}
    return listElements;
}


function elementFactory (objet,ingredient, ustensils) {
    return {            
        appliance: objet.appliance,   
        ingredients: ingredient.ingredient,
        ustensils: ustensils,
        id: objet.id,
        name : objet.name,
        time: objet.time,
        description: objet.description,
       quantity: ingredient.quantity,
       unit: ingredient.unit,

    }
}






 export { getData, getElements }; 