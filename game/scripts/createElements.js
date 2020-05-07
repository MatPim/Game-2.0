import renderAll from './render.js'
import {screen} from './main.js'
import {elements} from '../serverContent.js'
export default function add( element,name, locationX, locationY, color1, color2, color3){
    //console.log('entrou')
    //console.log(elements)
    switch(element){
        case 0:{
            elements.players.push(
                {
                    id: name,
                    x: locationX,
                    y: locationY, 
                    c1: color1,
                    c2: color2,
                    c3: color3
                }
            );
            //console.log(elements);
            renderAll(elements, screen)
            return
        }
        case 1: {
            elements.fruits.push(
                {
                    id: name,
                    x: locationX,
                    y: locationY
                }
                
            );
            renderAll(elements, screen)
            return
        }
        
    }

}
