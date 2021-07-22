import React , { useState} from  'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';



const ResponsiveMenu = (props)=>{

const [list] = useState({menu:['Menu' , 'Get Offers' , 'About Us' , 'Contact Us'] , route:['menu' , 'mailinglist' ,'aboutus', 'contact']})
const { activeSideBar } = props.stateProps;

return ReactDOM.createPortal(

<div className={ activeSideBar ? 'sideNavbar sideNavbarActive' : 'sideNavbar sideNavbarNoActive'}>
<div className="sideNavbar-container">
<div className="sideNavbar-container-elements">
    
    <ul className="sideNavbar-container-elements-ul">
        {
                list.menu.map(((element , index) =>{
                return(
                <li key={index} className="sideNavbar-container-elements-ul-li">
                <Link to={`/${list.route[index]}`}  className="sideNavbar-container-elements-ul-li-link">{ element }</Link>
                </li>
                    )//end of the return in the map
             }))//end of the map
        }
        </ul>
    </div>
</div>
</div> , document.querySelector('#sideBar'))

}//end of the function responsiveMenu

export default ResponsiveMenu;