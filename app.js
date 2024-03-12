let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gencompchoice = ()=>{
    const options = ["rock","paper","scissors"]
    const random = Math.floor(Math.random()*3);
    return options[random];
}
const drawgame = () => {
    msg.innerText = "Game Was Draw . play again";
    msg.style.backgroundcolor = "blueviolet";
};
const showWinner = (userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++
        msg.innerText = `You Win !Your ${userchoice} bits ${compchoice}`;
        msg.style.backgroundColor = "Green";
        userscorepara.innerText=userscore;
    }
    else {
        compscore++
        msg.innerText = `You lose.${compchoice} bits Your ${userchoice}`;
        msg.style.backgroundColor = "Red";
        compscorepara.innerText=compscore;
    }
};
const playGame =(userchoice) =>{
    const compchoice = gencompchoice();
    if (userchoice===compchoice){
      drawgame();}
      else {
        let userWin = true;
        if(userchoice==="rock"){
           userWin = compchoice==="paper" ? false : true;
        }
        else if(userchoice==="paper"){
            userWin = compchoice==="scissors" ? false : true ;
        }else {
           userWin = compchoice === "rock" ? false : true ;
        }
        
     
     showWinner(userWin,userchoice,compchoice);
      }
      

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
        
    })
})
