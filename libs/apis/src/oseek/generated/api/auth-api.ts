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
import { AuthReqDto } from '../models';
// @ts-ignore
import { TokenInfo } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 로그아웃
         * @param {AuthReqDto} authReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (authReqDto: AuthReqDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authReqDto' is not null or undefined
            assertParamExists('logout', 'authReqDto', authReqDto)
            const localVarPath = `/auth/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authReqDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 토큰 재발급
         * @param {AuthReqDto} authReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        regenerateToken: async (authReqDto: AuthReqDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authReqDto' is not null or undefined
            assertParamExists('regenerateToken', 'authReqDto', authReqDto)
            const localVarPath = `/auth/regenerateToken`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authReqDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 로그아웃
         * @param {AuthReqDto} authReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(authReqDto: AuthReqDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(authReqDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 토큰 재발급
         * @param {AuthReqDto} authReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async regenerateToken(authReqDto: AuthReqDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.regenerateToken(authReqDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @summary 로그아웃
         * @param {AuthReqDto} authReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(authReqDto: AuthReqDto, options?: any): AxiosPromise<string> {
            return localVarFp.logout(authReqDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 토큰 재발급
         * @param {AuthReqDto} authReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        regenerateToken(authReqDto: AuthReqDto, options?: any): AxiosPromise<TokenInfo> {
            return localVarFp.regenerateToken(authReqDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary 로그아웃
     * @param {AuthReqDto} authReqDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public logoutAxios(authReqDto: AuthReqDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).logout(authReqDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 토큰 재발급
     * @param {AuthReqDto} authReqDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public regenerateTokenAxios(authReqDto: AuthReqDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).regenerateToken(authReqDto, options).then((request) => request(this.axios, this.basePath));
    }
}
