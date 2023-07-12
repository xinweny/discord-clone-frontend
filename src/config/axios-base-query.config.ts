import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';

import { dcAxios } from '@services/axios';

export const axiosBaseQuery = (): BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
    withCredentials?: boolean;
  },
  unknown,
  unknown
> => async ({ url, method, data, params, withCredentials }) => {
  try {
    const result = await dcAxios({
      url,
      method,
      data,
      params,
      withCredentials,
    });

    return { data: result.data.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};