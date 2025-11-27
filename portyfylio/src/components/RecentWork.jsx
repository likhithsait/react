import caseImg1 from "../assets/cardamage.png";
import caseImg2 from "../assets/helthpal.png";
import { Link } from "react-router-dom";

const RecentWork = () => {
  return (
   <section
  id="recentwork"
  className="bg-black text-white px-[8%] py-[80px]"
>
  <h2 className="text-center text-[36px] font-bold mb-3">
    Recent Work
  </h2>

  <p className="text-center text-gray-500 mb-14">
    A selection of recent AI, ML, and full-stack development projects.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">

    {/* CARD 1 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center border border-gray-600">
      <img
        src={caseImg2}
        className="w-full h-[260px] object-fill"
        alt="HealthPal AI Assistant"
      />

      <div className="p-6">
        <h3 className="font-semibold mb-2">
          HealthPal AI Assistant
        </h3>

        <p className="text-gray-500 mb-6">
          An AI-driven chatbot for medical and therapy assistance powered by
          Gemini, OCR, and multimodal prompts.
        </p>

        <Link to="/healthpal">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-500 transition">
            Know more →
          </button>
        </Link>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center border border-gray-600">
      <img
        src={caseImg1}
        className="w-full h-[260px] object-fill"
        alt="Car Damage Detection"
      />

      <div className="p-6">
        <h3 className="font-semibold mb-2 ">
          Car Damage Detection
        </h3>

        <p className="text-gray-500 mb-6">
          A deep-learning-based tool that identifies and highlights vehicle
          damage from uploaded images.
        </p>

        <Link to="/cardamage">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-500 transition">
            Know more →
          </button>
        </Link>
      </div>
    </div>

  </div>
</section>

  );
};

export default RecentWork;
