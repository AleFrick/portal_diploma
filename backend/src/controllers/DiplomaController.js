/* 
-> Controller do Login

*/

const ibmdb = require("ibm_db");
const connection  = require("../database/connection");

//Exportará um objeto
module.exports = {
    index(req, res) {
        let codigo = req.params.codigo        
        ibmdb.open(connection, function (err, connection) {
            if (err) {
                console.log(err);
                return; 
            }
            
            let qry =
                ` select
                        CA.ID_CURSO_ALUNO,
                        case
                            when coalesce(C.CODIGO_EMEC, '')  = '' then ORG.NOME_UNIDADE
                            else coalesce(C.CODIGO_EMEC, '')  || ' - ' || ORG.NOME_UNIDADE
                        end as EMEC_CURSO,
                        
                        case
                            when coalesce(O.CODIGO_EMEC, '')  = '' then  O.NOME_UNIDADE
                            else coalesce(O.CODIGO_EMEC, '')  || ' - ' || O.NOME_UNIDADE
                        end as EMEC_EXPEDIDORA,
                        
                        case
                                when coalesce(O.CODIGO_EMEC, '') = '' then  O.NOME_UNIDADE
                                else coalesce(O.CODIGO_EMEC, '') || ' - ' || O.NOME_UNIDADE     
                        end as EMEC_REGISTRADORA, 

                        case
                            when p.nome_social is null then p.nome_pessoa 
                            else p.nome_social 
                        end as NOME_PESSOA,
                        
                        '****' || SUBSTR( DOC2.NUMERO_DOCUMENTO , 5 , 7 ) || '***' as CPF,
                        RE.ID_DOCUMENTO AS NUM_EXPEDICAO,
                        ORG.NOME_UNIDADE AS CURSO,
                        CA.DT_INGRESSO,
                        CA.DT_CONCLUSAO,
                        RE.DT_PUB_DIARIO, 
                        O.NOME_UNIDADE AS EXPEDIDORA_DIPLOMA,
                        RE.DT_EXP_DIPLOMA,
                        O.NOME_UNIDADE AS REGISTRADORA_DIPLOMA,
                        RE.DT_REGISTRO,
                        RE.NUM_REGISTRO,
                            T1.DESCRICAO AS SITUACAO   
                    from  
                        ALUNOS_DIPLOMAS AD      
                        JOIN CURSOS_ALUNOS CA on ( CA.ID_CURSO_ALUNO = AD.ID_CURSO_ALUNO )
                        JOIN REGISTRO_DIPLOMAS RE ON ( CA.ID_CURSO_ALUNO = RE.ID_CURSO_ALUNO )
                        
                        JOIN alunos a ON A.ID_ALUNO = CA.ID_ALUNO
                        JOIN ORG_INSTITUICAO O ON O.ID_UNIDADE = 1
                        join pessoas p on a.ID_PESSOA = P.id_pessoa      
                        JOIN VERSOES_CURSOS VC ON CA.ID_VERSAO_CURSO = VC.ID_VERSAO_CURSO
                        JOIN CURSOS C ON VC.ID_CURSO = C.ID_CURSO
                        JOIN ORG_INSTITUICAO ORG ON C.ID_UNIDADE = ORG.ID_UNIDADE                          
                        LEFT JOIN DOC_PESSOAS DOC2 ON P.ID_PESSOA = DOC2.ID_PESSOA AND DOC2.ID_TDOC_PESSOA = 1   --CPF
                        LEFT JOIN TAB_ESTRUTURADA T1 ON ( T1.COD_TABELA = RE.SITUACAO_TAB AND T1.ITEM_TABELA = RE.SITUACAO_ITEM )                                        
                    WHERE AD.CODIGO_VALIDACAO = ${codigo}
                `;

            connection.query(qry, function (err1, rows) {
                if (err1) {
                    console.log("Erro na connection Query " + err1);
                } else {
                    if(Object.keys(rows).length > 0){
                    const user =  rows                        
                    
                    return res.status(200).json(user[0]);

                    }else{
                        res.status(200).json({ message:"Diploma não encontrado" });
                    } 
                }
                connection.close(function (err2) {
                    if (err2) console.log(err2);
                });
            });
        });        
    }
};