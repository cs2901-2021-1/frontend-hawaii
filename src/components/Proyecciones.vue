<template>
        <v-layout justify-center>
                <v-flex xs12>
                         <v-card>
                                <v-toolbar color="tertiary" dark card>
                                        <v-toolbar-title>
                                             Última actualización:    
                                        </v-toolbar-title>
                                </v-toolbar>

                                <v-toolbar color="secondary" dark card>
                                        <v-toolbar-title>
                                                
                                                
                                                <v-container grid-list-md text-xs-center>
                                                        <v-layout row wrap>
                                                                <v-flex xs4>
                                                                        <v-text-field class="text-xs-center" v-model="searchCodigo" append-icon="search" label="Código" single-line hide-details></v-text-field>
                                                                </v-flex>
                                                                <v-flex xs4>
                                                                        <v-text-field class="text-xs-center" v-model="searchNombre" append-icon="search" label="Nombre" single-line hide-details></v-text-field>
                                                                </v-flex>
                                                                <v-flex xs4>
                                                                        <v-layout justify-center>
                                                                                <v-btn @click="exportar" :loading="exportando" :disabled="exportando" color="tertiary">Exportar CSV</v-btn>                                                
                                                                        </v-layout>
                                                                </v-flex>
                                                        </v-layout>
                                                </v-container>

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
                axios.get("https://api.cs.mrg.com.pe/api-sec02-group02/viewers", {withCredentials: true})
                .then(proyecciones => this.proyecciones = proyecciones.data)
                .catch(() => this.$router.push('/noautorizado'))
                //.catch(() => window.location.href = "/app-sec02-group02/#/noautorizado")
                .finally(() => this.ingresando = false);
        }
}
</script>