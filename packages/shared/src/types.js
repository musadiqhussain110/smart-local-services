/** @typedef {'admin'|'customer'|'provider'} Role */

/**
 * @typedef {Object} AuthTokensDTO
 * @property {string} accessToken
 * @property {string} refreshToken
 */

/**
 * @typedef {Object} RegisterDTO
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {Role} role
 */

/**
 * @typedef {Object} CategoryDTO
 * @property {string} _id
 * @property {string} name
 */

/**
 * @typedef {Object} BookingDTO
 * @property {string} _id
 * @property {string} customerId
 * @property {string} providerId
 * @property {string} categoryId
 * @property {string} status
 */
