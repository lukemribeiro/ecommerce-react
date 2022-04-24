export default function ProductPage() {
  const product_data = {
    "name": "EarthBound HD for Nintendo Switch",
    "price": ["99999.99$", "999.99$"],
    "rating": "⭐️⭐️⭐️⭐️⭐️",
    "brand": "Nintendo",
    "age": "Everyody",
    "year": 2022,
    "genre": "Sci-Fi Fantasy",
    "img": "/img/Earthboundhd.png",
  }
  
  return (
    <div class="container pt-3 pb-3 pl-5">

      <div class="row pt-3">
        <div class="col-5">
          <img src={product_data.img} class="rounded" style={{"height": "850px"}} alt="" />
        </div>
        <div class="col-6 pt-4">
          <h1>{product_data.name}</h1>
          <h3>Average Rating: {product_data.rating}</h3>
          <h4>{product_data.price[0]}</h4>
          <p>{product_data.price[1]} Shipping & Import Fees Deposit to USA</p>
          <br />
          <h5><strong>Brand: </strong>{product_data.brand}</h5>
          <h5><strong>Age Range: </strong>{product_data.age}</h5>
          <h5><strong>Year: </strong>{product_data.year}</h5>
          <h5><strong>Genre: </strong>{product_data.genre}</h5>
          <br class="pt-3" />

          <div class="row">
            <div class="col-2 pt-3">
              <a class="btn btn-warning">Add to Cart</a>
            </div>
            <div class="col-2 pt-3">
              <a class="btn btn-danger">Go to Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}