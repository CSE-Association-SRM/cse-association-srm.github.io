import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom'
const Footer=()=>{
    return(
        <div class='footer'>
            <div class="container">
                <div class="row">
                    <div class="col-5  offset-1 col-sm-3 ">
                        <h5>Links</h5>
                            <ul class="list-unstyled">
                                <li><NavLink class='nav-link'to="/home"><strong>Home</strong></NavLink></li>
                                <li><NavLink class='nav-link' to="/events"><strong>Events</strong></NavLink></li>
                                <li><a class='nav-link' href="/"><strong>Projects</strong></a></li>
                                <li><a class='nav-link' href="/"><strong>Our Team</strong></a></li>
                                <li><a class='nav-link' href="/"><strong>Contact Us </strong></a></li>
                            </ul>
                    </div>
                    <div class="col-12 col-sm-7 align-self-center">
                    <div class="row">   
                    <div class="text-center mx-auto">
                        <a class="btn btn-social-icon btn-instagram mx-auto" href="/" target="_blank"><i class="fa fa-instagram fa-lg"></i></a>
                        <p style={{color: "white"}}>csea_srm </p>
                    </div>
                    <div class="text-center mx-auto">
                        <a class="btn btn-social-icon btn-linkedin mx-auto" href="/" target="_blank"><i class="fa fa-linkedin fa-lg"></i></a>
                        <p style={{color: "white"}}>CSEA SRM </p>
                    </div>
                    <div class="text-center mx-auto">
   
                        <a class="btn btn-social-icon btn-github mx-auto" href="https://github.com/CSE-Association-SRM" target="_blank"><i class="fa fa-github fa-lg"></i></a>
                        <p style={{color: "white"}}>CSE Association SRM </p>
                    </div>
                    <div class="text-center mx-auto">
                         <a class="btn btn-social-icon mx-auto" href="mailto:" target="_blank"><i class="fa fa-envelope-o fa-dark fa-lg"></i></a>
                         <p style={{color: "white"}}>abc@def.com </p>
                    </div>
                </div>
                </div> 
            </div>

            </div>
        </div>
    );

}
export default Footer;