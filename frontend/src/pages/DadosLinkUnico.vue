<template>
    <div>
        <b-container>
            <!-- {{this.$route.params.codigo}}  -->
            <b-row class='line_dip'>
                <b-col class="returnDados" lg='3'>   
                    <label for="inputNome">Nome</label>             
                    <b-form-input id='inputNome' v-model="items.nome" disabled></b-form-input>
                </b-col>
                <b-col class="returnDados" lg='3'>
                    <label for="inputCPF">CPF</label>             
                    <b-form-input id="inputCPF" v-model="items.cpf" disabled></b-form-input>
                </b-col>
                <b-col class="returnDados" lg='6'>
                    <label for="inputCurso">Curso</label>             
                    <b-form-input id="inputCurso" v-model="items.curso" disabled></b-form-input>
                </b-col>
            </b-row>
            <b-row class='line_dip'>
                <b-col class="returnDados" lg='3'>
                    <label for="inputDtIngresso">Data de Ingresso</label>                         
                    <b-form-input id="inputDtIngresso" v-model="items.dt_ingresso" disabled></b-form-input>
                </b-col>
                <b-col class="returnDados" lg='3'>
                    <label for="inputDtPub">Data Public. Diploma</label> 
                    <b-form-input id="inputDtPub" v-model="items.dt_public_dip" disabled></b-form-input>
                </b-col>
                <b-col class="returnDados" lg='6'>
                    <label for="inputSitDip">Situação Diploma</label> 
                    <b-form-input id="inputSitDip" v-model="items.sit_diploma" disabled></b-form-input>
                </b-col>
            </b-row>
            <b-row class='line_dip'>
                <b-col class="returnDados" lg='6'>
                    <label for="inputNomeExp">Nome da Expedidora</label> 
                    <b-form-input id="inputNomeExp" v-model="items.nome_expedidora" disabled></b-form-input>
                </b-col>
                <b-col class="returnDados" lg='3'>
                    <label for="inputDtExp">Data de Expedição</label> 
                    <b-form-input id='inputDtExp' v-model="items.dt_expedicao" disabled></b-form-input>
                </b-col>
                <b-col class="returnDados" lg='3'>
                    <label for="inputNumExp">Número expedição</label> 
                    <b-form-input id='inputNumExp' v-model="items.num_expedicao" disabled></b-form-input>
                </b-col>
            </b-row>
            <b-row class='line_dip'>
                <b-col class="returnDados" lg='6'>
                    <label for="inputNomeReg">Nome da Registradora</label> 
                    <b-form-input id='inputNomeReg' v-model="items.nome_registradora" disabled></b-form-input>
                </b-col>
                <b-col class="returnDados" lg='3'>
                    <label for="inputNumReg">Número de Registro</label> 
                    <b-form-input id='inputNumReg' v-model="items.num_registro" disabled></b-form-input>
                </b-col>
                <b-col class="returnDados" lg='3'>
                    <label for="inputDtReg">Data de Registro</label> 
                    <b-form-input id='inputDtReg' v-model="items.dt_registro" disabled></b-form-input>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'DadosLinkUnico',
        data () {
            return {
                items: { nome: 'Alex Sandro Frick Schmidt', cpf: '****230.310***',curso: '1105218    - Curso de Ciências - Matemática - Noturno - Araguaína', dt_ingresso: '02/08/2001',dt_conclusao: '20/12/2005', dt_public_dip: '20/12/2005', sit_diploma: 'registrado', nome_expedidora: 'Universidade Federal do Tocantins', dt_expedicao: '13/03/2013', num_expedicao: '203717', nome_registradora: 'Universidade Federal do Tocantins', num_registro: '9278', dt_registro: '13/03/2013'}     
            }
        },        
        created() {
            this.buscaDados()
        },
        methods: {
            buscaDados: function(){
                
                // REMOVER QUANDO ESTIER NA EMPRESA
                axios.get(`https://192.168.1.118:3333/diploma/${this.$route.params.codigo}`)                
                .then(function(response){
                    if(response.data.ID_CURSO_AUNO || response.status === 200){
                        this.nome = response.data.NOME_PESSOA
                        this.cpf = response.data.CPF
                        this.curso = `${response.data.EMEC_CURSO} - ${response.data.CURSO}`
                        this.dt_ingresso = response.data.DT_INGRESSO
                        this.dt_public_dip = response.data.DT_CONCLUSAO
                        this.sit_diploma = response.data.SITUACAO
                        this.nome_expedidora = `${response.data.EMEC_EXPEDIDORA} - ${response.data.EXPEDIDORA_DIPLOMA}`
                        this.dt_expedicao = response.data.DT_EXP_DIPLOMA
                        this.num_expedicao = response.data.NUM_EXPEDICAO
                        this.nome_registradora = `${response.data.EMEC_REGISTRADORA} - ${response.data.REGISTRADORA_DIPLOMA}`
                        this.dt_registro = response.data.DT_REGISTRO
                        this.num_registro = response.data.NUM_REGISTRO
                    }                    
                }); 
            }
        },
        components:{axios}
    }    
</script>
<style scoped>
    .line_dip {
        margin-bottom: 10px;
    }
    .returnDados {
        text-align: left;
    }
</style>