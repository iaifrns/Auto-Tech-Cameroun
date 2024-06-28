import OurService, { Information } from "../components/whatWeDo"
import { images } from "../constants/images"
import { infoData } from "../constants/info"

const WhatWeDo = () => {
    return (
        <div className="flex flex-col">
            <div className="p-20 max-md:p-4 bg-gray-200 flex flex-col justify-center items-center gap-4">
                <p className="text-4xl font-bold max-md:text-[32px]">Ce Que Nous Faisons</p>
                <div className="h-1 w-[100px] bg-secondary"></div>
            </div>
            <div className="w-full grid grid-cols-3 grid-rows-2  max-md:grid-cols-1">
                <OurService image={images.SERVICE1} text="Ponsage" />
                <OurService image={images.SERVICE2} text="Carosery" />
                <OurService image={images.SERVICE3} text="Penture" />
                <OurService image={images.IMAGE2} text="Visite Technique" />
                <OurService image={images.IMAGE3} text="Depanage" />
                <OurService image={images.IMAGE1} text="Vidange" />
            </div>
            <div className="p-20 flex justify-evenly bg-primary w-full max-md:p-4 max-md:flex-col max-md:gap-4">
                {infoData.map((data, index) => (
                    <Information key={index} info={data} />
                ))}
            </div>
        </div>
    )
}

export default WhatWeDo