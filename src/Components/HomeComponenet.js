import React ,{Component} from 'react';
import '../App.css';
import CArousel from './CarouselComponent';
import Intro from './introComponent';
import Work from './WorkComponent'
import Footer from './footerComponent';
import {NavLink} from 'react-router-dom'
class HomeNav extends Component{

    constructor(props){
        super(props)
        const transDivStyle={
            background:'transparent',
            color:'white'
        }
        
        this.state={
            isLoading:true,
            style:transDivStyle
        }
        
      
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
               
            })
        },3000);
        window.addEventListener('scroll',()=>{
            const isTop=window.scrollY <200;
            const NormalDivstyle={
                background:'#00a8ff'
              
            }
            const transDivStyle={
                background:'transparent',
                color:'white'
            }
            if(isTop!==true){
                this.setState({
                    style:NormalDivstyle
                })
            }
            else{
                this.setState({
                    style:transDivStyle
                })
            }
        })
        console.log(this.props.events.filter((event)=>event.upcoming))
    }
   
   

    render(){
        if(this.state.isLoading){
            return(

                <div className="col-12 load align-item-center">
                    <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
                    <p>Loading . . .</p>
                </div>

            );

        }
        else{
        return(
            <>
            <nav class='navbar navbar-expand-md fixed-top top' style={this.state.style}>
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
           <CArousel/>
           <Intro/>
           <Work event={this.props.events.filter((event)=>event.upcoming)[0]}/>
           <Footer/>
           </>
        );}
    }





}

export default HomeNav;