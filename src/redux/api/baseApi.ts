
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_API_URL}` }),
  tagTypes: [
    "student",
    "teacher",
    "staff",
    "account_officer",
    "class_routine",
    "exam_schedule",
    "off_day",
  ],
  endpoints: () => ({}),
});
