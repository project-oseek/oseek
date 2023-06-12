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
import { MemberReqDto } from '../models';
/**
 * MemberControllerApi - axios parameter creator
 * @export
 */
export const MemberControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} memberId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findMemberInfo: async (memberId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memberId' is not null or undefined
            assertParamExists('findMemberInfo', 'memberId', memberId)
            const localVarPath = `/member/info/{memberId}`
                .replace(`{${"memberId"}}`, encodeURIComponent(String(memberId)));
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
        /**
         * 
         * @param {MemberReqDto} memberReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveMember: async (memberReqDto: MemberReqDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memberReqDto' is not null or undefined
            assertParamExists('saveMember', 'memberReqDto', memberReqDto)
            const localVarPath = `/member`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(memberReqDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MemberControllerApi - functional programming interface
 * @export
 */
export const MemberControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MemberControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} memberId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findMemberInfo(memberId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findMemberInfo(memberId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {MemberReqDto} memberReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async saveMember(memberReqDto: MemberReqDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveMember(memberReqDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MemberControllerApi - factory interface
 * @export
 */
export const MemberControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MemberControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {number} memberId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findMemberInfo(memberId: number, options?: any): AxiosPromise<string> {
            return localVarFp.findMemberInfo(memberId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {MemberReqDto} memberReqDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveMember(memberReqDto: MemberReqDto, options?: any): AxiosPromise<string> {
            return localVarFp.saveMember(memberReqDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MemberControllerApi - object-oriented interface
 * @export
 * @class MemberControllerApi
 * @extends {BaseAPI}
 */
export class MemberControllerApi extends BaseAPI {
    /**
     * 
     * @param {number} memberId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MemberControllerApi
     */
    public findMemberInfoAxios(memberId: number, options?: AxiosRequestConfig) {
        return MemberControllerApiFp(this.configuration).findMemberInfo(memberId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {MemberReqDto} memberReqDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MemberControllerApi
     */
    public saveMemberAxios(memberReqDto: MemberReqDto, options?: AxiosRequestConfig) {
        return MemberControllerApiFp(this.configuration).saveMember(memberReqDto, options).then((request) => request(this.axios, this.basePath));
    }
}