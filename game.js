const boardEl = document.querySelector('#tabuleiro');

const board = Board();
board.draw(boardEl);

function Board() {
  const board = {};
  //7x8 boardmap
  const boardMap = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
    0, 0, 1, 1, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ];

  const tileSpaces = [];
  let clickedTile = {};

  let availableSpaces = [];

  let initialCards = []

  board.draw = draw;

  board.map = boardMap;
  board.tileSpaces = {
    spaceElement: tileSpaces,
    availableIndex: availableSpaces,
    occupedIndex: [],
  }

  board.init = init;
  board.clickedTile = clickedTile;
  board.verify_aval_tiles = verify_aval_tiles;
  // Metodo update() que ira atualizar informações de graficos e logicas internas


  function draw(element_html) {
    boardEl.innerHTML = '';
    let spaceIndex = 0;
    let row = 0;
    let t = 0;
    let tile = {}

    for (row = 0; row <= boardMap.length - 0; row++) {
      // Cria uma linha de elementos e adiciona a classe 'row'
      const rowEl = document.createElement('div');
      rowEl.classList.add('row');
      // Variável 't' define as peças em cada linha
      // for (t = 0; t <= boardMap[row].length; t++) {
      // Cria os espaços em cada linha do tabuleiro e marca as peças iniciais e sua identificação.
      tile = {
        element: document.createElement('div'),
        avail: false,
        id: '',
      }
      tile.element.classList.add('tile');

      const tilePosText = document.createElement('span');
      tilePosText.innerText = `t${row}`

      if (boardMap[row] === 0) {
        tile.element.classList.add('off');
        rowEl.insertAdjacentElement('beforeend', tile.element)
      }
      if (boardMap[row] === 1) {
        tile.element.classList.add('on');
        tile.avail = true;
        rowEl.insertAdjacentElement('beforeend', tile.element);

        board.tileSpaces.occupedIndex.push(row)
      }
      tile.element.insertAdjacentElement('beforeend', tilePosText);

      /*
              //tile.element.addEventListener('click', () => {
                //Verifica qual espaço foi clicado e Verifica quem esta dos lados ←↑↓→
                verify_aval_tiles(boardMap, row, t)
                clickedTile = {
                  x: row,
                  y: t,
                  tile: tile
                };
      */
      //console.log(`clicado: ${row},${t}`)

      /*
                if (clickedTile.tile.element.classList.contains('on')) {
                  console.log('disponivel');

                } else {
                  console.log('nao disponivel');
                }
              });
              */

      //Insere as informações do 'boardMap' no elemento html
      element_html.insertAdjacentElement('beforeend', rowEl)
      tile.id = spaceIndex++;
      tileSpaces.push(tile)
      //}
    }
    verify_aval_tiles()
    clickedTile = {
      x: row,
      y: t,
      tile: tile
    };
  }

  function turnAvailableTile(tile) {
    if (tile.element.classList.contain('off')) {
      tile.avail = true;
    }
  }

  function verify_aval_sides(index) {
    if (index != null) {
      //
      console.log('i', board.tileSpaces.spaceElement[index - 6].element)
      // i = 27
      // i - 7 = cima, i + 1 = direita
      // i - 1 = esquerda, i + 7 = baixo



      if (board.tileSpaces.spaceElement[index - 8].element.classList.contain = 'off') {
        console.log('off');
        board.tileSpaces.spaceElement[index - 8].avail = true;
      }
    }

    verify_aval_tiles()
  }

  function verify_aval_tiles() {

    //const setAvailable;


    // Verifica a próxima peça a esquerda

    /*if (boardMap[row][tilePosition - 5] === 0) {
      //boardMap[row].splice(tilePosition - 1, 1, 1)
      console.log(`a linha ${row} e o espaço ${tilePosition - 1} não está disponível. 1←`)
    } else {
      console.log(`a linha ${row} e o espaço ${tilePosition - 1} está disponível. 1←`);
    }*/

    // Verifica a próxima peça a direita
    /*if (boardMap[row][tilePosition + 1] === 0) {
      //boardMap[row].splice(tilePosition + 1, 1, 1)
      console.log(`a linha ${row} e o espaço ${tilePosition + 1} não está disponível. 1→`);
    } else {
      console.log(`a linha ${row} e o espaço ${tilePosition + 1} está disponível. 1→`);
    }*/

    // Verifica a próxima peça acima
    /*if (boardMap[row - 1][tilePosition] === 0) {
      //boardMap[row - 1].splice(tilePosition, 1, 1)

    }
    if (boardMap[row - 1][tilePosition] >= 0) {
      console.log(`a linha ${row - 1} e o espaço ${tilePosition} não está disponível. 0↑`);
    } else if (boardMap[row - 1][tilePosition] < 0) {
      console.log(`a linha ${row - 1} não existe no tabuleiro. ↑↑`);
    }*/

    // Verifica a próxima peça abaixo 
    /*if (boardMap[row + 1][tilePosition] === 0) {
      //boardMap[row + 1].splice(tilePosition, 1, 1)
      console.log(`a linha ${row + 1} e o espaço ${tilePosition} não está disponível. 0↓`);
    } else {
      console.log(`a linha ${row + 1} e o espaço ${tilePosition} está disponível. 1↓`);
    }*/

    // 
    //draw(boardEl)
    //const spaceAvailId = []

    board.tileSpaces.availableIndex = [];

    board.tileSpaces.spaceElement.forEach(e => {
      if (e.avail == true) {
        // Retorna a posição do tile disponivel no map
        // spaceAvailId.push(e.id)
        board.tileSpaces.availableIndex.push(e.id);
        //console.log(e.element)
        //console.log(e.element, 'is avail');
        //board.tileSpaces[spaceAvailId.shift()].element.insertAdjacentElement('beforeend', cardInBoard);
      }
      //console.log(board.tileSpaces.availableIndex)
    });
    //console.log(board.tileSpaces.availableIndex)

  }



  function set_space_available(row, tileSpace) {
    boardMap[row].splice(tilePosition, 1, 1)
  }


  function init(d) {
    for (let i = 0; i < board.tileSpaces.occupedIndex.length; i++) {
      initialCards.push(d.pop());




      //console.log(initialCards);
      /*
            board.tileSpaces.spaceElement[board.tileSpaces.occupedIndex[i]].element.insertAdjacentElement('beforeend', initialCards[i].element)
          }
          */
    }
    for (let i = 0; i < initialCards.length; i++) {
      initialCards[i].set()

    }

  }

  return board;
}

