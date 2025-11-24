import caseImg1 from "../assets/cardamage.png";
import caseImg2 from "../assets/helthpal.png";
import { Link } from "react-router-dom";



const RecentWork = () => {
  return (
    <section id="recentwork" className="recent-section">
      <h2 style={{textAlign:"center", fontSize:"36px", color:"white"}}>Recent Work</h2>
      <p className="section-sub">
        A selection of recent AI, ML, and full-stack development projects.
      </p>

      <div className="recent-grid">
        <div className="recent-card">
          <img src= {caseImg2}  className="recent-img"></img>
          <h3 >HealthPal AI Assistant</h3>
          <p>An AI-driven chatbot for medical and therapy assistance powered by Gemini, OCR, and multimodal prompts.</p>
          <Link to="/healthpal">
            <button className="primary-btn small">Know more →</button>
          </Link>
        </div>

        <div className="recent-card">
          <img src={caseImg1} className="recent-img"></img>
          <h3>Car Damage Detection</h3>
          <p>A deep-learning-based tool that identifies and highlights vehicle damage from uploaded images.</p>
          <Link to="/cardamage">
            <button className="primary-btn small">Know more →</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
