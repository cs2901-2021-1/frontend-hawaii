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
          <v-toolbar-title class = "v-toolbar_title encode-font pr-20 mr-16" color="#e8fffe">Proyección académica</v-toolbar-title>
        </v-layout>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height class="fondo">
    <router-view />
    </v-container>
</v-main>


    <v-footer dark color=primary>
      <v-layout justify-center>
        <span>Team Hawaii - Ingeniería de Software 1 - UTEC</span>
      </v-layout>
      
    </v-footer>
    
  </v-app>
  
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+SC');
.fondo{
  background-color: #313235;
}
.encode-font{
  font-family: 'Encode Sans SC', sans-serif !important;
  font-size: 30px !important;
}
</style>