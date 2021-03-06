# idea

<a href="https://github.com/lh1me/idea/releases">
    <img src="https://img.shields.io/github/release/lh1me/idea.svg" alt="releases" />
</a>
<a href="https://github.com/lh1me/idea">
    <img src="https://img.shields.io/badge/Ghost-%3E%3D2.10.0-blue.svg" alt="ghost" />
</a>
<a href="https://github.com/lh1me/idea/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/lh1me/idea.svg" alt="license" />
</a>
<br /><br />
<a href="https://github.com/lh1me/idea">
    <img src="/docs/idea.jpg" alt="license" />
</a>
<br /><br />

# 特性

- 使用 Vue 提升用户体验
- 使用 Ghost API V2 提升安全性
- 兼容 Ghost 特性并优化 SEO
- 支持响应式前端
- 支持文章内容自动 TOC
- 支持代码高亮显示
- 中文显示优化
- (慢悠悠的开发中 ...)

# 如何使用

### Ghost 后台创建 Integrations

Ghost 后台 `Settings -> Integrations -> New custom integration`

创建完成后可以看到 `Content API Key`

### Code injection

首先需要在 `Code Injection` 中的 Blog Header 加入自己的配置

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
