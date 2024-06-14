import React, { Component } from 'react';
import './d_home.css';
import './d_home2.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SubnavBar from "./DesignSubNavbar/index";
export default class d_home extends Component {
  render() {
  
  
    return (
      <div>
        <Navbar/>
        <SubnavBar/>
                          
{/* ------------------------------------------------------------- */}
<section className='d_home_section2' >

    <h1>Browse accessories or find new colours to go with your devices.</h1>

<div className='d_home_section2_image1'></div>

</section>
<section className='d_our_team'>
  <div className='our_team'> Our Team</div>
 <div className='our_team1'>

<div className='our_team_image'></div><div className='our_team_image'></div><div className='our_team_image'></div><div className='our_team_image'></div><div className='our_team_image'></div>

</div>
<div className='ourteam_name'>By David Jon ,Charli Mathew, Rajiv Shah, Megan Rox, Tom Will</div>
</section>
<section className='our_team_content'>

  <div className='our_team_para'>
  A description of the current state of the school in UP, as well as issues facing the school's infrastructure and practices
  </div>
  <div className='our_team_para'>
  A description of the current state of the school in UP, as well as issues facing the school's infrastructure and practices
  </div>
  <div className='our_team_para'>
  A description of the current state of the school in UP, as well as issues facing the school's infrastructure and practices
  </div>
  <div className='our_team_para'>
  A description of the current state of the school in UP, as well as issues facing the school's infrastructure and practices
  </div>
  <div className='our_team_para'>
  Knowing the general dimensions and government standards for school designs that can be considered for government approval
  </div>
  <div className='our_team_para'>
  Examining three examples of design and studying them in-depth
  </div>
</section>
{/* ------------------------------------------------------------- */}

<Footer/>
      </div>
    )
  }
}

