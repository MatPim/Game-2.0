export default function elementName(int, playerI, fruitI, playerInGame){
    switch(int){
        case 0: {
            playerI = playerI + 1
            const playerID = 'player' + playerI
            
            playerInGame.mainPlayer.push(playerID)
            
            
            return(playerID)
        }
        case 1: {
            fruitI = fruitI + 1
            return('fruit' + fruitI)
        }
    }
}