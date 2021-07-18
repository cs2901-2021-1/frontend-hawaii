<template>
        <v-layout justify-center align-center>
                <v-flex xs12 sm8 md6 lg5 xl4>
                         <v-card>
                                <v-toolbar color="secondary" dark card>
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
        data(){
                return {
                        cargando: false,
                }
        },

        methods: {
                ingresar(){
                        window.location.href = 'https://api.cs.mrg.com.pe/api-sec02-group02/viewers/auth';
                        //this.cargando = true;
                        //this.$emit("onIngresar", "token falso")
                }
        }
}
</script>