<h1 align="center">Project 1 - One Card</h1>


## Game link

Visit the game here: https://project1-onecard.vercel.app

## Game play
Creating a simplified game like Uno.

Players aim to remove their cards from their own deck as quick as possible. 

There will be 1 player & 2 bots. Each player is dealt 5 cards and 1 card that has the same color/number can be played per turn. Each turn ends when a card is played/drawn.

If the player has no more cards in hand, the game is over with that player as the winner.

## MVP
The game will need to have the following features at the minimum:
-	A gameboard
-	Players
-	Clickable cards to play and draw
-	Will be able to move on to next player when a card is played

**Bonus:** 
-	Include animation
-	Start game and instructions
-	Option to start new game
-	Background sound/effects
-	Design
-	Multi-player

## Initial conceptalisation/Wire Frame

**Landing Page:**

![landing page](https://user-images.githubusercontent.com/90884013/134541569-e93d0887-41be-42a2-9aa7-133e5d89a95d.png)

**Instruction Pop-Up:**

![instruction pop up framework](https://user-images.githubusercontent.com/90884013/134541673-012563a2-0918-4862-bb70-80c555318d57.png)

**Main Page:**
Game page is loaded once “Start Game” is pressed. Players will be able to distinguish when is their turn by colour.
The restart button is at the top-right of the page.

![main page framework](https://user-images.githubusercontent.com/90884013/134541751-1ed6e6be-972e-4633-a011-7df957dc6b60.png)

**Game Over:**
Pop-up appears to indicate who has won and if they would like a rematch. Restarts the game and the players are dealt with 5 random cards again.

![new game](https://user-images.githubusercontent.com/90884013/134541933-204992cc-9b4d-41a1-bccc-ecd47ef85ea2.png)


## Game components
**Cards as follows:**
-	0-9 red
-	0-9 blue
-	0-9 green
-	0-9 yellow
-	4 Skip cards
-	4 Reverse
-	4 Attack cards 
-	1 King card (bonus)

**Special cards:**
When a special card is played, the next player must draw one or more cards, or play another special card.
These cards are special cards. Watch out!

-	Reverse: This card reverses the flow of the turn
-	Attack: +2 attack card where the next unfortunate player has to draw extra cards from the deck
-	Skip: This card will cause the next player to skip their turn
-	King: removes all green cards from player’s hands (BONUS)


## Built With

- JavaScript
- HTML
- CSS
