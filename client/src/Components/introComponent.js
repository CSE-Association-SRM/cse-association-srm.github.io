import React, { Component } from 'react';
import '../App.css';
import '../css/navbar.css';
import '../css/landingPage.css';
import '../js/intro';
import CArousel1 from './CarouselComponent';

class Intro extends Component {
  componentDidMount() {
    // const el = document.querySelector(".intro_envelope");
    // el.addEventListener("mousemove", (e) => {
    // el.style.backgroundPositionX = -e.offsetX/10 + "px";
    // el.style.backgroundPositionY = -e.offsetY/10 + "px";
    // });
  }
  render() {
    return (
      <div class='intro_envelope  ' id='module'>
        <div class='row '>
          <div class='col-12 col-sm-7 club_element'>
            <h2>CSEA SRM</h2>
            <p class='tagLine'>The official club || SRM KTR</p>
          </div>
          <div
            class='intro_img col-sm-5 img-fluid'
            style={{ backgroundColor: 'transparent' }}
          >
            <img
              src='/assets/2713670.jpg'
              width='auto'
              height='500'
              className='img-fluid d-none d-md-block'
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
        </div>
        <div class='row aboutTeam'>
          <div class='col-lg-6' style={{ marginLeft: 5 + '%' }}>
            <CArousel1 class='carousel_element' />
          </div>
          <div class='col-lg-5'>
            <p class='team_desc'>
              <span style={{ color: '#fed330' }}>CSEA</span> is the official
              Computer Science club of SRM KTR. We strive towards making
              successful events, workshops and webinars, to work towards
              providing helpful resources to fellow CS students.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
