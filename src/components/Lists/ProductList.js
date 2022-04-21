import Product from "../SingleItems/Product";

function ProductList({ title, products }) {
  const productList = products.map((product) => {
    return(
      <Product img={product.img} name={product.name} price={product.price} rating={product.rating} />
    );
  })

  return(
    <div class="container pt-3 pb-3">
      <h3>{title}</h3>
      <div class="row">
        {productList}
      </div>
    </div>
  );
}

export default ProductList;