'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // egg-swagger-doc-feat 插件配置
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc-feat',
  },

  // egg-validate 插件
  validate: {
    enable: true,
    package: 'egg-validate',
  },

  // mongooseDB相关插件配置
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },

  // 加密 
  bcrypt: {
    enable: true,
    package: 'egg-bcrypt'
  },

  // jwt鉴权
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
