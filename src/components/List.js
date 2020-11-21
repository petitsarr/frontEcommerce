import React from 'react';
import {Card} from './Card';

export const List = ({data,updateCart}) => {
    
    return (
        <div className="col-sm">
            <div className="row">
{
    data.map(item=>{
        return(
            <Card key={item.ref} item={item}  updateCart = {updateCart}  />
        )
    })
}     
            </div>
        </div>
    )
}
