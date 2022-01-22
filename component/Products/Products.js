import Card from "../UI/Card";
import ProductList from "./ProductList";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = (prpps) => {
  const listProduct = productsArr.map((prod) => (
    <ProductList title={prod.title} img={prod.imageUrl} price={prod.price} />
  ));
  return (
    <Card>
      <div>
        <ul>{listProduct}</ul>
      </div>
    </Card>
  );
};

export default Products;
