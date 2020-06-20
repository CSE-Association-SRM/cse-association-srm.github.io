import React from 'react';
import Footer from './footerComponent';
import Nav from './navigationComponent';

const Events=()=>{
    return(
        <>
            <header>
                <Nav/>
            </header>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}
export  default Events;