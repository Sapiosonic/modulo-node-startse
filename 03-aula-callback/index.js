function mensagemRada(callback){
    setTimeout(() => {
        console.log('Não dê spoiler!');
        callback();
    },0);
}

function mensagemRamon() {
    console.log('Jamais!!!')
}

mensagemRada(mensagemRamon);
//mensagemRamon();