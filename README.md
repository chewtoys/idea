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

<a href="https://github.com/lh1me/idea/blob/master/docs/README_CN.md">中文文档</a><br /><br />

# Feature

- Use Vue
- Use Ghost API V2
- Compatible with Ghost features and optimized for SEO
- Support for Responsive
- Support article TOC
- Support code highlighting
- Chinese display optimization
- (...)

# Quickstart

### Ghost Create Integrations

Ghost Admin `Settings -> Integrations -> New custom integration`

Copy `Content API Key`

### Code Injection

Add the following code to the `Blog Header` in `Code Injection`

```html
<script>
  window.config = {
    env: 'prod',
    ghost_host: '' // Website Full URL, e.g. https://linhong.me
    ghost_key: '' // Content API Key,
    disqus: '' // Option:  Disqus Username,
  };
</script>
```

### Install Theme

Go to [Releases](https://github.com/lh1me/idea/releases) Download the ZIP installation package

Go to Ghost Admin `Design -> Upload a theme`, Upload the ZIP package

Enable the theme.

# Copyright & License

Copyright (c) 2018-2019 LIN HONG - Released under the [MIT license](LICENSE).
