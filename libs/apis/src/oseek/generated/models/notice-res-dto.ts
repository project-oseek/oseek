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



/**
 * 공지사항 리스트 응답Dto
 * @export
 * @interface NoticeResDto
 */
export interface NoticeResDto {
    /**
     * 공지사항id
     * @type {number}
     * @memberof NoticeResDto
     */
    'noticeId'?: number;
    /**
     * 공지사항 제목
     * @type {string}
     * @memberof NoticeResDto
     */
    'title'?: string;
    /**
     * 공지사항 내용
     * @type {string}
     * @memberof NoticeResDto
     */
    'content'?: string;
    /**
     * 공지사항 작성 날짜 ex)23/06/11
     * @type {string}
     * @memberof NoticeResDto
     */
    'registerDate'?: string;
}

