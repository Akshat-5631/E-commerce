import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext} from '../context/ShopContext'
import Breadcrums from '../components/Breadcrums/Breadcrums'
import ProductDisplay from '../components/produtDisplay.jsx/ProductDisplay'
import Descriptionbox from '../components/descriptionBox/Descriptionbox'
import RelatedProducts from '../components/relatedProducts/RelatedProducts'

export const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams ();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div >
      <Breadcrums  product={product} />
      <ProductDisplay product={product}/>
      <Descriptionbox />
      <RelatedProducts />
    </div>
  )
}
