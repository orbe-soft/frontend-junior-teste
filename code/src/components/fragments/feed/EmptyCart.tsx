import Link from 'next/link'
import React from 'react'

const EmptyCartMessage = () => {
  return (
    <div>
        <h1>Seu carrinho de compras está vazio</h1>
        <h2>Navegue pelas nossas bicicletas e adicione os produtos desejados que eles irão aparecer aqui !</h2>
        <Link href="/">Nossos Produtos</Link>
    </div>
  )
}

export default EmptyCartMessage