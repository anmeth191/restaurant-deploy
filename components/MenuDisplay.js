import React from 'react';
import { connect } from 'react-redux';


class MenuDisplay extends React.Component{

    state = {
        foodSelected:[] , 
        item:''
    }


    
 lookMenu(){
  const { element } = this.props.match.params;
  let titleMenu = '';
 
  if(element === 'appetizers'){
      titleMenu = 'Appetizers'
  } else
  if(element === 'soupsSalads'){
      titleMenu = 'Soup & Salads'
  }else
  if(element === 'pizza'){
      titleMenu = 'Pizza'
  }else 
  if(element === 'calzoneStromboli'){
      titleMenu = 'Calzone & Stromboli';
  }else
  if(element === 'pasta'){
      titleMenu = 'Pasta';
  }else
  if(element === 'bakedDishes'){
      titleMenu = 'Baked Dishes'
  }else
 if(element === 'entrees'){
    titleMenu = 'Entrees'
}else
if(element === 'chickenBurgers'){
   titleMenu = 'Chicken Burgers'
}
else
if(element === 'superBurgers'){
   titleMenu = 'Super Burgers'
}
if(element === 'hotsubs'){
    titleMenu = 'Hot Subs'
 }else
 if(element === 'coldsubs'){
     titleMenu = 'Cold Subs'
 }
 else
 if(element === 'wraps'){
     titleMenu = 'Wraps'
 }
 else
 if(element === 'kids'){
     titleMenu = 'Kids Menu'
 }
 else
 if(element === 'dessert'){
     titleMenu = 'Dessert'
 }
 else
 if(element === 'beverages'){
     titleMenu = 'Beverages'
 }
 else
 if(element === 'gourmetPizza'){
     titleMenu = 'Gourmet Pizza'
 }

this.setState({foodSelected:this.props.elements[element] , item:titleMenu} , ()=>{ return this.state.foodSelected})

 }   

componentDidMount(){
    this.lookMenu();
}

render(){
 return(
    <div className="menuDetail">    
    <div className="menuDetail__container">

        <div className="menuDetail__container__element">
        <h1 className="titleMenu menuDetail__container__element-title">{this.state.item}</h1>

         
                {  this.state.foodSelected.map( (element) =>{
                  return(
                          <div className="menuDetail__container__element--item" key={element.id}>
                              <h1 className="menuDetail__container__element--item-title titleMenu">{element.name}</h1>
                              <span className="menuDetail__container__element--item-description">{element.description}</span>
                              <h3 className="menuDetail__container__element--item-price">{element.priceFull}</h3>
                              </div>
                      )

                })//end of the map to look for the appetizers in the menu
                }
                 </div>
            
        </div>
    </div>

    )
}

}


const setMenuToProps = (state)=>{
    return{
        elements: state
       }
}

export default connect(setMenuToProps)(MenuDisplay);