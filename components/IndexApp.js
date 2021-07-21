 import React from 'react';
 import Geolocation from './Geolocation';

 

 import { Link } from 'react-router-dom';
 
 const IndexApp = () => {

    return(
     
         <div className="index">
         <div className="index__showcase">
            <div className="index__showcase__container">
             <div className="index__showcase__container--content">
               <div className="index__showcase__container--content--title">
                 <h1 className="index__showcase__container--content--title-h1">Restaurant's</h1>
                 <h3 className="index__showcase__container--content--title-h2">ITALIAN RESTAURANT AND PIZZERIA</h3>
               </div>

               <div className="index__showcase__container--content--buttons">
                 <div className="index__showcase__container--content--buttons-container"> 
                 <Link to="/menu" className="index__showcase__container--content--buttons-container-button">Menu</Link>
                 <Link to="/contact"className="index__showcase__container--content--buttons-container-button">Visit Us</Link>
                 </div>
               </div>
  
             </div>
            </div>
            </div>

            <div className="index__slogan">
            <div className="index__slogan--content">
            <h1 className="index__slogan--content-message">The authentic Food, you will love</h1>
          </div>     
          </div>

          <div className="index__images">
            <div className="index__images--1"></div>
            <div className="index__images--2"></div>
            <div className="index__images--3"></div>
            <div className="index__images--4"></div>
          </div>

          <div className="index__geolocation">
          <h1 className="index__geolocation__title">Google Geolocation API Code goes here</h1>
          <Geolocation />
          </div>
   
          <div className="index__beforeFooter">
            <div className="index__beforeFooter--content">
              <h1 className="index__beforeFooter--content-message">Some Another content goes here</h1>
            </div>
            </div>

          
        </div>
  
 
  )//end of the return

}//end of the class Component

export default IndexApp;