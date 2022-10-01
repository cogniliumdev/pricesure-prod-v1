import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const elasticSearchRestApi = createApi({
    reducerPath: "elasticSearchRestApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://paid-3-node-9829273760.us-east-1.bonsaisearch.net/pricesure_v2",
        prepareHeaders: (headers) => {
            headers.set("authorization", "Basic aGtsbnUwNTNrbDpuemg3enVscGFq");
            return headers;
        }
    }),
    tagTypes: ["RelatedPosts"],
    endpoints: (builder) => ({

        // get related products from elsticSearch by product title 
        getRelatedProducts: builder.query({
            query: (title) => ({
                url: `/_doc/_search?q=title:"${title}"`,
                method: "GET"
            }),
            providesTags: ["RelatedPosts"], // for auto-fetching
            keepUnusedDataFor: 0, // makes caching time 0 (zero) || no caching
        }),

    })

});

export const {
    useGetRelatedProductsQuery,

} = elasticSearchRestApi;