// desenhar as cartas
function Card(icon, func) {
  const card = {};

  let el = '';

  card.idName = icon;
  card.art = `icons/${icon}.png`
  card.draw = draw();
  card.element = el;

  card.draw = draw;
  card.ActiveCard = ActiveCard;
  card.set = setCard;

  card.cardFunction = card_function;
  card.indexInBoard = null;

  function draw() {
    const cardModel = document.createElement('div');
    cardModel.classList.add('card');

    cardModel.innerHTML = `<img src="./icons/${icon}.png"/>`;

    el = cardModel;
    //area.insertAdjacentElement('beforeend', cardModel);
    cardModel.addEventListener('click', () => {
      ActiveCard();
      cardModel.remove()
    })

    return cardModel;
  }

  const toAvail = [];

  function setCard() {
    // Jogar a carta no montante
    // retorno visual da carta




    const cardInBoard = document.createElement("div");
    const cardImg = document.createElement("img");

    cardImg.src = card.art;
    cardInBoard.classList.add('card-inboard')
    //cardInBoard.style.width = "40px";

    cardInBoard.insertAdjacentElement('beforeend', cardImg);

    //player.places.amountEl.insertAdjacentElement("beforeend", cardAmount);
    if (board.tileSpaces.availableIndex.length > 0) {


      card.indexInBoard = board.tileSpaces.availableIndex[0];
      board.tileSpaces.spaceElement[board.tileSpaces.availableIndex[0]].element.insertAdjacentElement("beforeend", cardInBoard)
      board.tileSpaces.spaceElement[board.tileSpaces.availableIndex[0]].avail = false;
      board.tileSpaces.availableIndex.shift();

    }
    // console.log('index disponível: ', board.tileSpaces.availableIndex)

    board.tileSpaces.occupedIndex.push(card.indexInBoard);
    //console.log(board.tileSpaces.occupedIndex);


    //board.verify_aval_tiles(card.indexInBoard);

    //Abilita espaços dependente da carta
    if (card.idName == 'upArrow') {
      //habilita 8 tiles acima do indece
      toAvail.push(board.tileSpaces.spaceElement[card.indexInBoard - 7]);


      // board.verify_aval_tiles();
    }
    if (card.idName == 'downArrow') {
      //habilita 8 tiles acima do indece
      toAvail.push(board.tileSpaces.spaceElement[card.indexInBoard + 7])

      // board.verify_aval_tiles();
    }

    if (card.idName == 'leftArrow') {
      //habilita 8 tiles acima do indece
      toAvail.push(board.tileSpaces.spaceElement[card.indexInBoard - 1])


      //board.verify_aval_tiles();
    }

    if (card.idName == 'rightArrow') {
      //habilita 8 tiles acima do indece
      console.log('log', board.tileSpaces.spaceElement[card.indexInBoard + 1])
      
      toAvail.push(board.tileSpaces.spaceElement[card.indexInBoard + 1]);

    }
    board.verify_aval_tiles();


    console.log(toAvail)

  }

  function ActiveCard() {
    // Jogar a carta no montante
    // retorno visual da carta
    const cardInBoard = document.createElement("div");
    const cardImg = document.createElement("img");

    cardImg.src = card.art;
    cardInBoard.classList.add('card-inboard')
    //cardInBoard.style.width = "40px";

    cardInBoard.insertAdjacentElement('beforeend', cardImg);

    //player.places.amountEl.insertAdjacentElement("beforeend", cardAmount);
    if (board.tileSpaces.availableIndex.length > 0) {


      card.indexInBoard = board.tileSpaces.availableIndex[0];
      board.tileSpaces.spaceElement[board.tileSpaces.availableIndex[0]].element.insertAdjacentElement("beforeend", cardInBoard)
      board.tileSpaces.spaceElement[board.tileSpaces.availableIndex[0]].avail = false;
      board.tileSpaces.availableIndex.shift();

    }
    console.log('index disponível: ', board.tileSpaces.availableIndex)

    board.tileSpaces.occupedIndex.push(card.indexInBoard);
    console.log(board.tileSpaces.occupedIndex);


    //board.verify_aval_tiles(card.indexInBoard);

    //Abilita espaços dependente da carta
    if (card.idName == 'upArrow') {
      //habilita 8 tiles acima do indece
      board.tileSpaces.spaceElement[card.indexInBoard - 7].avail = true;

      board.verify_aval_tiles();
    }
    if (card.idName == 'downArrow') {
      //habilita 8 tiles acima do indece
      board.tileSpaces.spaceElement[card.indexInBoard + 7].avail = true;

      board.verify_aval_tiles();
    }

    if (card.idName == 'leftArrow') {
      //habilita 8 tiles acima do indece
      board.tileSpaces.spaceElement[card.indexInBoard - 1].avail = true;

      board.verify_aval_tiles();
    }

    if (card.idName == 'rightArrow') {
      //habilita 8 tiles acima do indece
      board.tileSpaces.spaceElement[card.indexInBoard + 1].avail = true;

      board.verify_aval_tiles();
    }

    //board.tileSpaces[27].element.insertAdjacentElement('beforeend', cardInBoard)
    //player.amount.push(card);
    //player.amountScore += card.value;

    //console.log(
    // `${player.name}: AmountScore: ${player.amountScore}, AmountCards:${player.amount.length}`
    //);
    /*
        // Indece da carta ativada
        var index = player.hand.indexOf(card);
        // remoção da carta da mão
        if (index > -1) {
          player.hand.splice(index, 1);
        }

        player.updateHand();
        CreateLog(`${player.name} activated ${card.cardName}`, player.color);

        if (player.numberActiveLimit > 0) player.numberActiveLimit--;
        */
  }


  function card_function() {
    func();
  }

  return card;
}

