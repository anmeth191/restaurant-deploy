import React from 'react';
import { Link } from 'react-router-dom';


const  MenuA = ()=> {
    return(
  <div className="menu">

          <div className="menu__container"> 
            <div className="menu__container__appetizers">  
            <div className="hoverContainer">
                <Link to="/menudisplay/appetizers">
                <h1 className="titleMenu">Appetizers</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__soupSalads"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/soupsSalads">
                <h1 className="titleMenu">Soup & Salads</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__pizza">
            <div className="hoverContainer">
                <Link to="/menudisplay/pizza">
                <h1 className="titleMenu">Pizza</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__gourmetPizza">
            <div className="hoverContainer">
                <Link to="/menudisplay/gourmetPizza">
                <h1 className="titleMenu">Gourmet Pizza</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__calzoneStromboli">
            <div className="hoverContainer">
                <Link to="/menudisplay/calzoneStromboli">
                <h1 className="titleMenu">Calzones & Stromboli</h1>
                </Link>
                </div>     
           </div>
            <div className="menu__container__pasta"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/pasta">
                <h1 className="titleMenu">Pastas</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__bakedDishes"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/bakedDishes">
                <h1 className="titleMenu" style={{fontSize:"2.5rem"}}>Baked Dishes</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__entrees"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/entrees">
                <h1 className="titleMenu">Entrees</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__burgerChicken"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/chickenBurgers">
                <h1 className="titleMenu">Chicken Burgers</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__superBurgers">
            <div className="hoverContainer">
                <Link to="/menudisplay/superBurgers">
                <h1 className="titleMenu">Super Burgers</h1>
                </Link>
                </div>    
            </div>
            <div className="menu__container__hotSubs"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/hotsubs">
                <h1 className="titleMenu">Hot Subs</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__coldSubs">  
            <div className="hoverContainer">
                <Link to="/menudisplay/coldsubs">
                <h1 className="titleMenu">Cold Subs</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__wraps"> 
            
            <div className="hoverContainer">
                <Link to="/menudisplay/wraps">
                <h1 className="titleMenu">Wraps</h1>
                </Link>
                </div>
             </div>
            <div className="menu__container__kidsMenu">
            <div className="hoverContainer">
                <Link to="/menudisplay/kids">
                <h1 className="titleMenu">For Kids</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__desserts">
            <div className="hoverContainer">
                <Link to="/menudisplay/dessert">
                <h1 className="titleMenu"> Desserts</h1>
                </Link>
                </div>
            </div>
            <div className="menu__container__beverages">
            <div className="hoverContainer">
                <Link to="/menudisplay/beverages">
                <h1 className="titleMenu">Beverages</h1>
                </Link>
                </div>
            </div>
            </div>

      </div>
    )
}



export default MenuA;