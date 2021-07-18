<template>
        <v-layout justify-center align-center>
                <v-flex xs12 sm8 md6 lg5 xl4>
                       
                        <v-card class="mb-10">
                                <v-toolbar color="secondary" dark card>
                                        Proyecciones
                                </v-toolbar>
                                <v-card-text>
                                        <v-layout justify-center>
                                                <v-btn @click="generarP" :loading="cargando" :disabled="cargando" color="secondary">Generar</v-btn>
                                        </v-layout>
                                </v-card-text>
                        </v-card> 
                        
                        <v-card>
                                <v-toolbar color="secondary" dark card>
                                        Autorización
                                </v-toolbar>
                                <v-card-text>
                                        <v-container fluid>
                                        <v-layout justify-center>
                                        <v-text-field label="Correo UTEC"></v-text-field>
                                        </v-layout>
                                        <v-layout>
                                                <v-flex xs6>
                                                        <v-layout justify-center>
                                                        <v-btn @click="anhadir" :loading="cargando" :disabled="cargando" color="secondary" >Añadir</v-btn>
                                                        </v-layout>
                                                </v-flex>
                                                <v-flex xs6>
                                                        <v-layout justify-center>
                                                        <v-btn @click="eliminar" :loading="cargando" :disabled="cargando" color="secondary">Eliminar</v-btn>                                                
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
export default {
    data(){
            return{}
    }
}
</script>