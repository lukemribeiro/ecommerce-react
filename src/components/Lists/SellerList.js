import Seller from "../SingleItems/Seller";

function SellerList({ title, sellers }) {
  const sellerList = sellers.map((seller, index) => {
    return(
      <Seller img={seller.img} name={seller.name} key={index} />
    );
  })

  return(
    <div className="container pt-3 pb-3">
      <h3>{title}</h3>
      <div className="row">
        {sellerList}
      </div>
    </div>
  );
}

export default SellerList;
