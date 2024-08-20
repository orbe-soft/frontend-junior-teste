import { formatToBRL, percentageDiscount } from "@/utils/formatters";
import Image from "next/image";
import Link from "next/link";
import Slider from "./Slider";
import { useCartStore } from "@/hooks/useCart";

interface Bike {
  id: number;
  name: string;
  description: string;
}

const BikeCard = ({ bike }: { bike: Bike }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="relative bg-gray-100 border-2 border-gray-300 flex flex-col items-start justify-start w-[260px] p-2 rounded-md">
      <Slider images={bike.images} height={180} width={240} />
      <h1 className="text-lg my-1">{bike.name}</h1>
      <p className="font-semibold text-lg">Por: {formatToBRL(bike.price)}</p>
      <p className="font-normal ">Em até 8x sem juros</p>
      <p className="font-medium text-green-800 mt-2">
        À vista no pix: {percentageDiscount(bike.price)}
      </p>

      <div className="flex w-[100%] items-center justify-between mt-2">
        <Link
          href={`/bikes/${bike.id}`}
          className="flex flex-1 px-1 py-2 bg-blue-500 rounded-sm text-white justify-center items-center text-md"
        >
          Mais Detalhes
        </Link>
        <div className="mx-1"></div>
        <button
          className="flex flex-2 p-2 bg-gray-900 rounded-sm text-white "
          onClick={() => addToCart(bike)}
        >
          {" "}
          <Image
            src="/icons/addtocart-white-24.png"
            width={24}
            height={24}
            alt="Ícone de adicionar ao carrinho"
          />
        </button>
      </div>
    </div>
  );
};

export default BikeCard;
