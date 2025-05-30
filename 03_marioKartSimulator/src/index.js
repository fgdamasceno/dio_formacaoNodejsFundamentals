/*
DESAFIO DE PROJETO: MARIO KART SIMULATOR
> Objetivo:
Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo.
Nosso desafio será criar uma lógica de um jogo de video game para simular corridas
de Mario Kart, levando em consideração as regras e mecânicas abaixo.
> Regras e Mecânicas:
Jogadores:
  ✅ O computador deve receber dois personagens para disputar a corrida em um objeto cada 
Pistas:
  ✅ Os personagens irão correr em uma pista aleatória de 5 rodadas
  ✅ A cada rodada, será sorteado um bloco de pista que pode ser uma reta, curva ou confronto
    - Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar um
    atributo VELOCIDADE, quem vencer ganha um ponto
    - Caso o bloco da pista seja um CURVA, o jogador deve jogar um dado de 6 lados e somar o
    atributo MANOBRABILIDADE, quem vencer ganha um ponto
    - Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar
    o atributo PODER, quem perder, perde um ponto
    - Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)
> Condição de vitória:
  Ao final, vence quem acumulou mais pontos

*/

const players = [
  {
    player: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
  },
  {
    player: "Peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
  },
  {
    player: "Yoshi",
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
  },
  {
    player: "Bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
  },
  {
    player: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
  },
  {
    player: "Donkey Kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
  },
];

const pistas = ["RETA", "CURVA", "CONFRONTO"];

// Retorna um número aleatório entre 0 e n
function escolherNumeroAleatorio(n) {
  return Math.floor(Math.random() * n);
}

// Seleciona dois jogadores aleatórios
function escolherJogadores(arr) {
  let jogadoresEscolhidos = []; // Array que recebe os dois jogadores

  // Garante a escolha de dois jogadores diferentes
  do {
    if (jogadoresEscolhidos[0] === jogadoresEscolhidos[1]) {
      jogadoresEscolhidos = [];
    }
    for (let i = 0; i < 2; i++) {
      jogadoresEscolhidos.push(arr[escolherNumeroAleatorio(6)].player);
    }
  } while (jogadoresEscolhidos[0] === jogadoresEscolhidos[1]);

  return jogadoresEscolhidos;
}

// Seleciona aleatóriamente uma pista para cada rodado do jogo
function escolherPista(arr) {
  const pistasEscolhidas = [];
  for (let i = 0; i < 5; i++) {
    pistasEscolhidas.push(arr[escolherNumeroAleatorio(3)]);
  }
  return pistasEscolhidas;
}

// Joga o dado
function jogarDado() {
  return escolherNumeroAleatorio(6) + 1;
}

