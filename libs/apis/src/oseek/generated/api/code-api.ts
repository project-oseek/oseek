/* tslint:disable */
/* eslint-disable */
/**
 * API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0.0
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
import { CodeResDto } from '../models';
/**
 * CodeApi - axios parameter creator
 * @export
 */
export const CodeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * codeGroup 기준으로 코드를 조회합니다.
         * @summary 코드 조회
         * @param {string} codeGroup 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findCodes: async (codeGroup: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'codeGroup' is not null or undefined
            assertParamExists('findCodes', 'codeGroup', codeGroup)
            const localVarPath = `/code/{codeGroup}`
                .replace(`{${"codeGroup"}}`, encodeURIComponent(String(codeGroup)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
 * CodeApi - functional programming interface
 * @export
 */
export const CodeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CodeApiAxiosParamCreator(configuration)
    return {
        /**
         * codeGroup 기준으로 코드를 조회합니다.
         * @summary 코드 조회
         * @param {string} codeGroup 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findCodes(codeGroup: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CodeResDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findCodes(codeGroup, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CodeApi - factory interface
 * @export
 */
export const CodeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CodeApiFp(configuration)
    return {
        /**
         * codeGroup 기준으로 코드를 조회합니다.
         * @summary 코드 조회
         * @param {string} codeGroup 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findCodes(codeGroup: string, options?: any): AxiosPromise<Array<CodeResDto>> {
            return localVarFp.findCodes(codeGroup, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CodeApi - object-oriented interface
 * @export
 * @class CodeApi
 * @extends {BaseAPI}
 */
export class CodeApi extends BaseAPI {
    /**
     * codeGroup 기준으로 코드를 조회합니다.
     * @summary 코드 조회
     * @param {string} codeGroup 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CodeApi
     */
    public findCodesAxios(codeGroup: string, options?: AxiosRequestConfig) {
        return CodeApiFp(this.configuration).findCodes(codeGroup, options).then((request) => request(this.axios, this.basePath));
    }
}
