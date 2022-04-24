import './Seller.css'

function Seller({ img, name }) {
  return (
    <div className="col-2 pt-3">
      <img src={img} alt="" className="seller-image rounded img-thumbnail" />
      <h5>{name}</h5>
    </div>
  );
};

export default Seller;
