import React from 'react';
import { Link } from 'react-router-dom';



class Footer extends React.Component{
 state = {
     classname:'footer__foot_hours_container--time-content-open',
     days:['Sunday' ,'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
     status:'Closed'
 }


checkSchedule = ()=>{

let dateVar = new Date();
let catchDay = dateVar.getDay();
let catchTime = dateVar.getHours();

let response = '';

if(this.state.days[catchDay] === 'Sunday' && catchTime >= 10 && catchTime <= 21){
    response = 'Open Now, Closes at 10:00pm';
} else if(this.state.days[catchDay] === 'Monday' && catchTime >= 10 && catchTime <= 21){
    response = 'Open Now, Closes at 10:00pm';
} else if(this.state.days[catchDay] === 'Tuesday' && catchTime >= 10 && catchTime <= 21){
     response = 'Open Now, Closes at 10:00pm';
}else if(this.state.days[catchDay] === 'Wednesday' && catchTime >= 10 && catchTime <= 21){
    response ='Open Now, Closes at 10:00pm';
}else if(this.state.days[catchDay] === 'Thursday' && catchTime >= 10 && catchTime <= 21){
    response ='Open Now, Closes at 10:00pm';
}else if(this.state.days[catchDay] === 'Friday' && catchTime >= 10 && catchTime <= 22){
    response = 'Open Now, Closes at 11:00pm';
}else if(this.state.days[catchDay] === 'Saturday' && catchTime >= 10 && catchTime <= 22){
    response = 'Open Now, Closes at 11:00pm';
} else {
    response = 'Closed Now, Opens at 10:00 am';
    this.setState({classname:'footer__foot_hours_container--time-content-closed'})
}

return this.setState({status:response} , ()=>{ return this.state.status})

}//end of the checkSchelude

componentDidMount(){
    this.checkSchedule();
}

    render()
    {     
        return( 
        <div className="footer">
            <footer className="footer__foot">
                <div className="footer__foot_links">
                <h1 className="footer__foot_links--title">Navigation</h1>
                  <div className="footer__foot_links_container">
                      <ul className="footer__foot_links_container-ul">
                         <li className="footer__foot_links_container_ul-li"><Link to="/" className="footer__foot_links_container_ul-li-link">Home</Link></li>  
                         <li className="footer__foot_links_container_ul-li"><Link to="/menu" className="footer__foot_links_container_ul-li-link">Menu</Link></li>  
                         <li className="footer__foot_links_container_ul-li"><Link to="/aboutus" className="footer__foot_links_container_ul-li-link">About Us</Link></li>  
                         <li className="footer__foot_links_container_ul-li"><Link to="/contact" className="footer__foot_links_container_ul-li-link">Contact Us</Link></li>  
                      </ul>
                  </div>
                </div>

                <div className="footer__foot_hours">
                     <div className="footer__foot_hours_container">
                     <h1 className="footer__foot_hours_container--title">Hours</h1>
                         <div className="footer__foot_hours_container--time">
                             <h2 className={`${this.state.classname}`}>{this.state.status}</h2> 
                          </div>
                          <div className="footer__foot_hours_container-schedule">
                              <h2 className="footer__foot_hours_container-schedule-days">Sunday - Thursday</h2>
                              <span className="footer__foot_hours_container-schedule-times"> 10:00AM - 10:00PM</span>
                          </div>

                          <div className="footer__foot_hours_container-schedule">
                              <h2 className="footer__foot_hours_container-schedule-days">Friday - Saturday</h2>
                              <span className="footer__foot_hours_container-schedule-times"> 10:00AM - 11:00PM</span>
                          </div>
                         </div>
                    </div>
                  
                  <div className="footer__foot__contact">
                      <div className="footer__foot__contact__container">
                          <h1 className="footer__foot__contact__container--title">Contact</h1>
                          
                          <div className="footer__foot__contact__container--list">
                            <ul className="footer__foot__contact__container--list--ul">
                                <li className="footer__foot__contact__container--list--ul--li"> 127 My Address Avenue</li>
                                <li className="footer__foot__contact__container--list--ul--li"> Code city, PA 1234</li>
                                <li className="footer__foot__contact__container--list--ul--li"> Phone: 1 123-456-789</li>
                                <li className="footer__foot__contact__container--list--ul--li"> Email: restaurant@food.com</li>
                        </ul>
                        </div>
                      </div>
                      </div>
            </footer>
            </div>
    )//end of the return
}//end of the render 
}//end of the class component 

export default Footer;

