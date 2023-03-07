import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/services.css";

export const Services = () => {
  const navPage=useNavigate();
  return (
    <>
    <div className="services" id="ser">
        <h2><u>OUR SERVICES</u></h2>
      
      <div className="row">
        <div className="card">
          <div className="card-head" id="ser1"></div>
          <div className="card-body">
            <h3>
              <u>Web Developement</u>
            </h3>
            <p>
            Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
            </p>
          </div>
          <div className="card-end">
            <button className="hireusbtn"onClick={()=>navPage('/hireus')}>Hire Us</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head" id="ser2"></div>
          <div className="card-body">
            <h3>
              <u>App Developement</u>
            </h3>
            <p>Android software development is the process by which applications are created for devices running the Android operating system. Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), while using other languages is also possible.
            </p>
          </div>
          <div className="card-end">
            <button className="hireusbtn" onClick={()=>navPage('/hireus')}>Hire Us</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head" id="ser3"></div>
          <div className="card-body">
            <h3>
              <u>Software Developement</u>
            </h3>
            <p>
            Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software. Software itself is the set of instructions or programs that tell a computer what to do. It is independent of hardware and makes computers programmable.
            </p>
          </div>
          <div className="card-end">
            <button className="hireusbtn" onClick={()=>navPage('/hireus')}>Hire Us</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <div className="card-head" id="ser4"></div>
          <div className="card-body">
            <h3>
              <u>Software Testing</u>
            </h3>
            <p>
            Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing bugs, reducing development costs and improving performance..
            </p>
          </div>
          <div className="card-end">
            <button className="hireusbtn" onClick={()=>navPage('/hireus')}>Hire Us</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head" id="ser5"></div>
          <div className="card-body">
            <h3>
              <u>Home Automation</u>
            </h3>
            <p>
            “Home automation” refers to the automatic and electronic control of household features, activity, and appliances. In simple terms, it means you can easily control the utilities and features of your home via the Internet to make life more convenient and secure, and even spend less on household bills.
            </p>
          </div>
          <div className="card-end">
            <button className="hireusbtn" onClick={()=>navPage('/hireus')}>Hire Us</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head" id="ser6"></div>
          <div className="card-body">
            <h3>
              <u>IOT Based Projects</u>
            </h3>
            <p>
            IoT-based home automation project aims to automate the functioning of household appliances and objects over the Internet. All the household objects that are connected over the IoT network can be controlled and operated through your smartphone.
            </p>
          </div>
          <div className="card-end">
            <button className="hireusbtn" onClick={()=>navPage('/hireus')}>Hire Us</button>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="card">
          <div className="card-head" id="ser7"></div>
          <div className="card-body">
            <h3>
              <u>Hardware Developement Projects</u>
            </h3>
            <p>
            Hardware development is a complex effort that includes the creation and optimization of electronics and mechanical system elements that perform various computational processes. The connection between these elements and objects is usually realized through a hardware interface..
            </p>
          </div>
          <div className="card-end">
            <button className="hireusbtn" onClick={()=>navPage('/hireus')}>Hire Us</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head" id="ser8"></div>
          <div className="card-body">
            <h3>
              <u>Innovative Idea Suggestions</u>
            </h3>
            <p>
            An innovative idea transforms the way people think and, thus, shifts how the entire market operates as a result. It also helps to introduce new customers to the market because it profoundly changes the way people live. In the age of technology and rapid innovation, it's hard to tell if an idea is truly innovative.
            </p>
          </div>
          <div className="card-end">
            <button className="hireusbtn" onClick={()=>navPage('/hireus')}>Hire Us</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
