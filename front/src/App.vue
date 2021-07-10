<template>
  <v-app>

    <v-main>
      <v-container fluid fill-height class="fondo">
        
        <Login v-if="!usuario" @onIngresar="ingresar" @onNotificar="notificar"/>
        
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',

  components: {
    Login,
  },

  data(){
    return{
      usuario: null,
      notificacion: {
        mensaje: "",
        color: "info",
        visible: false,
        tiempo: 0,
      },
      email: false
    } 
  },
  methods: {
    
  }
};
</script>

<style>
.fondo{
  background-color: #f1f1f1;
}
</style>
