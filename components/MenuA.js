import React from 'react';
import { Link } from 'react-router-dom';


const  MenuA = ()=> {
    return(
  <div className="menu">

          <div className="menu__container"> 
            <div className="menu__container__appetizers">  
            <div className="hoverContainer">
                <Link className="titleMenu" to="/menudisplay/appetizers"> Appetizers</Link>
                </div>
            </div>
            <div className="menu__container__soupSalads"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/soupsSalads" className="titleMenu">Soup & Salads</Link>
                </div>
             </div>
            <div className="menu__container__pizza">
            <div className="hoverContainer">
                <Link className="titleMenu" to="/menudisplay/pizza">Pizza</Link>
                </div>
            </div>
            <div className="menu__container__gourmetPizza">
            <div className="hoverContainer">
                <Link to="/menudisplay/gourmetPizza" className="titleMenu">Gourmet Pizza</Link>
                </div>
            </div>
            <div className="menu__container__calzoneStromboli">
            <div className="hoverContainer">
                <Link to="/menudisplay/calzoneStromboli" className="titleMenu">Calzones & Stromboli</Link>
                </div>     
           </div>
            <div className="menu__container__pasta"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/pasta" className="titleMenu">Pastas</Link>
                </div>
             </div>
            <div className="menu__container__bakedDishes"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/bakedDishes" style={{fontSize:"2.5rem"}} className="titleMenu">Baked Dishes</Link>
                </div>
             </div>
            <div className="menu__container__entrees"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/entrees" className="titleMenu">Entrees</Link>
                </div>
             </div>
            <div className="menu__container__burgerChicken"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/chickenBurgers" className="titleMenu">Chicken Burgers</Link>
                </div>
            </div>
            <div className="menu__container__superBurgers">
            <div className="hoverContainer">
                <Link to="/menudisplay/superBurgers" className="titleMenu">Super Burgers</Link>
                </div>    
            </div>
            <div className="menu__container__hotSubs"> 
            <div className="hoverContainer">
                <Link to="/menudisplay/hotsubs" className="titleMenu">Hot Subs</Link>
                </div>
             </div>
            <div className="menu__container__coldSubs">  
            <div className="hoverContainer">
                <Link to="/menudisplay/coldsubs" className="titleMenu">Cold Subs</Link>
                </div>
            </div>
            <div className="menu__container__wraps"> 
            
            <div className="hoverContainer">
                <Link to="/menudisplay/wraps" className="titleMenu">Wraps</Link>
                </div>
             </div>
            <div className="menu__container__kidsMenu">
            <div className="hoverContainer">
                <Link to="/menudisplay/kids" className="titleMenu">For Kids</Link>
                </div>
            </div>
            <div className="menu__container__desserts">
            <div className="hoverContainer" >
                <Link to="/menudisplay/dessert" className="titleMenu">Desserts</Link>
                </div>
            </div>
            <div className="menu__container__beverages">

            <div className="hoverContainer">
                <Link to="/menudisplay/beverages" className="titleMenu">Beverages</Link>
                </div>
            </div>
            </div>

      </div>
    )
}



export default MenuA;