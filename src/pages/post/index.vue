<template>
  <div id="post">
    <el-container>
      <Header></Header>
      <Cover
        :height="300"
        :mask=".5"
        :image="coverImage" >
      </Cover>

      <div class="desc" v-if="post.title">{{post.title}}</div>

      <el-main class="post">

          <div class="post-col-left">
            <div class="post-widget">

              <div class="post-toc">
                <div class="post-toc-html"></div>
              </div>

            </div>
          </div>

          <div class="post-col-right">

            <div class="post-inner">
              <div
                class="post-inner-html"
                v-if="post.html"
                v-html="post.html"
              >
              </div>
            </div>

            <div class="author-inner">
              <div class="author-inner-item" v-for="(item, index) in authors" v-bind:key="index">
                <div class="author-image"><img :src="item.profile_image"></div>
                <div class="author-info">
                  <span class="name">{{item.name}}</span>
                  <span class="info" v-if="item.bio"> / {{item.bio}}</span>
                </div>
                <div class="author-more"><a :href="item.url">More</a></div>
              </div>
            </div>

            <div class="comment-inner" v-if="showDisqus">
              <div id="disqus_thread"></div>
            </div>

          </div>

      </el-main>

      <el-footer class="footer" height="80px">© 2018 {{title}} All right Reserved.</el-footer>
    </el-container>
  </div>
</template>

<script>

import Tocbot from 'tocbot';
import Header from '../../components/Header.vue';
import Cover from '../../components/Cover.vue';

export default {
  name: 'Post',
  data() {
    return {
      post: {},
      authors: [],
      showDisqus: false,
      coverImage: '',
    };
  },
  components: {
    Header,
    Cover,
  },
  computed: {
    title() {
      return this.$store.state.site_title;
    },
    description() {
      return this.$store.state.site_desc;
    },
  },
  async mounted() {
    // 获取博客设置
    const config = await this.$api.setting();
    this.$store.commit('setSiteTitle', config.title);
    this.$store.commit('setSiteNav', config.navigation);
    this.$store.commit('setSiteDesc', config.description);
    this.coverImage = config.cover_image;

    // 获取文章内容
    const path = window.config.env === 'prod'
      ? window.location.pathname : window.config.test_post;

    const slug = path.split('/')[1];

    const data = await this.$api.postDetail({
      slug,
    });

    this.post = data;
    this.authors = data.authors;

    this.$nextTick(() => {
      // Gallery Images
      const kgGalleryImages = document.querySelectorAll('.kg-gallery-image img');
      kgGalleryImages.forEach((image) => {
        const container = image.closest('.kg-gallery-image');
        const width = image.attributes.width.value;
        const height = image.attributes.height.value;
        const ratio = width / height;
        container.style.flex = `${ratio} 1 0%]`;
      });

      // Toc Init
      Tocbot.init({
        tocSelector: '.post-toc-html',
        contentSelector: '.post-inner-html',
        headingSelector: 'h1, h2, h3',
        positionFixedSelector: '.post',
        positionFixedClass: 'is-position-fixed',
        fixedSidebarOffset: 300,
      });

      // Disqus
      if (window.config.disqus) {
        const s = document.createElement('script');
        s.src = `https://${window.config.disqus}.disqus.com/embed.js`;
        s.setAttribute('data-timestamp', +new Date());
        document.body.appendChild(s);
        this.showDisqus = true;
      }
    });
  },
};
</script>

<style lang="less" scoped>
#post {
  position: relative;

  // 介绍
  .desc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 120px;
    font-size: 2.2rem;
    font-weight: 300;
    text-align: center;
    color: #fff;
    user-select: none;
    z-index: 1;
  }

  // 文章列表
  .post {
    position: relative;
    padding-bottom: 30px;
    background: #f6f6f6;
    overflow: initial;
    z-index: 1;

    // 左边栏
    .post-col-left {
      width: 280px;
      position: absolute;
      top: 20px;
      left: calc((100% - 1200px) / 2);
    }
    @media (max-width: 1200px) {
      .post-col-left {
        position: absolute;
        top: 20px;
        left: 20px;
      }
    }

    // 右边栏
    .post-col-right {
      max-width: 900px;
      margin: 0 auto;
      padding-left: 300px;
    }

    // 左边栏部件样式
    .post-widget {
      margin-bottom: 20px;
      .post-toc {
        transition: top .3s;
        .post-toc-html {
          padding: 30px;
          background: #ffffff;
          border-radius: 5px;
        }
      }
    }

    // 文章内容页样式
    .post-inner {
      position: relative;
      min-height: 300px;
      margin-bottom: 20px;

      .post-inner-html {
        padding: 30px;
        background: #ffffff;
        border-radius: 5px;
      }

    }

    // 作者信息样式
    .author-inner {
      margin-bottom: 20px;
      padding: 30px;
      background: #ffffff;
      border-radius: 5px;
      .author-inner-item {
        display: flex;
        .author-image {
          flex: 0 0 50px;
          border-radius: 25px;
          overflow: hidden;
          font-size: 0;
        }
        .author-info {
          flex: 1;
          padding-left: 20px;
          line-height: 50px;
          font-size: 18px;
          font-weight: 300;
        }
        .author-more {
          justify-content: flex-end;
          padding-left: 10px;
          line-height: 50px;
          font-size: 18px;
          a {
            color: #6c757d;
            transition: all .3s;
          }
          a:hover {
            color: #000000;
          }
        }
      }
    }

    // 评论框调整
    .comment-inner {
      padding: 30px;
      background: #ffffff;
      border-radius: 5px;
    }

    // 动态边栏调整
    &.is-position-fixed {
      .post-col-left {
        position: fixed;
        top: 80px;
      }
    }

    // 响应式边栏调整
    @media (max-width: 768px) {
      .post-col-left {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
      }
      .post-col-right {
        padding-left: 0;
      }
      &.is-position-fixed {
        .post-col-left {
          position: relative;
          top: auto;
        }
      }
    }
  }

  // 底部
  .footer {
    line-height: 80px;
    font-size: .9rem;
    color: #6c757d;
    text-align: center;
  }
}
</style>
