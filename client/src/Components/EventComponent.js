import React , {useState} from 'react';
import {Component} from 'react';
import Footer from './footerComponent';
import Nav from './navigationComponent';
import {Breadcrumb,BreadcrumbItem,Card,Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/events.css'
import CArousel1 from './carouselComponent1';


function Liste({event}){
    return(
       
       <div class="col-sm-4 " style={{marginTop: 5+"%"}}>     
        <Card class="event_card" style={{marginLeft: "0%",boxShadow:" 0px 2px 20px 8px #f1f2f6",width:"300px"}}>
            <Card.Img src='/assets/ultron.png' class='img-fluid d-none d-md-block align-self-center'  width='330' alt={event.name} style={{marginTop: "5%"}}/>
            <Card.Body style={{border: "none"}}>
                <Badge color="primary" style={{backgroundColor: "#ff7f50",color: "white"}}>Fun</Badge>
                <Card.Title style={{marginTop: "5%"}}>
                   <h5>{event.name}</h5> 
                </Card.Title>
                <Card.Subtitle>{event.date}</Card.Subtitle> 
                
            </Card.Body>
        </Card>
        </div>
    );
}

function showTech(){
    document.getElementById('technical_events_envelope').style.height = 20 + '%';
}

class Events extends Component{
    constructor(props){
        super(props)
        
    }
    _isMounted = false;
    componentDidMount(){
        
        document.getElementById('tech_event').addEventListener('mouseover',()=>{
            document.getElementById('tech_img').src = "/assets/coding.svg";
            document.getElementById('tech_text1').style.color = "blue";
            document.getElementById('tech_text2').style.color = "blue";
        })
        document.getElementById('tech_event').addEventListener('mouseout',()=>{
            document.getElementById('tech_img').src = "/assets/computer.svg";
            document.getElementById('tech_text1').style.color = "black";
            document.getElementById('tech_text2').style.color = "black";
        })
        document.getElementById('nontech_event').addEventListener('mouseover',()=>{
            document.getElementById('nontech_img').src = "/assets/goal.svg";
            document.getElementById('nontech_text1').style.color = "#ff6348";
            document.getElementById('nontech_text2').style.color = "#ff6348";
        })
        document.getElementById('nontech_event').addEventListener('mouseout',()=>{
            document.getElementById('nontech_img').src = "/assets/target.svg";
            document.getElementById('nontech_text1').style.color = "black";
            document.getElementById('nontech_text2').style.color = "black";
        })
        document.getElementById('upcoming_event').addEventListener('mouseover',()=>{
            document.getElementById('upcoming_img').src = "/assets/calendarColor.svg";
            document.getElementById('upcoming_text1').style.color = "gray";
            document.getElementById('upcoming_text2').style.color = "gray";
        })
        document.getElementById('upcoming_event').addEventListener('mouseout',()=>{
            document.getElementById('upcoming_img').src = "/assets/calendar.svg";
            document.getElementById('upcoming_text1').style.color = "black";
            document.getElementById('upcoming_text2').style.color = "black";
        })
        document.getElementById('technical_down_arrow').addEventListener("click",()=>{
          if(document.getElementById('technical_events_envelope').style.height == 300 + 'px' || document.getElementById('technical_events_envelope').style.height == 500 + 'px'){
            document.getElementById('technical_events_envelope').style.height = 100 + '%';}
          else{
          document.getElementById('technical_events_envelope').style.height = 300 + 'px'}
        })
        document.getElementById('nontechnical_down_arrow').addEventListener("click",()=>{
          if(document.getElementById('non-technical_events_envelope').style.height == 500 + 'px' || document.getElementById('technical_events_envelope').style.height == 500 + 'px'){
            document.getElementById('non-technical_events_envelope').style.height = 100 + '%';}
          else{
            document.getElementById('non-technical_events_envelope').style.height = 500 + 'px'}
        })
    }
    render(){
    const array=this.props.events;
    var b=0;
        const technical= array.slice(0).reverse().map((techEvent)=>{
            if(techEvent.category==='tech' && !techEvent.upcoming )
            { return(
                    <div key={techEvent.id} className="col-12 col-md-5 m-auto" >
                        <Liste event={techEvent} />
                    </div>
                );}
            else{
                return(<></>);
            }
        })
    var a =0;
    const nonTech=array.slice(0).reverse().map((nTEvent)=>{
        if(nTEvent.category==='non-tech' && !nTEvent.upcoming && a<3)
        { 
            a = a+1;
            return(
                <div key={nTEvent.id} className="col-12 col-md-5 m-auto" >
                   <Liste event={nTEvent} />
                </div>
            );
        }
        else{
            return(<></>);
        }
    })
    var b=0;
    const nonTech1=array.slice(0).reverse().map((nTEvent)=>{
      if(nTEvent.category==='non-tech' && !nTEvent.upcoming && b<3)
      { 
          b= b + 1;
          return(
              <div key={nTEvent.id} className="col-12 col-md-5 m-auto" >
                 <Liste event={nTEvent} />
              </div>
          );
      }
      else{
          return(<></>);
      }
  })
    const gamingAndSports=array.slice(0).reverse().map((play)=>{
        if((play.category==='Gaming' || play.category==='sports') && !play.upcoming )
        {
            return(
                <div key={play.id} className="col-12 col-md-5 m-auto" >
                    <Liste event={play} />
                </div>
            );
        }
        else{return(<></>)}
    })
    

    
    return(
        <>
       
      
          
              <Nav/>
              
          
        <div class='icon_envelope' style={{marginTop: 0 + '%'}}>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-2" >
                    
                     <div class="event_envelope">
                        <div class="event_details" id="tech_event">
                            <img class="event_img" id="tech_img" src="/assets/computer.svg" height="80" />
                            <h5 class="event_text" style={{textAlign: "center"}}><span id="tech_text1">T</span>ECH <br/><span id="tech_text2" style={{marginTop: 10 + '%'}}>E</span>VENTS</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-2" >
                     
                     <div class="event_envelope">
                        <div class="event_details" id="nontech_event">
                        
                            <img class="event_img" id="nontech_img" src="/assets/target.svg" height="80" />
                            <h5 class="event_text" style={{textAlign: "center"}}><span id="nontech_text1">N</span>ON-TECH<br/> <span id="nontech_text2" style={{marginTop: 10 + '%'}}>E</span>VENTS</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-2" >
                     {/*   */}
                     <div class="event_envelope">
                        <div class="event_details" id="upcoming_event">
                        
                            <img class="event_img" id="upcoming_img" src="/assets/calendar.svg" height="80" />
                            <h5 class="event_text" ><span id="upcoming_text1">U</span>PCOMING <br/><span id="upcoming_text2">E</span>VENTS</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="upcoming_events_envelope">
            <h3 style={{color: "white",paddingTop:"5%"}}>Upcoming Events</h3>
            <div class="row" style={{width:"100%"}}>
                <div class='col-lg-6' style={{marginLeft: 5 +'%'}}>
                    <img class="img-fluid" src="/assets/comp.png" height="350" style={{marginTop:"15%"}}/>
                </div>
                <div class='col-lg-5'>
                    <p class='team_desc'><span style={{color:'#fed330'}}>CSEA</span> is the official Computer Science club of SRM KTR. We strive towards making successful events, workshops and webinars, to work towards providing helpful resources to fellow CS students.</p>
                </div>
            </div>
        </div>   
        <div id="technical_events_envelope">
          <h3 class="technical_event_title" style={{color: "black",paddingTop:"5%"}}>Technical Events <span class='fas fa-chevron-down' id="technical_down_arrow" style={{ color: 'black' }}></span></h3>
          <div class='row'>
              {technical}
          </div>
        </div>
        <hr/>
        <div id="non-technical_events_envelope">
          <h3 class="non-technical_event_title" style={{color: "black",paddingTop:"5%"}}>Non-Technical Events <span class='fas fa-chevron-down' id="nontechnical_down_arrow" style={{ color: 'black' }}></span></h3>
          <div class='row'>
              {nonTech}
          </div>
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
       <Footer/>
    </>
    );}
    }

export  default Events;