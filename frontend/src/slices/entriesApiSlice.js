import { apiSlice } from "./apiSlice";
import { ENTRIES_URL } from "../constants";

export const entriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEntries: builder.query({
      query: () => ({
        url: ENTRIES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getOneEntry: builder.query({
      query: (ep) => ({
        url: `${ENTRIES_URL}/episode/${ep.show}/${ep.epNum}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAllEntriesQuery, useGetOneEntryQuery } = entriesApiSlice;
