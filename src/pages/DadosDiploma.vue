<template>      
  <div>
    <b-container>        
        <h1>Buscar Diploma</h1>
        <b-input-group class="mt-3" id='g_pesquisa' >
            <b-form-input v-model="codigo"></b-form-input>
            <b-input-group-append>
                <b-button v-on:click='ola' variant="outline-success">Buscar</b-button>
                <b-button v-on:click='cancelar' variant="outline-danger">Cancelar</b-button>
            </b-input-group-append>
        </b-input-group>
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
export default {
  name: 'DadosDiploma',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dDisable: '',
      codigo: 'Maria',
      items: { nome: 'Alex Sandro Frick Schmidt', cpf: '****230.310***',curso: '1105218    - Curso de Ciências - Matemática - Noturno - Araguaína', dt_ingresso: '02/08/2001',dt_conclusao: '20/12/2005', dt_public_dip: '20/12/2005', sit_diploma: 'registrado', nome_expedidora: 'Universidade Federal do Tocantins', dt_expedicao: '13/03/2013', num_expedicao: '203717', nome_registradora: 'Universidade Federal do Tocantins', num_registro: '9278', dt_registro: '13/03/2013'}
    }
  },
  methods: {
    ola: function (event) {
      if(this.codigo.length > 0){
          this.dDisable = true
          console.log('sim')          
      }else{
          console.log('nao')
          this.dDisable = false
      }
    },
    cancelar: function(event) {
        this.codigo = ''
        this.dDisable = false
    }
  }
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
