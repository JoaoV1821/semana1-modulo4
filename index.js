const main = () => {
    const prompt = require('prompt-sync')();
    const words = [];

    while (true) {
        const word = prompt('Digite uma propriedade CSS : ');
       
        if (word == 'SAIR') {
            break;

        } else {
            words.push(word);
        }
    };

    console.log(words)
};

main();