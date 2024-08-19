import Image from "next/image";
import { useState } from "react";
import api from "@/lib/api";
import { req } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";
import { Bike } from "@/lib/types";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Button } from "../ui/button";

interface ItemContentProps {
  slug: string;
}

export const ItemContent = ({ slug }: ItemContentProps) => {
  const { data, error, isLoading } = useQuery<Bike>({
    queryKey: ["item", req.byId(slug)],
    queryFn: () =>
      api
        .get(req.byId(slug))
        .then((res) => {
          setActiveImage(res.data.images[0].url);
          return res.data;
        })
        .catch((err) => {
          console.error("Error: ", err);
        }),
  });
  const [activeImage, setActiveImage] = useState<string>("");

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <article className="grid max-w-[1280px] grid-cols-12 gap-5 pb-14 lg:gap-0">
      <div className="col-span-12 grid grid-cols-8 lg:col-span-7">
        <div className="relative col-span-8 h-96 sm:col-span-6 sm:h-[580px]">
          <Image
            src={activeImage}
            alt="bike"
            width={486}
            height={580}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-8 grid grid-cols-4 items-center justify-between gap-5 pt-5 sm:col-span-2 sm:flex sm:flex-col sm:gap-0 sm:pt-0">
          {data &&
            data.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full transition-all duration-200 hover:scale-[1.01] sm:h-32 sm:w-3/5"
                onClick={() => setActiveImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt="bike"
                  width={240}
                  height={320}
                  className="h-full w-full cursor-pointer object-cover"
                />
              </div>
            ))}
        </div>
      </div>
      {data && (
        <div className="col-span-12 flex flex-grow flex-col items-start justify-between text-text-secondary lg:col-span-5">
          <div>
            <p className="mb-3 text-base font-normal">{data.brand}</p>
            <h1 className="mb-4 text-[32px] font-light text-text-primary">
              {data.name}
            </h1>

            <p className="mb-4 text-xl font-semibold text-text-primary">
              R$ {data.price}
            </p>
            <p className="mb-16 text-xs">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
            <span className="mb-2 text-base font-semibold uppercase">
              Descrição
            </span>
            <p className="mb-6 text-sm font-normal">{data.description}</p>
            <div className="mb-5 flex gap-6 text-xl text-text-primary">
              <Button
                variant={"outline"}
                size={"icon"}
                className="translatransform border-none bg-transparent p-0 transition-all duration-200 hover:bg-transparent hover:text-brand-bs-orange"
              >
                <FaFacebook className="text-xl" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="translatransform border-none bg-transparent p-0 transition-all duration-200 hover:bg-transparent hover:text-brand-bs-orange"
              >
                <FaTwitter className="text-xl" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="translatransform border-none bg-transparent p-0 transition-all duration-200 hover:bg-transparent hover:text-brand-bs-orange"
              >
                <FaPinterest className="text-xl" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="translatransform border-none bg-transparent p-0 transition-all duration-200 hover:bg-transparent hover:text-brand-bs-orange"
              >
                <FaInstagram className="text-xl" />
              </Button>
            </div>
          </div>
          <Button className="flex w-full items-center gap-4 rounded bg-brand-bs-orange py-4 font-semibold uppercase text-white hover:bg-text-primary sm:w-auto sm:px-14">
            <FiShoppingBag className="text-2xl" />
            <p>Adicionar ao carrinho</p>
          </Button>
        </div>
      )}
    </article>
  );
};
