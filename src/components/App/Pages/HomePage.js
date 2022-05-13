import Line from '../../General/Line';
import ProductList from '../../Lists/ProductList';
import SellerList from '../../Lists/SellerList';
import api_client from '../../../config/api-client';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api_client.get('/categories').then(res => {
      setCategories(res.data);
    });
  }, []);

  const seller_list_data = [
    {
      "title": "Sellers You Might Be Looking For:",
      "sellers": [
        {name: "Nintendo", img: "/img/Nintendo.png"},
        {name: "Lego", img: "/img/Lego.png"},
        {name: "Sega", img: "/img/Sega.png"},
        {name: "Mojang", img: "/img/Mojang.png"}
      ]
    }
  ];

  const productList = categories.map((category, index) => {
    return(
      <div>
        <ProductList category={category} colSize={4} key={index} />
        <Line />
      </div>
    );
  })
  
  const sellerList = seller_list_data.map((list_data, index) => {
    return(
      <div>
        <SellerList title={list_data.title} sellers={list_data.sellers} colSize={4} key={index}/>
        <Line />
      </div>
    );
  })

  return (
    <>
      { productList }
      { sellerList }
    </>
  )
}
