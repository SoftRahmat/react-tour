// Home Page

import React, { Component } from "react";
import "../App.css";
import "../styles/textoverimage.css";
import {Link} from 'react-router-dom'
import NavbarComp from "../components/navbar";
import Image from 'react-bootstrap/Image'

// T&C agreement reference https://www.pandadoc.com/travel-agency-agreement-template/

class TermsandConditions extends Component {
  
  render() {
    return (
    <div>

    <section>
      <div className="banner">
        <NavbarComp />
        <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1605796803/T_C_zmjhrq.png" width="100%" />

        {/* <CarouselComp /> */}
      </div>
    </section>


    <div className="container" style={{marginTop: "5%"}}>

    {/* <h1>About Us</h1>  */}
    <br/><br/><br/><br/>

    <p style={{textAlign: "left", fontSize: "large"}}>
    

    <br/><br/><br/><br/>
    <h2>Customer-Company Agreement</h2> 
    This travel agency agreement is outlined for the year 2020 inclusive of the following terms and conditions between customers and TOUR as defined below.
    <br/><br/><br/>

    <br/>
    <h2>Services</h2> 
    This agreement is outlined for the year 2020 inclusive of the following terms and conditions between customers and TOUR as defined below.
    TOUR offers travel-related services and accommodations, including: home renting, hosting, transport arragements, guides. TOUR offers the above-listed services and accommodations based on host and consumer contracts, and is not liable if those contracts are not upheld. TOUR special packages also fall under this jurisdiction.
    TOUR agrees to pay hosts commissions based on actual sales, in return for a non-exclusive license to offer the host's services and accommodations as part of vacation and TOUR packages. Hosts agree to maintain availability for such bookings as detailed in their agreements. Additionally, hosts agree to provide sales and marketing material to TOUR for the purpose of promoting the accommodations and services listed in this agreement.
    <br/><br/><br/>

    <h2>TOUR Responsibilities</h2> 
    TOUR will offer items listed in this agreement to hosts and guests as part of TOUR packages. TOUR agrees to offer such items at prices approved by the hosts without exception, and agrees to report all sales to hosts on a monthly basis. TOUR does not provide compensation for losses on part of the host for damages. However TOUR shall provide hosts with full contact information for each customer purchasing the host’s services or accommodations.
    <br/><br/>
    If you are a host, you are responsible for understanding and complying with all laws, rules, regulations and contracts with third parties in your locality, that apply to your services.
    <br/><br/><br/>

    <h2>Privacy and Security</h2> 
    Customers who use TOUR for bookings and agreements are responsible for maintaining the privacy of their accounts through passwords and related accounts. TOUR uses encrypted servers that do not compromise on security, and is not liable for password leaks regulating from user activities that occur under their account and password. TOUR reserves the right to indefinitely suspend, terminate or block customers who provide untrue or intentionally misleading information, outdated or incomplete information, or deliberately compromise hosts through their use of TOUR.
    Customers also agree to immediately notify TOUR of unauthorized use, breaches or attacks on their accounts and ensure that they take appropriate security measures in the event of such circumstances.
    <br/><br/><br/>

    <center>
    <Link to="/explore">
      <button className="extra-btn" onClick={this.updateNum}> Book your next adventure!</button>      
    </Link>
    </center>

    <br/><br/><br/>

    </p>
    </div>
  </div>
    );
  }
}

export default TermsandConditions;
