// Les actions dans mon application..

export const actions = {
    // l'action ajouter cart.
ADD_TO_CART :'ADD_TO_CART ',
// l'action update cart..
UPDATE_CART : " UPDATE_CART",
// l'action supprime
REMOVE_FROM_CART : "REMOVE_FROM_CART",
// on va sauvarder les items dans le local storage
SAVE_CART : "SAVE_CART"
}


// Les fonctions de créateurs d'action.

//Ajouter CART.
//  cette fonction recoit en paramétre l'item et la quantite du produit à ajouter...
const uid =()=>Math.random().toString(34).slice(2)
export const addtoCart = (item,quantity)=>{
    return{
        type: actions.ADD_TO_CART,
        payload:{
            id:uid(),
            details:item,
            quantity:quantity
        }
    }
}


// UPDATE CART
// Elle recoit en paramétre l'item et la quantity à modifié....
export const updateCart =(id,quantity)=>{
    return{
        type:actions.UPDATE_CART,
        payload:{
            id:id,
            quantity:quantity
        }
    }
}


// Remove CART.
// Elle recoit en paramétre l'élément item..
export const removeFromCart =(id)=>{
    return{
        type: actions.REMOVE_FROM_CART,
        payload:id
    }
}

// on va sauvargder les items dans le local storage
// Cette fonction recoit en parametre un objet qui va representer le tableau des items qu'on aura dans notre panier
export const  saveCart =(items)=>{
    return{
     type: actions.SAVE_CART,
     payload:{
         items: items
    }
    }
}  