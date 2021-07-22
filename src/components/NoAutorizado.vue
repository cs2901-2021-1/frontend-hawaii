<template>
<v-layout justify-center align-center>
    <v-card class="flex-center">
                                <v-toolbar color="tertiary" dark card>
                                        Usted no se encuentra autorizado para acceder a esta página
                                </v-toolbar>
                                <v-card-text>
                                        <v-layout justify-center>
                                                <v-btn @click="regresar" :loading="cargando" :disabled="cargando" color="secondary">Volver a la página principal</v-btn>
                                        </v-layout>
                                </v-card-text>
                        </v-card> 
</v-layout>
</template>

<script>
export default {
    data(){
        return{
            cargando: false,
        }
    },
    methods: {
        regresar(){
            this.$router.push('/');
        }
    }
}
</script>
