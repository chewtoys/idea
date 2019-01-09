
import axios from 'axios';

const instance = axios.create({
  timeout: 6000,
});

// 构造发起请求通用方法
async function http(url, data) {
  // 调用 GHOST SDK 生成URL
  const ghostURL = window.ghost.url.api(url, data);
  // 发起请求
  try {
    const start = await instance({
      url: ghostURL,
      method: 'GET',
      data,
      headers: {},
    });
    return start.data;
  } catch (err) {
    return {
      err,
    };
  }
}

// ---------------------------------------------------------------------
// -------------------------- 账户相关接口 -------------------------------
// ---------------------------------------------------------------------

// 登录
async function posts() {
  return http('posts', {
    limit: 10,
    include: 'author,tags',
  });
}


export default {
  posts,
};
