import { Configuration } from './generated/configuration';
import { OSEEK_API_URL } from '../constants';
import { MemberControllerApi, NoticeApi } from './generated/api';
import baseAxios from '../base';

const config = new Configuration({
  basePath: OSEEK_API_URL,
});

export const noticeAPI = new NoticeApi(config, OSEEK_API_URL, baseAxios);
export const memberControllerAPI = new MemberControllerApi(config, OSEEK_API_URL, baseAxios);
