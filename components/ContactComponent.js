import React from 'react';
import Geolocation from './Geolocation';
class ContactComponent extends React.Component{

constructor(props){
super(props);

this.state = {
    
 // labelChange:false,
  labelNormalStyle:'labelStyle',
  labelChangeStyle:'ChangelabelStyle',
}

}


//This function handles the form fiels and also set the style for the current element clicked it is scales the previousSibling element
handleValidation = (event)=>{

const inputs = document.querySelectorAll('.inputStyle');
//set the element when specific input field is clicked to true
this.setState({labelChange:true} , ()=>{ return this.state.labelChange;})

//looks for the element clicked in the elements displayed in the DOM
inputs.forEach((element) =>{
if(element.name === event.target.name){
  //then changes the className in this case for the label
   element.previousSibling.className=`${this.state.labelNormalStyle}` 
}else{
  //for the rest of the elements then change to a different class
  element.previousSibling.className=`${this.state.labelChangeStyle}`
}

})//end of the forEach


}


render(){

    return(
     <div className="contactComponent">

<h1 className="contactComponent-title largeTitle"> Stay in Touch </h1>
     <div className="contactComponent__container">
     <div className="contactComponent__container__form">
     <div className="contactComponent__container__form--list">
                                <ul className="contactComponent__container__form--list--ul">
                                <li className="contactComponent__container__form--list--ul--li"> 127 My Address Avenue</li>
                                <li className="contactComponent__container__form--list--ul--li"> Code city, PA 1234</li>
                                <li className="contactComponent__container__form--list--ul--li"> Phone: 1 123-456-789</li>
                                <li className="contactComponent__container__form--list--ul--li"> Email: restaurant@food.com</li>
                                 </ul>
        </div>

     <form className="contactComponent__container__form-dataForm">
     <div className="contactComponent__container__form-dataForm-input">
                   <label className={this.state.labelNormalStyle} htmlFor="username">Name:</label>
                   <input className="inputStyle" type="text" onClick={this.handleValidation} name="username" id="username" required/>
    </div>

     <div className="contactComponent__container__form-dataForm-input">
                   <label className={this.state.labelNormalStyle} htmlFor="email">Email Address:</label>
                   <input className="inputStyle" type="email" onClick={this.handleValidation} name="email" id="email" required/>
    </div>

    <div className="contactComponent__container__form-dataForm-input">
                   <label className={this.state.labelNormalStyle} htmlFor="phone">Phone:</label>
                   <input className="inputStyle" type="text" onClick={this.handleValidation} name="phone" id="phone" required/>
    </div>

    <div className="contactComponent__container__form-dataForm-input">
                   <label className={this.state.labelNormalStyle} htmlFor="message">Message:</label>
                   <input className="inputStyle" type="textarea" style={{height:'10rem'}} onClick={this.handleValidation}  name="message" id="message" required/>
    </div>

    <div className="contactComponent__container__form-dataForm-button">
      <button className="submitButton">Submit</button> 
    </div>
 
         </form>
         </div>
     
         <div className="contactComponent__container__maps">
         <div className="contactComponent__container__maps-map">
         <h1 className="contactComponent__container__maps-map-title">Google Geolocation API Code goes here</h1>
         <Geolocation/>
         </div>
  
         </div>
         </div>    
         </div>
    )//end of the return
}//end of the render 
}//end of the class ContactComponent


export default ContactComponent;