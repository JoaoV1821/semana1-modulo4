const main = () => {
    const words = [];
    const prompt = require('prompt-sync')();

    console.log('-'.repeat(35));
    console.log('Liste as propriedades CSS desejadas');
    console.log(`Digite SAIR para encerrar o programa`);
    console.log('-'.repeat(35));

    while (true) {

        try {
            const word = prompt('>>>> ').toLowerCase();
            if (word == 'sair') {
                break;
    
            } else {
                words.push(word);
            };

        } catch (error) {
            console.log(error);
            continue;
        }
       
    };
    console.log('-'.repeat(30));
    console.log('    Lista de propriedades');
    

    for (word of words.sort()) {
        console.log(`${words.indexOf(word) + 1} - ${word}`);
    };

    console.log('-'.repeat(30));
};

main();