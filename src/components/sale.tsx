import { SalesType } from "../constants/sales";

const SaleComponent = ({ product }: { product: SalesType }) => {
  return (
    <div className="flex flex-col gap-2 w-[250px] items-center">
      <img src={product.image} className="w-full h-[200px] object-contain" />
      <p className="font-bold text-2xl">{product.name}</p>
      <p className="font-bold text-gray-500">{product.price}</p>
    </div>
  );
};

export default SaleComponent;
