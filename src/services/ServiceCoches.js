import Global from './../Global'
import axios from 'axios'

export default class ServiceCoches {

    // getMetodoParametros(param1){
    //     //  DENTRO DEL METODO, DEVOLVEMOS LA PROMES
    //     return new Promise(function(resolve){
    //         resolve("Todo ok "+param1)
    //     })
    // }

    getCoches = new Promise(function(resolve){
        
        let coches = [];
        let request = "webresources/coches"
        let url = Global.urlApiCoches + request;

        axios.get(url).then(response => {
            console.log("Leyendo coches desde el servicio....");
            coches = response.data;
            resolve(coches) 
        })

        
    })
}