import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//All Api logics
export const productsApi = createApi({
  //name for Api
  reducerPath: "products",
  //defining baseQuery
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    //Get All Products(reading)
    getAllProducts: builder.query<any, void>({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),

    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: `products/add`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, updateProduct }) => ({
        url: `/products/${id}`,
        method: "Put",
        headers: { "Content-Type": "application/json" },
        body: updateProduct,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "Delete",
      }),
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productsApi;
