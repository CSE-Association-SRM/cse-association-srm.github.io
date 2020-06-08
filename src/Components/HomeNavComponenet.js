import React ,{Component} from 'react';
import '../App.css';
import Carousel from './CarouselComponent';


class HomeNav extends Component{

    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            className:'navb'
        }
        const transDivStyle={
            background:'transparent',
            color:'white'
        }
        const NormalDivstyle={
            background:'purple',
            color:'white'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
               
            })
        },3000);
        

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
            <nav class='navbar navbar-expand-md fixed-top top'>
               <div class='container'  >
                   <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#Navbar'>
                       <span class='fa fa-list text-white'></span>
                   </button>
                   <a class='navbar-brand mr-5' href='/'>
                      <h1> <img src='/assets/cswea.png' height='60' width='60' alt='...'/>CSE Association</h1>
                   </a>
                   <div class="collapse navbar-collapse" id="Navbar">
                        <ul class="navbar-nav ml-auto">
                           <h5><li class="nav-item active"><a class="nav-link " href="/"><i class="fas fa-bullhorn"></i>Events</a></li></h5>
                           <h5><li class="nav-item"><a class="nav-link" href="/"><span class="fas fa-atom fa-lg"></span>Projects</a></li></h5>
                           <h5><li class="nav-item"><a class="nav-link" href="/"><i class="fas fa-people-carry"></i>Out Team</a></li></h5>
                           <h5><li class="nav-item"><a class="nav-link" href="/"><span class="fa fa-address-card fa-lg"></span> Contact us</a></li></h5>
                        </ul>   
                          
                    </div>       
               </div>
           </nav>
           <Carousel/>
           </>
        );}
    }





}

export default HomeNav;