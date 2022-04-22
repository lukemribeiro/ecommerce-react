import Filters from "../General/Filters";
import Product from "../SingleItems/Product";

function ProductListPage() {
  const search_data = [
    {
      name: "Lego City: Family House",
      price: "44.99$", rating: "⭐️⭐️⭐️⭐️⭐️",
      img: "/img/legohouse.png"
    },
    {
      name: "Lego City: Town Center",
      price: "70$", rating: "⭐️⭐️⭐️⭐️",
      img: "/img/legocenter.png"
    },
    {
      name: "Lego City: City People Pack",
      price: "10$", rating: "⭐️⭐️⭐️",
      img: "/img/legopeople.png"
    },
    {
      name: "Lego City: Lunar Research Base",
      price: "59.99$", rating: "⭐️⭐️⭐️⭐️⭐️",
      img: "/img/legomoonbase.png"
    },
    {
      name: "Lego City: Rocket Launch Center",
      price: "13.45$", rating: "⭐️⭐️⭐️⭐️⭐️",
      img: "/img/legorocket.png"
    },
  ]

  const searchResults = search_data.map(({ img, name, price, rating }) => {
    return (
      <Product img={img} name={name} price={price} rating={rating} colSize={6} />
    );
  });

  return (
    <div class="container pt-3 pb-3 pl-5">
      <h3>Top Results:</h3>

      <div class="row">
        <div class="col-3">
          <Filters />
        </div>
        <div class="col-9">
          <div class="container">
            <div class="row">
              {searchResults}
            </div>
          </div>
        </div>
      </div>    
    </div>
  ); 
}

export default ProductListPage;