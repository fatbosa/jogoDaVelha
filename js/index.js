/* declarando as variáveis usadas no código */
var count = 0;
var player = 1;
var tamanhoMesa = 3;
var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var acabou = false;

var canvas = document.getElementById("jogo-da-velha");
var context = canvas.getContext('2d');
var tamanhoCanvas = 500;
var tamanhoSecao = tamanhoCanvas / 3;
canvas.width = tamanhoCanvas;
canvas.height = tamanhoCanvas;
context.translate(0.5, 0.5);
context.lineWidth = 10;

/* função que exibe o menu inicial */
function main() {
  document.getElementById("main").style.display = "block";
  document.getElementById("jogo").style.display = "none";
}
/* as funções vX declaram a mesa inicial e os parâmentro
usados na renderização e nos cálculos de cliques e checks
de vitória, determinado pela escolha do jogador nos botões
da tela inicial, além de atualizar a exibição do tamanho
escolhido na tela inicial */
function v3(){
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  tamanhoMesa = 3;
  tamanhoSecao = tamanhoCanvas / tamanhoMesa;
  document.querySelector("#textoTamanho").textContent = "Tamanho da mesa: " + tamanhoMesa;
}

function v4(){
  board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  tamanhoMesa = 4;
  tamanhoSecao = tamanhoCanvas / tamanhoMesa;
  document.querySelector("#textoTamanho").textContent = "Tamanho da mesa: " + tamanhoMesa;
}

function v5(){
  board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
  tamanhoMesa = 5;
  tamanhoSecao = tamanhoCanvas / tamanhoMesa;
  document.querySelector("#textoTamanho").textContent = "Tamanho da mesa: " + tamanhoMesa;
}

function v6(){
  board = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
  tamanhoMesa = 6;
  tamanhoSecao = tamanhoCanvas / tamanhoMesa;
  document.querySelector("#textoTamanho").textContent = "Tamanho da mesa: " + tamanhoMesa;
}

function v7(){
  board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
  tamanhoMesa = 7;
  tamanhoSecao = tamanhoCanvas / tamanhoMesa;
  document.querySelector("#textoTamanho").textContent = "Tamanho da mesa: " + tamanhoMesa;
}

function v8(){
  board = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
  tamanhoMesa = 8;
  tamanhoSecao = tamanhoCanvas / tamanhoMesa;
  document.querySelector("#textoTamanho").textContent = "Tamanho da mesa: " + tamanhoMesa;
}

function v9(){
  board = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]];
  tamanhoMesa = 9;
  tamanhoSecao = tamanhoCanvas / tamanhoMesa;
  document.querySelector("#textoTamanho").textContent = "Tamanho da mesa: " + tamanhoMesa;
}

function v10(){
  board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  tamanhoMesa = 10;
  tamanhoSecao = tamanhoCanvas / tamanhoMesa;
  document.querySelector("#textoTamanho").textContent = "Tamanho da mesa: " + tamanhoMesa;
}

/* Esta função executa o jogo principal, onde o segundo jogador é uma pessoa. */
function pvp() {
  /* troca a exibição do menu pela mesa */
  document.getElementById("main").style.display = "none";
  document.getElementById("jogo").style.display = "block";
  /* ativa quando o jogador clica na tela */
  canvas.addEventListener('mouseup', function (event) {
    /* chama a função que coloca a peça na mesa com a posição do mouse */
    adicionarPeca(pegarPosicaoMouse(event));
    /* desenha a mesa */
    desenhaMesa();
    /* checa se um dos jogadores venceu ou se deu velha, com timeout para dar tempo de desenhar */
    setTimeout(() => {
      if(!checkVitoria(1) && !checkVitoria(2)){
        checkVelha();
      }
    }, 100);
  });
  desenhaMesa();
}

