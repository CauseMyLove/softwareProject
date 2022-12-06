import { defHttp } from '/@/utils/http/axios';
import { DemoParams, DemoListGetResultModel } from './model/tableModel';

enum Api {
  DEMO_LIST = '/table/getDemoList',
  GOODS_LIST_add = '/product/add',
  GOODS_LIST_del = '/product/delete',
  GOODS_LIST_update = '/product/update',
  GOODS_LIST_page = '/product/page',
  GOODS_LIST_get = '/product/get/',
  GET_ALL_LIST = '/query/product',
}

/**
 * @description: Get sample list value
 */

export const demoListApi = (params: DemoParams) =>
  defHttp.get<DemoListGetResultModel>({
    url: Api.DEMO_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
export const GOODS_LIST_add = (params: DemoParams) =>
  defHttp.post<DemoListGetResultModel>(
    {
      url: Api.GOODS_LIST_add,
      params,
    },
    { isReturnNativeResponse: true },
  );
export const GOODS_LIST_del = (params: DemoParams) =>
  defHttp.post<DemoListGetResultModel>(
    {
      url: Api.GOODS_LIST_del,
      params,
      headers: {
        // @ts-ignore
        ignoreCancelToken: true,
      },
    },
    { isReturnNativeResponse: true },
  );
export const GOODS_LIST_update = (params: DemoParams) =>
  defHttp.post<DemoListGetResultModel>(
    {
      url: Api.GOODS_LIST_update,
      params,
    },
    { isReturnNativeResponse: true },
  );
export const GET_ALL_LIST = (params: DemoParams) =>
  defHttp.post<DemoListGetResultModel>(
    {
      url: Api.GET_ALL_LIST,
      params: {
        page: params.page,
        size: params.pageSize as any,
        text: params.text,
      },
    },
    { isReturnNativeResponse: true },
  );
export const GOODS_LIST_page = (params: DemoParams) =>
  defHttp.post<DemoListGetResultModel>(
    {
      url: Api.GOODS_LIST_page,
      params: {
        page: params.page,
        size: params.pageSize as any,
        userid: params.userid,
      },
    },
    { isReturnNativeResponse: true },
  );

export const GOODS_LIST_get = (params: DemoParams) =>
  defHttp.get<DemoListGetResultModel>({
    url: Api.GOODS_LIST_get,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
