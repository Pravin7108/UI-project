/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";

export default function Create() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(()=>{
    setInterval(() => {
      const currentDate= new Date().getTime();
      const eventDate=new Date("June 03 ,2023 00:00:00:00");
      const remain = eventDate - currentDate;

      setDays(Math.floor(remain/1000/60/60/24));
      setHours(Math.floor(remain/1000/60/60)%24);
      setMinutes(Math.floor(remain/1000/60)%60);
      setSeconds(Math.floor(remain/1000)%60);

      // if(days<10){
      //   setDays("0"+days)
      // }
      // if(hours<10){
      //   setHours("0"+ hours)
      // }
      // if(minutes<10){
      //   setMinutes("0"+ minutes)
      // }
      // if(seconds<10){
      //   setSeconds("0"+seconds)
      // }
    },1000);
  })
  
  return (
    <>
      <Header />
      <img src="https://static.businessworld.in/article/article_extra_large_image/1657984135_u4VvPd_Padharo_Mhare_Desh_food_festival.jpg" width="100%" /><br /><br />

      <div className='details'>
        <div style={{ display: "flex", gap: "50px" }}>
          <div className='calendar-box'>
            <p style={{ backgroundColor: "#fc4259" }}>June</p><p style={{ fontSize: "1.8rem" }}>10<br />Saturday</p>
          </div>
          <div>
            <h2>FOOD FEST</h2>
            <p><ion-icon name="calendar-outline" /> June 10, 2023 (8 am to 12 pm)<br /><ion-icon name="location-outline" />Bharathiyar Arangam, Salem</p>
          </div>
        </div>

        <div>
          <button className='book-btn'><ion-icon name="ticket-outline"/>Book Tickets</button>
          <div className='src'>
            <button className='src-btn'><ion-icon name="share-social-outline" /> Share</button>
            <button className='src-btn'><ion-icon name="mail-outline" /> Report</button>
            <button className='src-btn'><ion-icon name="calendar-outline" /> Calendar</button>
          </div>
        </div>
      </div>


      <div style={{ display: "flex", flexWrap: "wrap" }}>

        <div className='description'>
          <h2>Description</h2>
          <p style={{ color: "purple" }}>Event date - 10th June, 2023 (Saturday)</p>
          <p style={{ color: "purple" }}>Event Time - 8am onwards</p>
          <p style={{ color: "purple" }}>Venue - Bharathiyar Arangam, Salem.</p>
          <p>A food festival is a festival, that uses food, often produce, as its central theme. These festivals have always been a means of uniting communities through celebrations of harvests and giving thanks for a plentiful growing season.</p>
        </div>

        <div>
            <b style={{color:"blue",fontSize:"2rem"}}>Ticket Booking ends in :</b>
          <div className='countDown'>
            <div>
              <p>{days}</p><span>Days</span>
            </div>
            <div>
              <p>{hours}</p><span>Hours</span>
            </div>
            <div>
              <p>{minutes}</p><span>Minutes</span>
            </div>
            <div>
              <p>{seconds}</p><span>Seconds</span>
            </div><br />
          </div>
        </div>
      </div>

      <div style={{display:"flex",justifyContent:"center"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62640.3754869332!2d77.3390336!3d11.1116288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1cd6fcbc051%3A0xd77ece85a2ac9956!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1683128209294!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>      </div>
      <Footer />
    </>
  )
}
