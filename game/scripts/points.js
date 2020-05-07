export default function  pointVerifier(elements, ranking, renderAll, screen){
    for(const player in elements.players){
        const playerElement = elements.players[player]
        for(const fruit in elements.fruits){
            const fruitElement = elements.fruits[fruit]
            if((playerElement.x == fruitElement.x && playerElement.y == fruitElement.y)||(playerElement.x + 1 == fruitElement.x && playerElement.y + 1 == fruitElement.y)||(playerElement.x - 1 == fruitElement.x && playerElement.y + 1 == fruitElement.y)||(playerElement.x + 1 == fruitElement.x && playerElement.y - 1 == fruitElement.y)||(playerElement.x - 1 == fruitElement.x && playerElement.y - 1 == fruitElement.y)||(playerElement.x + 1 == fruitElement.x && playerElement.y == fruitElement.y)|| (playerElement.x - 1 == fruitElement.x && playerElement.y == fruitElement.y)||(playerElement.x == fruitElement.x && playerElement.y + 1 == fruitElement.y)||(playerElement.x == fruitElement.x && playerElement.y - 1 == fruitElement.y)){

                delete elements.fruits[fruit]
                ranking()
                renderAll(elements, screen)
            }
            

            

            

            //screen.fillRect(, 1, 1)
        }
    }

}