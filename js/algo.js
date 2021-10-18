import { getData} from "./api.js";

let data=await getData()

let liste=[]
let newListe=[]

class listeFactory{
    constructor (liste, element){
        this.liste=liste
        this.element=element        
        liste=[]
        liste.push(element)       
        console.log(newListe)
        return liste

    }
}

class elFactory{
    constructor(newListe, element){
        this.newListe=newListe
        newListe=[]

        liste.forEach(object=> new listeFactory(newListe).push(object.))
        return newListe

    }
}



data.forEach(element=>[...new elFactory(newListe,element)]) 




