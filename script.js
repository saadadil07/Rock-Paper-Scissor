var userScore = 0;
var compScore = 0;

const choices = document.querySelectorAll('.box');

const getCompChoice = ()=>{
    const choices = ['rock', 'paper', 'scissor'];
    const r_index = Math.floor(Math.random()*choices.length);
    return  choices[r_index];
}

function showWinner(userWin){
    if(userWin){
        console.log('u won');
        document.getElementById('message').innerHTML='You Won!';
        userScore++;
        document.getElementById('uScore').innerHTML = `${userScore}`;
    }
    else{
        console.log('u lose');
        document.getElementById('message').innerHTML='You Lose!';
        compScore++;
        document.getElementById('cScore').innerHTML=compScore;
    }
    if(userScore>=10){
        document.getElementById('message').innerHTML=`Congrats ! u won final , score is: ${userScore}`;
    }
    else if(compScore>=10){
        document.getElementById('message').innerHTML=`GAME OVER! u lose , final score is: ${userScore}`;
    }
}

const playGame = (userChoice)=>{
    const compChoice = getCompChoice();
    if(userChoice===compChoice){
        console.log('draw');
        document.getElementById('message').innerHTML="It's a Draw!";
    }
    else{
        let userWin = true;
        if(userChoice==='rock'){
           userWin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice==='paper'){
            userWin = compChoice==='scissor'? false : true;
    }
    else{
        userWin = compChoice==='rock' ? false:true;
    }
    showWinner(userWin);
}
}
choices.forEach((choice)=>{
    choice.addEventListener('click', function(){
        const userChoice = choice.getAttribute('id'); 
        playGame(userChoice);  
    })
})