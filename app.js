//Global to store players
let player1Hand = [];
let player2Hand = [];
let player3Hand = [];
let currentPlayer = 0; //means me
let players = [player1Hand, player2Hand, player3Hand];
let playerTag = [".player1", ".player2", ".player3"]; //created tag to append the function them so no need to create more draw()

//To track current card played
let cardPlayed = [];

//deck
let deck = [];

//amount of players in game
let amtPlayers = 3;

//starting amount of cards
let initialCards = 7;

//turn tracker
let gameTurn = 0;

//set direction of game, 1 for forward, -1 for backward
let gameDirection = 1;

//create the deck object array with id so we can identify and it can be looped through
const originalDeck = [
  {
    id: "b0",
    color: "Blue",
    value: 0,
    url: "uno_assets_2d/PNGs/small/blue_0.png",
  },
  {
    id: "b1",
    color: "Blue",
    value: 1,
    url: "uno_assets_2d/PNGs/small/blue_1.png",
  },
  {
    id: "b2",
    color: "Blue",
    value: 2,
    url: "uno_assets_2d/PNGs/small/blue_2.png",
  },
  {
    id: "b3",
    color: "Blue",
    value: 3,
    url: "uno_assets_2d/PNGs/small/blue_3.png",
  },
  {
    id: "b4",
    color: "Blue",
    value: 4,
    url: "uno_assets_2d/PNGs/small/blue_4.png",
  },
  {
    id: "b5",
    color: "Blue",
    value: 5,
    url: "uno_assets_2d/PNGs/small/blue_5.png",
  },
  {
    id: "b6",
    color: "Blue",
    value: 6,
    url: "uno_assets_2d/PNGs/small/blue_6.png",
  },
  {
    id: "b7",
    color: "Blue",
    value: 7,
    url: "uno_assets_2d/PNGs/small/blue_7.png",
  },
  {
    id: "b8",
    color: "Blue",
    value: 8,
    url: "uno_assets_2d/PNGs/small/blue_8.png",
  },
  {
    id: "b9",
    color: "Blue",
    value: 9,
    url: "uno_assets_2d/PNGs/small/blue_9.png",
  },
  {
    id: "b10",
    color: "Blue",
    value: 10,
    url: "uno_assets_2d/PNGs/small/blue_picker.png",
  },
  {
    id: "b11",
    color: "Blue",
    value: 11,
    url: "uno_assets_2d/PNGs/small/blue_reverse.png",
  },
  // {
  //   id: "b12",
  //   color: "Blue",
  //   value: 12,
  //   url: "uno_assets_2d/PNGs/small/blue_skip.png",
  // },
  {
    id: "g0",
    color: "Green",
    value: 0,
    url: "uno_assets_2d/PNGs/small/green_0.png",
  },
  {
    id: "g1",
    color: "Green",
    value: 1,
    url: "uno_assets_2d/PNGs/small/green_1.png",
  },
  {
    id: "g2",
    color: "Green",
    value: 2,
    url: "uno_assets_2d/PNGs/small/green_2.png",
  },
  {
    id: "g3",
    color: "Green",
    value: 3,
    url: "uno_assets_2d/PNGs/small/green_3.png",
  },
  {
    id: "g4",
    color: "Green",
    value: 4,
    url: "uno_assets_2d/PNGs/small/green_4.png",
  },
  {
    id: "g5",
    color: "Green",
    value: 5,
    url: "uno_assets_2d/PNGs/small/green_5.png",
  },
  {
    id: "g6",
    color: "Green",
    value: 6,
    url: "uno_assets_2d/PNGs/small/green_6.png",
  },
  {
    id: "g7",
    color: "Green",
    value: 7,
    url: "uno_assets_2d/PNGs/small/green_7.png",
  },
  {
    id: "g8",
    color: "Green",
    value: 8,
    url: "uno_assets_2d/PNGs/small/green_8.png",
  },
  {
    id: "g9",
    color: "Green",
    value: 9,
    url: "uno_assets_2d/PNGs/small/green_9.png", 
  },
  {
    id: "g10",
    color: "Green",
    value: 10,
    url: "uno_assets_2d/PNGs/small/green_picker.png",
  },
  {
    id: "g11",
    color: "Green",
    value: 11,
    url: "uno_assets_2d/PNGs/small/green_reverse.png",
  },
  // {
  //   id: "g12",
  //   color: "Green",
  //   value: 12,
  //   url: "uno_assets_2d/PNGs/small/green_skip.png",
  // },
  {
    id: "r0",
    color: "Red",
    value: 0,
    url: "uno_assets_2d/PNGs/small/red_0.png",
  },
  {
    id: "r1",
    color: "Red",
    value: 1,
    url: "uno_assets_2d/PNGs/small/red_1.png",
  },
  {
    id: "r2",
    color: "Red",
    value: 2,
    url: "uno_assets_2d/PNGs/small/red_2.png",
  },
  {
    id: "r3",
    color: "Red",
    value: 3,
    url: "uno_assets_2d/PNGs/small/red_3.png",
  },
  {
    id: "r4",
    color: "Red",
    value: 4,
    url: "uno_assets_2d/PNGs/small/red_4.png",
  },
  {
    id: "r5",
    color: "Red",
    value: 5,
    url: "uno_assets_2d/PNGs/small/red_5.png",
  },
  {
    id: "r6",
    color: "Red",
    value: 6,
    url: "uno_assets_2d/PNGs/small/red_6.png",
  },
  {
    id: "r7",
    color: "Red",
    value: 7,
    url: "uno_assets_2d/PNGs/small/red_7.png",
  },
  {
    id: "r8",
    color: "Red",
    value: 8,
    url: "uno_assets_2d/PNGs/small/red_8.png",
  },
  {
    id: "r9",
    color: "Red",
    value: 9,
    url: "uno_assets_2d/PNGs/small/red_9.png", 
  },
  {
    id: "r10",
    color: "Red",
    value: 10,
    url: "uno_assets_2d/PNGs/small/red_picker.png",
  },
  {
    id: "r11",
    color: "Red",
    value: 11,
    url: "uno_assets_2d/PNGs/small/red_reverse.png",
  },
  // {
  //   id: "r12",
  //   color: "Red",
  //   value: 12,
  //   url: "uno_assets_2d/PNGs/small/red_skip.png",
  // },
  {
    id: "y0",
    color: "Yellow",
    value: 0,
    url: "uno_assets_2d/PNGs/small/yellow_0.png",
  },
  {
    id: "y1",
    color: "Yellow",
    value: 1,
    url: "uno_assets_2d/PNGs/small/yellow_1.png",
  },
  {
    id: "y2",
    color: "Yellow",
    value: 2,
    url: "uno_assets_2d/PNGs/small/yellow_2.png",
  },
  {
    id: "y3",
    color: "Yellow",
    value: 3,
    url: "uno_assets_2d/PNGs/small/yellow_3.png",
  },
  {
    id: "y4",
    color: "Yellow",
    value: 4,
    url: "uno_assets_2d/PNGs/small/yellow_4.png",
  },
  {
    id: "y5",
    color: "Yellow",
    value: 5,
    url: "uno_assets_2d/PNGs/small/yellow_5.png",
  },
  {
    id: "y6",
    color: "Yellow",
    value: 6,
    url: "uno_assets_2d/PNGs/small/yellow_6.png",
  },
  {
    id: "y7",
    color: "Yellow",
    value: 7,
    url: "uno_assets_2d/PNGs/small/yellow_7.png",
  },
  {
    id: "y8",
    color: "Yellow",
    value: 8,
    url: "uno_assets_2d/PNGs/small/yellow_8.png",
  },
  {
    id: "y9",
    color: "Yellow",
    value: 9,
    url: "uno_assets_2d/PNGs/small/yellow_9.png", 
  },
  {
    id: "y10",
    color: "Yellow",
    value: 10,
    url: "uno_assets_2d/PNGs/small/yellow_picker.png",
  },
  {
    id: "y11",
    color: "Yellow",
    value: 11,
    url: "uno_assets_2d/PNGs/small/yellow_reverse.png",
  },
  // {
  //   id: "y12",
  //   color: "Yellow",
  //   value: 12,
  //   url: "uno_assets_2d/PNGs/small/yellow_skip.png",
  // },
  // {
  //   id: "wild1",
  //   color: "RGBY",
  //   value: 13,
  //   url: "uno_assets_2d/PNGs/small/wild_color_changer.png",
  // },
  // {
  //   id: "wild4",
  //   color: "RGBY",
  //   value: 14,
  //   url: "uno_assets_2d/PNGs/small/wild_pick_four.png",
  // },
  //remember to add in other special cards after designing them
];

