/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default function Footer() {

  const currentYear=new Date().getFullYear();

  return (
    <>
    <div className='footer-bg'>
      <div className='footer-container'>
      <div style={{width:"200px"}}>
      <img style={{borderRadius:"60%"}} src="https://images.yourstory.com/cs/images/companies/95c4b8aab8ee-theticket9-1649402933320.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" width="100px"/><br/>
      <span style={{fontSize:"20px"}}>Ticket9</span> is a DIY ticketing platform, Provides full-service for event ticketing and access control solutions to professional event organizers around the world.
      </div>
      <div>
      <h3 style={{textAlign:"center"}}>About Us</h3>
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Blog</li>
        <li>Event Magazine</li>
        <li>Product Diary</li>
        <li>Sitemap</li>
      </ul>
      </div>

      <div>
      <h3 style={{textAlign:"center"}}>Organize Events</h3>
        <ul>
          <li>Conferences</li>
          <li>Sports & Fitness</li>
          <li>Workshops & Training</li>
          <li>Entertainment Events</li>
          <li>Festivals & Celebrations</li>
          <li>Meetups and Reunion</li>
        </ul>
      </div>

      <div>
        <h3 style={{textAlign:"center"}}>Legal</h3>
        <ul>
          <li>Pricing</li>
          <li>How it works</li>
          <li>Terms & Conditions</li>
          <li>Privacy</li>
          <li>Refund Policy</li>
          <li>Support/FAQs</li>
        </ul>
      </div>
      </div>

      <div className='PC'>
      <h5 style={{fontSize:"30px",padding:"0 5px"}}>Popular Cities</h5>
      <div  style={{display:"flex",gap:"20px",flexWrap:"wrap",padding:"0 5px"}}>
      <p>Coimbatore</p>
      <p>Chennai</p>
      <p>Bangalore</p>
      <p>Hyderabad</p>
      <p>Mumbai</p>
      <p>Delhi</p>

      <span className='media-icon' style={{fontSize:"30px",display:"flex",gap:"20px"}}>
      <ion-icon name="logo-facebook"/>
      <ion-icon name="logo-instagram"/>
      <ion-icon name="logo-linkedin"/>
      </span>
      </div>
      </div>
    </div>
    <h6 style={{backgroundColor:"darkblue",padding:"3px",color:"white",textAlign:"center"}}>Copyright 2019 - {currentYear} <i class="fa-sharp fa-regular fa-copyright"></i> Ticket 9 All rights reserved</h6>
    </>
  )
}
