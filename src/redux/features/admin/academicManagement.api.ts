import { TAcademicSemester } from "../../../types/academicSemester.type";
import { TReduxResponse } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        params.append(args[0].name, args[0].value);

        return {
          url: "academic-semesters",
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TReduxResponse<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAcademicSemesterQuery, useAddAcademicSemesterMutation } =
  academicManagementApi;
