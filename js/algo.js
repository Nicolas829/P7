import { getData} from "./api.js";

let data=await getData()

let liste=[]

data.forEach(element=>liste.push(element))


class listeFactory{
    constructor (liste){
        this.liste=liste      
        liste.forEach(element => new nameFactory(element.name))
       
        return liste

    }
}


class nameFactory {
    constructor (element){
        this.element=element
        console.log(element)
        const listeIngredients=[]
        listeIngredients.push(element)
        console.log(listeIngredients)
    }


}

const ingredients=new nameFactory(liste)
console.log(ingredients)


export {listeFactory} ;



