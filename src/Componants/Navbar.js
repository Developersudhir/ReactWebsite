import React from 'react';
import '../Css/nav.css';
import '../Css/index.css';
import { Content } from './Content';
import { Footer } from './Footer';
import { Services } from './Services';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
    <div className="content">
    <div className="nav">
        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><a href="#ser">OUR SERVICES</a></li>
            <li><a href="#cont">CONTACTS</a></li>
            <li><Link to='/team'>TEAM BEHIND US</Link></li>
        </ul>
    </div>
    <Content/>
    <Services/>
    <Footer/>
    </div>
    </>
  )
}
