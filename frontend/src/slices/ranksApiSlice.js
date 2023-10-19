import { apiSlice } from "./apiSlice";
import { RANKS_URL } from "../constants";

export const ranksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRanks: builder.query({
      query: (rank) => ({ url: RANKS_URL, params: rank }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetRanksQuery } = ranksApiSlice;
