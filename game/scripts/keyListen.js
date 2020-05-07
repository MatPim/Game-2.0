
export default function key(event,pointVerifier,ranking,playerInGame,screen, elements, renderAll, screenRules ){
    {
    //console.log(event)
    switch(event.key){
        case 'w':{
            for(const player in elements.players){
                const playerElement = elements.players[player]
                //console.log('entrou')
                //console.log(playerInGame.mainPlayer)
                if(playerElement.id == playerInGame.mainPlayer[0]){
                    if(screenRules('w',playerElement) == true){
                        playerElement.y = playerElement.y - 1
                        //console.log(playerElement.y)s
                       //console.log('entrou')
                        pointVerifier(elements, ranking, renderAll, screen)
                        renderAll(elements, screen)
                    }

                }
                
            }
            return
        }
        case 's':{
            for(const player in elements.players){
                const playerElement = elements.players[player]

                if(playerElement.id == playerInGame.mainPlayer[0]){
                    if(screenRules('s',playerElement) == true){
                        playerElement.y = playerElement.y + 1
                        //console.log(playerElement.y)
                       pointVerifier(elements, ranking, renderAll, screen)
                        renderAll(elements, screen)
                    }

                }
                
            }
            return
        }
        case 'a':{
            for(const player in elements.players){
                const playerElement = elements.players[player]

                if(playerElement.id == playerInGame.mainPlayer[0]){
                    if(screenRules('a',playerElement) == true){
                        playerElement.x = playerElement.x - 1
                        //console.log(playerElement.x)
                        pointVerifier(elements, ranking, renderAll, screen)
                        renderAll(elements, screen)
                    }

                }
                
            }
            return
        }
        case 'd':{
            for(const player in elements.players){
                const playerElement = elements.players[player]

                if(playerElement.id == playerInGame.mainPlayer[0]){
                    if(screenRules('d',playerElement) == true){
                        playerElement.x = playerElement.x + 1
                        //console.log(playerElement.x)
                        pointVerifier(elements, ranking, renderAll, screen)
                        renderAll(elements, screen)
                    }

                }
                
            }
            return
        }
    }
}
}