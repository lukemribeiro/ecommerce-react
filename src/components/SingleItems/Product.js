import { Link } from 'react-router-dom';
import '../../css/SearchedProduct.css'

function Product({ img, name, price, rating, id, colSize }) {
  return (
    <Link to={`/products/${id}`} className={`col-${colSize} pt-3 linkText`}>
      <img src={img} className="rounded imageSize" alt="" />
      <h4>{name} - ${price}</h4>
      <h5>Average Rating: {rating}</h5>
    </Link>
  );
};

export default Product;
