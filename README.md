# idea

从 WordPress 转来玩 Ghost，使用了 Vue 作为主要开发框架

使用了最新的 Ghost API V2，所以您的 Ghost 版本需要 >= 2.1.0

# 特性

- 使用 Vue 提升用户体验
- 使用 Ghost API V2 提升安全性
- 兼容 Ghost 特性并优化 SEO
- 支持响应式前端
- 支持文章内容自动 TOC
- (慢悠悠的开发中 ...)

# 如何使用

### Ghost 后台创建 Integrations

Ghost 后台 `Settings -> Integrations -> New custom integration`

创建完成后可以看到 `Content API Key`

### Code injection

首先需要在 `Code injection` 中的 Blog Header 加入自己的配置

```html
<script>
  window.config = {
    env: 'prod',
    ghost_host: '' // 网站完整网址，如 https://linhong.me
    ghost_key: '' // 填入上一步创建的 Content API Key,
    disqus: '' // 选填： Disqus 用户名，不填则不启用,
  };
</script>
```

### Install

前往 [Releases](https://github.com/lh1me/idea/releases) 下载 ZIP 安装包

前往 Ghost 后台 `Design -> Upload a theme`，上传安装包

启用主题即可

# Copyright & License

Copyright (c) 2018-2019 LIN HONG - Released under the [MIT license](LICENSE).
