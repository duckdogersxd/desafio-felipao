function saudacao(xp) {
    let nivel;
    if (xp >= 0 && xp < 1000) {
        nivel = "Ferro!";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "Impossível de mensurar!";
    }
    return nivel;
}

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Qual seu nome Héroi?', name => {
    console.log(`Olá ${name}!`);
    rl.question('Quanto de XP você possui Héroi?', xp => {
        let nivel = saudacao(parseInt(xp));
        console.log(`O Herói de nome**${name}**está no nível de**${nivel}**`);
        rl.close();
    });
});
