import React ,{Component} from 'react';
import '../App.css';
import '../css/navbar.css'
import CArousel from './CarouselComponent';
import Intro from './introComponent';
import Work from './WorkComponent';
import Nav from './navigationComponent';
import Footer from './footerComponent';
import {NavLink} from 'react-router-dom'
class HomeNav extends Component{
    constructor(props){
        super(props)
        
        this.state={
            isLoading:true
            
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
        <Nav/>
           <Intro/>
           <Work event={this.props.events.filter((event)=>event.upcoming)[0]}/>
           <Footer/>
           </>
        );}
    }





}

export default HomeNav;