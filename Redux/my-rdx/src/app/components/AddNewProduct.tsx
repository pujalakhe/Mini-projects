import { useAddProductMutation } from "../service/dummyData";

function AddNewProduct() {
  // const [res] = useAddProductMutation()
  // console.log(res);

  const [addNewProduct, { data, isError, isLoading }] = useAddProductMutation();
  if (isError) {
    return (
      <>
        <h1>Sth went wrong</h1>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <h1>loading</h1>
      </>
    );
  }
  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "A new product",
        description: "nice product",
      };
      await addNewProduct(newProductData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
}

export default AddNewProduct;
