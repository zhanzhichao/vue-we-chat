'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  const verifyToken = app.middlewares.verifyToken();
  router.post('register', '/api/register', controller.user.create);
  router.post('login', '/api/login', controller.user.login);
  router.get('getUserInfo', '/api/user/info', verifyToken, controller.user.getUserInfo);
  router.get('findUsers', '/api/user/find/:name', verifyToken, controller.user.findUsers);
  router.post('setSocketId', '/api/set/socketId', verifyToken, controller.user.setSocketId);
  router.post('addUser', '/api/request/add/:id', verifyToken, controller.request.addUser);
  // router.post('requestUsers', '/api/user/request', controller.user.requestFriend);
  app.io.of('/').route('login', app.io.controller.login.index);
  // io.route('server', io.controller.user.index);
  // io.route('request', io.controller.user.request);
};
