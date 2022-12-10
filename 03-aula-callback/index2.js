import fs from 'fs';//fs == file system
//const fs = require('fs'); => caso não configure o package.json com type:module

let alunos;

fs.readFile('./alunos.json', (erro, dados) =>{
    if(erro) {
        console.error(erro);
        return;
    }
    alunos = JSON.parse(dados);
    console.log('alunos:', alunos);
});

//console.log('alunos:', alunos);

/*funções de callback devem sempre serem formatadas seguindo o padrão
tratamento de eventuais erros, depois streaming dos dados.
*/
