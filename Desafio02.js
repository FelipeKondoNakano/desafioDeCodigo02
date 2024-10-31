/* 
# 2️ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

const prompt = require("prompt-sync")();
let vitorias = prompt("Digite a quantidade de Vitórias do Jogador: ");
let derrotas = prompt("Digite a quantidade de derrotas do Jogador: ");
var saldoDeVitorias = saldoVitorias(vitorias, derrotas);
var rankingHeroi = ranking(saldoDeVitorias);

//Determina o saldo de vitórias
function saldoVitorias(vitorias, derrotas) {
    saldoDeVitorias = vitorias - derrotas;
    return saldoDeVitorias;
}

//Determina o Ranking do Herói
function ranking(saldoDeVitorias) {
    if (saldoDeVitorias < 10) {
        return "Ferro";
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
        return "Bronze";
    } else if (saldoDeVitorias >=21 && saldoDeVitorias <= 50){
        return "Prata";
    }else if(saldoDeVitorias >= 51 && saldoDeVitorias <= 80){
        return "Ouro";
    }else if(saldoDeVitorias >= 81 && saldoDeVitorias <= 90){
        return "Diamante";
    }else if(saldoDeVitorias >= 91 && saldoDeVitorias <= 100){
        return "Lendário";
    }else if(saldoDeVitorias >= 101){
        return "Imortal";
    }
}

console.log(`O Herói tem o Saldo de ${saldoDeVitorias} vitórias e está no nível ${rankingHeroi}`);