////////////////////// * Functions !! ////////////////////
//function for players to draw cards
const draw = (num) => {
  //tempPlayer is used to know which player I want to append the cards to
  let tempPlayer = currentPlayer;
  if (num > 1) {
    if (gameDirection === 1) {
      tempPlayer = currentPlayer +1;
      if (tempPlayer > 2) { 
        tempPlayer = 0; 
      }
    } else if (gameDirection === -1) { 
      tempPlayer = currentPlayer -1;
      if (tempPlayer < 0) {
        tempPlayer = 2;
      }
    }
  } 
  //in case of drawing more than 1 (like the attack cards)
  for (let i = 0; i < num; i++) {
    let randomCard = deck.pop();
        if (tempPlayer === 0) { //if its myself, need the onClick handler
          $img1 = $("<img>")
          .attr("src", randomCard.url)
          .attr("color", randomCard.color)
          .attr("value", randomCard.value)
          .attr("cardId", randomCard.id)
          .on("click" , clickEventHandler //this is an event handler function
    );
        } else {
        $img1 = $("<img>").attr("src", randomCard.url)
        .attr("color", randomCard.color)
        .attr("value", randomCard.value)
        .attr("cardId", randomCard.id)
        }
    $(playerTag[tempPlayer]).append($img1); 
    players[tempPlayer].push(randomCard);
      }
  setTimeout(nextPlayer,  2000);
};

