import Line from '../General/Line';
import ProductList from '../Lists/ProductList';
import SellerList from '../Lists/SellerList';

export default function HomePage() {
  const product_list_data_top = [
    {
      "title": "Recommended for You:",
      "products": [
        {
          name: "Super Nintendo Entertainment System",
          price: "1499.99$",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          img: "/img/SuperNintendo.png"
        },
        {
          name: "EarthBound for SNES",
          price: "999.99$",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          img: "/img/EarthBound.png"
        },
        {
          name: "Zelda: A Link to The Past for SNES",
          price: "59.99$",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          img: "/img/Zelda.png"
        }
      ]
    }
  ];

  const product_list_data_bottom = [
    {
      "title": "Kids' Toys:",
      "products": [
        {
          name: "Lego Minecraft: The Creeper Ambush",
          price: "4.99$", rating: "⭐️⭐️⭐️⭐️",
          img: "/img/lego1.png"
        },
        {
          name: "Plastic Yo-Yo",
          price: "999.99$",
          rating: "⭐️⭐️⭐️",
          img: "/img/Yo-Yo.png"
        },
        {
          name: "Lego Minecraft: The Abandoned Mine",
          price: "19.99$",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          img: "/img/lego2.png"
        }
      ]
    },
    {
      "title": "Video Games:",
      "products": [
        {
          name: "EarthBound HD for Nintendo Switch",
          price: "99999.99$",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          img: "/img/Earthboundhd.png"
        },
        {
          name: "Super Mario Maker 2 for Nintendo Switch",
          price: "59.99$",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          img: "/img/mario.png"
        },
        {
          name: "Nintendo Switch",
          price: "299.99$",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          img: "/img/switch.png"
        }
      ]
    }
  ];

  const seller_list_data = [
    {
      "title": "Sellers You Might Be Looking For:",
      "sellers": [
        {name: "Nintendo", img: "/img/Nintendo.png"},
        {name: "Lego", img: "/img/Lego.png"},
        {name: "Sega", img: "/img/Sega.png"},
        {name: "Mojang", img: "/img/Mojang.png"}
      ]
    }
  ];

  const productListTop = product_list_data_top.map((list_data, index) => {
    return(
      <div>
        <ProductList title={list_data.title} products={list_data.products} colSize={4} key={index} />
        <Line />
      </div>
    );
  })

  const productListBottom = product_list_data_bottom.map((list_data, index) => {
    return(
      <div>
        <ProductList title={list_data.title} products={list_data.products} colSize={4} key={index} />
        <Line />
      </div>
    );
  })
  
  const sellerList = seller_list_data.map((list_data, index) => {
    return(
      <div>
        <SellerList title={list_data.title} sellers={list_data.sellers} colSize={4} key={index}/>
        <Line />
      </div>
    );
  })

  return (
    <>
      { productListTop }
      { sellerList }
      { productListBottom }    
    </>
  )
}
