import { ServiceType } from "../constants/service";

export const ServiceComponent = ({ service }: { service: ServiceType }) => {
  return (
    <div className="flex flex-col w-[300px]">
      <img src={service.image} width={"300px"} height={"200px"} />
      <h1 className="text-lg font-bold">{service.title}</h1>
      <p className="text-gray-500">
        {service.desc}
      </p>
    </div>
  );
};
