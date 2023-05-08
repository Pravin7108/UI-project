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
      const eventDate=new Date("May 20 ,2023 00:00:00:00");
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
      <img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gv-prakash-kumar-s-aayirathil-oruvan-0-2023-4-16-t-5-56-5.jpg" width="100%" /><br /><br />

      <div className='details'>
        <div style={{ display: "flex", gap: "50px" }}>
          <div className='calendar-box'>
            <p style={{ backgroundColor: "#fc4259" }}>May</p><p style={{ fontSize: "1.8rem" }}>27<br />Saturday</p>
          </div>
          <div>
            <h2>AAYIRATHIL ORUVAN</h2>
            <p><ion-icon name="calendar-outline" /> May 27, 2023 (5 pm to 10 pm)<br /><ion-icon name="location-outline" />CODISSIA Ground, Coimbatore</p>
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
          <p style={{ color: "purple" }}>Event date - 27th May, 2023 (Saturday)</p>
          <p style={{ color: "purple" }}>Event Time - 5pm onwards</p>
          <p style={{ color: "purple" }}>Venue - CODISSIA Ground, Coimbatore</p>
          <p>Experience the musical magic of <span style={{ color: "darkorange" }}>GV Prakash</span> live in <span style={{ color: "purple" }}>Coimbatore!</span> He is coming to Coimbatore for his first live concert ever. Don't miss this chance to see him perform his best hits in an intimate setting. Book your tickets now and get ready to be blown away.</p>
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31328.369248384333!2d77.028381!3d11.035164!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAyJzA2LjYiTiA3N8KwMDEnNDIuMiJF!5e0!3m2!1sen!2sus!4v1683105593320!5m2!1sen!2sus" width="400" height="350" loading="lazy"></iframe>
      </div>
      <Footer />
    </>
  )
}
