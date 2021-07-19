<template>
        <v-layout justify-center align-center>
                <v-flex xs12 sm8 md6 lg5 xl4>
                       
                        <v-card class="mb-10">
                                <v-toolbar color="tertiary" dark card>
                                        Proyecciones
                                </v-toolbar>
                                <v-card-text>
                                        <v-layout justify-center>
                                                <v-btn @click="generateP" :loading="generando" :disabled="generando" color="secondary">Generar</v-btn>
                                        </v-layout>
                                </v-card-text>
                        </v-card> 
                        
                        <v-card>
                                <v-toolbar color="tertiary" dark card>
                                        Autorizaciones
                                </v-toolbar>
                                <v-card-text>
                                        <v-container fluid>
                                        <v-layout justify-center>
                                                <v-text-field label="Correo UTEC" v-model="correo" suffix="@utec.edu.pe"></v-text-field>
                                        </v-layout>
                                        <v-layout>
                                                <v-flex xs6>
                                                        <v-layout justify-center>
                                                        <v-btn @click="addViewer" :loading="agregando" :disabled="agregando" color="secondary" >Añadir</v-btn>
                                                        </v-layout>
                                                </v-flex>
                                                <v-flex xs6>
                                                        <v-layout justify-center>
                                                        <v-btn @click="deleteViewer" :loading="eliminando" :disabled="eliminando" color="secondary">Eliminar</v-btn>                                                
                                                        </v-layout>
                                                </v-flex>
                                        
                                        </v-layout>
                                        </v-container>
                                </v-card-text>
                        </v-card>  
                           
                </v-flex>  
        </v-layout>
</template>

<script>
import axios from 'axios';
export default {
    data(){
            return{
                    generando: false,
                    agregando: false,
                    eliminando: false,
                    correo: ""
            }
    },
    methods: { 
            generateP(){
                this.generando = true;
                axios.get("https://api.cs.mrg.com.pe/api-sec02-group02/ti/update", {withCredentials: true})
                .then(()=> alert("Solicitud exitosa"))
                .catch(() => alert("Error solicitando predicciones"))
                .finally(() => this.generando = false);
            },

            addViewer(){
                this.agregando = true;
                axios.post("https://api.cs.mrg.com.pe/api-sec02-group02/ti/add", {email: this.correo + "@utec.edu.pe"}, {withCredentials: true})
                .then(()=> alert("Registro exitoso"))
                .catch(() => alert("Error agregando correo"))
                .finally(() => this.agregando = false);
            },

            deleteViewer(){
                this.eliminando = true;
                axios.post("https://api.cs.mrg.com.pe/api-sec02-group02/ti/del", {email: this.correo + "@utec.edu.pe"}, {withCredentials: true})
                .then(()=> alert("Eliminación exitosa"))
                .catch(() => alert("Error eliminando correo"))
                .finally(() => this.eliminando = false);
            }
    }
}
</script>
