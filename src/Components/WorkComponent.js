import React from 'react';
import '../App.css';


const Work=(props)=>{
    console.log('This is rendering through Work Component'+props.event.name)
    return(

        <div class='container mt-5 '>
            <hr/>
            <div class="alert alert-primary mt-5" role="alert">
                <h1> So What are the Main things that we do ? </h1>
            </div>

            <div class='row row-content align-items-center side hover'>
                <div class='col-12 col-sm-4 order-sm-first col-md-3 colour'>
                    <h3>We Welcome you with Awesome <b>Freshers Party!</b></h3>
                </div>
                <div class="col col-sm order-sm-last col-md">
                    <div class="media">
                    <div class="media-body">
                            <h2 class='mt-0'>CSEA's Fresher Events</h2>
                            <p>Its our responsibility to present you with warm welcome cbabvwev  bc2cqbcuy2bcqnqoxm2ncwendjcnryvbeh mXOW!!!!!!!!!!!!!!!</p>
                        </div>
                        <img class='d-none d-md-block  mr-3  img-thumbnail align-self-center'
                            src='/assets/cswea.png'  width='150' height='150' alt="CSEA Fresher's"/>
                        
                    </div>
                </div>
            </div>
            <hr/>
            <div class='row row-content align-items-center side1 hover1'>
                <div class='col-12 col-sm-4 order-sm-last col-md-3 colour'>
                    <h3>Our Tech event <b>Ultron</b></h3>
                </div>
                <div class="col col-sm order-sm-first col-md">
                    <div class="media">
                    <img class='d-none d-md-block mr-3 img-thumbnail align-self-center'
                            src='/assets/cswea.png'  width='150' height='150' alt="CSEA Fresher's"/>
                    <div class="media-body">
                            <h2 class='mt-0'>CSEA's Ultron</h2>
                            <p>c wev chcu2ub2i3dj3uhiqc;    cm  infc    hfyufb   x2xbincnvqnvwby qcuynfhy y cbabvwev  bc2cqbcuy2bcqnqoxm2ncwendjcnryvbeh mXOW!!!!!!!!!!!!!!!</p>
                        </div>

                        
                    </div>
                </div>
            </div>
           <hr/>
           <div class='row row-content align-items-center side hover extra '>
                <div class='col-12 col-sm-4 order-sm-first col-md-3 colour'>
                    <h3>This is our Exciting <b>Upcomimg Event</b></h3>
                </div>
                <div class="col col-sm order-sm-last col-md">
                    <div class="media">
                    <div class="media-body">
                        <h2 class='mt-0'>{props.event.name}</h2>
                        <p>{props.event.description}</p>
                    </div>
                        <img class='d-none d-md-block mr-3 img-thumbnail align-self-center'
                            src='/assets/cswea.png'  width='150' height='150' alt="CSEA Fresher's"/>
                        
                    </div>
                </div>
            </div>
        </div>

    );

}
export default Work;