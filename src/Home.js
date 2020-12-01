import React from 'react';
import {SideMenu} from './components/SideMenu';
import {List} from './components/List';

export const Home = ({category,isFiltering,loadCategory,filtered,list,updateCart}) => {
    return (
        <div className ='container'>
       <div className="row">
       <SideMenu loadCategory={loadCategory} category={category} />
     <div className="col-sm-10">
         <div className="row">
        {/* category === 0 ||  category === 1 ||  category ===2 || category === 3 ... Jusqu'a 5 
        
       */}
          <List data={ isFiltering ? filtered : list[category]}  updateCart={updateCart}  />
        </div>
     </div>
     </div>
</div>
    )
}
