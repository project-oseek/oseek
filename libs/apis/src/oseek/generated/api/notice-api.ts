/* tslint:disable */
/* eslint-disable */
/**
 * API Swagger
 * OSeek Swagger
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { NoticeResDto } from '../models';
/**
 * NoticeApi - axios parameter creator
 * @export
 */
export const NoticeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 공지사항 list를 반환합니다.
         * @summary 공지사항 조회
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findNotices: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/notice`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NoticeApi - functional programming interface
 * @export
 */
export const NoticeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NoticeApiAxiosParamCreator(configuration)
    return {
        /**
         * 공지사항 list를 반환합니다.
         * @summary 공지사항 조회
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findNotices(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NoticeResDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findNotices(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NoticeApi - factory interface
 * @export
 */
export const NoticeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NoticeApiFp(configuration)
    return {
        /**
         * 공지사항 list를 반환합니다.
         * @summary 공지사항 조회
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findNotices(options?: any): AxiosPromise<Array<NoticeResDto>> {
            return localVarFp.findNotices(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NoticeApi - object-oriented interface
 * @export
 * @class NoticeApi
 * @extends {BaseAPI}
 */
export class NoticeApi extends BaseAPI {
    /**
     * 공지사항 list를 반환합니다.
     * @summary 공지사항 조회
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NoticeApi
     */
    public findNoticesAxios(options?: AxiosRequestConfig) {
        return NoticeApiFp(this.configuration).findNotices(options).then((request) => request(this.axios, this.basePath));
    }
}