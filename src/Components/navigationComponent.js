import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

const Nav=()=>{
    return(
        <nav class='navbar navbar-expand-md fixed-top top nice' >
               <div class='container'  >
                   <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#Navbar'>
                       <span class='fa fa-list text-white'></span>
                   </button>
                   <NavLink class='navbar-brand mr-5' to='/home'>
                      <h2> <img src='/assets/cswea.png' height='50' width='50' alt='...'/>CSE Association</h2>
                   </NavLink>
                   <div class="collapse navbar-collapse" id="Navbar">
                        <ul class="navbar-nav ml-auto">
                           <h6><li class="nav-item active"><NavLink to='/events' class="nav-link " ><i class="fas fa-bullhorn"></i>Events</NavLink></li></h6>
                           <h6><li class="nav-item"><a class="nav-link" href="/"><span class="fas fa-atom fa-lg"></span>Projects</a></li></h6>
                           <h6><li class="nav-item"><a class="nav-link" href="/"><i class="fas fa-people-carry"></i>Out Team</a></li></h6>
                           <h6><li class="nav-item"><a class="nav-link" href="/"><span class="fa fa-address-card fa-lg"></span> Contact us</a></li></h6>
                        </ul>   
                          
                    </div>       
               </div>
           </nav>
    );

}
 export default Nav;