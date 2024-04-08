// you can write js here
console.log('exo-3');
const chifoumeBtn=document.getElementById("chifoume");
console.log(typeof chifoumeBtn);
console.log(chifoumeBtn);

chifoumeBtn.addEventListener("click",()=>{playGame()});









function getPlayerChoice(playerInput){
    playerInput=playerInput.toLowerCase();
    if(playerInput ==='rock'|| playerInput ==='paper' ||playerInput === 'scissors'){
        return playerInput;
    }else {
        return console.log('ERROR');
    }
}

function getComputerChoice(){
    const choice=['rock','paper','scissors'];
    return choice[Math.floor(Math.random()*3)];
}

function findWinner( uchoice,computerChoice){
    if(uchoice===computerChoice){
        return 'tied';
    }
    else{
        if(uchoice==='rock'){
            if (computerChoice==='scissors'){
                return 'Won';
            }
            else{ return 'Lost;'}
        }else if(uchoice==='paper'){
            if (computerChoice==='scissors'){
                return 'Lost';
            }
            else{ return 'Won';}
        }
        else{
            if (computerChoice==='rock'){
                return 'Lost';
            }
            else{ return 'Won';}
        }
    }
}
function playGame(){
    let playerInput = prompt("Your choice ( rock, paper, scissors) ?");
    let uchoice=getPlayerChoice(playerInput);
    let computerChoice=getComputerChoice();
    let computerChoicePrinted="computer choice is "+computerChoice;
    alert(computerChoicePrinted);
    console.log(uchoice);
    console.log(computerChoice);
    console.log(findWinner(uchoice,computerChoice));
    alert(findWinner(uchoice,computerChoice));
}
// playGame();