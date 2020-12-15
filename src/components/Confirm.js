import React, {Fragment, useContext} from 'react' ;
import {useSelector,useDispatch} from 'react-redux'
import UserProfileContextProvider, {UserProfileContext} from './UserProfileContext';
import { Link } from "react-router-dom";
import {resetCart} from '../action/action'
import '../styles/App.css';
import '../styles/confirm.css'
const SVGTruck = () => (
    <div className="truck-skew">
      <svg
        version="1.1"
        id="truck"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 370 225"
        enable-background="new 0 0 370 225"
      >
        <path
          id="wheel--front"
          d="M300,170c13.8,0,25,11.2,25,25s-11.2,25-25,25s-25-11.2-25-25S286.2,170,300,170z M285,195
    c0,8.3,6.7,15,15,15s15-6.7,15-15s-6.7-15-15-15S285,186.7,285,195z"
        />
        <path
          id="wheel--back"
          d="M170,170c13.8,0,25,11.2,25,25s-11.2,25-25,25c-13.8,0-25-11.2-25-25S156.2,170,170,170z M155,195
    c0,8.3,6.7,15,15,15s15-6.7,15-15s-6.7-15-15-15S155,186.7,155,195z"
        />
        <path
          id="body"
          d="M345,50h-45V40H100v155h40c0-16.6,13.4-30,30-30s30,13.4,30,30h70c0-16.6,13.4-30,30-30s30,13.4,30,30h35v-75
    L345,50z M346.2,115h-45V65h35l10,40V115z"
        />
        <path
          id="gas--last"
          d="M39.7,168.2c-0.6,2.5-3.1,4-5.6,3.4c-0.5-0.1-1-0.4-1.5-0.6c-2.5,2.4-6.1,3.6-9.7,2.7
    c-3.4-0.8-5.9-3.2-7.2-6.1c-0.8,1-2.2,1.5-3.5,1.2c-1.5-0.4-2.5-1.6-2.6-3.1c-2.5-1.1-4-3.9-3.3-6.6c0.7-3.1,3.9-5,7-4.3
    c0,0,0.1,0,0.1,0c-0.4-1.5-0.5-3.1-0.1-4.8c1.2-5,6.2-8,11.1-6.8c3.8,0.9,6.4,4,7,7.6c1.3-0.4,2.8-0.5,4.3-0.2c4.3,1,7,5.4,6,9.7
    c-0.4,1.7-1.3,3.1-2.6,4.2C39.7,165.6,40,166.9,39.7,168.2z"
        />
        <path
          id="gas--first"
          d="M90.6,175.2c1.4-2,2.1-4.7,1.4-7.3c-1.1-4.8-6-7.8-10.8-6.7c-1,0.2-2,0.7-2.8,1.2c0-0.2-0.1-0.3-0.1-0.5
    c-1.1-4.8-6-7.8-10.8-6.7c-3.3,0.8-5.7,3.3-6.6,6.3c-1.8-0.6-3.8-0.8-5.9-0.3c-5.6,1.3-9.1,7-7.8,12.6c1,4.1,4.2,7,8.1,7.8
    c1.5,5.4,7,8.6,12.5,7.3c2.2-0.5,4-1.7,5.4-3.2c1.9,0.8,4.1,1,6.3,0.5c1.7-0.4,3.2-1.2,4.4-2.2c1.3,2.2,3.9,3.3,6.5,2.7
    c3.2-0.8,5.2-4,4.5-7.2C94.3,177.4,92.7,175.8,90.6,175.2z"
        />
      </svg>
    </div>
)

export const Confirm =()=>{
    const UserProfile = useContext(UserProfileContext)
    const items = useSelector(state=>state.items);
    const dispatch = useDispatch() ;


    // L'action Remove
const reset =()=>{
    dispatch (resetCart()) ;
}

    return(
        <Fragment>
        <div class="jumbotron text-center">
          <h1 class="display-3">Thank You!</h1>
          <hr />
  
          <p class="lead">
            <strong>Votre commande est en route vers votre domicile</strong>
            <br /> <br />
            <Link class="btn btn-primary btn-sm" to="/" onClick= {()=>{
            return reset()
            }}>
              Continue to homepage
            </Link>
          </p>
          <br />
          {UserProfile.address && 
          <ul className="address">
            <li>{(UserProfile.lastName).toUpperCase()}, {UserProfile.firstName}</li>
            <li>{UserProfile.address}</li>
            <li>{UserProfile.zipCode}, {UserProfile.city}</li>
        </ul>   }
          
        </div>
        <SVGTruck />
      </Fragment>
    )
}
