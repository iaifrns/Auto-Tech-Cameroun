import ContactDetail from "../components/contact us/ContactDetail";
import ContactForm from "../components/contact us/ContactForm";

const ContactUs = () => {
  return (
    <div className="w-full flex justify-center bg-bg-img bg-fixed">
      <div className="w-full p-20 flex justify-between bg-primary bg-opacity-85 items-center">
        <div className="w-[50%] flex justify-center">
          <ContactForm />
        </div>
        <div className="w-[50%] flex justify-center">
          <ContactDetail />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