// Função principal do jogo
function jogarRodadas(arr) {
  let rodadas = 5;
  let dadoSorteado;
  let vencedor = "";
  // Lista de jogadores e pistas selecionadas
  const jogadoresSelecionados = escolherJogadores(players);
  const pistasSelecionadas = escolherPista(pistas);
  // Possibilita o acesso aos atributos/valores do objeto ao qual cada jogador faz parte
  let jogador1 = arr.find(
    (jogador) => jogador.player === jogadoresSelecionados[0]
  );
  let jogador2 = arr.find(
    (jogador) => jogador.player === jogadoresSelecionados[1]
  );
  // Inicia a pontuação como zerada dos jogadores
  let jogadorPontos1 = 0;
  let jogadorPontos2 = 0;

  // Realiza as rodadas
  console.log(
    `${jogadoresSelecionados[0].toUpperCase()} <--- versus ---> ${jogadoresSelecionados[1].toUpperCase()} 🥊\n`
  );
  for (let i = 0; i < rodadas; i++) {
    console.log(`🏁 ---> ${i + 1}ª RODADA `);
    console.log(`BLOCO: ${pistasSelecionadas[i]}`);

    if (pistasSelecionadas[i] === "RETA") {
      dadoSorteado = jogarDado();
      console.log(
        `${jogadoresSelecionados[0].toUpperCase()} 🎲 rolou um dado de velocidade: ${
          jogador1.velocidade
        } + ${dadoSorteado} = ${jogador1.velocidade + dadoSorteado}`
      );
      dadoSorteado = jogarDado();
      console.log(
        `${jogadoresSelecionados[1].toUpperCase()} 🎲 rolou um dado de velocidade: ${
          jogador2.velocidade
        } + ${dadoSorteado} = ${jogador2.velocidade + dadoSorteado}`
      );
      if (
        jogador1.velocidade + dadoSorteado >
        jogador2.velocidade + dadoSorteado
      ) {
        console.log(
          `${jogadoresSelecionados[0].toUpperCase()} 🥇 venceu na RETA e ganhou 1 ponto!`
        );
        jogadorPontos1++;
      } else {
        console.log(
          `${jogadoresSelecionados[1].toUpperCase()} 🥇 venceu na RETA e ganhou 1 ponto!`
        );
        jogadorPontos2++;
      }
    } else if (pistasSelecionadas[i] === "CURVA") {
      dadoSorteado = jogarDado();
      console.log(
        `${jogadoresSelecionados[0].toUpperCase()} 🎲 rolou um dado de manobrabilidade: ${
          jogador1.manobrabilidade
        } + ${dadoSorteado} = ${jogador1.manobrabilidade + dadoSorteado}`
      );
      dadoSorteado = jogarDado();
      console.log(
        `${jogadoresSelecionados[1].toUpperCase()} 🎲 rolou um dado de manobrabilidade: ${
          jogador2.manobrabilidade
        } + ${dadoSorteado} = ${jogador2.manobrabilidade + dadoSorteado}`
      );
      if (
        jogador1.manobrabilidade + dadoSorteado >
        jogador2.manobrabilidade + dadoSorteado
      ) {
        console.log(
          `${jogadoresSelecionados[0].toUpperCase()} 🥇 venceu na CURVA e ganhou 1 ponto!`
        );
        jogadorPontos1++;
      } else {
        console.log(
          `${jogadoresSelecionados[1].toUpperCase()} 🥇 venceu na CURVA e ganhou 1 ponto!`
        );
        jogadorPontos2++;
      }
    } else if (pistasSelecionadas[i] === "CONFRONTO") {
      dadoSorteado = jogarDado();
      console.log(
        `${jogadoresSelecionados[0].toUpperCase()} 🎲 rolou um dado de confronto: ${
          jogador1.poder
        } + ${dadoSorteado} = ${jogador1.poder + dadoSorteado}`
      );
      dadoSorteado = jogarDado();
      console.log(
        `${jogadoresSelecionados[1].toUpperCase()} 🎲 rolou um dado de confronto: ${
          jogador2.poder
        } + ${dadoSorteado} = ${jogador2.poder + dadoSorteado}`
      );
      if (jogador1.poder + dadoSorteado > jogador2.poder + dadoSorteado) {
        console.log(
          `${jogadoresSelecionados[0].toUpperCase()} 🥇 venceu o CONFRONTO. ${jogadoresSelecionados[1].toUpperCase()} 😞 perdeu 1 ponto.`
        );
        // jogadorPontos1++; // Adiciona pontos ao vencedor
        jogadorPontos2 = jogadorPontos2 >= 0 ? jogadorPontos2-- : 0;
      } else {
        console.log(
          `${jogadoresSelecionados[1].toUpperCase()} 🥇 venceu o CONFRONTO. ${jogadoresSelecionados[0].toUpperCase()} 😞 perdeu 1 ponto.`
        );
        // jogadorPontos2++; // Adiciona pontos ao vencedor
        jogadorPontos1 = jogadorPontos1 >= 0 ? jogadorPontos1-- : 0;
      }
    }

    console.log(
      `Pontuação ${jogadoresSelecionados[0].toUpperCase()}: ${jogadorPontos1}`
    );
    console.log(
      `Pontuação ${jogadoresSelecionados[1].toUpperCase()}: ${jogadorPontos2}`
    );

    console.log();
  }

  if (jogadorPontos1 > jogadorPontos2) {
    vencedor = jogadoresSelecionados[0];
  } else if (jogadorPontos1 < jogadorPontos2) {
    vencedor = jogadoresSelecionados[1];
  } else {
    return "Houve empate!";
  }

  return `O vencedor foi ${vencedor.toUpperCase()}`;
}

console.log(jogarRodadas(players));
