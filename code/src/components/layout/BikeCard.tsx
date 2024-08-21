import Image from "next/image";
import Link from "next/link";
import Slider from "./Slider";
import { formatToBRL, percentageDiscount } from "@/utils/formatters";
import { useCartStore } from "@/hooks/useCart";
import Spacer from "../custom/Spacer";

interface Bike {
  id: string;
  name: string;
  description: string;
  price: number;
  images: { url: string; id: string }[];
}

const BikeCard = ({ bike }: { bike: Bike }) => {
  const { cart, addToCart, removeFromCart } = useCartStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }));

  // Verifica se o item está no carrinho
  const isInCart = cart.some((item) => item.id === bike.id);

  return (
    <article className="relative bg-gray-100 flex flex-col items-start justify-start w-[260px] p-2 rounded-md hover:scale-110 shadow-custom-medium-gray transition-default ease-in-out">
      <Slider images={bike.images} navs={false} height={180} width={240} />
      <h2 className="text-lg my-1" id="bike-name">
        {bike.name}
      </h2>
      <p className="font-semibold text-lg" id="bike-value">
        Por: {formatToBRL(bike.price)}
      </p>
      <p className="font-normal" id="bike-installments">
        Em até 8x sem juros
      </p>
      <p className="font-medium text-green-800 mt-2">
        À vista no pix: {percentageDiscount(bike.price)}
      </p>

      <div className="flex w-full items-center justify-between mt-2">
        <Link
          href={`/bikes/${bike.id}`}
          className="flex flex-1 px-1 py-2 bg-green-600 rounded-sm text-white justify-center items-center text-md hover:bg-green-700 hover:rounded-md transition-default"
          aria-label={`Mais detalhes sobre ${bike.name}`}
        >
          Mais Detalhes
        </Link>
        <Spacer w={4} y={0} />
        <button
          className="flex p-2 bg-gray-700 rounded-sm text-white hover:bg-gray-900 hover:rounded-md transition-default"
          onClick={() => (isInCart ? removeFromCart(bike.id) : addToCart(bike))}
          aria-label={
            isInCart ? "Remover do carrinho" : "Adicionar ao carrinho"
          }
        >
          <Image
            src={
              isInCart
                ? "/icons/removefromcart-24.png"
                : "/icons/addtocart-white-24.png"
            }
            width={24}
            height={24}
            alt={
              isInCart
                ? "Ícone de remover do carrinho"
                : "Ícone de adicionar ao carrinho"
            }
          />
        </button>
      </div>
    </article>
  );
};

export default BikeCard;
