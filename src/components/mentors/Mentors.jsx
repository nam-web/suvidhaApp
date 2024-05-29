import "./mentors.scss";
import mentor1 from "../../assets/mentor-1.png";
import mentor2 from "../../assets/mentor-2.png";
import mentor3 from "../../assets/mentor-3.png";

export default function Mentors() {
  return (
    <div className="mentors">
      <div className="title">
        <p>Suvidha Mentors</p>
        <h2>Intellectual, Passionate, and Highly Collaborative</h2>
    </div>
    <div className="images">
    <div className="mentor">
      <img src={mentor1} alt="" />
      <h4>RESEARCH MENTORING</h4>
      <p>For Students, Research Scholars, Authors & Publishers across the domain</p>
    </div>
    <div className="mentor">
      <img src={mentor2} alt="" />
      <h4>DATA ANALYTICS</h4>
      <p>We translate our knowledge & Skills to students across the world</p>
    </div>
    <div className="mentor">
      <img src={mentor3} alt="" />
      <h4>CONSULTING SERVICES</h4>
      <p>We work to help you prepare at every stage of your research for Thesis</p>
    </div>
    </div>
    </div>
  )
}