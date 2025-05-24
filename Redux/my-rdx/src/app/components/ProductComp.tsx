import { useGetAllProductsQuery } from "../service/dummyData";
function ProductComp() {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  console.log(data);

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
  return (
    <div>
      {data?.products.map((p: any) => (
        <>
          <h1 key={p.id}>{p.title} </h1>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  );
}

export default ProductComp;
