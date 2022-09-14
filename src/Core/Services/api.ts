import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { coinsBaseUrl } from '../Helpers';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${coinsBaseUrl}`,
    }),
    endpoints: (builder) => ({
        coinsList: builder.query<any, void>({
            query: () => "coins/list"
        }),
        
        coinsDetails: builder.query({
            query: (id: string) => ({url: `coins/${id}`})
        }),

        coinsMarketData: builder.query({
            query: (id:string) => ({url: `coins/${id}/market_chart?vs_currency=usd&days=1`})
        }),
    })
});

export const { useCoinsListQuery, useCoinsDetailsQuery, useCoinsMarketDataQuery } = api;