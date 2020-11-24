import React from 'react';
import {Modal} from './Modal';

export const Card = ({item,count}) => {
    return (
        <div className="col-sm-12 col-md-5 col-lg-4  " >
        <div className="card">
          <img
            width="170"
            height="170"
            src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
            alt={item.name}
          />
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">  
                <h4>{item.name} </h4>
              </div>
              <div className="col-sm-6">
                <p>
                €  {item.price}/{item.unit}
                </p>
                <button className="btn btn-warning btn-sm" data-toggle="modal" data-target= {`#${item.ref}`} >view product</button>
              </div>
            </div>
          </div>
        </div>
   <Modal item={item}  count={count} />
      </div>
    )
}
