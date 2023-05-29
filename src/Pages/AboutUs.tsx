import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About Us</h1>
      <button type="button" onClick={handleClick}>
        BackToHome
      </button>
    </div>
  );
};

export default AboutUs;
