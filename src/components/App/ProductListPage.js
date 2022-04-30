import { useSearchParams, useLocation } from "react-router-dom";
import Filters from "../General/Filters";
import Product from "../SingleItems/Product";
import api_client from "../../config/api-client";
import { useEffect, useState } from "react";

function ProductListPage() {
  // const search_data = [
  //   {
  //     name: "Lego City: Family House",
  //     price: "44.99$", rating: "⭐️⭐️⭐️⭐️⭐️",
  //     img: "/img/legohouse.png"
  //   },
  //   {
  //     name: "Lego City: Town Center",
  //     price: "70$", rating: "⭐️⭐️⭐️⭐️",
  //     img: "/img/legocenter.png"
  //   },
  //   {
  //     name: "Lego City: City People Pack",
  //     price: "10$", rating: "⭐️⭐️⭐️",
  //     img: "/img/legopeople.png"
  //   },
  //   {
  //     name: "Lego City: Lunar Research Base",
  //     price: "59.99$", rating: "⭐️⭐️⭐️⭐️⭐️",
  //     img: "/img/legomoonbase.png"
  //   },
  //   {
  //     name: "Lego City: Rocket Launch Center",
  //     price: "13.45$", rating: "⭐️⭐️⭐️⭐️⭐️",
  //     img: "/img/legorocket.png"
  //   },
  // ]

  const [productList, setProductList] = useState([]);
  const [searchParams, _setSearchParams] = useSearchParams();  
  const location = useLocation();

  useEffect(() => {
    api_client.get(`/products?searchTerm=${searchParams.get('searchTerm')}`).then(res => {
      setProductList(res.data);
    });
  }, [location]);

  const searchResults = productList.map(({ image_url, name, price_in_cents, average_rating }, index) => {
    return (
      <Product img={image_url} name={name} price={`${price_in_cents/100}`} rating={average_rating} colSize={6} key={index} />
    );
  });

  return (
    <div className="container pt-3 pb-3 pl-5">
      <h3>Top Results{searchParams.get('searchTerm') && ` for "${searchParams.get('searchTerm')}"`}: </h3>

      <div className="row">
        <div className="col-3">
          <Filters />
        </div>
        <div className="col-9">
          <div className="container">
            <div className="row">
              {searchResults}
            </div>
          </div>
        </div>
      </div>    
    </div>
  ); 
}

export default ProductListPage;
