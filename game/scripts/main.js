import {elements} from '../serverContent.js'
import renderAll from './render.js'
import key from './keyListen.js'
import screenRules from './rules.js'
import add from './createElements.js'
import elementName from './nameGenerator.js'
import pointVerifier from './points.js'

//----screen
const canvas = document.querySelector('canvas')
export const screen = canvas.getContext('2d')
//----elements
const labelElements = {
    l1 : document.getElementById('l1'),
    l2 : document.getElementById('l2'),
    l3 : document.getElementById('l3'),
    l4 : document.getElementById('l4'),
    l5 : document.getElementById('l5'), 
}
//---abstract

const playerMove = []
export const playerInGame = {
    mainPlayer : [],
    otherPlayers : []
}

export var fruitI = 0
export var playerI = 0
var points = 0
//----functions 
launchGme();

function launchGme(){
    console.log('entrou')
    const render = renderAll(elements, screen)

    add(0, elementName(0,playerI, fruitI, playerInGame), Math.floor(Math.random() * (48 - 1)) + 2,    Math.floor(Math.random() * (48 - 1)) + 2, 'black', 'pink','purple');

    document.addEventListener('keypress', (event) => {
        //console.log(event)
        key(event,pointVerifier,ranking,playerInGame,screen,  elements, renderAll, screenRules);
    })

    setInterval(() => {
        add(1, elementName(1,playerI, fruitI, playerInGame), Math.floor(Math.random() * (48 - 1)) + 2,    Math.floor(Math.random() * (48 - 1)) + 2)
    }, 2500);

    function ranking(){
        points = points + 1
        labelElements.l1.textContent = playerInGame.mainPlayer[0] + ' . . . . . . . . . ' + points
    }
}
const socket = io()

socket.on('connect', () => {
    console.log(`player connected ${socket.id}`)
})
