export default function screenRules(who,value){
    switch(who){
        case 'w':{
            if(value.y == 1){
                
                return(false)
                
            }else{
                return(true)
            }
        }
        case 's':{
            if(value.y == 48){
                return(false)
            }else{
                return(true)
            }
        }
        case 'a':{
            if(value.x == 1){
                return(false)
            }else{
                return(true)
            }
        }
        case 'd':{
            if(value.x == 48){
                return(false)
            }else{
                return(true)
            }
        }
    }
}
