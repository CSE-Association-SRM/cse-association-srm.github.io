import React from 'react';
import '../css/footer.css'
import {NavLink} from 'react-router-dom'
const Footer=()=>{
    return(
        <div class='footer'>
            <div class="container">
                    
                    
                    <div class="row">   
                    <div class='col-lg-2'>
                        
                        <img class="club_icon" src="/assets/cswea.png" height="100"/>
                        
                    </div>
                    <div class="col-lg-7 col-sm-3 navigation" >
                        <div class="row">
                            <div class="col-4" style={{marginLeft: 20 + '%'}}>
                                <ul class="list-unstyled ">
                                    <li><NavLink to="/home"><strong>HOME</strong></NavLink></li>
                                    <li><NavLink  to="/events"><strong>EVENTS</strong></NavLink></li>
                                    <li><a  href="/"><strong>PROJECTS</strong></a></li>
                                    <li><a  href="/"><strong>OUR TEAM</strong></a></li>
                                    <li><a  href="/"><strong>CONTACT US</strong></a></li>
                                </ul>
                            </div>
                            <div class="col-5 contact_us" >
                                <h5 style={{marginTop: 5 + '%'}}>Contact us</h5>
                                <h5 style={{marginTop: 0 + '%'}}>Shubham Deodhar</h5>
                                <h5>Nisarg Bijutkar</h5>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class='col-md-3 md=8' >
                        <div class='social_contact'>
                            <div class='row'>
                                
                                <div class='col-md-2' >
                                    <div class="text-center mx-auto social_icon">
                                        <a class="btn btn-social-icon btn-instagram mx-auto" href="/" target="_blank"><i class="fa fa-instagram fa-lg"></i></a>
                                        
                                    </div>
                                </div>
                                <div class='col-md-2' >
                                    <div class="text-center mx-auto social_icon">
                                        <a class="btn btn-social-icon btn-linkedin mx-auto" href="/" target="_blank"><i class="fa fa-linkedin fa-lg"></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-md-2' >
                                    <div class="text-center mx-auto social_icon">
                
                                        <a class="btn btn-social-icon btn-github mx-auto" href="https://github.com/CSE-Association-SRM" target="_blank"><i class="fa fa-github fa-lg"></i></a>
                                        
                                    </div>
                                </div>
                                <div class='col-md-2' >
                                    <div class="text-center mx-auto social_icon">
                                        <a class="btn btn-social-icon mx-auto" href="mailto:" target="_blank"><i class="fa fa-envelope-o fa-dark fa-lg"></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
            </div>

            
        
    );

}
export default Footer;