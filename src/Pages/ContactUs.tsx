import { useParams } from "react-router-dom";
const ContactUs = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Contact Us Page {id}</h1>
    </div>
  );
};

export default ContactUs;
