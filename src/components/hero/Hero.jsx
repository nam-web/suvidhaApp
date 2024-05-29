import "./hero.scss";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower Research Scholars & Authors with the knowledge, skills and experiences needed to excel in the dynamic field of PHD.</p>
        <button className="btn">Explore More <span class="material-symbols-outlined">arrow_right_alt</span></button>
      </div>
    </div>
  )
}