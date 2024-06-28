import { ServiceType } from "../constants/service";

const Service2Component = ({service} : {service : ServiceType}) => {
    return (
        <div className="flex flex-col justify-center w-[300px] gap-2">
            <img src={service.image} className="w-full h-[200px] object-contain" />
            <p className="font-bold text-center text-white text-xl">{service.title}</p>
            <p className="text-white text-center text-sm">{service.desc}</p>
        </div>
    )
}

export default Service2Component;