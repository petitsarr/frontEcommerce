import React,{useState,useEffect,Fragment} from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import {Cart} from './components/Cart';
import './styles/App.css';
import {Navbar}from './components/NavBar';
import {Home} from './Home';

// Mes données
import {list} from './data'

const  App=(props)=> {

  const {items, onUpdateCart} = props

  const [category,setCategory] = useState(0);

  // false non filtré : on renvoie les categories non filtré
  // true filtré : on renvoie les categories filtré en fonction de la recherche
  const [isFiltering,setFiltering] = useState(false)

  // filtered recoit les categories filtrés...
  const [filtered,setFiltered] = useState([])

  const [count,setCount]  =  useState(0);


  // cette fonction recoit en paramétre l'index du sidemenu.....
  // je l'ai passe au composant Sidemenu pour changer mon etat lors d'un clik dans le sidemenu....  
  const loadCategory =(i)=>{
    setCategory(i)
}


    // Cette fonction permet de filter les resultats en fonction de la recherche,elle recoit en parametre le texte saisi dans l'input.
  const filterResults =(input)=>{
   // La méthode flat() qui crée un nouveau tableau avec tous les éléments
  // des sous-tableaux concaténés de manière récursive jusqu'à une profondeur spécifiée.
 //La méthode JavaScript indexOf() pour trouver l'index de la première occurrence d'une sous-chaîne dans une chaîne,ou -1 si la chaîne ne contient pas la sous-chaîne.
 const fullList = list.flat()
 
  //  results correspond au category filtré
  const results = fullList.filter(item=>{

  //je récupére le nom dans les objets et je le convertis en miniscule
   const name = item.name.toLowerCase();
    
  //je convertis le terme que j'ai saisi en miniscule
  const term = input.toLowerCase()  ;

   return name.indexOf(term) > -1

 })

  setFiltered(results)
 
  }

     useEffect(()=>{
          console.log(isFiltering)
       })









      return (
      <Fragment>
        <Router>
          <Navbar filter= {filterResults} setFiltering={setFiltering} count={count} />
           {/*Les routes*/}
          <Route exact path="/" component={props => <Home 
                                                category={category}
                                                isFiltering={isFiltering}
                                               loadCategory={loadCategory} 
                                              filtered={filtered}
                                              // count={count}                                            
                                            
                                              // addToCart={setCount}  
                                              list={list} />}
                />
           <Route path="/cart" component={Cart} />
          </Router>
          </Fragment>  
        );
     }

   export default App;