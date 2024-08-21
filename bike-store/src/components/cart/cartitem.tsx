import { Button } from "../ui/button";
import Image from "next/image";

interface CartItemProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearItem: (id: string) => void;
}

export const CartItem = ({
  id,
  name,
  brand,
  price,
  quantity,
  image,
  addItem,
  removeItem,
  clearItem,
}: CartItemProps) => {
  return (
    <article className="flex w-full flex-grow gap-8 md:h-40">
      <Image
        src={image}
        alt="Bike"
        width={160}
        height={160}
        objectFit="cover"
        className="h-24 w-24 md:h-40 md:w-40"
      />
      <div className="flex flex-grow flex-col items-start justify-center md:gap-2 md:py-4">
        <div className="flex w-full flex-col justify-between md:flex-grow">
          <h2 className="text-lg font-semibold text-text-primary">{name}</h2>
          <h2 className="text-base font-semibold text-text-primary">
            R$ {price}
          </h2>
        </div>
        <p className="text-base font-light text-text-secondary">{brand}</p>
        <div className="flex items-center gap-8">
          <div className="flex h-6 items-center justify-between overflow-hidden rounded border border-text-secondary text-lg font-semibold text-text-primary md:h-[52px]">
            <button
              className="flex h-full items-center justify-center py-2 pl-2 pr-3 hover:text-brand-bs-orange md:py-4 md:pl-4 md:pr-5"
              onClick={() => removeItem(id)}
            >
              -
            </button>
            <p className="px-3 md:px-5">{quantity}</p>
            <button
              className="flex h-full items-center justify-center py-2 pl-3 pr-2 hover:text-brand-bs-orange md:py-4 md:pl-5 md:pr-4"
              onClick={() => addItem(id)}
            >
              +
            </button>
          </div>

          <Button
            className="font-semibold uppercase text-brand-bs-orange no-underline"
            variant="link"
            size="sm"
            onClick={() => clearItem(id)}
          >
            REMOVER
          </Button>
        </div>
      </div>
    </article>
  );
};
