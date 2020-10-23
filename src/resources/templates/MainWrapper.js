import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function MainWrapper(props) {
    return (
        <div class="wrapper">
            <Header/>
            <Navigation/>
            <div className="content-wrapper">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}
