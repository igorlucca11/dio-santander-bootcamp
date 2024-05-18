const prompt = require('prompt-sync')();

const niveis = {
    nivel1: { name: "Ferro", pontuacao: 1000 },
    nivel2: { name: "Bronze", pontuacao: 2000 },
    nivel3: { name: "Prata", pontuacao: 5000 },
    nivel4: { name: "Ouro", pontuacao: 7000 },
    nivel5: { name: "Platina", pontuacao: 8000 },
    nivel6: { name: "Ascendente", pontuacao: 9000 },
    nivel7: { name: "Imortal", pontuacao: 10000 },
    nivel8: { name: "Radiante" }
}
const MENSAGEM = (nome, nivel) => `O Herói de nome **${nome}** está no nível de **${nivel}**`
function Classificador(nome, xp) {
    const { nivel1,
        nivel2,
        nivel3,
        nivel4,
        nivel5,
        nivel6,
        nivel7,
        nivel8, } = niveis
    switch (true) {
        case xp <= nivel1.pontuacao:
            console.log(MENSAGEM(nome, niveis.nivel1.name))
            break;
        case xp <= nivel2.pontuacao:
            console.log(MENSAGEM(nome, niveis.nivel2.name))
            break;
        case xp <= nivel3.pontuacao:
            console.log(MENSAGEM(nome, niveis.nivel3.name))
            break;
        case xp <= nivel4.pontuacao:
            console.log(MENSAGEM(nome, niveis.nivel4.name))
            break;
        case xp <= nivel5.pontuacao:
            console.log(MENSAGEM(nome, niveis.nivel5.name))
            break;
        case xp <= nivel6.pontuacao:
            console.log(MENSAGEM(nome, niveis.nivel6.name))
            break;
        case xp <= nivel7.pontuacao:
            console.log(MENSAGEM(nome, niveis.nivel.name))
            break;
        case xp > nivel7.pontuacao:
            console.log(MENSAGEM(nome, niveis.nivel8.name))
            break;
    }
}

let nome = prompt("Qual é o seu nome Herói?");
let nivel = prompt("Qual é o seu XP Herói?");
Classificador(nome, nivel);