<template>
  <v-app>

    <v-app-bar
      dark
      app
      color=primary
    >
    <div class="d-flex align-center">
        <v-img
          alt="Escudo"
          class="shrink mr-2"
          contain
          src="https://proyectos.utec.edu.pe/themes/custom/utec/logo.png"
          transition="scale-transition"
          width="100"
        /></div>
        <v-layout align-center justify-center>
          <v-toolbar-title class = "v-toolbar_title encode-font" color="#e8fffe">Proyección académica</v-toolbar-title>
        </v-layout>
    </v-app-bar>
    

    <v-main>
      <v-container fluid fill-height class="fondo">
        
        <Login v-if="!proyecciones" @onIngresar="verProyecciones"/>
        <Proyecciones v-else :proyecciones="proyecciones"/>
        
      </v-container>
    </v-main>

    <v-footer dark color=primary>
      <v-layout justify-start>
        <v-btn @click="ingresarTI" :loading="cargando" :disabled="cargando" color="secondary">TI Login</v-btn>
      </v-layout>
      <v-layout >
        <span>Team Hawaii - Ingeniería de Software 1 - UTEC</span>
      </v-layout>
    </v-footer>

  </v-app>
</template>

<script>
import Login from './components/Login';
import Proyecciones from './components/Proyecciones';
import axios from "axios";
import TI from './components/TI';

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
      //ti: false,
      cargando: false,
    } 
  },
  methods: {
    verProyecciones(token){
      this.token = token;
      axios.get("https://api.cs.mrg.com.pe/api-sec02-group02/viewers", {withCredentials: true})
      .then(proyecciones => this.proyecciones = proyecciones.data)
      .catch(() => alert("Error"))
      .finally(() => this.ingresando = false);
    },

    ingresarTI(){
      this.cargando = true;
      this.ti = true;
      this.$emit("onIngresarTI", "token falso")
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+SC');
.fondo{
  background-color: #3a3b3f;
}
.encode-font{
  font-family: 'Encode Sans SC', sans-serif !important;
  font-size: 30px;
}
</style>
