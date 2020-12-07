import React from 'react';
import {Component} from 'react';
import '../App.css';
import '../css/navbar.css'
import Carousel from 'react-bootstrap/Carousel';
function RenderEvent({event}){
  return(
    <Carousel.Item>
    <img
          className="d-block w-100"
          src="/assets/comp.png"
          alt="First slide"
        />
    <div class='overlay1'></div>
    <Carousel.Caption>
  <h1 class='carousel_text'>{event.name}</h1>
    </Carousel.Caption>
    </Carousel.Item>
  );
}
class CArousel1 extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const array = this.props.events;
    console.log(array);
    let count=1;
    const latest=array.map((UpComing)=>{
        
        if(UpComing.upcoming && count===1 )
        {   
            count=count+1;
            return(
                <div key={UpComing.id} className="col-12 col-md-5 m-auto" >
                    <RenderEvent event={UpComing} />
                    
                </div>
            );
        }
        else{
            return(<></>);
        }
    })
    return(
    
      <Carousel class="carousel_element" height="10" pause={false} >
        {latest}
      </Carousel>
      
    )
  }
  
}


export default CArousel1;