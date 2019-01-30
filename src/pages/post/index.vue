<template>
  <div id="post">
    <el-container>
      <Header></Header>

      <div class="cover">
        <div class="cover-mask"></div>
      </div>
      <div class="desc" v-if="post.title">{{post.title}}</div>

      <el-main class="post">

        <div class="post-inner">

          <div class="post-inner-toc">
            <div class="post-inner-toc-html"></div>
          </div>
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

      </el-main>

      <div class="toc"></div>

      <el-footer class="footer" height="80px">© 2018 {{title}} All right Reserved.</el-footer>
    </el-container>
  </div>
</template>

<script>

import Tocbot from 'tocbot';
import Header from '../../components/Header.vue';

export default {
  name: 'Post',
  data() {
    return {
      post: {},
      authors: [],
      showDisqus: false,
    };
  },
  components: {
    Header,
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
        tocSelector: '.post-inner-toc-html',
        contentSelector: '.post-inner',
        headingSelector: 'h1, h2, h3',
        positionFixedSelector: '.post-inner',
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

  // 封面
  .cover {
    position: relative;
    width: 100%;
    min-height: 360px;
    background: url(../../assets/background.jpg) no-repeat;
    background-position: bottom;
    background-size: cover;

    .cover-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(#000000, 0.5);
    }
  }

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
    padding-bottom: 30px;
    background: #f6f6f6;
    overflow: initial;
    z-index: 1;
    .post-inner {
      position: relative;
      max-width: 1200px;
      min-height: 300px;
      margin: -100px auto 30px;


      .post-inner-toc {
        width: 100%;
        margin-bottom: 30px;
        transition: top .3s;
        .post-inner-toc-html {
          padding: 30px;
          background: #ffffff;
          border-radius: 5px;
        }
      }

      .post-inner-html {
        padding: 30px;
        background: #ffffff;
        border-radius: 5px;
      }

      @media (min-width: 768px) {

        .post-inner-toc {
          position: absolute;
          top: 0;
          left: 0;
          width: 270px;
          padding-right: 30px;
        }

        .post-inner-html {
          margin-left: 300px;
        }

        &.is-position-fixed {
          justify-content: flex-end;
          .post-inner-toc {
            position: fixed;
            top: 90px;
            left: calc((100% - 1200px) / 2);
          }
        }

      }
    }

    .author-inner {
      max-width: 1140px;
      margin: 0 auto 30px;
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
    .comment-inner {
      max-width: 1140px;
      margin: 0 auto;
      padding: 30px;
      background: #ffffff;
      border-radius: 5px;
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
