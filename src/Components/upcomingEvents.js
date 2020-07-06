import React , {useState} from 'react';
import {Component} from 'react';
import Footer from './footerComponent';
import Nav from './navigationComponent';
import {Breadcrumb,BreadcrumbItem,Card,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';
import '../css/events.css'

class UpcomingEvents extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        let count=1;
        const latest=array.map((UpComing)=>{
            
            if(UpComing.upcoming && count===1 )
            {   
                count=count+1;
                return(
                    <div key={UpComing.id} className="col-12 col-md-5 m-auto" >
                        <RenderEvent event={UpComing} />
                    </div>
                );
            }
            else{
                return(<></>);
            }
        });
    }
}

export default UpcomingEvents;