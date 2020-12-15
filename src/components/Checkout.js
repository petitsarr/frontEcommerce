import React,{Fragment,useState,useEffect,useContext} from 'react';
import { Link } from "react-router-dom";
import {UserProfileContext} from  "./UserProfileContext" ;
import {Footer} from './Footer' ;
import '../styles/App.css'

export const Checkout = () => {
    const [isValid,setValid] = useState(false);

const value = useContext(UserProfileContext);
// on recupére tous les attributs qui sont stockés dans ce value
const {
firstName,
  lastName,
email,
address,
zipcode,
city ,
setUserProfileContext
} = value


    // On verifie s'il y'a pas de champ qui soit vide dans mon formulaire
    // s'il ya un seul nombre d'erreur alors le formulaire n'est pas valide...
const validate =()=>{
    //   errors va contenir tous les inputs qui n'ont pas de valeur
 let errors = []
//  on récupére toutes les inputs dans le formulaire
const inputs = document.querySelectorAll('.form-control');

inputs.forEach((input)=>{
    // s'il nya pas de valeur dans cette champ de saisi
    if(!input.value){
        // on rajoute dans errors cet input...
        errors.push(input)
    }
    else{
      errors.length && errors.pop()
    }

}) 
console.log(errors)
setValid(!errors.length)

  }
  
  useEffect(()=>{
      validate();
  })

    return (
      <Fragment>
        <div className="col-sm-6 offset-3">
          <h2>Checkout</h2>
          <br />
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  property=""
                  name="firstName"
                  defaultValue={firstName}
                  onChange = {
                    (e)=> setUserProfileContext({[e.target.name]:e.target.value})
                  }
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  property=""
                  name="lastName"
                  defaultValue={lastName}
                  onChange = {
                    (e)=> setUserProfileContext({[e.target.name]:e.target.value})
                  }
                 />
              </div>
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address"
                property=""
                name="email"
                defaultValue={email}
                onChange = {
                  (e)=> setUserProfileContext({[e.target.name]:e.target.value})
                }
                />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Address"
                property=""
                name="address"
                defaultValue={address}
                onChange = {
                  (e)=> setUserProfileContext({[e.target.name]:e.target.value})
                }
               />
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  name="zipCode"
                  property=""
                  defaultValue={zipcode}
                  onChange = {
                    (e)=> setUserProfileContext({[e.target.name]:e.target.value})
                  }
                  />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City" 
                  city="city"
                  property=""
                  defaultValue={city }
                  onChange = {
                    (e)=> setUserProfileContext({[e.target.name]:e.target.value})
                  }
                />
              </div>
            </div>
            <br />
        
         <Link to="/confirmation" href="#" className={`btn  btn-lg btn-block chekout btn-danger ${!isValid && 'disabled' }`}>
           Confirmation
         </Link>  
             
          </form>
        </div>
        <Footer/>
      </Fragment>
    );
}