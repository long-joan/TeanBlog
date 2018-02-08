'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;

    ctx.renderClient('home/index.js', { message: 'hi, TeanBlog' });
  }
}

module.exports = HomeController;