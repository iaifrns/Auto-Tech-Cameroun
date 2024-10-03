import { Icon } from "@iconify/react/dist/iconify.js";

const Points = ({text}: {text:string}) => {
    return <div className="flex gap-4 items-center">
        <Icon icon="charm:tick" className="text-white" />
        <p className="font-semibold">{text}</p>
    </div>
}
const ContactDetail = () => {
  return (
    <div className="p-4 flex flex-col gap-8 md:w-[600px] text-white">
      <p className="font-bold">BOOKING</p>
      <p className="font-bold md:text-[38px] text-xl">Experience the Difference with Our Detailing Mastery</p>
      <p className="font-bold">
        Setting the Benchmark for Auto Detailing Excellence, We Restore Beauty
        and Enhance Performance, Making Your Vehicle Shine Like Never Before.
      </p>
      <p className="font-semibold">
        Cultivating change enthusiasts fuels success, resulting in superior,
        more efficient, and robust innovations. Your leadership ignites
        progress; we stand ready to ready advance your history and shape
        tomorrow.
      </p>
      <Points text="Fill Your Name and Your Details" />
      <Points text="Type Your Email Contact and Phone Number" />
      <Points text="Select Service and Date" />
      <Points text="Wait Confirmation and Go to Our Workshop" />
    </div>
  );
};

export default ContactDetail;
