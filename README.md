# idea

从 WordPress 转来玩 Ghost，使用了 Vue 作为主要开发框架

使用了最新的 Ghost API V2，所以您的 Ghost 版本需要 >= 2.1.0

使用此主题需要了解一些 JS、NPM，请谨慎使用

# How To Use

由于将密钥打包进了JS，所以大家使用时需要重新编译。

### Ghost 后台创建 Integrations

Ghost 后台 `Settings -> Integrations -> New custom integration`

创建完成后可以看到 `Content API Key`

### 创建 config.js

首先需要在 `src` 目录下创建 `config.js`

```js
export default {
  env: 'prod', // prod 正式环境 dev 测试环境
  test_post: '', // 文章内容页测试Slug
  test_tag: '', // 标签列表页测试Slug
  ghost_host: '', // 博客完整网址
  ghost_key: '', // 填入上一步创建的 Content API Key
};
```

### Build

```bash
$ npm i
$ npm run build
```

打包完成后 dist 文件夹内的文件即为主题文件，压缩成 zip 即可使用。

# Copyright & License

Copyright (c) 2018-2019 LIN HONG - Released under the [MIT license](LICENSE).
