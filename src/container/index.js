//Ceci est mon composant de type container..
// Avec la fonction connect on va generer le composant de type présentation qui va etre notre App...
//je vais lire les données de mon store via ce composant container que je vais crée et les rendre accessible à mon composant App

import {connect} from 'react-redux';
import {saveCart} from '../action/action'
import App from '../App';

// mon composant container
 export const AppContainer = connect(
    //Passé le state du store sous forme de props à notre composant de type presentation qui est App
    function mapStateToProps (state){
        return{
            items:state.items
        }
    },
    //Passé à notre composant de type présentation sous forme de props toutes les fonctions dispatch.
    function mapDispatchToProps (dispatch){
        return{
            saveLocalStorage : (items) => dispatch(saveCart(items))
          
        }
    }
)(App)

// Donc c'est notre AppContainer qui va generer notre composant de type presentation App....