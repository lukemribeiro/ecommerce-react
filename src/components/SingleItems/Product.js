function Product({ img, name, price, rating }) {
  return (
    <div class="col-4 pt-3">
      <img src={img} class="rounded" alt="" style={{"max-width": "400px", "max-height": "400px"}} />
      <h4>{name} - {price}</h4>
      <h5>Average Rating: {rating}</h5>
    </div>
  );
};

export default Product;