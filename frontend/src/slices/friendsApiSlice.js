import { apiSlice } from "./apiSlice";
import { FRIENDS_URL } from "../constants";

export const friendsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: () => ({ url: FRIENDS_URL }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetFriendsQuery } = friendsApiSlice;
