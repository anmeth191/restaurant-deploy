import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import ResponsiveMenu from './responsiveMenu';



const Navbar = ()=>{
 /* use the state to set when the burger button is clicked and also when the page is scrolled the navbar to sticky  */
const [activeMenu , setactiveMenu] = useState(false); 
const [stickyNavbar , setstickyNavbar] = useState(false);


//when is clicked it sets the activeMenu to the opposite state
const showSideBar = ()=>{
//change the state of active menu to true or false when button clicked
setactiveMenu(!activeMenu);  
}

//Check if the scroll height is greater than 80
const checkScroll = ()=>{
   if(window.scrollY >= 80){
       setstickyNavbar(true)
   }else{
       setstickyNavbar(false);
   }
}
//add an event listener or window document when the pages is scrolled 
window.addEventListener('scroll' , checkScroll);

//variable to storage multiple props and send them to the responsive sideBar
let propsParams ={
    activeSideBar:activeMenu,
    stickyMenu: stickyNavbar
}

return(
    //use the spread operator in propsParams to pass the elements contained in the Object
    <div className={ stickyNavbar ? 'navbar navbarSticky' : 'navbar'}>
     <ResponsiveMenu stateProps={ {...propsParams } } />
        <nav className="navbar__nav">
            <div className="navbar__nav_home">
                <Link to="/" className="navbar__nav_home_link" ><h2 className="navbar__nav_home_link-title">Home</h2></Link>
            </div>
            <div className="navbar__nav_links">
                <ul className="navbar__nav_links_ul">
                <li className="navbar__nav_links_ul_li"><Link to="/contact" className="navbar__nav_links_ul_li-links">Contact us</Link></li>       
                <li className="navbar__nav_links_ul_li"><Link to="/aboutus" className="navbar__nav_links_ul_li-links">About Us</Link></li> 
                <li className="navbar__nav_links_ul_li"><Link to="/mailinglist" className="navbar__nav_links_ul_li-links">Get Offers</Link></li>
                <li className="navbar__nav_links_ul_li"><Link to="/menu" className="navbar__nav_links_ul_li-links">Menu</Link></li>
             </ul>
             
             <div className="navbar__nav_links__sidebar" onClick={ showSideBar }>
             <div className={ activeMenu ? "navbar__nav_links__sidebar-bar1 bar1" : "navbar__nav_links__sidebar-bar1"}></div>
             <div className={ activeMenu ? "navbar__nav_links__sidebar-bar2 bar2" : "navbar__nav_links__sidebar-bar2"}></div>
             <div className={ activeMenu ? "navbar__nav_links__sidebar-bar3 bar3" : "navbar__nav_links__sidebar-bar3"}></div>
             </div>
            </div>
        </nav>
        </div>
)
}

export default Navbar;