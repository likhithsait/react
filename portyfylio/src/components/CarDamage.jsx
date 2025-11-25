import { Link } from "react-router-dom";


const CarDamage = () => {
  return (
    <div style={{ padding: "60px" }}>
      <Link to="/">
        <button className="primary-btn small">← Back to Home</button>
      </Link>
      <h1>Car Damage Detection – Case Study</h1>
      <p>Full case study content here...</p>


    </div>
    
  );
};

export default CarDamage;
