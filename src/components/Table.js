import React from 'react';
import {Row} from './Row';

export const Table = ({items}) => {

    return (
        <div>
        <table>
        <tr>
          <th width="200">Product</th>
          <th width="180">Reference</th>
          <th width="150">Price</th>
          <th width="150">Quantity</th>
          <th width="200">Total</th>
        </tr>
       {
         items.map(item=>{
           return(
             <Row item = {item} /> 
           )
         })
       }
     
      </table>
        </div>
    )
}
