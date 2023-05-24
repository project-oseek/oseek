/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.6
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'petId'?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'quantity'?: number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'shipDate'?: string;
    /**
     * Order Status
     * @type {string}
     * @memberof Order
     */
    'status'?: OrderStatus;
    /**
     * 
     * @type {boolean}
     * @memberof Order
     */
    'complete'?: boolean;
}

export const OrderStatus = {
    placed: 'placed',
    approved: 'approved',
    delivered: 'delivered'
} as const;

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];


