import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BredCrumbs from '../Components/BredCrumbs';
import Productdisplay from '../Components/Productdisplay';
import DescriptionBox from '../Components/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <BredCrumbs product={product} />
      <Productdisplay product={product} />
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product