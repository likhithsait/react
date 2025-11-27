import caseImg1 from "../assets/cardd.png";
import caseImg2 from "../assets/helthpal.png";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <section
  id="casestudy"
  className="bg-white text-black px-[8%] py-[90px]"
>
  <h2 className="text-center text-[36px] font-bold mb-4">
    Case Studies
  </h2>

  <p className="text-center text-gray-500 max-w-[600px] mx-auto mb-16">
    Showcasing AI-powered and full-stack solutions built to solve real user and
    business problems.
  </p>

  {/* CARD 1 */}
  <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
    <div className="md:w-1/2">
      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
        HealthTech
      </span>

      <h3 className="mt-4 text-xl font-bold">
        HealthPal-AI-Powered Medical Assistant
      </h3>

      <p className="text-gray-500 leading-[26px] mt-4 mb-6">
        Developed an intelligent medical assistant with dual Medical and
        Therapy modes using the Gemini API. Integrated OCR (PyTesseract) to
        extract text from prescriptions and provide context-aware responses.
        Supports multimodal input for both text and image-based queries.
      </p>

      <Link to="/healthpal">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-400 transition">
          View case study →
        </button>
      </Link>
    </div>

    <img
      src={caseImg2}
      className="md:w-[40%] h-[300px]  object-fill rounded-xl shadow-lg"
    />
  </div>

  {/* CARD 2 */}
  <div className="flex flex-col-reverse md:flex-row items-center gap-16">
    <img
      src={caseImg1}
      className="md:w-[40%] h-[300px]  object-fill rounded-xl shadow-lg"
    />

    <div className="md:w-1/2">
      <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
        AutoTech
      </span>

      <h3 className="mt-4 text-xl font-bold">
        Car Damage Detection System
      </h3>

      <p className="text-gray-500 leading-[26px] mt-4 mb-6">
        Built an automated car damage detection system using the CLIP model.
        Implemented fine-tuning, image processing, and damage localization to
        deliver accurate assessments from user-uploaded images. Deployed using
        Python, Flask, and Streamlit.
      </p>

      <Link to="/cardamage">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition">
          View case study →
        </button>
      </Link>
    </div>
  </div>
</section>

  );
};

export default CaseStudies;
