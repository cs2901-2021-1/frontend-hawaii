<template>
        <v-layout justify-center>
                <v-flex xs12>
                         <v-card>
                                <v-toolbar color="secondary" dark card>
                                        <v-toolbar-title>
                                             Ultima actualización: dia/mes/año   
                                        </v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                        <v-layout justify-center>
                                                <v-flex xs12>
                                                        <v-data-table 
                                                        :headers="variables"
                                                        :items="proyecciones"
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
                }
        },

        methods: {
        }
}
</script>

<style>

</style>