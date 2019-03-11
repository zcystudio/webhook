'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async webhook() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
