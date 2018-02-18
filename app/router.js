'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.render.index.home);
  router.get('/admin/login', controller.render.admin.login);
};
