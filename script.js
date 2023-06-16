console.log("Welcome to Tic Tac Toe");
let music=new Audio("music.mp3");
let audioTurn =new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let Turn ="X";
let isgameOver=false;
let turnN0=0;
let xp=0; let tp=0; let op=0;

// Function to change the turn
const changeTurn=()=>{

    return Turn==="X"?"O":"X";
}

//Function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=='')){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " Won";
            if(boxtext[e[0]].innerText==='X'){
                xp+=1;
            }
            else{
                op+=1;
            }
            isgameOver=true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='200px';
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width=`30vw`;
        }
    })
}

// Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''&&!isgameOver){
            boxtext.innerText=Turn;
            turnN0+=1;
            Turn =changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("xp")[0].innerText="("+xp+")";
            document.getElementsByClassName("op")[0].innerText="("+op+")";
            
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText="Turn for "+Turn;
                if(turnN0===9){
                    document.getElementsByClassName("info")[0].innerText="It's a Tie";
                    tp+=1;
                    turnN0=0;
                    document.getElementsByClassName("tp")[0].innerText="("+tp+")";
                }
            }
        }
    })
}) 

// Add onclick Listiener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText=""
    });
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='0px';
    Turn=changeTurn();
    document.getElementsByClassName("info")[0].innerText="Turn for "+Turn;
    isgameOver=false;
    document.querySelector('.line').style.width=`0vw`;
    turnN0=0;
})