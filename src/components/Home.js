import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgBackground from '../images/background_photo_3.jpg';



 class Home extends Component {
  render() {
    return (
      
       <div>     
<div className="imgbgr">

       <img src={imgBackground} /> </div>       
           
          


      </div>
    )
  }
}

export default Home; 