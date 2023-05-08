/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

export default function Events() {
  return (
    <>
        <div className='body-image'>
                <img src='https://www.eventgroove.com/wp-content/uploads/2022/03/Omicron-survey-WP.jpg' className='event-image' />
            </div>

            <h1 className='event-list'>Upcoming events</h1><br />
            <div className='events'>
                <div className='event-box'>
                    <Carousel>
                        <CarouselItem>
                            <img className='event-img' src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gv-prakash-kumar-s-aayirathil-oruvan-0-2023-4-16-t-5-56-5.jpg" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className='event-img' src="https://assets.telegraphindia.com/telegraph/2022/Jun/1654539874_new-project.jpg" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className='event-img' src="https://media.npr.org/assets/img/2017/12/21/_harlan_nprmusic10years-149_wide-78a7596027f7b4c023a21ad85f078e8a4165c230-s800-c85.jpg" />
                        </CarouselItem>
                    </Carousel>


                    <div className='event-name'>
                        <h2><a className='a' href="/AO">Aayirathil Oruvan</a><span className='on-off' style={{color:"rgb(72, 241, 72)"}}>   <ion-icon name="checkmark-circle-outline"></ion-icon>Online only</span></h2>
                        <p><ion-icon name="calendar-outline" /> May 27, 2023 <br /><ion-icon name="time-outline" /> 5 pm to 10 pm<br /><ion-icon name="location-outline" /> Coimbatore</p>
                    </div>

                    <div className='ws-icon'>
                        <div className='w-icon'>
                            <ion-icon name="heart-outline" />
                        </div>
                        <div className='s-icon'>
                            <ion-icon name="share-social-outline" />
                        </div>
                    </div>
                </div><br />

                <div className='event-box'>
                    <Carousel>
                        <CarouselItem>
                            <img className='event-img' src="https://i.ytimg.com/vi/_OxU_27GmEM/maxresdefault.jpg" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className='event-img' src="https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/gallery_promo_image/InVision_Shaklee_Global_Live.jpg?itok=huOoiSZJ" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className='event-img' src="https://media.istockphoto.com/id/1324006497/photo/music-controller-dj-mixer-in-a-nightclub-at-a-party.jpg?s=612x612&w=0&k=20&c=AyXSZEWy3lHb7hKUfh9FXAsZGAO_p838uVaAlFbWa9k=" />
                        </CarouselItem>
                    </Carousel>

                    <div className='event-name'>
                        <h2><a className='a' href='/DJ'>DJ night</a><span className='on-off' style={{color:"rgb(72, 241, 72)"}}>   <ion-icon name="checkmark-circle-outline"></ion-icon>Online only</span></h2>
                        <p><ion-icon name="calendar-outline" /> June 02, 2023<br /><ion-icon name="time-outline" /> 7 pm to 10 pm<br /><ion-icon name="location-outline" /> Erode</p>
                    </div>

                    <div className='ws-icon'>
                        <div className='w-icon'>
                            <ion-icon name="heart-outline" />
                        </div>
                        <div className='s-icon'>
                            <ion-icon name="share-social-outline" />
                        </div>
                    </div>
                </div><br />

                <div className='event-box'>
                    <Carousel>
                        <CarouselItem>
                            <img className='event-img' src="https://img.freepik.com/free-vector/hand-drawn-flat-food-festival-illustration_23-2149437321.jpg" style={{ objectFit: "cover" }} />
                        </CarouselItem>
                        <CarouselItem>
                            <img className='event-img' src="https://images.indianexpress.com/2022/03/cats-33.jpg" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className='event-img' src="https://media.istockphoto.com/id/1087391494/photo/food-trucks-and-people-at-a-street-food-market-festival-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=Skw5WLkgarU8k9K_oxe-XymlOBhkCQRLMrHj0fVYMVc=" style={{ objectFit: "cover" }} />
                        </CarouselItem>
                    </Carousel>

                    <div className='event-name'>
                        <h2><a className='a' href='/FF'>Food fest</a><span className='on-off' style={{color:"rgb(72,241,72)"}}>   <ion-icon name="checkmark-circle-outline"></ion-icon>Online only</span></h2>
                        <p><ion-icon name="calendar-outline" /> June 10, 2023<br /><ion-icon name="time-outline" /> 8 am to 12 pm<br /><ion-icon name="location-outline" /> Salem</p>
                    </div>

                    <div className='ws-icon'>
                        <div className='w-icon'>
                            <ion-icon name="heart-outline" />
                        </div>
                        <div className='s-icon'>
                            <ion-icon name="share-social-outline" />
                        </div>
                    </div>
                </div>

                <div className='event-box'>
                    <Carousel>
                        <CarouselItem>
                            <img className='event-img' src="https://malaysia.wetlands.org/wp-content/uploads/sites/5/2021/07/ART-CONTEST-960x540.jpg" style={{ objectFit: "cover" }} />
                        </CarouselItem>
                        <CarouselItem>
                            <img className='event-img' src="https://dnsc.edu.ph/wp-content/uploads/2021/11/DNSC-visual-artists-stand-out-in-the-CHED-RO-XI-ASEAN-inspired-Digital-Painting-Contest.jpg" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className='event-img' src="https://www.thephuketnews.com/photo/listing/1375327618_1.jpg" style={{ objectFit: "cover" }} />
                        </CarouselItem>
                    </Carousel>

                    <div className='event-name'>
                        <h2><a className='a' href='/AC'>Artica Contest</a><span className='on-off' style={{color:"rgb(72, 241, 72)"}}>   <ion-icon name="checkmark-circle-outline"></ion-icon>Online/offline</span></h2>
                        <p><ion-icon name="calendar-outline" /> June 14, 2023<br /><ion-icon name="time-outline" /> 10 am to 12 pm<br /><ion-icon name="location-outline" /> Tirupur</p>
                    </div>

                    <div className='ws-icon'>
                        <div className='w-icon'>
                            <ion-icon name="heart-outline" />
                        </div>
                        <div className='s-icon'>
                            <ion-icon name="share-social-outline" />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
