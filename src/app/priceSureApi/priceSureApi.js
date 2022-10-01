import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const priceSureApi = createApi({
    reducerPath: "priceSureApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
    tagTypes: ["Favourites"],

    endpoints: (builder) => ({

        // reading all favourite products
        getAllFavProducts: builder.query({
            query: () => ({
                url: "favourites",
                method: "GET"
            }),
            providesTags: ["Favourites"], // for auto-fetching
            keepUnusedDataFor: 0, // makes caching time 0 (zero) || no caching
        }),

        // creating product in favourites/wishlist 
        createFavourites: builder.mutation({
            query: (body) => ({
                url: "favourites",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Favourites"], // for auto-fetching
            keepUnusedDataFor: 0, // makes caching time 0 (zero) || no caching
        }),

        // deleting a single product from favourites/wishlist 
        deleteFavProduct: builder.mutation({
            query: (id)=>({
                url: `favourites/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Favourites"], // for auto-fetching
            keepUnusedDataFor: 0, // makes caching time 0 (zero) || no caching
        }),
    })
});

export const {
    useCreateFavouritesMutation,
    useGetAllFavProductsQuery,
    useDeleteFavProductMutation,
    
} = priceSureApi;



