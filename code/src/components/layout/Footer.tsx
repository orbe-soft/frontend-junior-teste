import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 rounded-lg shadow mb-4 mx-2 mt-12">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src="/logo.png" width={128} height={75} alt="Logo da BikeStore"/>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-900 sm:text-center text-gray-400">
          © 2024{" "}
          <a href="https://www.orbesoft.com.br/" target="_blank" className="hover:underline">
            Orbesoft™
          </a>
          . Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer