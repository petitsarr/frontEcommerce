import React,{Fragment,useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Table} from './Table';



export const Cart = () => {
  const items = useSelector(state => state.items);
  const [Subtotal,setSubtotal] = useState(0.00);
  const [total,setTotal] = useState(0.00);
const shipping = 10.00 ;



useEffect(()=>{  
  // totals est un tableau d'entiers qui contient le total de chaque ligne.
  const totals = items.map(item=>{
    return item.quantity * item.details.price
  })
  const sousTotal = totals.reduce((item1,item2) => item1 + item2, 0)
  setSubtotal(sousTotal);
  setTotal(Subtotal + shipping)
  console.log(`le total de chaque ligne est  ${totals}`)
  console.log(`Le sous total est egale à ${sousTotal}`)
},[items,Subtotal,total])



    return (
      <Fragment>
        <div className="container">
        <div className="row">
          <div className="col-sm-9 cart">
           <Table items={items }/>
          </div>
          <div className="col-sm order-summary">
            <ul className="list-group">
              <li className="list-group-item">ORDER SUMARY</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Subtotal</li>
                  <li className="text-right">€{Subtotal.toFixed(2)}</li>
                </ul> 
                <ul className="list-group flex">
                  <li className="text-left">shipping</li>
                  <li className="text-right">€{shipping.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> +++ Add Coupon Code</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">€{Subtotal === 0 ? 0.00 : total.toFixed(2)}</li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-light btn-lg btn-block checkout bg-crimson"
              disabled="true"
            >
              <a href="#" className="white">
                checkout
              </a>
            </button>
          </div>
        </div>
        </div>
      </Fragment>
    );
}