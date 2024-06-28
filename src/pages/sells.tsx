import SaleComponent from "../components/sale"
import { images } from "../constants/images"
import { salesData } from "../constants/sales"

const SellsSection = () => {
    return (
        <div className="flex flex-col gap-8 p-20 items-center max-md:p-4">
            <p className="text-[50px] font-bold max-md:text-[32px]">Ce Que Nous Vendons</p>
            <div className="h-1 w-[100px] bg-secondary"></div>
            <div className="flex w-full justify-evenly max-md:flex-col max-md:items-center">
                {salesData.map((data, index) => (
                    <SaleComponent key={index} product={data} />
                ))}
            </div>
            <img src={images.BANNER} className="mt-20 h-[200px] w-full object-cover max-md:object-contain max-md:mt-4" />
        </div>
    )
}

export default SellsSection