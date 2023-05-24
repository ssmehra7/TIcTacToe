function openplayerconfig(event){

    editedplayer=+event.target.dataset.playerid;
    console.log(editedplayer);
    playeroverlay.style.display= 'block';
    backdrop.style.display= 'block';
    console.log("its working ");
}   


function closeplayerconfig(){
    playeroverlay.style.display= 'none';
    backdrop.style.display= 'none';
}


function saveplayerconfig(event){
    event.preventDefault();
    const formData=new FormData(event.target);
    const enteredData=formData.get('username').trim();
    if(editedplayer===1){
        player1name.innerText=enteredData;
        player[0].name=enteredData;
        console.log('its here at 1');
        console.log(enteredData);
    }else{
        player2name.innerText=enteredData;
        player[1].name=enteredData;
        console.log(enteredData);
    }
   

    closeplayerconfig();

}

