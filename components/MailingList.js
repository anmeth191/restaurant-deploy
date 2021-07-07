import React from 'react';


class MailingList extends React.Component{







 render(){

    return(
        <div className="mailingList">
             <div className="mailingList__showcase"> 
             <div className="mailingList__showcase__title">
                 <h1 className="mailingList__showcase__title-content titleMenu">Receive special promotions</h1>
             </div>
             </div> 
           
            <div className="mailingList__container">
                <div className="mailingList__container-title">
                  <h1 className="mailingList__container-title-h1 titleMenu">Enter your name and email address to join our mailing list.</h1>
                   <span className="mailingList__container-title-message">By joining our mailing list, you will receive emails from us that will contain special promotions and important information about the Restaurant and Pizzeria.</span>
                </div>

             <div className="mailingList__container__form">
            <form className="mailingList__container__form-dataForm">
               <div className="mailingList__container__form-dataForm-input">
                   <label className="labelStyle" for="email">Email Address</label>
                   <input className="inputStyle" type="email" name="email" id="email" required/>
               </div>
 
               <div className="mailingList__container__form-dataForm-input">
                   <label  className="labelStyle" for="username"> First Name </label>
                   <input className="inputStyle" type="text" name="username" id="username" />
               </div>

               <div className="mailingList__container__form-dataForm-input">
                   <label className="labelStyle" for="userlastname">Last Name</label>
                   <input className="inputStyle" type="text" name="userlastname" id="userlastname"/>
               </div>

               <div className="mailingList__container__form-dataForm-input">
                   <label  className="labelStyle" for="birthday">Birthday</label>
                   <input className="inputStyle" type="date" name="birthday" id="birthday" />
               </div>


               <div className="mailingList__container__form-dataForm-input">
               <label className="labelStyle__checkbox" for="checkbox"> 
               <input className="labelStyle__checkbox--button"  type="checkbox" name="checkbox" id="checkbox" value="1" />
               <span className="labelStyle__checkbox--checked"></span>
               <h2 className="labelStyle__checkbox--message" >  I would Like to receive text alerts with special promotions and information</h2>
                </label>
               </div>

               <div className="mailingList__container__form-dataForm-input">
                   <button className="submitButton" type="submit" name="submit" id="submit">Submit</button>
               </div>

            </form>
           </div> 
            </div>
            </div>
    )

 }   
}

export default MailingList;