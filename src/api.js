import GhostContentAPI from '@tryghost/content-api';
import Config from '../config/config';

// 开发模式下设置全局设置
if (Config.env === 'dev') {
  window.config = Config;
}

const api = new GhostContentAPI({
  host: window.config.ghost_host,
  key: window.config.ghost_key,
  version: 'v2',
});

// 文章列表
async function posts(page) {
  const data = await api.posts.browse({
    limit: 10,
    include: 'tags,authors',
    page,
  });
  return data;
}

// 文章内容
async function postDetail(params) {
  const data = await api.posts.read(
    {
      slug: params.slug,
    },
    {
      formats: ['html'],
      include: 'tags,authors',
    },
  );
  return data;
}

// 标签信息
async function tagInfo(params) {
  const data = await api.tags.read(
    {
      slug: params.slug,
    },
    {
      include: 'count.post',
    },
  );
  return data;
}

// 标签列表
async function tagList(params) {
  const data = await api.posts.browse({
    limit: 10,
    include: 'tags,authors',
    filter: `tags:${params.slug}`,
    page: params.page,
  });
  return data;
}

// 获取作者信息
async function authorInfo(params) {
  const data = await api.authors.browse({
    include: 'count.posts',
    filter: `slug:${params.slug}`,
  });
  return data;
}

// 作者文章列表
async function authorPostList(params) {
  const data = await api.posts.browse({
    limit: 10,
    include: 'tags,authors',
    filter: `authors:${params.slug}`,
    page: params.page,
  });
  return data;
}

// 博客设置
async function setting() {
  const data = await api.settings.browse();
  return data;
}

export default {
  posts,
  postDetail,
  tagInfo,
  tagList,
  authorInfo,
  authorPostList,
  setting,
};
