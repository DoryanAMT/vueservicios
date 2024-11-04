<template>
  <div>
    <h1>Customer Component vue</h1>
    <label>Id Customer: </label>
    <input type="text" v-model="idCustomer" />
    <button @click="cargarCustomer()">Buscar</button>
    <!-- <pre>
            <div>{{customers}}</div>
        </pre> -->
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>companyName</th>
          <th>contactName</th>
        </tr>
      </thead>
      <tbody v-for="customer in customers" :key="customer">
        <tr>
          <td>{{ customer.id }}</td>
          <td>{{ customer.companyName }}</td>
          <td>{{ customer.contactName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global.js";

export default {
  name: "CustomerComponent",
  data() {
    return {
      customers: [],
    };
  },
  methods: {
    cargarCustomer() {
      if (this.idCustomer == "") {
        this.loadCustomer();
      } else {
        let request = "customers/" + this.idCustomer + ".json";
        let url = Global.urlApiCustomers + request;
        console.log(url);
        axios.get(url).then((response) => {
          console.log(response.data.customer);
          this.customers = response.data;
        });
      }
    },
    loadCustomer() {
      let request = "/customers.json";
      let url = Global.urlApiCustomers + request;

      axios.get(url).then((response) => {
        // console.log(response.data)
        this.customers = response.data.results;
      });
    },
  },
  mounted() {
    this.loadCustomer();
  },
};
</script>
<style >
    div>table{
        margin: 0 auto;
    }
</style>