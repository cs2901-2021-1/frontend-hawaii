<template>
        <v-layout justify-center>
                <v-flex xs12>
                         <v-card>
                                <v-toolbar color="secondary" dark card>
                                        <v-toolbar-title>
                                             Última actualización:    
                                        </v-toolbar-title>
                                </v-toolbar>

                                <v-toolbar color="secondary" dark card>
                                        <v-toolbar-title>
                                                <v-text-field class="text-xs-center" v-model="search" append-icon="search" label="Búsqueda" single-line hide-details></v-text-field>

                                        </v-toolbar-title>
                                </v-toolbar>

                                <v-spacer></v-spacer>
                                <v-card-text>
                                        <v-layout justify-center>
                                                <v-flex xs12>
                                                        <v-data-table 
                                                        :headers="variables"
                                                        :items="proyecciones"
                                                        :search="search"
                                                        :items-per-page="10"
                                                        class="elevation-1"
                                                        ></v-data-table>
                                                </v-flex>
                                                
                                        </v-layout>
                                </v-card-text>
                        </v-card>     

                </v-flex>  
        </v-layout>
</template>

<script>
import axios from 'axios';
export default {
        props: ["proyecciones"],
        data(){
                return {
                        variables: [
                                { text: 'Código', value: 'code' },
                                { text: 'Nombre', value: 'name' },
                                { text: 'Proyección', value: 'nStudent' },
                                { text: 'Error (+/-)', value: 'error' },
                        ],
                        search:'',
                }
        },

        methods: {
        },

        created(){
                this.token = token;
                axios.get("https://api.cs.mrg.com.pe/api-sec02-group02/viewers", {withCredentials: true})
                .then(proyecciones => this.proyecciones = proyecciones.data)
                .catch(() => alert("Error"))
                .finally(() => this.ingresando = false);
        }
}
</script>