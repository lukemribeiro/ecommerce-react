import Product from "../SingleItems/Product";

function ProductList({ title, products, colSize }) {
  const productList = products.map((product, index) => {
    return(
      <Product img={product.img} name={product.name} price={product.price} rating={product.rating} colSize={colSize} key={index} />
    );
  })

  return(
    <div className="container pt-3 pb-3">
      <h3>{title}</h3>
      <div className="row">
        {productList}
      </div>
    </div>
  );
}

export default ProductList;
