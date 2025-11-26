import caseImg1 from "../assets/cardamage.png";
import caseImg2 from "../assets/helthpal.png";
import { Link } from "react-router-dom";

const RecentWork = () => {
  return (
    <section
      id="recentwork"
      className="bg-black text-white px-[60px] py-[40px]"
    >
      <h2 className="text-center text-[36px] font-bold mb-2">
        Recent Work
      </h2>

      <p className="text-center text-gray-400 mb-10">
        A selection of recent AI, ML, and full-stack development projects.
      </p>

      <div className="flex justify-center gap-[30px]">
        {/* CARD 1 */}
        <div className="flex flex-col sm:flex-row justify-center gap-[30px]">

          <img
            src={caseImg2}
            alt="HealthPal"
            className="w-full h-[280px] rounded-[12px] object-cover mb-[15px]"
          />

          <h3 className="text-xl font-semibold mb-2">
            HealthPal AI Assistant
          </h3>

          <p className="text-gray-300 mb-4">
            An AI-driven chatbot for medical and therapy assistance powered by
            Gemini, OCR, and multimodal prompts.
          </p>

          <Link to="/healthpal">
            <button className="px-[18px] py-[10px] rounded-[6px] bg-[#33d42c] text-white font-bold text-[16px] mt-[20px] transition hover:shadow-[0_0_20px_#33d42c] hover:-translate-y-[2px]">
              Know more →
            </button>
          </Link>
        </div>

        {/* CARD 2 */}
        <div className="flex flex-col sm:flex-row justify-center gap-[30px]">

          <img
            src={caseImg1}
            alt="Car Damage"
            className="w-full h-[280px] rounded-[12px] object-cover mb-[15px]"
          />

          <h3 className="text-xl font-semibold mb-2">
            Car Damage Detection
          </h3>

          <p className="text-gray-300 mb-4">
            A deep-learning-based tool that identifies and highlights vehicle
            damage from uploaded images.
          </p>

          <Link to="/cardamage">
            <button className="px-[18px] py-[10px] rounded-[6px] bg-[#33d42c] text-white font-bold text-[16px] mt-[20px] transition hover:shadow-[0_0_20px_#33d42c] hover:-translate-y-[2px]">
              Know more →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
