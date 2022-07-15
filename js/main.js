

// result = document.querySelectorAll('#win')[0]
// result.src = images#win-crown.png

let buttons = document.querySelectorAll('.btn') 
let playervalue 
let npcvalue
let player

let resultplayer
let resultnpc
let answerplayer
let answernpc
let main = document.querySelector('main')
let resetimages
let playerscore = 0
let npcscore = 0
// resultnpc = document.querySelector('#win-npc')
// resultplayer = document.querySelector('#lose-player')
// resultplayer = document.querySelector('#win-player')
// answerplayer = document.querySelector('#result-player')
// answerplayer = document.querySelector('#result-player')
// answerplayer = document.querySelector('#result-player')
// answernpc = document.querySelector('#result-npc')
//  answernpc = document.querySelector('#result-npc')
//  resultnpc = document.querySelectorAll('#lose-npc')

function scoring(){
    if (resultplayer.src === "images/win-crown.png") {
        playerscore = playerscore + 1
        let playerpoint = document.querySelector('#playerscore')
        playerpoint.textContent = `Player: 1`
    }else if(resultnpc.src === "images/win-crown.png"){
        npcscore = npcscore + 1
        let npcpoint = document.querySelector('#npcscore')
        npcpoint.textContent = `Npc:${npcscore}`
    }
}

function playeroutcome() {
    switch (playervalue) {
        case "rock":
            answerplayer.src = "images/fist-as-rock.png"
            break;
        case "paper":
            answerplayer.src = "images/open-hand-as-paper.png"
            break;
        case "scissors":
            answerplayer.src = "images/hand-scissor.png"
            break;
    }
}

function npcoutcome() {
    switch (npcvalue) {
        case "rock":
            answernpc.src = "images/fist-as-rock.png"
            break;
        case "paper":
           
            answernpc.src = "images/open-hand-as-paper.png"
            break;
        case "scissors":
            
            answernpc.src = "images/hand-scissor.png"
            break;
    }
}


 playRockPaperScissors = () =>{ 
 
    // let choice = 'SCiSSors'
    const options =['rock' , 'paper' , 'rock','rock' , 'paper' , 'paper','rock' , 'scissors' , 'scissors','rock' , 'paper' , 'scissors']
    player = playervalue.toLowerCase()
    npcvalue = options[Math.floor((Math.random() * 12))]
    // npcvalue = options[1]
    playeroutcome()
    npcoutcome()
    if((typeof playervalue === 'string') && (options.includes(player))){
        if((player === 'paper' && npcvalue === 'rock') || (player === 'scissors' && npcvalue === 'paper') || (player === 'rock' && npcvalue === 'scissors')){
            // return `player ${player} Vs Computer ${npcvalue}, You have WON!`
            resultplayer = document.querySelector('#win-player')
            resultplayer.src = "images/win-crown.png"
            resultnpc = document.querySelector('#lose-npc')
            resultnpc.src = "images/lose-face.png"
            playerscore++
            let playerpoint = document.querySelector('#playerscore')
            playerpoint.textContent = `Player:${playerscore}`
           //setTimeout( () =>{
               //('.result')).addClass('magictime puffIn')
           // }, 2000);
            return player
            let point = "it works"
            alert(`player ${player} Vs Computer ${npcvalue}, You have WON!`)
        }else if((player === 'rock' && npcvalue === 'rock') || (player === 'scissors' && npcvalue === 'scissors') || (player === 'paper' && npcvalue === 'paper')){
           //setTimeout( () =>{
              //('.result')).addClass('magictime puffIn')
           // }, 2000);
            // return `player ${player} Vs Computer ${npcvalue},Its a Draw` 
            // return player
            let point = "it works"
            // alert(`player ${player} Vs Computer ${npcvalue},Its a Draw` )
        } else{
            // return `player ${player} Vs Computer ${npcvalue}, You LOST,better luck next time`
            resultnpc = document.querySelector('#win-npc')
            resultnpc.src = "images/win-crown.png"
            resultplayer = document.querySelector('#lose-player')
            resultplayer.src = "images/lose-face.png"
            npcscore++
            let npcpoint = document.querySelector('#npcscore')
            npcpoint.textContent = `Npc:${npcscore}`
           //setTimeout( () =>{
                //('.result')).addClass('magictime puffIn')
            //}, 2000);
            return player
            let point = "it works"
            alert(`player ${player} Vs Computer ${npcvalue}, You LOST,better luck next time`)
        }
    } else{
        let point = "it works"
        alert(`ERROR`)
    }
    // if (resultplayer.src === "images/win-crown.png") {
    //     playerscore = playerscore + 1
    //     let playerpoint = document.querySelector('#playerscore')
    //     playerpoint.textContent = `Player: 1`
    // }else if(resultnpc.src === "images/win-crown.png"){
    //     npcscore = npcscore + 1
    //     let npcpoint = document.querySelector('#npcscore')
    //     npcpoint.textContent = `Npc:${npcscore}`
    // }
}

buttons.forEach(button =>{
    button.addEventListener('click' , () =>{
        playervalue = button.id
        // console.log(playervalue)
        resetimages = document.querySelectorAll('.reset')
        resetimages.forEach(resetimage =>{
            resetimage.src = ""
        })
        answerplayer = document.querySelector('#result-player')
        answerplayer = document.querySelector('#result-player')
        answerplayer = document.querySelector('#result-player')
        answernpc = document.querySelector('#result-npc')
        answernpc = document.querySelector('#result-npc')
        
        playRockPaperScissors()
        
    })

})

// let reset = document.querySelector('button')
// reset.addEventListener('click' , () =>{
//     playervalue = 0
//     npcvalue = 0
//     player = 0
   
//     resultplayer = 0
//     resultnpc = 0
//     answerplayer = 0
//     answernpc = 0
//     playRockPaperScissors()
// })


