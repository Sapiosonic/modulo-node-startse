function mensagemRada(){
    const promiseMensagemRamon = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Não dê spoiler!");
            resolve();
        }, 0);
    });
    return promiseMensagemRamon;
}

function mensagemRamon() {
    console.log('Jamais!!!')
}

mensagemRada().then(mensagemRamon);
//mensagemRamon();