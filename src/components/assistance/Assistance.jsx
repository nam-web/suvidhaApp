import "./assistance.scss";
import program_1 from "../../assets/program1.jpg";
import program_2 from "../../assets/program2.jpg";
import program_3 from "../../assets/program3.jpg";
import program1 from "../../assets/program-icon-1.png";
import program2 from "../../assets/program-icon-2.png";
import program3 from "../../assets/program-icon-3.png";

export default function Assistance() {
  return (
    <div className="assistance">
      <div className="title">
        <p>Suvidha Assistance</p>
        <h2>Trusted and Academically sound mentors</h2>
    </div>
    <div className="card">
    <div className="assistances">
        <img src={program_1} alt=""/>
        <div className="caption">
          <img src={program1}/>
          <p>Research Guidance</p>
        </div>
        <div className="sub-heading">
          <h4>Research Guidance</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, consequatur.</p>
      </div> 
      </div>
      <div className="assistances">
        <img src={program_2} alt=""/>
        <div className="caption">
          <img src={program2}/>
          <p>Mentorship Sessions</p>
        </div>
        <div className="sub-heading">
          <h4>Mentorship Sessions</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, consequatur.</p>
      </div>
      </div>
      <div className="assistances">
        <img src={program_3} alt=""/>
        <div className="caption">
          <img src={program3}/>
          <p>Statistics is our core</p>
        </div>
        <div className="sub-heading">
          <h4>Statistics is our Core</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, consequatur.</p>
      </div>
      </div>
    </div>
    </div>
  )
}
