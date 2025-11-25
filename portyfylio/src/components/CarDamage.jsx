import { Link } from "react-router-dom";

const CarDamage = () => {
  return (
    <div className="case-page">

      <Link to="/">
        <button className="primary-btn small back-btn">← Back to Home</button>
      </Link>

      <h1 style={{textAlign:"center"}}>Car Damage Detection</h1>
      <p>
        This project uses AI to detect and analyze car damage from uploaded images. 
        Built using the CLIP model, computer vision, and deep learning techniques to 
        classify and highlight affected areas.
      </p>

      <h2 className="case-section-title">Tech Stack</h2>
      <ul>
        <li>Python</li>
        <li>CLIP Model</li>
        <li>TensorFlow / PyTorch</li>
        <li>OpenCV</li>
        <li>Streamlit (UI)</li>
        <li>Flask API</li>
      </ul>

      <h2 className="case-section-title">Key Features</h2>
      <ul>
        <li>Damage detection using AI</li>
        <li>Classification of damage severity</li>
        <li>Real-time result visualization</li>
        <li>Clean Streamlit interface</li>
      </ul>

      <h2 className="case-section-title">Screenshots</h2>
      <img src="/assets/cardamage1.png" className="case-screenshot" />
      <img src="/assets/cardamage2.png" className="case-screenshot" />

      <h2 className="case-section-title">What I Learned</h2>
      <ul>
        <li>Implementing computer vision pipelines</li>
        <li>Image classification using CLIP</li>
        <li>Building full ML workflow (Preprocess → Predict → Visualize)</li>
        <li>Deploying ML apps using Flask + Streamlit</li>
      </ul>

      <div className="case-btn-group">
        <a href="#" target="_blank">
          <button className="primary-btn small">GitHub Repo</button>
        </a>
      </div>

    </div>
  );
};

export default CarDamage;
