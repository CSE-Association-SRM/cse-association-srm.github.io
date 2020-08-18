import React,{Component} from 'react';
import FileSaver from 'file-saver';
import Nav from './navigationComponent';
import Footer from './footerComponent'
import '../App.css';
import '../css/navbar.css';
import '../css/landingPage.css';
import '../js/intro'
import '../css/team.css'
import CArousel from './CarouselComponent';

class Sponsors extends Component{
    componentDidMount() {
        document.getElementById('sponsor1').addEventListener('mouseover', () => {
            document.getElementById('sponsor1').src = '/assets/mcdonaldsColored.svg';
          });

        document.getElementById('sponsor1').addEventListener('mouseout', () => {
        document.getElementById('sponsor1').src = '/assets/mcdonalds.svg';
        });

        document.getElementById('sponsor2').addEventListener('mouseover', () => {
            document.getElementById('sponsor2').src = '/assets/dominos-pizzaColored.svg';
          });

        document.getElementById('sponsor2').addEventListener('mouseout', () => {
        document.getElementById('sponsor2').src = '/assets/dominos-pizza.svg';
        });

        document.getElementById('sponsor3').addEventListener('mouseover', () => {
            document.getElementById('sponsor3').src = '/assets/redbullColored.svg';
          });

        document.getElementById('sponsor3').addEventListener('mouseout', () => {
        document.getElementById('sponsor3').src = '/assets/redbull.svg';
        });
        document.getElementById('btn1').addEventListener('click',()=>{
           
            FileSaver.saveAs('/assets/brochure.pdf', "a.pdf");
        })
    }
    render(){
        return(
            <div class="sponsor_envelope" style={{marginTop:'10%'}}>
                <h1 style={{fontSize:'55px',textAlign:'center'}}><span style={{
              color: '#eb2f06',
              fontSize: '55px',
              width: '80%'}}>S</span>ponsors</h1>
                <div class="sponsor_wrapper row" style={{marginTop:'10%'}}>
                    <div class="col-xl-2"></div>
                    <div class="col-xl-3 col-md-3 sponsors">
                    <img
                        className="d-block w-50"
                        src="/assets/mcdonalds.svg"
                        alt="slide"
                        id="sponsor1"
                        />
                    </div>
                    <div class="col-xl-3 col-md-3 sponsors">
                    <img
                        className="d-block w-50"
                        src="/assets/dominos-pizza.svg"
                        alt="slide"
                        id="sponsor2"
                        />
                    </div>
                    <div class="col-xl-3 col-md-3 sponsors">
                    <img
                        className="d-block w-50"
                        src="/assets/redbull.svg"
                        alt="slide"
                        id="sponsor3"
                        />
                    </div>
                    <div class="col-xl-2"></div>
                    <div class="col-xl-3 sponsors">
                    <img
                        className="d-block w-50"
                        src="/assets/internshala.webp"
                        alt="slide"
                        id="sponsor3"
                        style={{marginTop:'20%'}}
                        />
                    </div>
                </div>
                <div class="sponsorship_brochure">
                    <a href="#" id="btn1"><h6 style={{textAlign:'center'}}>Check out Sponsorship brochure</h6></a>
                </div>
            </div>
        )
    };
}

export default Sponsors;