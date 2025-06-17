let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
    return  ;
  });
});

const computerChoice = () =>{
    let choices = ["rock","paper","scissors"];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

const playgame = (userChoice) =>{
    console.log("User Choice",userChoice);
    const compChoice = computerChoice();
    console.log("Computer Choice", compChoice)
    let userWon = gameChoice(userChoice,compChoice);
    gameWin(userWon);
}

let show = document.querySelector("#play");
const gameChoice = (userChoice,compChoice) =>{
    let userWon;
    if(userChoice === compChoice)
    {
        console.log("match draws!");
        show.innerText = "Mathch draw...";
        show.style.backgroundColor = "blue";
    }
    else if(userChoice === "rock")
    {
       userWon = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper")
    {
        userWon = compChoice === "rock" ? true : false;
    }
    else if(userChoice === "scissors")
    {
        userWon = compChoice === "paper" ? true : false;
    }
    return userWon;
}
const gameWin = (userWon) =>{
    if(userWon == true)
    {
        console.log("U won");
        show.innerText = "U won";
        show.style.backgroundColor = "green";
        userScore++;
        userPara.innerText = `${userScore}`;
    }
    else if(userWon == false){
        console.log("U loose");
        show.innerText = "U loose";
        show.style.backgroundColor = "red";
        compScore++;
        compPara.innerText = `${compScore}`;
    }
}