//initialising a helper function
const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

////////* start game with 3 players and their random cards! //////////

//function for player1 = me
const start = () => {
  console.log("start");
  deck = originalDeck.slice(0);
  shuffle(deck);

  $div = $("<div>").addClass("player1");
  $(".players").append($div);
  for (let i = 0; i < 2; i++) {
    //to draw the card and remove card from the deck
    let randomCard = deck.pop();
    //also make image tag with attribute source and source value = pic of randomcard drawn
    //attr is just the variable/value and to identify the card
    $img = $("<img>")
      .attr("src", randomCard.url)
      .attr("color", randomCard.color)
      .attr("value", randomCard.value)
      .attr("cardId", randomCard.id)
      .on("click" , clickEventHandler //this is an event handler function
);
    player1Hand.push(randomCard);
    $(".player1").append($img);
  }
  
  //adding player2 cards
  $div = $("<div>").addClass("player2");
  $(".players").append($div);
  for (let i = 0; i < 2; i++) {

    let randomCard = deck.pop();
    $img = $("<img>")
      .attr("src", randomCard.url)
      .attr("color", randomCard.color)
      .attr("value", randomCard.value)
      .attr("cardId", randomCard.id);

    //so i can loop through the array of player1Hand
    player2Hand.push(randomCard);
    $(".player2").append($img);
  };

  //adding player3 cards
  $div = $("<div>").addClass("player3");
  $(".players").append($div);
  for (let i = 0; i < 2; i++) {
    let randomCard = deck.pop();
    $img = $("<img>")
      .attr("src", randomCard.url)
      .attr("color", randomCard.color)
      .attr("value", randomCard.value)
      .attr("cardId", randomCard.id);

    player3Hand.push(randomCard);
    $(".player3").append($img);
  }

  //create cardsPlayed area to start with one random card like player
  $div = $("<div>").addClass("cardPlayed");
  $(".players").append($div);
  let randomCard = deck.pop();
  $img = $("<img>")
    .attr("src", randomCard.url)
    .attr("color", randomCard.color)
    .attr("value", randomCard.value)
    .attr("cardId", randomCard.id);
  cardPlayed.push(randomCard);
  $(".cardPlayed").append($img);
  //
};

const restart = () => {
  $(".cardPlayed").remove();
  $(".player1").remove();
  $(".player2").remove();
  $(".player3").remove();
  //emptying the array
  player1Hand.splice(0, player1Hand.length); //resets array back to 0
  player2Hand.splice(0, player2Hand.length);
  player3Hand.splice(0, player3Hand.length);
  currentPlayer = 0;
  cardPlayed.splice(0, cardPlayed.length);
  setTimeout(start,  2000); 
}


////////////* Check function! ////////////////

//function to check against playerHands and color/value
const checkForColor = (color, playerHand) => {
  for (let i = 0; i < playerHand.length; i++) {
    if (color === playerHand[i].color) {
      return i;
    }
  }
  return -1;
};

const checkForValue = (value, playerHand) => {
  for (let i = 0; i < playerHand.length; i++) {
    if (value === playerHand[i].value) {
        return i;
    }
  }
  return -1;
};

