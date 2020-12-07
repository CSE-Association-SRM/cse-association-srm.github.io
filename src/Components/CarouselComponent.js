import React from 'react';
import '../App.css';
import '../css/navbar.css'
import Carousel from 'react-bootstrap/Carousel'
const CArousel=()=>{
    return(
      <Carousel class="carousel_element" pause={false} style={{marginTop: 10 +'%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/comp.png"
          alt="First slide"
        />
        <div class='overlay1'></div>
        <Carousel.Caption>
          <h1 class='carousel_text'>EVENTS</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/Mic.png"
          alt="Third slide"
        />
        <div class='overlay2'></div>
        <Carousel.Caption>
          <h1 class='carousel_text'>FRESHERS</h1>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/crowd.png"
          alt="Third slide"
        />
        <div class='overlay3'></div>
        <Carousel.Caption>
          <h1 class='carousel_text'>TEAM</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
    );
}

export default CArousel;
