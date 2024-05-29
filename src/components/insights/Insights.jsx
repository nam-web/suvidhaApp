import "./insights.scss";
import insight1 from "../../assets/insight1.jpg";
import insight2 from "../../assets/insight2.jpg";
import insight3 from "../../assets/insight3.jpg";
import insight4 from "../../assets/insight4.jpg";
 
export default function Insights() {
  return (
    <div className="insights">
      <div className="title">
        <p>Suvidha Gallery</p>
        <h2>Insights of our Mahila Mandal Programs</h2>
    </div>
    <div className="gallery">
      <img src={insight1} alt="" />
      <img src={insight2} alt="" />
      <img src={insight3} alt="" />
      <img src={insight4} alt="" />
    </div>
    <button className="btn">See more here<span class="material-symbols-outlined">arrow_right_alt</span></button>
    </div>
  )
}
