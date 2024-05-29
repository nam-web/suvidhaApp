import "./footer.scss";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <div className='footer'>
      <div className="title">
        <p>Have any queries?</p>
        <h2>Get in touch with Suvidha</h2>
    </div> 
    <div className="content">
      <div className="col1">
      <img src={logo} className="logo"/>
      <h4>About Us</h4>
      <p>Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.</p>
      </div>
      <div className="col2">
        <h4>Main Services</h4>
        <ul>
          <li>PHD Dissertation</li>
          <li>Coursework</li>
          <li>Literature Review</li>
          <li>Data Analysis</li>
          <li>Manuscript</li>
          <li>Editing Services</li>
          <li>Animation</li>
          <li>Courses</li>
        </ul>
      </div>
      <div className="col3">
        <h4>Links</h4>
        <ul>
          <li>Blog</li>
          <li>Industries</li>
          <li>Pricing Details</li>
          <li>Insights</li>
          <li>Help-Guide</li>
          <li>Sample Work</li>
          <li>FAQs</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="col4">
        <h4>Contact Us</h4>
        <ul>
          <li><span class="material-symbols-outlined">mail</span><p>contact@suvidhafoundation.com</p></li>
          <li><span class="material-symbols-outlined">call</span>India : +91-9176966446</li>
          <li><span class="material-symbols-outlined">pin_drop</span>Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</li>
        </ul>
        <form>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter you name" required />
          <label>Mobile Number</label>
          <input type="tel" name="mob" placeholder="Enter your mobile number" required/>
          <label>Your Email ID</label>
          <input type="email" name="email" placeholder="Enter you email id" required />
          <label>Write your message here</label>
          <textarea name="message" rows="4" placeholder="Enter your message" required></textarea>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}
