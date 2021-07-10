<template>
  <v-app>

    <v-app-bar
      app
      color="primary"
      
    >
    <div class="d-flex align-center">
        <v-img
          alt="Escudo"
          class="shrink mr-2"
          contain
          src="https://proyectos.utec.edu.pe/themes/custom/utec/logo.png"
          transition="scale-transition"
          width="80"
        /></div>
        <v-layout align-center justify-center>
          <v-toolbar-title class = "headline text-uppercase" >Proyección academica</v-toolbar-title>
          </v-layout>
    </v-app-bar>
    

    <v-main>
      <v-container fluid fill-height class="fondo">
        
        <Login v-if="!proyecciones" @onIngresar="verProyecciones"/>
        <Proyecciones v-else :proyecciones="proyecciones"/>
        
      </v-container>
    </v-main>

    <v-footer color="primary">
      <v-layout justify-center>
        <span>Team Hawaii - Ingeniería de Software 1 - UTEC</span>
      </v-layout>
    </v-footer>

  </v-app>
</template>

<script>
import Login from './components/Login';
import Proyecciones from './components/Proyecciones';
import axios from "axios";

export default {
  name: 'App',

  components: {
    Login,
    Proyecciones
  },

  data(){
    return{
      token: null,
      proyecciones: null,
    } 
  },
  methods: {
    verProyecciones(token){
      this.token = token;
      axios.get("http://localhost:8080/viewers")
      .then(proyecciones => this.proyecciones = proyecciones)
      .catch(() => alert("Error"))
      .finally(() => this.ingresando = false);
    }
  }
};
</script>

<style>
.fondo{
  background-color: #f1f1f1;
}
</style>
