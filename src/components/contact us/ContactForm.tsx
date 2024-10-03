import React from "react";

interface ContactType {
    label: string
}

const ContactInput:React.FC<ContactType> = ({label}) => {
  return (
    <div className="w-full flex flex-col">
      <p className="text-white font-bold text-xl">{label}</p>
      <input
        type="text"
        placeholder={label}
        className=" focus:outline-none py-4 border-b border-gray-300 text-white bg-transparent"
      />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="md:p-4 flex flex-col gap-8 md:w-[600px] w-[90%]">
      <ContactInput label="Your Name" />
      <ContactInput label="Email Address" />
      <ContactInput label="Phone Number" />
      <ContactInput label="Message" />
      <button className="text-white font-bold text-lg py-6 w-[250px] bg-secondary">
        Booking Detail
      </button>
    </div>
  );
};

export default ContactForm;
