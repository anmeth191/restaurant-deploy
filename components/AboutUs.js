import React from 'react';
import image1 from '../assets/chef-large.jpg';
import image2 from '../assets/restaurante-large.jpg';

const AboutUs = ()=>{
return(
    <div className="aboutus">
       <div className="aboutus__message">
           <h1 className="aboutus__message--title largeTitle"> A family Gathering </h1>
           <span className="aboutus__message--message message">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</span>
       </div>
       <div className="aboutus__container"> 
       <div className="aboutus__container__box1">
           <div className="aboutus__container__box1-image">
               <img src={image1} alt="About us" className="image"/>
           </div>
          <div className="aboutus__container__box1-content">
                <h1 className="aboutus__container__box1-content-title largeTitle"> We are Here to serve you</h1>
                <span className="aboutus__container__box1-content-message message"> 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </span>
              </div>
           </div>


           <div className="aboutus__container__box2">
           <div className="aboutus__container__box2-image">
               <img src={image2} alt="About us" className="image"/>
           </div>
          <div className="aboutus__container__box2-content">
                <h1 className="aboutus__container__box2-content-title largeTitle"> A traditional Restaurant</h1>
                <span className="aboutus__container__box2-content-message message"> 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </span>
              </div>
           </div>
       </div>
    </div>
)



}



export default AboutUs;

