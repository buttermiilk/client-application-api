/**
 *
 * @typedef {Object} Options
 * @property {?string} name
 * @property {?path} path
 * @property {"none"|"token"|"staff"} authenticationLevel
 */
module.exports = class Route {
  /**
   *
   * @param {import('./APIServer')} client
   * @param {Options} options
   */
  constructor(client, options = {}) {
    this.client = client;

    this.name = options.name;

    this.path = options.path

    this.authenticationLevel = options.authenticationLevel || "none"
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {...any} args
   * @returns {Promise<void>}
   */
  async execute(req, res, ...args) {
    throw new Error("The execute method has not been implemented on this API Route.")
  }
}