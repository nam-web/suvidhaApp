import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Assistance from "../components/assistance/Assistance";
import Mentors from "../components/mentors/Mentors";
import Guarantees from "../components/guarantees/Guarantees";
import Work from "../components/work/Work";
import Testimony from "../components/testimony/Testimony";
import Insights from "../components/insights/Insights";
import Footer from '../components/footer/Footer';
import VideoPlayer from '../components/video/VideoPlayer';
import { useState } from 'react';
// import "../app.scss";

export default function Home() {

  const [playState, setPlayState] = useState(false);

  return (
    <div className="container">
        <Navbar />
        <div className="sections">
        <Hero />
        <Assistance />
        <Mentors />
        <Guarantees />
        <Work setPlayState={setPlayState}/>
        <Insights />
        <Testimony />
        <Footer />
        </div>
       <VideoPlayer playState={playState} setPlayState={setPlayState}/> 
    </div>
  )
}
