import ProductItem from "./ProductItem";
import classes from "./styles/Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 10,
    title: "Atomic Habit",
    description:
      "Atomic Habits is a great book if you are looking for something prescriptive which will lay out a bunch of do's and dont's for creating new habits and breaking old ones.",
  },
  {
    id: "p2",
    price: 15,
    title: "Sleep Solution",
    description:
      "The Sleep Solution is an exciting journey of sleep self-discovery and understanding that will help you custom design specific interventions to fit your lifestyle",
  },
  {
    id: "p3",
    price: 20,
    title: "Flow",
    description:
      "Flow explains why we seek happiness in externals and what’s wrong with it, where you can really find enjoyment in life, and how you can truly become happy by creating your own meaning of life.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
