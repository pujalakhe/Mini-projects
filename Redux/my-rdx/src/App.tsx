import AddNewProduct from "./app/components/AddNewProduct";
import CounterComp from "./app/components/CounterComp";
import DeleteProduct from "./app/components/DeleteProduct";
import ProductComp from "./app/components/ProductComp";
import SpecificProduct from "./app/components/SpecificProduct";
import UpdateProduct from "./app/components/UpdateProduct";

const App = () => {
  return (
    <>
      {/* <CounterComp /> */}
      {/* <ProductComp /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      <UpdateProduct productId={2} />
      <DeleteProduct productId={4} />
    </>
  );
};
export default App;
