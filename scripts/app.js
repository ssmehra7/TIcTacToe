let gamedata=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let activeid=0;
let counter=0;

let editedplayer;
const player=[
    {
        name:'',
        symbol:'X',
    },
    {
        name:'',
        symbol:'O',
    }
]
const playeroverlay=document.getElementById('playeroverlay');
const backdrop=document.getElementById('backdrop');

const editplayer1btn=document.querySelector('#edit-player1-btn');
const editplayer2btn=document.querySelector('#edit-player2-btn');
const canclebtn=document.querySelector('#cancle-btn');
const confirmbtn=document.querySelector('#confirm-btn');
const form =document.querySelector('form');
const player1name=document.querySelector('#Player1-name');
const player2name=document.querySelector('#Player2-name');
const startgamebtn=document.querySelector('#Stargamebtn');
const playingarea=document.querySelector('.playing-area');
const gamefieldelements=document.querySelectorAll('#game-board li');
const gameoverdisplay=document.querySelector('.game-over');
const winnername=document.querySelector('#winner-name');
const restartbtn =document.querySelector('#play-again1');

editplayer1btn.addEventListener('click',openplayerconfig);
editplayer2btn.addEventListener('click',openplayerconfig);


canclebtn.addEventListener('click',closeplayerconfig);
backdrop.addEventListener('click',closeplayerconfig);



form.addEventListener('submit',saveplayerconfig);

startgamebtn.addEventListener('click',startgame);

for (let i=0;i<gamefieldelements.length;i++){
    gamefieldelements[i].addEventListener('click',selectgamefield);
}


restartbtn.addEventListener('click',restart);