//Cards
const fulstep = Card('Fulstep', () => {
  console.log('func here');
});
const leftArw = Card('leftArrow');
const rightArw = Card('rightArrow');
const upArw = Card('upArrow');
const downArw = Card('downArrow');
const circle = Card('circle')

/*
upArw.draw(board.tileSpaces[27]);
leftArw.draw(board.tileSpaces[34]);
rightArw.draw(board.tileSpaces[36]);
downArw.draw(board.tileSpaces[43]);
fulstep.draw(board.tileSpaces[35]);
*/

//console.log(board.tileSpaces[0]);
/*
board.tileSpaces.forEach(e => {
  e.addEventListener('click', () => {
    console.log(board.tileSpaces.indexOf(e))
  })
  
})*/

// Deck of cards
const deck = [
  //3
  upArw, upArw, upArw,
  //3
  downArw, downArw, downArw,
  //3
  rightArw, rightArw, rightArw,
  //3
  leftArw, leftArw, leftArw,
  //10
  circle, circle, circle, circle, circle, circle, circle, circle, circle, circle,
  //1
  fulstep,
  ];


//player

const hand = []

shuffle(deck);
//console.log(deck)

function shuffle(arr) {
  //console.log(`SHUFFLE > Shuffling |${arr.cards.length}| cards...`);

  let currentIndex = arr.length,
    randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
}


for (let i = 0; i < 5; i++) {
  hand.push(deck.pop());
}

const handEl = document.querySelector('#hand');

board.init(deck)

//console.log(hand)

window.addEventListener('load', () => {
  for (let c = 0; c <= hand.length - 1; c++) {
    handEl.insertAdjacentElement('beforeend', hand[c].draw());
  }
});
