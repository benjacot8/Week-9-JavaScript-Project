// War Card Game
// Week 9 JavaScript Coding Assignment

// Necessary components:
/**
 * Deck
 * -52 cards (4 suits, 13 ranks)
 * -way to shuffle the deck
 * -way to deal cards to players
 * 
 * Players
 * -Name (Player 1, Player 2)
 * -Score
 * -Hand
 * 
 * 
 * Logic to play the game
 * -way to compare the numbers on the cards
 * -way to handle ties (wars)
 * -way to keep track of score
 * -way to determine when the game is over and who the winner is
 * UI to display the game state
 * 
 */

// Deck class
/** Should have:
 * An array to store the cards
 * An array to store all the card ranks
 * An array to store all the card suits
 * 
 * 
 * 
 */
class Deck {
    constructor() {
        // Initialize deck, suits, ranks, and cards
        this.deck = [];
        this.suits = ['Hearts ♥', 'Diamonds ♦', 'Clubs ♣', 'Spades ♠'];
        this.ranks = [
            'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            'Jack', 'Queen', 'King'];
    }
        
        // Method to create a deck and iterate over ranks and suits
        // push a new card....(as an object) to the deck array (via our constructor this.deck)
        createDeck() {
            for (let i = 0; i < this.suits.length; i++) {
                for (let j = 0; j < this.ranks.length; j++) {
                    let card = {
                        name: `${this.ranks[j]} of ${this.suits[i]}`,
                        value: j + 1
                    };
                    this.deck.push(card);
                }
            }
        };

        // Shuffle method using Fisher-Yates algorithm
        shuffleDeck() {
            for (let i = this.deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }   
        };

}

// Create and shuffle the deck
const deck = new Deck();
deck.createDeck();
deck.shuffleDeck();


/** Needs:
 * Deck......instantiate a new deck inside of the game class
 * Create the deck, shuffle the deck, and pass the deck
 * Logic to play the game
 *  -NEEDS:
 *  -turn based, how many turns?
 *  -do our players have a hand yet?
 *  -control flow logic to decide who wins each turn
 * 
 * 2 players
 *  -Hand
 *  -Score
 *  -Name
 */

// Class for game players and WAR game logic
/* Should have:
    * A deck (instantiate a new deck inside of the game class)
    * Create the deck, shuffle the deck, and pass the deck
    * Logic to play the game
    * -NEEDS:
    * -turn based, how many turns?
    * -do our players have a hand yet?  
    * -Control flow logic to decide who wins each turn
    * -Determine the overall winner
    * 
    * Players:
    * -Hand
    * -Score
    * -Name
*/

class Game {
    constructor() {
        // Initialize players, set starting score to 0, and empty hands
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        };
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        };
    }

    // Method to play the game
    /*
    * Pass out cards to our players
    * Take x amount of turns.....
    * as long as players have cards (or the number of cards they have)
    * Award points based on card.value
    * Log the winner.
    */ 
   playGame() {
    // Instantiate a new deck, create a deck, and shuffle it
    const deck = new Deck();
    deck.createDeck();
    deck.shuffleDeck();

    // While loop to deal cards to players, shift card out of array
    while(deck.deck.length !== 0) {

        this.player1.hand.push(deck.deck.shift());
        this.player2.hand.push(deck.deck.shift());
    }

    // Actually playing the game.....how many turns do I need?
    for (let i = 0; i < this.player1.hand.length; i++) {

        // Conditional logic to compare card values and award points
        // When player 1's card is greater than player 2's card:
        if (this.player1.hand[i].value > this.player2.hand[i].value) {
            this.player1.score++;
            console.log(`
                P1 card: ${this.player1.hand[i].name}
                P2 card: ${this.player2.hand[i].name}
                Player 1 wins a point!
                Current score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `);
        } 
        // When player 2's card is greater than player 1's card:
        else if (this.player1.hand[i].value < this.player2.hand[i].value) {
            this.player2.score++;
            console.log(`
                P1 card: ${this.player1.hand[i].name}
                P2 card: ${this.player2.hand[i].name}
                Player 2 wins a point!
                Current score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `);
        }
        // When there is a tie:
        else {
            console.log(`
                P1 card: ${this.player1.hand[i].name}
                P2 card: ${this.player2.hand[i].name}
                It's a tie! No points awarded.
                Current score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `);
        }
    }

    
    // Determine the overall winner
    // When player 1 has a higher score:
    if (this.player1.score > this.player2.score) {
        console.log('Player 1 wins!');
    } 
    // When player 2 has a higher score:
    else if (this.player1.score < this.player2.score) {
        console.log('Player 2 wins!');
    } 
    // When there is a tie:
    else {
        console.log('Tie!');
    }

}

}

// Instantiate a new game and play
const game = new Game();
game.playGame();