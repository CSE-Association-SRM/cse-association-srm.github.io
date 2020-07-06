import React from 'react';
import '../App.css';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Work=(props)=>{
    console.log('This is rendering through Work Component'+props.event.name)
    return(

        <div class='event_element '>
            <div class="alert mt-10" role="alert" style={{paddingTop: 10 + '%'}}>
                <h1 style={{textAlign:'center'}}><span style={{color:'#eb3b5a'}}>M</span>AJOR EVENTS </h1>
            </div>
            <div class='row' style={{marginTop:5 + '%'}}>
                <div class="col-md-1"/>
                <div class='col-lg-5 card-element'>
                    <div class="flip-card" >
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img class="card-img-top" src="/assets/freshers.png" alt="Card image cap" height="300"/>
                            </div>
                            <div class="flip-card-back">
                                <h5 class="card-title">FRESHERS</h5>
                                <p class="card-text">The official freshers for all the first year CSE students!</p>
                                Date: Not Declared<br/>
                                <a href="#" class="btn btn-success">View the previous freshers!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-lg-5 card-element'>
                    <div class="flip-card" >
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img  src="/assets/ultron.png" alt="Card image cap" height="300"/>
                            </div>
                            <div class="flip-card-back">
                                <h5 class="card-title">ULTRON</h5>
                                <p class="card-text">Consists of various workshops, webinars to introduce new concepts to students</p>
                                <div class='card-action'>Date: Not Declared</div><br/>
                                <a href="#" class="btn btn-success">More info</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            
            </div>
            <div class="alert mt-5" role="alert">
                <h3 style={{textAlign:'center'}}> We have more events planned out! For more info check out our events page </h3>
            </div>
        </div>

    );

}
export default Work;