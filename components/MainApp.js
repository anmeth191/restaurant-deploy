import React from 'react';
import { HashRouter, Route , Switch } from 'react-router-dom';
import Navbar from './Navbar';
import IndexApp from '../components/IndexApp';
import Footer  from './Footer';
import MenuA from './MenuA';
import MenuDisplay from './MenuDisplay';
import MailingList from './MailingList';
import AboutUs from './AboutUs';
import ContactComponent from './ContactComponent';
import ResponsiveMenu from './responsiveMenu';
import ScrollToTop from './ScrollToTop';
class MainApp extends React.Component{

/*This is my main structure where i have set the components and the routes
i am using hash router because it made easy to deploy in github pages
 */
render(){
    return(<div> 
    
          <HashRouter>
            <ScrollToTop />
            <Navbar />
              <Switch>
              <Route exact path="/" component={ IndexApp }/>
              <Route path="/menu" component={ MenuA} />
              <Route path="/menudisplay/:element" component={MenuDisplay}/>
              <Route path="/mailinglist" component={ MailingList } />
              <Route path="/aboutus" component={ AboutUs } />
              <Route path="/contact" component={ ContactComponent } />
              </Switch>
              <Footer />      
            </HashRouter>
      
         </div>)
}

}

export default MainApp;