//Building the direction for the 2 players and also for reverse card
//Turn function is built on currentPlayer
const nextPlayer = () => {
  console.log("number of cards left: " + deck.length);
  if (gameDirection === 1) {
    currentPlayer += 1;
    if (currentPlayer > 2) { //because there's only 3 players so the loop wont go on forever
      currentPlayer = 0; //goes back to me so it can reset to the origin
    }
  } else if (gameDirection === -1) { //reverse the direction (for reverse card also)
    currentPlayer -= 1;
    if (currentPlayer < 0) {
      currentPlayer = 2;
    }
  }
  if (currentPlayer === 0) {
    console.log("my turn la")
    return; 
  }

  //get last element of the array which is the top played card so this array can find the first card suitable to play
  let chosenCard = checkForColor(
    cardPlayed[cardPlayed.length -1].color, players[currentPlayer]
  );

  if (chosenCard < 0) {
    //check top card with the hand, check color first, if dont have, check value
    chosenCard = checkForValue(
      cardPlayed[cardPlayed.length -1].value, players[currentPlayer]
    );
  }
  console.log(chosenCard);

  if (chosenCard < 0) {
    //this is where a player needs to draw card if both conditions not fulfilled
    console.log(currentPlayer + 1 + "draw");
    draw(1);

  } else {
    //this is where a player puts a card into the playedCards pile
    //move img tag from the playerHand to the middle
    console.log(currentPlayer + 1 + "play");
    let card = players[currentPlayer][chosenCard];
    //jquery select by attribute/value => attribute contains selector
    //querying the dom obj of the specific img tag with the attr cardId of the card
    $("img[cardid*='"+ card.id +"']").remove();
    //add the selected card to the cardPlayed array
    cardPlayed.push(card);
    $(".cardPlayed").empty();
    $img1 = $("<img>").attr("src", card.url)
      .attr("color", card.color)
      .attr("value", card.value)
      .attr("cardId", card.id);
      $(".cardPlayed").append($img1); 

     //delete the chosenCard from playerHand
    players[currentPlayer].splice([chosenCard], 1);
    console.log("hi")
    if (players[currentPlayer].length === 0) {
      setTimeout(() => {alert ("Player "+ (currentPlayer +1) + " WON!")},  1000); 
      // alert ("Player "+ (currentPlayer +1) + " WON!");
    } else {
      if (card.value === 11) {
        reverse();
      } else if (card.value === 10){
        draw(2);
      }
      if (card.value !== 10) {
      setTimeout(nextPlayer,  2000);
      }
    }
  }
};

//clickEventHandler is created for player1Hand, 2 places uses this
const clickEventHandler = (event) => {
  //the if function puts a check so it wont play what it shouldnt play
  //add the condition to find out if the color of the chosenCard is the same as the color of the cardPlayed or the value of the chosenCard is the same value as the cardPlayed
  if ((cardPlayed[cardPlayed.length -1].color === event.target.getAttribute("color")) || (cardPlayed[cardPlayed.length -1].value === parseInt(event.target.getAttribute("value")))) {
      $("img[cardid*='"+ event.target.getAttribute("cardId") +"']").appendTo($(".cardPlayed"));
      //add from hand to the drawnPile
      let tempId = (event.target.getAttribute("cardId"));
      // use i as a counter to add card from hand to cardPlayed pile and remove card from player hand
      // the i have to be the same because the card in player hand is the same
      let tempValue = 0;
      for (i = 0; i < player1Hand.length; i++) {
      if (tempId === player1Hand[i].id) {
          cardPlayed.push(player1Hand[i]); //push the card into the cardPlayed pile
          $("img[cardid*='"+ event.target.getAttribute("cardId") +"']").remove();
          tempValue = player1Hand[i].value;
         //removing the all the child and adding the latest card
          $(".cardPlayed").empty();
          $img1 = $("<img>").attr("src", player1Hand[i].url)
            .attr("color", player1Hand[i].color)
            .attr("value", player1Hand[i].value)
            .attr("cardId", player1Hand[i].id);
            $(".cardPlayed").append($img1); 
            player1Hand.splice(i, 1); // remove 1 element in the index
          console.log(player1Hand);
          break; //break the if loop
      }
      }
      if (player1Hand.length === 0) {
        setTimeout(() => {alert ("You WON!")},  1000);
      } else {
        if (tempValue === 11) {
          console.log("reversing for me ah");
          reverse();
        } else if (tempValue === 10){
          draw(2);
        }
        if (tempValue !== 10) {
        setTimeout(nextPlayer,  2000);
        }
      }
  }
}

const reverse = () => {
  console.log("reverse liao");
  if (gameDirection === 1) {
    console.log("forward")
    gameDirection = -1;
    //else if is to write condition
  } else if (gameDirection === -1) {
    console.log("backwards")
    gameDirection = 1;
  }
}







