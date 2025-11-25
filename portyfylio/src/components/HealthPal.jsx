import { Link } from "react-router-dom";

const HealthPal = () => {
  return (
    <div className="case-page">

      <Link to="/">
        <button className="primary-btn small back-btn">← Back to Home</button>
      </Link>

      <h1 style={{textAlign:"center"}}>HealthPal </h1>
      <p>
        HealthPal is an AI-powered medical assistant with Medical and Therapy modes, 
        using Gemini API and OCR to process prescriptions and generate intelligent responses.
      </p>

      <h2 className="case-section-title">Tech Stack</h2>
      <ul>
        <li>Streamlit </li>
        <li>Gemini API </li>
        <li>PyTesseract OCR</li>
        <li>MongoDB</li>
      </ul>

      <h2 className="case-section-title">Key Features</h2>
      <ul>
        <li>AI-driven medical query answering</li>
        <li>Therapy conversational mode</li>
        <li>OCR-based prescription scanning</li>
        <li>Multimodal (image + text) input</li>
        <li>Context-aware chat memory</li>
      </ul>

      <h2 className="case-section-title">Screenshots</h2>
      <img src="/assets/healthpal1.png" className="case-screenshot" />
      <img src="/assets/healthpal2.png" className="case-screenshot" />

      <h2 className="case-section-title">What I Learned</h2>
      <ul>
        <li>Using modern LLM APIs</li>
        <li>OCR + AI integration</li>
        <li>Building scalable chat systems</li>
      </ul>

      <div className="case-btn-group">
        <a href="#" target="_blank">
          <button className="primary-btn small">GitHub Repo</button>
        </a>
      </div>

    </div>
  );
};

export default HealthPal;
