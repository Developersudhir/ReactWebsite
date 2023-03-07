import React from 'react';
import img from '../img/instagram.png';
import img1 from '../img/facebook.png';
import img2 from '../img/whatsapp.png';
import img3 from '../img/gmail.png';
import '../Css/footer.css';

export const Footer = () => {
  return (
    <>
    <footer>
        <div className="info">
        <h4><u>&lt;Kb's Tech/&gt;</u></h4>
        <p>Kb's Tech Is Digital Portal Where You Can Find The Best Services For Your Bussiness. We Provide Services Like App Developement , Web Developement , Hardware Reparing , IOT Base Projects , Home Automation.</p>
        </div>
        <div className="social-media" id='cont'>
            <h3>Follow Us On</h3>
            <img src={img} alt="Instagram Image" />
            <img src={img1} alt="Facebook Image" />
            <img src={img2} alt="Whatsapp Image" />
            <img src={img3} alt="Gmail Image" />
        </div>
        <div className="copyr">
            <p>Develope By Sudhir &copy; 2023-2025 all are Reserved.</p>
        </div>
    </footer>
    </>
  )
}
