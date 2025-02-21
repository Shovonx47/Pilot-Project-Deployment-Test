import { baseApi } from "../baseApi";



const offDaySetupApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOffDaySetup: builder.mutation({
            query: (info) => ({
                url: "/off-day-setup",
                method: "POST",
                body: info,
            }),
            invalidatesTags: ["off_day"],
        }),
        getAllOffDaySetups: builder.query({
            query: ({ page, limit, sort }) => ({
                url: "/off-day-setup",
                method: "GET",
                params: { page, limit, sort }
            }),
            providesTags: ["off_day"],
        }),

        getSingleOffDaySetup: builder.query({
            query: (id) => ({
                url: `/off-day-setup/${id}`,
                method: "GET",
            }),
            providesTags: ["off_day"],
        }),

        updateOffDaySetup: builder.mutation({
            query: ({ id, data }) => ({
                url: `/off-day-setup/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["off_day"],
        }),
        deleteOffDaySetup: builder.mutation({
            query: (id) => ({
                url: `/off-day-setup/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["off_day"],
        }),
    }),
});

export const {
    useCreateOffDaySetupMutation,
    useGetAllOffDaySetupsQuery,
    useGetSingleOffDaySetupQuery,
    useUpdateOffDaySetupMutation,
    useDeleteOffDaySetupMutation

} = offDaySetupApi;
