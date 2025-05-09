import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProductProps {
  image: string;
  brand: string;
  name: string;
  price: number;
  id: string;
}

export const CardProduct: React.FC<CardProductProps> = ({
  image,
  brand,
  name,
  price,
  id,
}: CardProductProps) => {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/item/${id}`);
  };

  return (
    <article
      onClick={handleProductClick}
      className="cursor-pointer hover:opacity-90"
    >
      {/* w-64 */}
      <div className="relative h-80 w-full">
        <Image src={image} alt="Bicicleta BMX" fill className="object-cover" />
      </div>
      <div className="flex w-full flex-col gap-2 pt-2 text-sm font-normal text-text-primary">
        <h5 className="text-xs text-text-secondary">{brand}</h5>
        <div className="flex justify-between">
          <p>{name}</p>
          <p className="font-bold">R$ {price}</p>
        </div>
      </div>
    </article>
  );
};
