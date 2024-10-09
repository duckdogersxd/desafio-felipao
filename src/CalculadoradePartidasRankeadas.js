function rank(vitorias,derrotas) {
    let nivel;
    let saldo = vitorias-derrotas;
    if (vitorias <= 10) {
        nivel = "Ferro!";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Platina";
    } else if (vitorias <= 100) {
        nivel = "Ascendente";
    } else if (vitorias > 100) {
        nivel = "Imortal";
    }
    else {
        nivel = "Impossível de mensurar!";
    }
    return [nivel,saldo];
}

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Quantas vitórias você possui Héroi?', vitorias => {
    rl.question('Quantas derrotas você possui Héroi?', derrotas => {
        let [nivel,saldo] = rank(parseInt(vitorias),parseInt(derrotas));
        console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`);
        rl.close();
    });
});
