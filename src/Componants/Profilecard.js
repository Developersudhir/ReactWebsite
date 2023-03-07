import React from 'react'
// import img from '../img/mem1.jpg';
import insta from '../img/instagram.png';
import fb from '../img/facebook.png';

export const Profilecard = ({myData}) => {
    // console.log(myData);
  return (
    <>
    
    <section className="main-card--cointainer">
    {myData.map((prof)=>{
      const{id, name,department,img}=prof
        return(
          <>
      <div className="card-container"  key={id}>
      <div className="cardprof">
        <div className="upbox">
          <img src={img} alt="Not Found" />
        </div>
        <div className="lowbox">
          <h3>{name}</h3>
          <h4>{department}</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="contact-img">
            <img src={insta} alt="instagram image" />
            <img src={fb} alt="facebook image" />
          </div> 
        </div>
      </div>
      </div>
      </>
      )    
    })}
    </section>
    </>
  )
}
