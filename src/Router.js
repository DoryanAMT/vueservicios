import {createRouter, createWebHistory} from "vue-router";
import CochesComponent from './components/CochesComponent.vue'
import CustomerComponent from './components/CustomerComponent.vue'
import EmpleadosDetalle from './components/EmpleadosDetalle.vue'
import HomeComponent from './components/HomeComponent.vue'
import EmpleadosOficios from './components/EmpleadosOficios.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/empleadosoficios/:oficio", component: EmpleadosOficios
    },

    {
        path: "/customercomponent", component: CustomerComponent
    },
    {
        path: "/cochescomponent", component: CochesComponent
    },
    {
        path: "/empleadosdetalle", component: EmpleadosDetalle
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;