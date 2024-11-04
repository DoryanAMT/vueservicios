<template>
    <div>
        <h1>Empleados details</h1>
        <form v-on:submit.prevent="buscarEmpleado()">
            <label>Selecciones empleados</label>
            <select class="form-control" v-model="idEmpleado">
                <option v-for="emp in empleados" :key="emp" 
                :value="emp.idEmpleado">
                    {{emp.apellido}}
                </option>
            </select>
            <button class="btn btn-info">
                Detalles empleado
            </button>
        </form>
        <div v-if="empleado">
            <dl>
                <dt>oficio:</dt>
                <dl>{{empleado.oficio}}</dl>
                <dt>Salario:</dt>
                <dl>{{empleado.salario}}</dl>
                <dt>Departamento</dt>
                <dl>{{empleado.departamento}}</dl>
            </dl>
        </div>
    </div>
</template>

<script>

    import ServiceEmpleados from './../services/ServiceEmpleados'
    const service = new ServiceEmpleados();

    export default {
        name: "EmpleadosDetalle",
        methods:{
            buscarEmpleado(){
                service.findEmpleado(this.idEmpleado).then(result => {
                    this.empleado = result;
                })
            }
        },
        data(){
            return{
                empleados: [],
                idEmpleado: 0,
                empleado: null
            }
        },
        mounted(){
            service.getEmpleados().then(result => {
                this.empleados = result;
            })
        }
    }
</script>