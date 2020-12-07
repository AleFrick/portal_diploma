<template>      
  <div>
    <b-container>        
        <h1>Diploma Digital</h1>
        <b-row class='reutnDados'>
            <!-- <label for='inputCod'>Código</label> -->
            <b-input-group class="mt-3" id='g_pesquisa' >            
                <b-form-input id='inputCod' v-model="codigo" v-on:keyup='onKeyPress' placeholder="Código"></b-form-input>
                <b-input-group-append>
                    <b-button v-on:click='buscar' variant="outline-success">Buscar</b-button>
                    <b-button v-on:click='cancelar' variant="outline-danger">Cancelar</b-button>                
                </b-input-group-append>
            </b-input-group>
        </b-row>
        <div v-if="dDisable == true ">
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
        </div>
    </b-container>      
  </div>
</template> 
<script>
import axios from 'axios'

export default {
  name: 'DadosDiploma',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dDisable: '',
      codigo: '',
      items: { nome: '', cpf: '',curso: '', dt_ingresso: '',dt_conclusao: '', dt_public_dip: '', sit_diploma: '', nome_expedidora: '', dt_expedicao: '', num_expedicao: '', nome_registradora: '', num_registro: '', dt_registro: ''}     
    }
  },
  methods: {
    buscar: function( event) {                  
        if(this.codigo.length > 0){            
            var vm = this;                       
                axios.get(`http://192.168.1.118:3333/diploma/${this.codigo}`)                           
                .then(function(response){                    
                    if(response.status === 200 && !response.data.message){                        
                        vm.dDisable = true
                        vm.items.nome = response.data.NOME_PESSOA
                        vm.items.cpf = response.data.CPF
                        vm.items.curso = `${response.data.EMEC_CURSO} - ${response.data.CURSO}`
                        vm.items.dt_ingresso = response.data.DT_INGRESSO
                        vm.items.dt_public_dip = response.data.DT_CONCLUSAO
                        vm.items.sit_diploma = response.data.SITUACAO
                        vm.items.nome_expedidora = `${response.data.EMEC_EXPEDIDORA} - ${response.data.EXPEDIDORA_DIPLOMA}`
                        vm.items.dt_expedicao = response.data.DT_EXP_DIPLOMA
                        vm.items.num_expedicao = response.data.NUM_EXPEDICAO
                        vm.items.nome_registradora = `${response.data.EMEC_REGISTRADORA} - ${response.data.REGISTRADORA_DIPLOMA}`
                        vm.items.dt_registro = response.data.DT_REGISTRO
                        vm.items.num_registro = response.data.NUM_REGISTRO                        
                    }else{                                                                    
                        vm.dDisable = false
                        vm.makeToast('default', 'Diploma não encontrado','Atenção')
                    }                  
                    
                }).catch(function(error) {
                    alert(error);
                });
        }else{          
            vm.dDisable = false       
            vm.makeToast('default','Insira o código do diploma.','Atenção')            
        }
    },
    cancelar: function( event) {
      this.codigo = ''
      this.dDisable = false
    },
    makeToast(variant = null, MSG, Title) {
        this.$bvToast.toast(MSG, {
          title: Title,
          variant: variant,
          solid: true
        })
    },
    onKeyPress(event){
        if(event.key === 'Enter'){
            this.buscar()
        }else if(event.key === 'Escape'){
            this.cancelar()
        }
    }
  },    
  components: {axios}
}
</script>
<style scoped>
#g_pesquisa {
    margin-bottom: 30px;
  }
.line_dip {
    margin-bottom: 10px;
}
.returnDados {
    text-align: left;
}
</style>
