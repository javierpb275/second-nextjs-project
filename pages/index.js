const HomePage = (props) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  return {
    props: {
      products: [
        {
          id: "p1",
          title: "Product 1",
        },
        {
          id: "p2",
          title: "Product 2",
        },
        {
          id: "p3",
          title: "Product 3",
        },
      ],
    },
  };
}

export default HomePage;
