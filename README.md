# TOP - Rock, Paper, Scissors
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