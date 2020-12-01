import React from 'react';

export const SideMenu = ({loadCategory,category}) => {
    const links = ["Fruits","Légumes","Produits-Frais","Epicerie", "Boisson"]
    // Ajout d'un évenement onClick pour mes sides menu
    // A chaque fois qu'on clique sur un élément on pourra lire son index
   
    return (
        <div className= "col-sm-12 col-md-2 col-lg-2 sidebar">
        <ul>
        {
            links.map((link,index)=>{
                return(
                    <li key={index}
                     className={  category === index && "active"  } 
                     onClick={()=>loadCategory(index)}>
                    {link}
                    </li>
                )
            })
        }
        </ul>
     </div>
    )
}
