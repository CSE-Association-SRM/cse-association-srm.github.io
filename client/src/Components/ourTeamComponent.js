import React,{Component} from 'react';
import Nav from './navigationComponent';
import Footer from './footerComponent'

import '../css/navbar.css';

import '../css/team.css'
import CArousel from './CarouselComponent';

class Team extends Component{
    render(){
        return(
            <>
            <Nav/>
            <div class="teamEnvelope">
                <h1 class="page_title" style={{marginTop:"15%",color:'#3d3d3d'}}>Domains</h1>
                <div class='row'>
                
                <div class='col-xs-3 col-md-2'></div>
                <div class='col-xs-2 col-md-2 ml-4'>
                    <div class='team_envelope'>
                    <div
                        class='team_details'
                        id='tech_team'
                        
                        
                    >
                        <img
                        class='team_img'
                        id='tech_img'
                        src='/assets/computer.svg'
                        height='80'
                        />
                        <h5 class='team_text' style={{ textAlign: 'center' }}>
                        <span id='tech_text1'>T</span>ECHNICAL <br />
                        
                        </h5>
                    </div>
                    </div>
                </div>
                <div class='col-xs-2 col-md-2 ml-4'>
                    <div class='team_envelope'>
                    <div
                        class='team_details'
                        id='nontech_team'
                        onClick={() =>
                        setTimeout(() => {
                            window.scrollTo(0, 2000);
                        }, 500)
                        }
                    >
                        <img
                        class='team_img'
                        id='nontech_img'
                        src='/assets/target.svg'
                        height='80'
                        />
                        <h5 class='team_text' style={{ textAlign: 'center' }}>
                        <span id='nontech_text1'>S</span>PORTS
                        
                        
                        </h5>
                    </div>
                    </div>
                </div>
                <div class='col-xs-2 col-md-2 ml-4'>
                    <div class='team_envelope'>
                    <div
                        class='team_details'
                        id='nontech_team'
                        onClick={() =>
                        setTimeout(() => {
                            window.scrollTo(0, 2000);
                        }, 500)
                        }
                    >
                        <img
                        class='team_img'
                        id='nontech_img'
                        src='/assets/rupee-indian.svg'
                        height='80'
                        />
                        <h5 class='team_text' style={{ textAlign: 'center' }}>
                        <span id='nontech_text1'>S</span>PONSORS
                        
                        
                        </h5>
                    </div>
                    </div>
                </div>
                <div class='col-md-3'></div>
                <div class='col-md-3'></div>
                <div class='col-xs-2 col-md-2 ml-4'>
                    <div class='team_envelope'>
                    <div
                        class='team_details'
                        id='nontech_team'
                        onClick={() =>
                        setTimeout(() => {
                            window.scrollTo(0, 2000);
                        }, 500)
                        }
                    >
                        <img
                        class='team_img'
                        id='nontech_img'
                        src='/assets/video.svg'
                        height='80'
                        />
                        <h5 class='team_text' style={{ textAlign: 'center' }}>
                        <span id='nontech_text1'>P</span>UBLICITY
                        
                        
                        </h5>
                    </div>
                    </div>
                </div>
                <div class='col-xs-2 col-md-2 ml-4'>
                    <div class='team_envelope'>
                    <div
                        class='team_details'
                        id='nontech_team'
                        onClick={() =>
                        setTimeout(() => {
                            window.scrollTo(0, 2000);
                        }, 500)
                        }
                    >
                        <img
                        class='team_img'
                        id='nontech_img'
                        src='/assets/flower.svg'
                        height='80'
                        />
                        <h5 class='team_text' style={{ textAlign: 'center' }}>
                        <span id='nontech_text1'>C</span>ULTURE
                        
                        
                        </h5>
                    </div>
                    </div>
                </div>
                <div class='col-xs-2 col-md-2 ml-4'>
                    <div class='team_envelope'>
                    <div
                        class='team_details'
                        id='nontech_team'
                        onClick={() =>
                        setTimeout(() => {
                            window.scrollTo(0, 2000);
                        }, 500)
                        }
                    >
                        <img
                        class='team_img'
                        id='nontech_img'
                        src='/assets/events.svg'
                        height='80'
                        />
                        <h5 class='team_text' style={{ textAlign: 'center' }}>
                        <span id='nontech_text1'>D</span>ISCIPLINE
                        
                        
                        </h5>
                    </div>
                    </div>
                </div>
                
                </div>
                
            </div>  
            <Footer/>
            </>

        )
    }
}

export default Team;