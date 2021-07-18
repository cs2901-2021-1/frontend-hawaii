<template>
    
        
        <v-layout justify-center align-center>
                <v-flex xs12 sm8 md6 lg5 xl4>
                         <v-card>
                                <v-toolbar color="tertiary" dark card >
                                        <v-toolbar-title>
                                             Autenticarse con Google   
                                        </v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                        <v-layout justify-center class="mb-5 mt-5">
                                                <v-btn @click="ingresar" :loading="cargando" :disabled="cargando" color="secondary">Ingresar con Google</v-btn>
                                        </v-layout>
                                        <v-layout justify-center class="mb-5">
                                                <v-btn @click="tiIngresar" :loading="cargando" :disabled="cargando" color="secondary">TI Login</v-btn>
                                        </v-layout>
                                </v-card-text>
                        </v-card>     

                </v-flex>  
        </v-layout>

      
</template>

<script>
export default {
        data(){
                return {
                        cargando: false,
                }
        },

        methods: {
                ingresar(){
                        window.location.href = 'https://api.cs.mrg.com.pe/api-sec02-group02/viewers/auth';
                },
                tiIngresar(){
                        window.location.href = 'https://api.cs.mrg.com.pe/api-sec02-group02/ti/auth';
                }
        },
}
</script>