<template>
    <div>
        <h1>Home component</h1>
        <h2 style="color:red">{{mensaje}}</h2>
    </div>
</template>

<script>

    import ServiceEjemplo from './../services/ServiceEjemplo'
    //  PARA PODER UTILZIAR EL SERVICIO, NECESITAMOS UNA CONSTANTE
    //  INSTANCIA CON LA CLASE DEL SERVICIO NECESARIO
    const service = new ServiceEjemplo();
    export default {
        name: "HomeComponent",
        mounted(){
            this.mensaje = service.getSaludo("doryan");
        },
        data(){
            return{
                mensaje: ""
            }
        }

    }
</script>