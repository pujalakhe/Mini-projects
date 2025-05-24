import { useDeleteProductMutation } from "../service/dummyData";

function DeleteProduct({ productId }: { productId: number }) {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();
  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };
  if (error) {
    // Show a simple error message
    return <h1>{"Error updating product"}</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
      <button onClick={handleDelete} disabled={isLoading} >Delete Product</button>
    </div>
  );
}

export default DeleteProduct;
