import { Link } from "react-router-dom";

const HealthPal = () => {
  return (
    <div style={{ padding: "60px" }}>
      <Link to="/">
        <button className="primary-btn small">← Back to Home</button>
      </Link>
      <h1>HealthPal – Case Study</h1>
      <p>Full details about your HealthPal project...</p>
    </div>
  );
};

export default HealthPal;
