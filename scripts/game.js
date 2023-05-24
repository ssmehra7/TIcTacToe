function startgame(){

    if(player[0].name==='' && player[1].name===''){
        alert('Please enter a custom name');
    }else{
        playingarea.style.display='block';
    }
    

}

function switchplayer(){
    if(activeid===0){
        activeid=1;
    }else{
        activeid=0;
    }
}

function win(){

    for (let i=0;i<3;i++){
        if ( gamedata[i][0]>0 && gamedata[i][0]===gamedata[i][1] && gamedata[i][0]===gamedata[i][2]){
           
            return gamedata[i][0];
            
        }
    }

    for (let i=0;i<3;i++){
        if (gamedata[0][i]>0 && gamedata[0][i]===gamedata[1][i] && gamedata[1][i]===gamedata[2][i]){
           
            return gamedata[0][i];
            
        }
    }

    if( gamedata[0][0]>0 && gamedata[0][0]===gamedata[1][1] && gamedata[1][1]===gamedata[2][2]){
         
            return gamedata[0][0];
    
    }

    if(gamedata[0][2]>0 && gamedata[0][2]===gamedata[1][1] && gamedata[1][1]===gamedata[2][0]){
       
            return gamedata[0][2];
        
    }

    if(counter===9){
        return -1;
    }

    return 0;
}


function selectgamefield(event){
    
    
    const selectedfield=event.target;
    const col=selectedfield.dataset.col-1;
    // console.log(col);
    const row=selectedfield.dataset.row-1;
    // console.log(row);
    console.log(gamedata);
    if(gamedata[row][col]>0){
        alert('This block is already taken!!');
        return;
    }
    
    if (activeid===0){
    gamedata[row][col]=1;
    }else{
        gamedata[row][col]=2;
    }

   
    selectedfield.innerText=player[activeid].symbol;
    selectedfield.classList.add('displayed');
    counter++;
    let num=win();
    gameover(num);
//    console.log(num);
    switchplayer();
}

function gameover(num){
    if(num>0){
        gameoverdisplay.style.display='block';
        backdrop.style.display='block';
        winnername.innerText=player[num-1].name+ " Win!!";
    }else if(num<0){
        gameoverdisplay.style.display='block';
        winnername.innerText="Its draw!!"
    }

}


function restart(){
    gameoverdisplay.style.display='none';
    backdrop.style.display='none';
    activeid=0;
    counter=0;

    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            gamedata[i][j]=0;
        }
    }

    player1name.innerText="Player 1";
    player2name.innerText="Player 2";

    for (let i=0;i<gamefieldelements.length;i++){
        gamefieldelements[i].innerText='';
        gamefieldelements[i].classList.remove('displayed');
        playingarea.style.display='none';

    }
}