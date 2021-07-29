<template>
<v-layout justify-center>
                <v-flex>     
                                <v-toolbar color="tertiary" dark card src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
                                        <v-toolbar-title in-line>
                                             <v-btn v-if="selector === 'generar'" @click="gestionar" :loading="irGestionar" :disabled="irGestionar" color="secondary" >Gestionar correos permitidos</v-btn> 
                                             <v-btn v-else @click="generar" :loading="irGenerar" :disabled="irGenerar" color="secondary" >Generar nueva proyección</v-btn> 
                                             <v-btn style="margin-left: 20px" @click="verProyecciones" :loading="irProyecciones" :disabled="irProyecciones" color="secondary" >Ver proyecciones</v-btn>  
                                        </v-toolbar-title>
                                </v-toolbar>
        <v-layout justify-center align-center>
                <v-flex xs12 sm8 md6 lg5 xl4>
                       <v-flex xs12 mb-12>
                        <v-layout justify-center>
                                
                        </v-layout>
                       </v-flex>
                        <v-card v-if="selector === 'generar'" class="mb-10">
                                <v-toolbar color="tertiary" dark card src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
                                        Proyecciones
                                </v-toolbar>
                                <v-card-text>
                                        <v-layout justify-center>
                                                <v-btn @click="generateP" :loading="generando" :disabled="generando" color="secondary">Generar</v-btn>
                                        </v-layout>
                                </v-card-text>
                        </v-card> 
                        
                        <v-layout v-else row justify-center>
                                <v-card min-width="80%">
                                        <v-toolbar color="tertiary" dark card src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
                                        Autorizaciones
                                        </v-toolbar>
                                <v-card-text>
                                        <v-container fluid>
                                        <v-layout justify-center>
                                                <v-text-field label="Correo UTEC" v-model="correo_field" ></v-text-field>
                                        </v-layout>
                                        <v-layout>
                                                <v-flex xs6>
                                                        <v-layout justify-center>
                                                        <v-btn @click="addViewer" :loading="modificando" :disabled="modificando" color="secondary" >Añadir</v-btn>
                                                        </v-layout>
                                                </v-flex>
                                                <v-flex xs6>
                                                        <v-layout justify-center>
                                                        <v-btn @click="deleteViewer" :loading="modificando" :disabled="modificando" color="secondary">Eliminar</v-btn>                                                
                                                        </v-layout>
                                                </v-flex>
                                        
                                        </v-layout>
                                        </v-container>
                                </v-card-text>
                                </v-card>

                                <v-col>
                                <v-card class="mx-auto" width="400">
                                        <v-list class="tile">
                                                <v-list-group :value="false" prepend-icon="mdi-account-circle">
                                                        <template v-slot:activator  >
                                                                <v-list-item-content>
                                                                        <v-list-item-title>Correos Autorizados </v-list-item-title>
                                                                </v-list-item-content>
                                                        </template>
                                                                <v-list-item v-for="(correo,i) in correos" :key="i" link>
                                                                        <v-list-item-title v-text="correo.email" class="tile"></v-list-item-title>     
                                                                </v-list-item>                                      
                                                </v-list-group>
                                        </v-list>
                                </v-card>
                                </v-col>
                        </v-layout>
                </v-flex>  
        </v-layout>
        </v-flex>  
        </v-layout>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
                correos: [],
                generando: false,
                modificando: false,
                correo_field: "",
                selector: "gestionar"
        }),
    methods: { 
            generateP(){
                this.generando = true;
                axios.get("https://api.cs.mrg.com.pe/api-sec02-group02/ti/update", {withCredentials: true})
                .then(()=> alert("Solicitud exitosa"))
                .catch(() => alert("Error solicitando predicciones"))
                .finally(() => this.generando = false);
            },

            addViewer(){
                this.modificando = true;
                axios.get("https://api.cs.mrg.com.pe/api-sec02-group02/ti/add?email=" + this.correo_field, {withCredentials: true})
                .then(()=> {alert("Registro exitoso");this.correo_field = "";})
                .catch(() => alert("Error agregando correo"))
                .finally(() => this.modificando = false);
            },

            deleteViewer(){
                this.modificando = true;
                axios.get("https://api.cs.mrg.com.pe/api-sec02-group02/ti/del?email=" + this.correo_field, {withCredentials: true})
                .then(()=> {alert("Eliminación exitosa");this.correo_field = "";})
                .catch(() => alert("Error eliminando correo"))
                .finally(() => this.modificando = false);
            },
            verProyecciones(){
                    this.irProyecciones = true;
                    this.$router.push('/proyecciones');
                    this.irProyecciones = false;
            },
            gestionar(){
                    this.irGestionar = true;
                    this.selector = 'gestionar';
                    this.irGestionar = false;
            },
            generar(){
                    this.irGenerar = true;
                    this.selector = 'generar';
                    this.irGenerar = false;
            }
    },
    created(){
            axios.get("https://api.cs.mrg.com.pe/api-sec02-group02/ti", {withCredentials: true})
                .then(correos => this.correos = correos.data)
                .catch(() => this.$router.push('/noautorizado'));
    }
}
</script>
