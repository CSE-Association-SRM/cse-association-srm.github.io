import React, { useState, Fragment } from 'react';
import { Component } from 'react';
import Footer from './footerComponent';
import Nav from './navigationComponent';
import { Breadcrumb, BreadcrumbItem, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import '../css/events.css';
function RenderEvent({ event }) {
  return <></>;
}

function Liste({ event }) {
  return (
    <div class='col-md-10' style={{ marginTop: 5 + '%', marginLeft: 0 + '%' }}>
      <Card
        style={{ marginLeft: '0%', boxShadow: ' 0px 2px 20px 8px #f1f2f6' }}
      >
        <Card.Img
          src='/assets/ultron.png'
          class='img-fluid d-none d-md-block align-self-center'
          width='330'
          alt={event.name}
          style={{ marginTop: '5%' }}
        />
        <Card.Body style={{ border: 'none' }}>
          <Badge
            color='primary'
            style={{ backgroundColor: '#ff7f50', color: 'white' }}
          >
            Fun
          </Badge>
          <Card.Title style={{ marginTop: '5%' }}>
            <h5>{event.name}</h5>
          </Card.Title>
          <Card.Subtitle>{event.date}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

class Events extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.getElementById('tech_event').addEventListener('mouseover', () => {
      document.getElementById('tech_img').src = '/assets/coding.svg';
      document.getElementById('tech_text1').style.color = 'blue';
      document.getElementById('tech_text2').style.color = 'blue';
    });
    document.getElementById('tech_event').addEventListener('mouseout', () => {
      document.getElementById('tech_img').src = '/assets/computer.svg';
      document.getElementById('tech_text1').style.color = 'black';
      document.getElementById('tech_text2').style.color = 'black';
    });
    document
      .getElementById('nontech_event')
      .addEventListener('mouseover', () => {
        document.getElementById('nontech_img').src = '/assets/goal.svg';
        document.getElementById('nontech_text1').style.color = '#ff6348';
        document.getElementById('nontech_text2').style.color = '#ff6348';
      });
    document
      .getElementById('nontech_event')
      .addEventListener('mouseout', () => {
        document.getElementById('nontech_img').src = '/assets/target.svg';
        document.getElementById('nontech_text1').style.color = 'black';
        document.getElementById('nontech_text2').style.color = 'black';
      });
    document
      .getElementById('upcoming_event')
      .addEventListener('mouseover', () => {
        document.getElementById('upcoming_img').src =
          '/assets/calendarColor.svg';
        document.getElementById('upcoming_text1').style.color = 'gray';
        document.getElementById('upcoming_text2').style.color = 'gray';
      });
    document
      .getElementById('upcoming_event')
      .addEventListener('mouseout', () => {
        document.getElementById('upcoming_img').src = '/assets/calendar.svg';
        document.getElementById('upcoming_text1').style.color = 'black';
        document.getElementById('upcoming_text2').style.color = 'black';
      });
  }
  render() {
    const array = this.props.events;
    const technical = array
      .slice(0)
      .reverse()
      .map(techEvent => {
        if (techEvent.category === 'tech' && !techEvent.upcoming) {
          return (
            <div key={techEvent.id} className='col-12 col-md-5 m-auto'>
              <Liste event={techEvent} />
            </div>
          );
        } else {
          return <></>;
        }
      });
    const nonTech = array
      .slice(0)
      .reverse()
      .map(nTEvent => {
        if (nTEvent.category === 'non-tech' && !nTEvent.upcoming) {
          return (
            <div key={nTEvent.id} className='col-12 col-md-5 m-auto'>
              <RenderEvent event={nTEvent} />
            </div>
          );
        } else {
          return <></>;
        }
      });
    const gamingAndSports = array
      .slice(0)
      .reverse()
      .map(play => {
        if (
          (play.category === 'Gaming' || play.category === 'sports') &&
          !play.upcoming
        ) {
          return (
            <div key={play.id} className='col-12 col-md-5 m-auto'>
              <RenderEvent event={play} />
            </div>
          );
        } else {
          return <></>;
        }
      });
    let count = 1;
    const latest = array.map(UpComing => {
      if (UpComing.upcoming && count === 1) {
        count = count + 1;
        return (
          <div key={UpComing.id} className='col-12 col-md-5 m-auto'>
            <RenderEvent event={UpComing} />
          </div>
        );
      } else {
        return <></>;
      }
    });
    let x = 1;
    const timelinex = array.map(UpComing => {
      if (UpComing.upcoming && x === 1) {
        x = x + 1;
        return (
          <div key={UpComing.id} className='col-12 col-md-5 m-auto'>
            <Liste event={UpComing} />
          </div>
        );
      } else {
        return <></>;
      }
    });

    if (this.props.errMess) {
      return (
        <Fragment>
          <Nav />

          <div class='icon_envelope' style={{ marginTop: 0 + '%' }}>
            <div class='row'>
              <div class='col-md-3'></div>
              <div class='col-md-2'>
                {/* <a href="#"><img src="/assets/techEvents.png" /></a> */}
                <div class='event_envelope'>
                  <div class='event_details' id='tech_event'>
                    <img
                      class='event_img'
                      id='tech_img'
                      src='/assets/computer.svg'
                      height='80'
                    />
                    <h5 class='event_text' style={{ textAlign: 'center' }}>
                      <span id='tech_text1'>T</span>ECH <br />
                      <span id='tech_text2' style={{ marginTop: 10 + '%' }}>
                        E
                      </span>
                      VENTS
                    </h5>
                  </div>
                </div>
              </div>
              <div class='col-md-2'>
                {/* <a href="#"><img src="/assets/techEvents.png" /></a> */}
                <div class='event_envelope'>
                  <div class='event_details' id='nontech_event'>
                    <img
                      class='event_img'
                      id='nontech_img'
                      src='/assets/target.svg'
                      height='80'
                    />
                    <h5 class='event_text' style={{ textAlign: 'center' }}>
                      <span id='nontech_text1'>N</span>ON-TECH
                      <br />{' '}
                      <span id='nontech_text2' style={{ marginTop: 10 + '%' }}>
                        E
                      </span>
                      VENTS
                    </h5>
                  </div>
                </div>
              </div>
              <div class='col-md-2'>
                {/* <a href="#"><img src="/assets/techEvents.png" /></a> */}
                <div class='event_envelope'>
                  <div class='event_details' id='upcoming_event'>
                    <img
                      class='event_img'
                      id='upcoming_img'
                      src='/assets/calendar.svg'
                      height='80'
                    />
                    <h5 class='event_text' style={{ textAlign: 'center' }}>
                      <span id='upcoming_text1'>U</span>PCOMING <br />
                      <span id='upcoming_text2'>E</span>VENTS
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='alert alert-danger' role='alert'>
            {this.props.errMess}
          </div>
        </Fragment>
      );
    } else {
      return (
        <>
          <Nav />

          <div class='icon_envelope' style={{ marginTop: 0 + '%' }}>
            <div class='row'>
              <div class='col-md-3'></div>
              <div class='col-md-2'>
                {/* <a href="#"><img src="/assets/techEvents.png" /></a> */}
                <div class='event_envelope'>
                  <div class='event_details' id='tech_event'>
                    <img
                      class='event_img'
                      id='tech_img'
                      src='/assets/computer.svg'
                      height='80'
                    />
                    <h5 class='event_text' style={{ textAlign: 'center' }}>
                      <span id='tech_text1'>T</span>ECH <br />
                      <span id='tech_text2' style={{ marginTop: 10 + '%' }}>
                        E
                      </span>
                      VENTS
                    </h5>
                  </div>
                </div>
              </div>
              <div class='col-md-2'>
                {/* <a href="#"><img src="/assets/techEvents.png" /></a> */}
                <div class='event_envelope'>
                  <div class='event_details' id='nontech_event'>
                    <img
                      class='event_img'
                      id='nontech_img'
                      src='/assets/target.svg'
                      height='80'
                    />
                    <h5 class='event_text' style={{ textAlign: 'center' }}>
                      <span id='nontech_text1'>N</span>ON-TECH
                      <br />{' '}
                      <span id='nontech_text2' style={{ marginTop: 10 + '%' }}>
                        E
                      </span>
                      VENTS
                    </h5>
                  </div>
                </div>
              </div>
              <div class='col-md-2'>
                {/* <a href="#"><img src="/assets/techEvents.png" /></a> */}
                <div class='event_envelope'>
                  <div class='event_details' id='upcoming_event'>
                    <img
                      class='event_img'
                      id='upcoming_img'
                      src='/assets/calendar.svg'
                      height='80'
                    />
                    <h5 class='event_text' style={{ textAlign: 'center' }}>
                      <span id='upcoming_text1'>U</span>PCOMING <br />
                      <span id='upcoming_text2'>E</span>VENTS
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='upcoming_events_envelope'>
            <h3 style={{ color: 'white', paddingTop: '5%' }}>
              Upcoming Events
            </h3>
            <div class='row' style={{ marginLeft: '0%' }}>
              <div class='timeline'>
                <div class='events'>
                  <ol>
                    <ul>
                      <li>
                        <a href='#0' class='selected'>
                          Early Life
                        </a>
                      </li>
                    </ul>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class='technical_events_envelope'>
            <h3 style={{ color: 'black', paddingTop: '5%' }}>
              Technical Events
            </h3>
            <div class='row'>{technical}</div>
          </div>

          {/* 
       
        <div class='container mx-auto '>
        <div class='col-8 '>
            <div class="alert alert-primary mt-5 " role="alert">
                <h3> UpComing Event  </h3>
            </div>
        </div>
          
        <div class='row'>
              {latest}
        </div>

        <div class='col-8'>
            <div class="alert alert-primary mt-5" role="alert">
                <h3> Tech Events  </h3>
            </div>
        </div>

        <div class='row'>
            {technical}
        </div>

        <div class='col-8'>
            <div class="alert alert-primary mt-5" role="alert">
                <h3> non-Tech Events  </h3>
            </div>
        </div>

        <div class='row'>
            {nonTech}
        </div>
        

        <div class='col-8'>
            <div class="alert alert-primary mt-5" role="alert">
                <h3> Gaming & Sports  </h3>
            </div>
        </div>

        <div class=' row'>
            {gamingAndSports}
        </div>
     
      </div>
       */}
          <Footer />
        </>
      );
    }
  }
}

export default Events;
