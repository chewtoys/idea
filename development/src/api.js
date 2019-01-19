
import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  host: 'https://linhong.me',
  key: '96aec596e34372ae8cb464dd57',
  version: 'v2',
});

// 文章列表
async function posts() {
  const data = await api.posts.browse({
    limit: 10,
    include: 'tags,authors',
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
  setting,
};
