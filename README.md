# egg-passport-jwt

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]


<!--
Description here.
-->


简单的对 passport-jwt 进行了封装。  直接就可以使用。  这只是一个策略，使用还需依赖  egg-passport

需要注意

1. 生成 token 需要用 jsonwebtoken 包。 且 key 用 系统 config 里面的默认 key。
2. 默认 egg 有 csrf 安全。 所以要在 插件里过滤 或者关掉。
3. 默认验证 需要置空 successReturnToOrRedirect:null 否则返回 404.

## Install

```bash
$ npm i egg-passport-jwt --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passportJwt = {
  enable: true,
  package: 'egg-passport-jwt',
};
```


## Example

<!-- example here -->
```
const jsonwebtoken = require('jsonwebtoken')

...
  router.get('/api/login', async (ctx) => {
    const token = jsonwebtoken.sign({
      name: "jwt",
    }, 
    app.config.keys, 
    { expiresIn: '24h'}
    );
    ctx.body = `bearer ${token}`
  })
  
  const jwt = app.passport.authenticate('jwt', {session:false, successReturnToOrRedirect:null});
  router.get('/api', jwt, controller.home.admin);
...
```
## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
