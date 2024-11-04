import Global from './../Global'
import axios from 'axios'

export default class ServiceCoches {
    getCoches() {
        let coches = [];
        let request = "webresources/coches"
        let url = Global.urlApiCoches + request;

        axios.get(url).then(response => {
            console.log("Leyendo coches");
            this.coches = response.data;
        })

        return coches
    }
}