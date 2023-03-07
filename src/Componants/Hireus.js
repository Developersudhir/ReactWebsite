import React from 'react'
import '../Css/hireus.css';
import { Link } from 'react-router-dom';

export default function Hireus() {
  const displayPopup=()=>{
    let pop=document.querySelector(".popup");
    pop.style.display="block";
    window.location('/hireus');
  }
  const closePopup=()=>{
    let pop=document.querySelector(".popup");
    pop.style.display="none";
    window.location('/hireus');
  }
  return (
    <>
    <div className="nav1">
      <span><Link to='/'>Back</Link></span>
        <h1>Kb's Tech</h1>
    </div>
    <div className="hireusform">
    <form action="#" onSubmit={displayPopup}>
      <label htmlFor="name">Name</label>
    <input type="text" placeholder='Enter Your Name'  />
    <label htmlFor="mail">Email Address</label>
    <input type="email" placeholder='Enter Your email'  />
    <label htmlFor="name">Service</label>
    <select name="service" id="">
      <option value="appservice">App Developement</option>
      <option value="webservice">Web Developement</option>
      <option value="iotservice">Projects Based On IOT</option>
      <option value="homeautoservice">Home Automation</option>
      <option value="softwaredevelopservice">Software Developement</option>
      <option value="softwaretestingservice">Software Testing</option>
      <option value="hardwareservice">Hardware Project Developement</option>
    </select>
    <label htmlFor="query">Enter Your Enquiries?</label>
    <textarea name="qeury" id="txtar" cols="30" rows="10" placeholder='Enter Your Queries?'></textarea>
    <button className='btn' type='submit'>Hire Us</button>
    </form>
<div className="popup">
  <h3>Thank You </h3>
  <p>We Will Contact You As Soon as Possiable!</p>
  <button className='popbtn' onClick={closePopup}>Ok</button>
</div>
    </div>
    </>
  )
}
