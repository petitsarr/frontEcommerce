import {actions} from '../action/action';

// Mon etat initial....

const initialState = {
    items: []
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


        case actions.REMOVE_FROM_CART:
                    return {
                        items:state.items.filter(item=>{

                        return item.id != action.payload 
                    })
                }

        case actions.SAVE_CART :
            return state
    
        default:
           return state;
    }
}