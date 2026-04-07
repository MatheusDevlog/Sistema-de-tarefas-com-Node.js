const rl = require('node:readline');

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
})

console.log('Bem vindo ao programa');
console.log('[1] Data atual');
console.log('[2] Ver animais');
console.log('[3] Ver comidas');
console.log('[0] Sair');

prompt.question('> Seleciona o que deseja fazer ', answer => {
    switch(answer){
        case '1': {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth()+1;
            const year = date.getFullYear();
            console.log(`Hoje é ${day}/${month}/${year}`)
            break
        }
        case '2': {
            console.log('Galinha')
            console.log('Cachorro')
            console.log('Gato')
            console.log('Pato')
            break
        }
        case '3': {
            console.log('Pizza')
            console.log('Hamburguer')
            console.log('Sushi')
            console.log('Lasanha')
            break
        }
        default: {
            console.log('Saindo do programa')
        }
    }
    prompt.close();
})