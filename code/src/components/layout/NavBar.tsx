"use client";

import Image from "next/image";
import React from "react";
import { useBikeStore } from "@/hooks/useBikeStore";

const NavBar = () => {
  const { searchName, setSearchName } = useBikeStore();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchName(searchName);
  };

  return (
    <div className="absolute top-0 bg-gray-200 flex items-center justify-between w-[100%] px-4">
      <Image src="/logo.png" width={100} height={100} alt="Bike Store Logo" />
      <form className="flex items-center" onSubmit={handleSearch}>
        <input
          placeholder="Pesquise por um item"
          className="p-2 rounded-sm"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <Image
          src="/icons/search-30.png"
          width={30}
          height={30}
          alt="Search Icon"
          className="ml-2"
        />
      </form>
      <div className="flex items-center rounded-full border-2 border-gray-800 p-1">
        <Image src="/icons/buy-32.png" width={28} height={28} alt="Cart icon" />
      </div>
    </div>
  );
};

export default NavBar;
