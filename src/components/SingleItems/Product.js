function Product({ img, name, price, rating, colSize }) {
  return (
    <div className={`col-${colSize} pt-3`}>
      <img src={img} className="rounded" alt="" style={{"maxWidth": "400px", "maxHeight": "400px"}} />
      <h4>{name} - ${price}</h4>
      <h5>Average Rating: {rating}</h5>
    </div>
  );
};

export default Product;
