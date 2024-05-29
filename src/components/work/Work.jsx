import "./work.scss";
import video_img from "../../assets/suvidhavideo.jpg";
import play_icon from "../../assets/play-icon.png";

export default function Work({setPlayState}) {
  return ( 
    <div className="work">
      <div className="title">
        <p>Suvidha Works</p>
        <h2>Find more about Our Quality Procedure</h2>
    </div>
    <div className="about">
      <div className="about-left">
          <img src={video_img} alt="" className="video-img"/>
          <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>Sample Work</h3> 
        <h2>Empowering the most beautiful creation of God!!</h2>
        <p>Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer.
        Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.</p>
      </div>
    </div>
    </div>
  )
}

