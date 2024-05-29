let userScore=0;
let compScore=0;


const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

choice.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId=choice.getAttribute("id")
        console.log("choice was clicked",choiceId);
        playgame(choiceId);
    });
});

const playgame=(choiceId)=>{
    console.log("user choice = ",choiceId);
    const compChoices=compChoice();
    console.log("computer choice = ",compChoices);
    if(choiceId===compChoices){
        drawgame();
    } else{
        let userWin=true;
        if(choiceId==="rock"){
            userWin= compChoices==="paper" ? false : true;
        } else if(choiceId==="paper"){
           userWin= compChoices==="secissor" ? false : true;
        } else {
            userWin= compChoices==="rock" ? false : true;
        }
        showWinner(userWin, choiceId, compChoices);
    }
};

const compChoice=()=>{
    const options= ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=()=>{
    msg.innerText="game was draw";
    msg.style.backgroundColor="yellow";
};

const showWinner=(userWin, choiceId,compChoices)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win ${choiceId} beats ${compChoices}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose ${compChoices} beats ${choiceId} `;
        msg.style.backgroundColor="red";
    }
};