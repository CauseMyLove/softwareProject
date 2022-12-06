import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

enum Api {
  Login = '/user/login',
  Regiter = '/user/register',
  Logout = '/logout',
  GetUserInfo = '/user/id',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
  ChangePassword = '/user/updatepwd',
  UpdateInfo = '/user/update',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    { isReturnNativeResponse: true },
  );
}
export function ChangePassword(params: LoginParams) {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.ChangePassword,
      params,
    },
    { isReturnNativeResponse: true },
  );
}
export function UpdateInfo(params: LoginParams) {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.UpdateInfo,
      params,
    },
    { isReturnNativeResponse: true },
  );
}

export function registerUser(params: { username: string; userpwd: string; usermail: string }) {
  return defHttp.post(
    {
      url: Api.Regiter,
      params,
    },
    { isReturnNativeResponse: true },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo(id: string) {
  return defHttp.get<GetUserInfoModel>(
    {
      url: Api.GetUserInfo + `/${id}`,
    },
    { errorMessageMode: 'none', isReturnNativeResponse: true },
  );
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
