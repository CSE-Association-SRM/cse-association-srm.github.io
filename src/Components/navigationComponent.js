import React, { Component } from 'react';
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    const transDivStyle = {
      background: 'transparent',
      color: 'black',
      borderBottom: 'none',
    };

    this.state = {
      isLoading: true,
      style: transDivStyle,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 2000;
      const NormalDivstyle = {
        backgroundColor: 'white',
        color: 'black',
        borderBottom: 'none',
        boxShadow: '8px 0px 5px 5px #f1f2f6',
      };
      const transDivStyle = {
        background: 'transparent',
        color: 'white',
        borderBottom: 'none',
      };
      if (isTop !== true) {
        this.setState({
          style: transDivStyle,
        });
      } else {
        this.setState({
          style: NormalDivstyle,
        });
      }
    });
  }
  render() {
    return (
      <nav
        class='navbar navbar-expand-md fixed-top top'
        style={this.state.style}
      >
        <div class='container'>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#Navbar'
          >
            <span class='fas fa-list' style={{ color: 'black' }}></span>
          </button>
          <NavLink class='navbar-brand mr-5' to='/home'>
            <h2>
              {' '}
              <img src='/assets/cswea.svg' height='50' alt='...' />
            </h2>
          </NavLink>
          <div class='collapse navbar-collapse' id='Navbar'>
            <ul class='navbar-nav ml-auto'>
            <li class='nav-item active'>
                <NavLink to='/home' class='nav-link '>
                  <h6>Home</h6>
                </NavLink>
              </li>  
              <li class='nav-item active'>
                <NavLink to='/events' class='nav-link '>
                  <h6>Events</h6>
                </NavLink>
              </li>
              <li class='nav-item'>
                <NavLink class='nav-link' to='/projects'>
                  <h6>Projects</h6>
                </NavLink>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#contact'>
                  <h6>Our Team</h6>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='/'>
                  <h6>Contact us</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
