<template>
    <div>
        <h1>Coches component</h1>
        <div v-for="coche in coches" :key="coche">
            <h2 style="color:blue">
                {{coche.marca}} {{coche.modelo}}
            </h2>
            <p> conductor: {{coche.conductor}}</p>
            <img :src="coche.imagen" style="width:150px; height: 150px">

        </div>
    </div>
</template>

<script>
    
    import ServiceCoches from './../services/ServiceCoches'
    const service = new ServiceCoches();
    
    export default {
        name:"CochesComponent",
        data(){
            return{
                coches : []
            }
        },
        mounted (){

            // service.getMetodoParametros("Hola mundo").then(result => {
            //     console.log(result)
            // })

            //  UNA PROMESA NO ES UN METODO, ES UN OBJETO
            service.getCoches.then(result => {
                this.coches = result;
            })
        }

    }
</script>