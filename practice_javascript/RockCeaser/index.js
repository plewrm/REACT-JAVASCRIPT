let userScoreCount=0;
let compScoreCount=0;
let resultMsg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice")
let userScore = document.querySelector("#user-score")
let compScore = document.querySelector("#comp-score")

const showWin = (userWin,userChoice,compChoice) => {
    if (userWin) {
        console.log("You Won....!");
        userScoreCount++;
        userScore.innerText=userScoreCount;
        resultMsg.textContent = `You Won...🙌🙌 your choice ${userChoice} beats ${compChoice}`
        resultMsg.style.backgroundColor="green"


    } else {
        console.log("You Lost....!");
        compScoreCount++;
        compScore.innerText=compScoreCount;
        resultMsg.textContent = `You Loose...😑😑 ${compChoice} beats your choice ${userChoice}`
        resultMsg.style.backgroundColor="red"

    }
}

const drawGame = () => {
    resultMsg.textContent = "Game Are Drawn..."
    resultMsg.style.backgroundColor="#837426"
}
const playGame = (userChoice) => {
    console.log(userChoice)
    const compChoice = generateCompChoice()
    console.log(compChoice)
    if (userChoice === compChoice) {
        // alert("Game Draw")
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true
        } else {
            userWin = compChoice === "rock" ? false : true
        }
        showWin(userWin,userChoice,compChoice)
    }
}

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randomIndex = Math.floor(Math.random() * 3)
    return options[randomIndex]
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("Print Choices",userChoice);
        playGame(userChoice);
    })
})