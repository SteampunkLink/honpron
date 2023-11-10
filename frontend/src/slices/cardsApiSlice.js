import { apiSlice } from "./apiSlice";
import { CARD_URL } from "../constants";

export const cardsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCard: builder.query({
      query: (cid) => ({ url: `${CARD_URL}/${cid}` }),
      keepUnusedDataFor: 5,
    }),
    getCardList: builder.query({
      query: () => ({ url: `${CARD_URL}/list` }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetCardQuery, useGetCardListQuery } = cardsApiSlice;
