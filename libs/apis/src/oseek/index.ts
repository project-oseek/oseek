import { Configuration } from './generated/configuration';
import { OSEEK_API_URL } from '../constants';
import { AuthApi, CodeApi, LocationApi, MemberApi, MemberFoodKeywordApi, NoticeApi } from './generated/api';
import baseAxios from '../base';

const config = new Configuration({
  basePath: OSEEK_API_URL,
});

export * from './generated/models';

export const noticeAPI = new NoticeApi(config, OSEEK_API_URL, baseAxios);
export const codeAPI = new CodeApi(config, OSEEK_API_URL, baseAxios);
export const locationAPI = new LocationApi(config, OSEEK_API_URL, baseAxios);
export const authAPI = new AuthApi(config, OSEEK_API_URL, baseAxios);
export const memberApi = new MemberApi(config, OSEEK_API_URL, baseAxios);
export const memberFoodKeywordApi = new MemberFoodKeywordApi(config, OSEEK_API_URL, baseAxios);
