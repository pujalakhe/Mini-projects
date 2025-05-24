import { useGetProductByIdQuery } from "../service/dummyData";
function SpecificProduct() {
  const { data } = useGetProductByIdQuery(10);
  console.log(data);

  return (
    <div>
      <h1>{data?.brand}</h1>
      <p>{data?.category}</p>
      <p>{data?.description}</p>
      <p>{data?.price}</p>
    </div>
  );
}

export default SpecificProduct;
