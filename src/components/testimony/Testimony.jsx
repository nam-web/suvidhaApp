import "./testimony.scss";
import next from "../../assets/next-icon.png";
import back from "../../assets/back-icon.png";
import mentor1 from "../../assets/mentor-1.png";
import mentor2 from "../../assets/mentor-2.png";
import mentor3 from "../../assets/mentor-3.png";
import mentor4 from "../../assets/mentor-4.png";
import { useRef } from "react";

export default function Testimony() {

  const slider = useRef();
  let tx = 0; // initial translateX value
  const totalSlides = 4; // assume you have 4 slides, adjust this number as needed
  const slideWidthPercentage = 25; // percentage width of each slide
  
  const slideForward = () => {
    tx -= slideWidthPercentage;
    if (tx < -((totalSlides - 1) * slideWidthPercentage)) {
      tx = 0; // reset to the first slide
    }
    slider.current.style.transition = tx === 0 ? 'none' : 'transform 0.5s ease'; // no transition for reset
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  
  const slideBackward = () => {
    tx += slideWidthPercentage;
    if (tx > 0) {
      tx = -((totalSlides - 1) * slideWidthPercentage); // reset to the last slide
    }
    slider.current.style.transition = tx === -((totalSlides - 1) * slideWidthPercentage) ? 'none' : 'transform 0.5s ease'; // no transition for reset
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  
  // let tx = 0;

  // const slideForward = () => {
  //   if(tx > -50){
  //     tx -= 25;
  //   }
  //   slider.current.style.transform = `translateX(${tx}%)`;
  // }

  // const slideBackward = () => {
  //   if(tx < 0){
  //     tx += 25;
  //   }
  //   slider.current.style.transform = `translateX(${tx}%)`;
  // }

  return (
    <div className="testimony">
      <div className="title">
        <p>Our Testimonials</p>
        <h2>What our Clients say about Suvidha</h2>
    </div>
      <img src={next} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={mentor1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Harvard University, California</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Suvidha was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              <div className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={mentor2} alt="" />
                <div>
                  <h3>Mukesh Ambani</h3>
                  <span>Stanford University, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Suvidha was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              <div className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
               </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={mentor3} alt="" />
                <div>
                  <h3>Rieman Tessan</h3>
                  <span>Birmingham University, UK</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Suvidha was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              <div className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={mentor4} alt="" />
                <div>
                  <h3>Mark Zukerburg</h3>
                  <span>Imperial College London, London</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Suvidha was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              <div className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
