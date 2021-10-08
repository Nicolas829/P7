

async function getData  () {

    let data = await fetch ("/../recipes.json")
    .then((response) => response.json ())
   
    .then ((data)=> {
       
        return data.recipes;
       
    });
   return data
    
}

//appel du tableau ligne par ligne de chaque element de recette
async function getElements (){
    let data=await getData()    
    let listElements=[]
    
    for(let i=0;i<data.length;i++){  
       
        for(let p=0;p<data[i].ingredients.length;p++) {   
    listElements.push(elementFactory(data[i],data[i].ingredients[p], data[i].ustensils[p]))
           
   }}
    return listElements;
}



//création de ingrédients pour dropdown
async function getIngredients (){
    let data=await getData()    
    
    let listIngredients=[]
    for(let i=0;i<data.length;i++){  
       
        for(let p=0;p<data[i].ingredients.length;p++) {   
            listIngredients.push(searchIngredientFactory(data[i].ingredients[p]))
           
   }}
    return listIngredients;
}

async function getAppliance (){
    let data=await getData()    
    
    let listAppliance=[]
    for(let i=0;i<data.length;i++){  
       
        for(let p=0;p<data[i].ingredients.length;p++) {   
            listAppliance.push(searchApplianceFactory(data[i],data[i].appliance))
           
   }}
    return listAppliance;
}

async function getUstensils (){
    let data=await getData()    
    
    let listUstensils=[]
    for(let i=0;i<data.length;i++){  
       
        for(let p=0;p<data[i].ingredients.length;p++) {   
            listUstensils.push(searchUstensilsFactory(data[i],data[i].ustensils[p]))
           
   }}
    return listUstensils;
}






//création des éléments de recherches =>ingrédient, ustensil, appareils

function searchIngredientFactory ( ingredient) {
    return {
     
    ingredients: ingredient.ingredient,   
    
    }
 
}
function searchApplianceFactory (objet, appliance) {
    return {
     
    appliance: appliance,   
    id: objet.id,
    }
 
}
function searchUstensilsFactory (objet, ustensils) {
    return {
     
    ustensils:ustensils,   
    id: objet.id,
    }
 
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

   
 export { getData, getElements, getIngredients, getUstensils, getAppliance };