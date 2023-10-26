import { apiSlice } from "./apiSlice";
import { FAQS_URL } from "../constants";

export const faqsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: () => ({ url: FAQS_URL }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetFaqsQuery } = faqsApiSlice;