/* no geral é igual a PVP, mas adaptado para que o segundo jogador jogue aleatoriamente sozinho */
function pve() {
  /* acabou no caso nos ajuda a controlar os checks de vitória */
  acabou = false;
  document.getElementById("main").style.display = "none";
  document.getElementById("jogo").style.display = "block";

  canvas.addEventListener('mouseup', function (event) {
    adicionarPeca(pegarPosicaoMouse(event));
    desenhaMesa();
    setTimeout(() => {
    if(checkVitoria(1) === true){
      acabou = true;
    }
    }, 100);
    checkVelha();
    if(acabou === true){
      return;
    }
    adicionarPeca2();
    desenhaMesa();
    setTimeout(() => {
      if(checkVitoria(2)){
      }
    }, 100);
  });
  desenhaMesa();
}
/* adiciona a peça do tabuleiro utilizando a posição do mouse */
function adicionarPeca(mouse) {
  var coordenadaX;
  var coordenadaY;
  /* tamanhoMesa varia com as opções do jogador, e eu dividi o tabuleiro em seções que são os quadrados do jogo.
  Neste caso, os For contam os setores, enquanto as comparações nos ifs verificam em qual setor o mouse está,
  e se este setor já possui uma peça de jogo. */
  for (var x = 0; x < tamanhoMesa; x++) {
    for (var y = 0; y < tamanhoMesa; y++) {
      coordenadaX = x * tamanhoSecao;
      coordenadaY = y * tamanhoSecao;
      if (
        mouse.x >= coordenadaX && mouse.x <= coordenadaX + tamanhoSecao &&
        mouse.y >= coordenadaY && mouse.y <= coordenadaY + tamanhoSecao && board[y][x] == 0
      ) {
        /* adicionando a peça */
        board[y][x] = player;
        /* aqui ele troca que jogador é o ativo do momento */
        player = player == 1 ? 2 : 1;
        count++;
      }
    }
  }
}
/* esta função adiciona a peça do jogador 2 automáticamente no modo VS Computador. */
function adicionarPeca2() {
  /* gera dois valores aleatórios que estão nas dimensões do tabuleiro */
  var x = Math.floor(Math.random() * tamanhoMesa);
  var y = Math.floor(Math.random() * tamanhoMesa);
  /* while roda enquanto não acha um conjunto de valores que corresponda a um espaço vazio no tabuleiro */
  while (board[y][x] != 0) {
    y = Math.floor(Math.random() * tamanhoMesa);
    x = Math.floor(Math.random() * tamanhoMesa);
  }
  /* adiciona a peça */
  board[y][x] = player;
  player = player == 1 ? 2 : 1;
  count++;
}
/* obtém a posição do mouse */
function pegarPosicaoMouse(event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}
/* limpa a mesa após o jogo ao pintar tudo de branco */
function limparMesa(coordenadaX, coordenadaY) {
  context.fillStyle = "#fff";
  context.fillRect(
    coordenadaX,
    coordenadaY,
    tamanhoSecao,
    tamanhoSecao
  );
}
/* desenha a peça do jogador 2, o círculo */
function drawO(coordenadaX, coordenadaY) {
  var halftamanhoSecao = (0.5 * tamanhoSecao);
  var centerX = coordenadaX + halftamanhoSecao;
  var centerY = coordenadaY + halftamanhoSecao;
  /* 198 é apenas um tamanho especifico que ficou interessante e escalona bem */
  var radius = (198/tamanhoMesa) / 2;
  var startAngle = 0 * Math.PI;
  var endAngle = 2 * Math.PI;
  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.stroke();
}
/* desenha a peça do jogador 1, o X */
function drawX(coordenadaX, coordenadaY) {
  context.beginPath();
  /* 150 também é apenas um valor que escalona bem */
  var offset = 150/tamanhoMesa;
  context.moveTo(coordenadaX + offset, coordenadaY + offset);
  context.lineTo(coordenadaX + tamanhoSecao - offset, coordenadaY + tamanhoSecao - offset);
  context.moveTo(coordenadaX + offset, coordenadaY + tamanhoSecao - offset);
  context.lineTo(coordenadaX + tamanhoSecao - offset, coordenadaY + offset);
  context.stroke();
}
/* desenha a mesa de jogo */
function desenhaMesa() {
  /* atualiza a mensagem que diz de quem é a vez */
  document.querySelector("#textoJogador").textContent = "(Vez do Jogador: " + player + " )";

  var coordenadaX;
  var coordenadaY;
  /* percorre as seções da mesa */
  for (var x = 0; x < tamanhoMesa; x++) {
    for (var y = 0; y < tamanhoMesa; y++) {
      coordenadaX = x * tamanhoSecao;
      coordenadaY = y * tamanhoSecao;
      /* limpa primeiro, depois desenha */
      limparMesa(coordenadaX, coordenadaY);
      /* verifica quem é o jogador do espaço atual e desenha o simbolo correspondente */
      if (board[y][x] === 1) {
        drawX(coordenadaX, coordenadaY);
      }
      else if (board[y][x] === 2) {
        {
          drawO(coordenadaX, coordenadaY);
        }
      }
    }
  }

  /* desenha as linhas, com alguns cálculos específicos para determinar o número de linhas */
  var lineStart = (tamanhoMesa-1)*2;
  var lineLenght = tamanhoCanvas - 5;
  context.beginPath();
  for (var y = 1; y <= tamanhoMesa-1; y++) {
    context.moveTo(lineStart, y * tamanhoSecao);
    context.lineTo(lineLenght, y * tamanhoSecao);
  }
  for (var x = 1; x <= tamanhoMesa-1; x++) {
    context.moveTo(x * tamanhoSecao, lineStart);
    context.lineTo(x * tamanhoSecao, lineLenght);
  }
  context.stroke();
}

