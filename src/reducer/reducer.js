import {actions} from '../action/action';


// On va setter une valeur pour une clé
const saveToLocalStorage = object=>{
    localStorage.setItem("items",JSON.stringify(object))
}

// Mon etat initial....
const initialState = {
    items: JSON.parse(localStorage.getItem("items")) !== null ?  JSON.parse(localStorage.getItem("items")) : [] 
}

export const onlineStoreApp = (state=initialState,action)=>{

  switch (action.type) {

    
        case actions.ADD_TO_CART: 
          
            return{
            items : [
                ...state.items,
               action.payload
            ]    
        }
            

        case actions.UPDATE_CART:
                return {
                    items: state.items.map(item=>{
                    if(item.id === action.payload.id){
                        return{
                            ...item,
                            quantity:action.payload.quantity
                        }
                    }
                    else{
                        return item ;
                    }

                })
            }


        case actions.REMOVE_FROM_CART :
                    return {
                        items:state.items.filter(item=>{

                        return item.id !== action.payload 
                    })
                }

        case actions.SAVE_CART :
            saveToLocalStorage(action.payload.items)
            return state

            case actions.RESET_CART : 
            saveToLocalStorage([])
            return {
                items: [ ]
            
        }

      
        default:
          return state
    }
}