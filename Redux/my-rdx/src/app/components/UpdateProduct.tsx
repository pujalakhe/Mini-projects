import { useUpdateProductMutation } from "../service/dummyData";

function UpdateProduct({ productId }: { productId: any }) {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();
  if (error) {
    // Show a simple error message
    return <h1>{"Error updating product"}</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Updated Product Title",
      };
      await updateProduct({
        updateProduct:updatedProductData,
        id: productId,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>{data?.title}</h1>

      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
}

export default UpdateProduct;