/* verifica se o jogador passado ganhou */
function checkVitoria(number) {
  /* variáveis: D1 e D2 são as duas diagonais, V e H são as linhas horizontais e verticais. */
  let isWinD1 = true;
  let isWinD2 = true;
  let isWinV = true;
  let isWinH = true;
  /* percorre tanto as linhas como as colunas ao mesmo tempo */
  for (let i = 0; i < tamanhoMesa; i++) {
    /* as inicializa como verdadeiras para cada linha/coluna */
    isWinV = true;
    isWinH = true;
    for(let j = 0; j < tamanhoMesa; j++){
      /* verifica se há algum espaço vazio ou do oponente na linha/coluna */
      if ((board[j][i] === number) && isWinV === true) {
        isWinV = true;
      }else{
        isWinV = false;
      }
      if ((board[i][j] === number) && isWinH === true) {
        isWinH = true;
      }else{
        isWinH = false;
      }
    }/* se ao fim desse loop a variável ainda for verdadeira, significa que o jogador venceu nessa linha/coluna */
    if (isWinH === true || isWinV === true) {
      alert("Jogador " + number + " vence o jogo!!!");
      window.location.reload();
      return true;
    }
  }
  /* verifica ambas diagonais ao mesmo tempo */
  for (let i = 0; i < tamanhoMesa; i++){
    if ((board[i][i] === number) && isWinD1 === true) {
      isWinD1 = true;
    }else{
      isWinD1 = false;
    }
    if ((board[i][tamanhoMesa-1-i] === number) && isWinD2 === true) {
      isWinD2 = true;
    }else{
      isWinD2 = false;
    }
  }/* se ao fim do loop a variavel for verdadeira, o jogador venceu nessa diagonal */
  if (isWinD1 === true || isWinD2 === true) {
    alert("Jogador " + number + " vence o jogo!!!");
    window.location.reload();
    return true;
  }
  /* caso contrário, o jogador não venceu */
  return false;
}
/* verifica se deu velha */
function checkVelha() {
  /* se o número de jogadas supera o número de espaços disponíveis e ninguém venceu, deu velha. */
  if (count >= tamanhoMesa*tamanhoMesa) {
    alert("DEU VELHA!!!");
    acabou = true;
    window.location.reload();
  }
}

window.onload = main(); /* é chamado no load da página */