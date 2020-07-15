import React, { Component } from 'react';
import '../App.css';
import '../css/navbar.css';
//import CArousel from './CarouselComponent';
import Intro from './introComponent';
import Work from './WorkComponent';
import Nav from './navigationComponent';
import Footer from './footerComponent';
import { NavLink } from 'react-router-dom';
import Contact from './ContactComponent';
class HomeNav extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div className='col-12 load align-item-center'>
          <span className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary'></span>
          <p>Loading . . .</p>
        </div>
      );
    } else {
      return (
        <>
          <Nav />
          <Intro />
          <Work event={this.props.events.filter(event => event.upcoming)[0]} />
          <Contact />
          <Footer />
        </>
      );
    }
  }
}

export default HomeNav;
