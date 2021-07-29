<template>
    
        
        <v-layout justify-center align-center>
                <v-flex xs12 sm8 md6 lg5 xl4>
                         <v-card>
                                <v-toolbar color="tertiary" dark card src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" >
                                        <v-toolbar-title>
                                             Autenticarse con Google   
                                        </v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                        <v-layout justify-center>
                                                <v-btn @click="ingresar" :loading="cargando" :disabled="cargando" color="secondary">Ingresar con Google</v-btn>
                                        </v-layout>
                                </v-card-text>
                        </v-card>     

                </v-flex>  
        </v-layout>

      
</template>

<script>
export default {
        props: {
                login: {type: String,
                        required: true
                }
        },
        data(){
                return {
                        cargando: false,
                }
        },

        methods: {
                ingresar(){
                        window.location.href = this.login;
                },
        },
}
</script>