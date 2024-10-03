import ContactDetail from "../components/contact us/ContactDetail";
import ContactForm from "../components/contact us/ContactForm";

const ContactUs = () => {
  return (
    <div className="w-full flex justify-center bg-bg-img bg-fixed">
      <div className="w-full md:p-20 max-md:py-16 flex max-md:flex-col max-md:gap-16 justify-between bg-primary bg-opacity-85 items-center">
        <div className="md:w-[50%] w-full flex justify-center">
          <ContactForm />
        </div>
        <div className="md:w-[50%] flex justify-center">
          <ContactDetail />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
