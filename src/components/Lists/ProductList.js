import { useEffect, useState } from "react";
import api_client from "../../config/api-client";
import Product from "../SingleItems/Product";

function ProductList({ category, colSize }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api_client.get(`/products?category_id=${category.id}`).then(res => {
      setProducts(res.data);
    });
  }, []);

  const productList = products.map((product, index) => {
    return(
      <Product img={product.image_url} name={product.name} price={product.price_in_cents/100} rating={product.average_rating} id={product.id} colSize={colSize} key={index} />
    );
  });
  
  return(
    <div className="container pt-3 pb-3">
      <h3>{category.name}:</h3>
      <div className="row">
        {productList}
      </div>
    </div>
  );
}

export default ProductList;
