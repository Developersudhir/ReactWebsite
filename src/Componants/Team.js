import React, { useState } from 'react'
import data from './dataApi';
import { Profilecard } from './Profilecard';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import '../Css/team.css';
export const Team = () => {
  const [myData,setmyData]=useState(data);
  // console.log(myData);

  const filterDept=(dept)=>{
    const updateList=data.filter((curElem)=>{
      return curElem.department===dept;
    });
    setmyData(updateList);
  }
  return (
    <>
    <div className="teamsection">
    <div className="heading"> <span><Link to='/'>Back</Link></span><h1>Team</h1></div>
      <div className="teamhead"><h2>Our Creative Team</h2></div>
      <div className="teamnav">
          <button onClick={()=>filterDept("Consultency")}>Consultency</button>
          <button onClick={()=>{filterDept("Sales and Marketing")}}>Sales and Marketing</button>
          <button onClick={()=>{filterDept("Hardware Development")}}>Hardware Development</button>
          <button onClick={()=>{filterDept("Software Development")}}>Software Development</button>
          <button onClick={()=>{setmyData(data)}}id="allcat">All</button>
      </div>
      <Profilecard myData={myData}/>
    
    </div>
    <Footer/>
    </>
  )
}