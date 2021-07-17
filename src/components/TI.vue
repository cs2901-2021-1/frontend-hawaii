<template>
        <v-layout justify-center align-center>
                <v-flex xs12 sm8 md6 lg5 xl4>
                         <v-card>
                                <v-toolbar color="secondary" dark card>
                                        Bienvenido, miembro de TI
                                </v-toolbar>
                                <v-card-text>
                                        <v-layout justify-center>
                                                <v-btn @click="generarP" :loading="cargando" :disabled="cargando" color="secondary">Generar nuevas proyecciones</v-btn>
                                        </v-layout>
                                </v-card-text>
                        </v-card>     

                </v-flex>  
        </v-layout>
</template>

<script>
export default {
    
}
</script>