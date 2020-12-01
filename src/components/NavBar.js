import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export const Navbar =({filter,setFiltering})=>{

   const items = useSelector(state => state.items)

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link className="navbar-brand crimson" to="/"><i class="fas fa-shopping-cart"></i> Mes Courses en Ligne</Link>  
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ml-auto cart">
            <div>
              <form className="search form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                onChange={(e)=>{
                  setFiltering( e.target.value.length > 0 )
                  filter(e.target.value)
                }
              }
                  />
              </form>
            </div>
            <div className="menu-right">
           <Link to ="/cart">
           <i class="fas fa-shopping-bag fa-2x grey"></i>
           </Link>
           <span class="badge badge-success"> {items.length ? items.length : 0  } </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
