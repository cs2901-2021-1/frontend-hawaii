<template>
        <v-layout justify-center>
                <v-flex xs12>
                         <v-card>
                                <v-toolbar src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" dark card >
                                        <v-toolbar-title>
                                             Última actualización:    
                                        </v-toolbar-title>
                                        <v-btn style="margin-left: 1000px" @click="administrar" :loading="irAdministrar" :disabled="irAdministrar" color="secondary" >Panel de Administrador</v-btn>
                                </v-toolbar>

                                <v-toolbar color="secondary" dark card>
                                        <v-toolbar-title>
                                                
                                                
                                                <v-container grid-list-md text-xs-center>
                                                        <v-layout row wrap>
                                                                <v-flex xs6>
                                                                        <v-text-field class="text-xs-center" v-model="search" append-icon="search" label="Código" single-line hide-details></v-text-field>
                                                                </v-flex>
                                                        
                                                                <v-flex xs6>
                                                                        
                                                                        <div>
                                                                        <download-csv
                                                                        :data="proyecciones"
                                                                        :name="dataFile"
                                                                        :fields="fields"
                                                                        v-on:export-finished="exported"
                                                                        >
                                                                        <button class="button">Exportar CSV</button>
                                                                        </download-csv>
                                                                        </div>

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
import JsonCSV from '../plugins/JsonCSV.vue'

export default {
        components: {'download-csv': JsonCSV},
        computed: {
                readableJson: function() { return JSON.stringify(this.jsonData, null, 2)}
        },
        
        data(){
                return {
                        variables: [
                                { text: 'Código', value: 'code' },
                                { text: 'Nombre', value: 'name' },
                                { text: 'Proyección', value: 'nStudent' },
                                { text: 'Error (+/-)', value: 'error' },
                        ],
                        search: '',
                        irAdministrar: false,
                        proyecciones: [],

                        
                        dataFile: 'proyecciones.csv',
                        /*
                        labels: {
                                fname: 'First Name',
                                lname: 'Last Name'
                        },*/
                        fields: ['code', 'name', 'nStudent', 'error'],
                        isExported: false

                        
                }
        },

        methods: {
                administrar(){
                        this.$router.push('/panel')
                },

                exported(event) {
                        console.log(event)
                        this.isExported = true
                        setTimeout(() => {
                                this.isExported = false
                        }, 3 * 1000)
                }
        },

        created(){
                axios.get("https://api.cs.mrg.com.pe/api-sec02-group02/viewers", {withCredentials: true})
                .then(proyecciones => this.proyecciones = proyecciones.data)
                //.catch(() => alert("No se pudo"))
                .catch(() => this.$router.push('/noautorizado'))
                .finally(() => this.ingresando = false);
        }
}
</script>