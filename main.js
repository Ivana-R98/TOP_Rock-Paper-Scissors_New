let choices = ['dog', 'mouse', 'cat'];
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;
let humanScorePara = document.getElementById("humanScore");
let computerScorePara = document.getElementById("computerScore");

const imgChoices = document.querySelectorAll('img');
imgChoices.forEach(img => {
    img.addEventListener("click", () => {
        humanChoice = img.dataset.choice;
        playGame();
    })
})

function getComputerChoice () {
    return choices[Math.floor(Math.random() * 3)];
}

function playGame () {
    if(computerScore < 5 && humanScore < 5) {
        playRound();
    }
    if(computerScore === 5 || humanScore === 5) {
        imgChoices.forEach(img => {
            img.style.pointerEvents = 'none';
        });
        if(computerScore > humanScore) {document.getElementById("total").innerText = "💻 Computer reigns supreme!"}
        else {document.getElementById("total").innerText = "🐾 You win the battle of the beasts!"}

        const btn = document.createElement("button");
        btn.innerText = "Play again?";
        btn.addEventListener("click", () => {
            window.location.reload();
        })
        document.body.appendChild(btn);
    } 
}

function playRound () {

    const funnyLines = [
        "What a mess in the living room!",
        "This one's going in the pet history books!",
        "Someone's getting blamed for this...",
        "Another day, another fur fight!",
        "🎾 The battle pauses as a tennis ball rolls by.",
        "🍪 Distraction! A cookie falls to the floor!",
        "💤 Everyone takes a micro-nap mid-fight.",
        "🪴 The plant didn't survive this round.",
        "📦 Someone hid in a box. Classic move.",
        "🦴 A truce? Nope. False alarm.",
        "🎵 Background music intensifies dramatically.",
        "💨 Everyone just scattered for no reason.",
        "🤯 The crowd gasps! Even the goldfish is watching.",
        "🍕 Mid-fight pizza delivery arrives. Priorities."
    ];
    const dogLines = [
        "Dog: 'Who's a winner? I'm a winner!' 🐾",
        "Dog: 'Victory smells like… snacks.' 🍖",
        "Dog: 'Woof yeah! I'm unstoppable!' 💪🐶",
        "Dog: 'One paw ahead of the competition!' 🐾🔥",
        "Dog: 'You can't leash greatness.' ⛓️🐕",
        "Dog: 'I didn't chase my tail for nothing!' 🌀",
        "Dog: 'I told you — I'm top of the pack!' 🐾",
        "Dog: 'That's how you fetch a win!' 🎾",
        "Dog: 'Tail wag = dominance dance.' 💃🐕",
        "Dog: 'Who let the dogs out? WOOF WOOF WOOF'"
    ];
    const catLines = [
        "Cat: 'Typical. I win again.' 😼",
        "Cat: 'I didn't even try.' 🐱‍👤",
        "Cat: 'You may applaud now, human.' 😏",
        "Cat: 'Grace, power, perfection. As always.' 🐈‍⬛",
        "Cat: 'Purrfection isn't easy, but I make it look that way.' 🐾",
        "Cat: 'Another victory for the fluff overlord.' 👑",
        "Cat: 'Bow before your fuzzy ruler.' 👑🐱",
        "Cat: 'My reflection is the only worthy opponent.' 💅",
        "Cat: 'Please, I do this between naps.' 😪",
        "Cat: 'You call that competition? Adorable.' 😹",
    ];
    const mouseLines = [
        "Mouse: 'Quick thinking wins again!' 🐭💨",
        "Mouse: 'Too small to lose, too fast to catch!' ⚡",
        "Mouse: 'Squeak yeah!' 🎉",
        "Mouse: 'Cheese later, victory now.' 🧀",
        "Mouse: 'Blink and you'll miss my greatness.' 😎",
        "Mouse: 'You gotta be swift to survive, and I thrive!' 💫",
        "Mouse: 'You call that a trap? Cute.' 🪤😏",
        "Mouse: 'Small size, massive ego.' 😎",
        "Mouse: 'You can't cheese a champion!' 🧀👑",
        "Mouse: 'You can't hit what you can't catch!' 💨",
    ];

    let roundText = "";
    let computerChoice = getComputerChoice();
    document.getElementById("choices").innerText = `Human chooses: ${humanChoice}
    Computer chooses: ${computerChoice}`;

    if(computerChoice === humanChoice) {
        const ties = [
            "It's a standoff! Both look confused 🌀",
            "No winners, just awkward eye contact 👀",
            "Draw! Everyone still hates the vacuum cleaner.",
            "They agreed to a truce... for now.",
            "Everyone pauses to catch their breath 🐾",
            "Awkward silence. You could cut the tension with a claw. 😅",
            "📞 The phone is ringing... who will make the first move...",
            "☎️ Both stop mid-fight. The phone rings. Nobody moves.",
            "☎️ Nobody wins. The phone just wants attention.",
        ];
        roundText = ties[Math.floor(Math.random() * ties.length)];
    }
    else if (humanChoice === 'dog' && computerChoice === 'cat') {
        roundText = "Dog chases the Cat! 💨\n" + dogLines[Math.floor(Math.random() * dogLines.length)];
        humanScore++;
    } 
    else if (humanChoice === 'cat' && computerChoice === 'mouse') {
        roundText = "Cat pounces on the Mouse! 🐱🐭\n" + catLines[Math.floor(Math.random() * catLines.length)];
        humanScore++;
    } 
    else if (humanChoice === 'mouse' && computerChoice === 'dog') {
        roundText = "Mouse outsmarts the Dog! 🧠🐭\n" + mouseLines[Math.floor(Math.random() * mouseLines.length)];
        humanScore++;
    } 
    else if (computerChoice === 'dog' && humanChoice === 'cat') {
        roundText = "Dog chases the Cat up a tree! 🌳\n" + dogLines[Math.floor(Math.random() * dogLines.length)];
        computerScore++;
    } 
    else if (computerChoice === 'cat' && humanChoice === 'mouse') {
        roundText = "Cat corners the Mouse! 😼\n" + catLines[Math.floor(Math.random() * catLines.length)];
        computerScore++;
    } 
    else if (computerChoice === 'mouse' && humanChoice === 'dog') {
        roundText = "Mouse sneaks past the Dog! 🐭💨\n" + mouseLines[Math.floor(Math.random() * mouseLines.length)];
        computerScore++;
    }

    // Combine both
    const extra = funnyLines[Math.floor(Math.random() * funnyLines.length)];
    document.getElementById("roundWinner").innerText = `${roundText}\n${extra}`;

    humanScorePara.innerText = "Human Score: " + humanScore;
    computerScorePara.innerText = "Computer Score: " + computerScore;
}