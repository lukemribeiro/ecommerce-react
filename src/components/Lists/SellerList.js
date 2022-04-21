import Seller from "../SingleItems/Seller";

function SellerList({ title, sellers }) {
  const sellerList = sellers.map((seller) => {
    return(
      <Seller img={seller.img} name={seller.name} />
    );
  })

  return(
    <div class="container pt-3 pb-3">
      <h3>{title}</h3>
      <div class="row">
        {sellerList}
      </div>
    </div>
  );
}

export default SellerList;