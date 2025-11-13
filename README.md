# TOP - Rock, Paper, Scissors (Now Dog, Mouse, Cat Variant)
A simple Rock Paper Scissors game built with JavaScript as part of The Odin Project.

## Current Version
Console-based gameplay using `prompt()` and `console.log()`.

### Pseudocode
1. Define an array 'choices' with ['rock', 'paper', 'scissors']
2. Create a function getComputerChoice():
- Randomly pick one value from 'choices'
3. Create a function getHumanChoice():
- Ask the user for input using prompt()
- Convert input to lowercase
4. Create a function playGame():
- Initialize humanScore and computerScore to 0
- Define playRound() inside playGame():
- Compare choices and determine winner
- Update scores accordingly
- Run playRound() 5 times using a loop
- After 5 rounds, print the final result
5. Call playGame() to start the game

### Revisited UI
A simple Dog, Cat, Mouse game built with JavaScript as part of The Odin Project.
Originally console-based, now upgraded with a graphical user interface featuring 
clickable images, live score tracking, and random funny lines after each round.

#### Features 
-Clickable images for each choice (dog, cat, mouse)
-Real-time score updates for player and computer
-Round results displayed instantly on-screen
-Dynamic “funny” commentary for every round
-Game ends when a player reaches 5 points
-Restart button appears automatically after game over

#### Updated Pseudocode
1. Define an array 'choices' with ['dog', 'cat', 'mouse']
2. Create variables:
   - humanChoice
   - humanScore = 0
   - computerScore = 0
   - humanScorePara and computerScorePara (DOM elements for score display)
3. Use querySelectorAll('img') to select all choice images
   - Add event listeners for clicks:
       a. Set humanChoice based on the clicked image (data-choice)
       b. Call playGame()
4. Define getComputerChoice():
   - Randomly pick one from ['dog', 'cat', 'mouse']
5. Define playGame():
   - Continue while neither player has reached 5 points
   - Once a score hits 5, display winner and disable inputs
   - Add a “Play again?” button that reloads the page
6. Define playRound():
   - Compare humanChoice and computerChoice:
       - dog beats cat
       - cat beats mouse
       - mouse beats dog
   - Update scores and display randomized commentary