import caseImg1 from "../assets/cardd.png";
import caseImg2 from "../assets/helthpal.png"
import { Link } from "react-router-dom";



const CaseStudies = () => {
  return (
    <section id="casestudy" className="case-section">
      <h2 className="headingcs">Case Studies</h2>
      <p className="section-sub">
        Showcasing AI-powered and full-stack solutions built to solve real user and business problems.
         
      </p>

      <div className="case-card">
        <div className="case-left">
          <span className="tag">HealthTech</span>
          <h3>HealthPal-AI-Powered Medical Assistant</h3>
          <p style={{color:"grey"}}>
            Developed an intelligent medical assistant with dual Medical and Therapy modes using the 
            Gemini API. Integrated OCR (PyTesseract) to extract text from prescriptions and provide 
            context-aware responses. 
            Supports multimodal input for both text and image-based queries.
          </p>
          <Link to="/healthpal">
          <button className="primary-btn btn-orange">View case study →</button>
          </Link>
        </div>

        <img src={caseImg2}  className="case-img"></img>
      </div>
      <div className="case-card case-cardrev">
        <div className="case-left">
          <span className="tagblue">AutoTech</span>
          <h3>Car Damage Detection System</h3>
          <p style={{color:"grey"}}>
            Built an automated car damage detection system using the CLIP model. 
            Implemented fine-tuning, image processing, and damage localization to deliver accurate 
            assessments
             from user-uploaded images. Deployed using Python, Flask, and Streamlit.
          </p>
          <Link to="/cardamage">
          <button className="primary-btn btn-blue">View case study →</button>
          </Link>
        </div>

        <img src={caseImg1} className="case-img"></img>
      </div>
    </section>
  );
};

export default CaseStudies;
