import caseImg1 from "../assets/cardd.png";
import caseImg2 from "../assets/helthpal.png";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <section
      id="casestudy"
      className="px-[60px] py-[70px] bg-white text-black"
    >
      {/* Heading */}
      <h2 className="text-center text-[34px] font-bold">
        Case Studies
      </h2>

      <p className="mt-[-10px] mx-auto text-center w-[40%] text-gray-500 opacity-70">
        Showcasing AI-powered and full-stack solutions built to solve real user
        and business problems.
      </p>

      {/* CARD 1 */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px] p-[25px] mt-[40px]">
        <div className="w-full sm:w-1/2">
          <span className="px-[10px] py-[4px] rounded-full font-semibold bg-[rgb(255,227,176)] text-orange-500">
            HealthTech
          </span>

          <h3 className="mt-3 text-xl font-semibold">
            HealthPal-AI-Powered Medical Assistant
          </h3>

          <p className="text-gray-500 leading-[24px] mt-3">
            Developed an intelligent medical assistant with dual Medical and
            Therapy modes using the Gemini API. Integrated OCR (PyTesseract) to
            extract text from prescriptions and provide context-aware responses.
            Supports multimodal input for both text and image-based queries.
          </p>

          <Link to="/healthpal">
            <button className="mt-[20px] px-[25px] py-[14px] rounded-[6px] bg-orange-500 text-white font-bold text-[16px] cursor-pointer transition hover:shadow-[0_0_20px_rgb(192,125,0)] hover:-translate-y-[2px]">
              View case study →
            </button>
          </Link>
        </div>

        <img
          src={caseImg2}
          alt="HealthPal"
          className="w-full sm:w-[30%] h-[300px] rounded-[10px] object-cover bg-[#666]"
        />
      </div>

      {/* CARD 2 (REVERSED) */}
      <div className="flex flex-col-reverse sm:flex-row-reverse justify-center items-center gap-[40px] p-[25px] mt-[40px]">
        <div className="w-full sm:w-1/2">
          <span className="px-[10px] py-[4px] rounded-full font-semibold bg-[rgb(204,238,249)] text-[rgb(0,191,255)]">
            AutoTech
          </span>

          <h3 className="mt-3 text-xl font-semibold">
            Car Damage Detection System
          </h3>

          <p className="text-gray-500 leading-[24px] mt-3">
            Built an automated car damage detection system using the CLIP model.
            Implemented fine-tuning, image processing, and damage localization to
            deliver accurate assessments from user-uploaded images. Deployed
            using Python, Flask, and Streamlit.
          </p>

          <Link to="/cardamage">
            <button className="mt-[20px] px-[25px] py-[14px] rounded-[6px] bg-[rgb(0,191,255)] text-white font-bold text-[16px] cursor-pointer transition hover:shadow-[0_0_20px_rgb(0,220,255)] hover:-translate-y-[2px]">
              View case study →
            </button>
          </Link>
        </div>

        <img
          src={caseImg1}
          alt="Car Damage"
          className="w-full sm:w-[30%] h-[300px] rounded-[10px] object-cover bg-[#666]"
        />
      </div>
    </section>
  );
};

export default CaseStudies;
