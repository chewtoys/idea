<template>
  <div id="post">
    <el-container>
      <Header></Header>

      <div class="cover">
        <div class="cover-mask"></div>
      </div>
      <div class="desc" v-if="post.title">{{post.title}}</div>

      <el-main class="post">

        <div class="post-inner"
          v-if="post.html"
          v-html="post.html"
        >
        </div>

        <div class="comment-inner">
          <div id="disqus_thread"></div>
        </div>

      </el-main>


      <el-footer class="footer" height="80px">© 2018 {{title}} All right Reserved.</el-footer>
    </el-container>
  </div>
</template>

<script>

import Header from '../../components/Header.vue';

export default {
  name: 'Post',
  data() {
    return {
      post: {},
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
    const slug = this.$config.env === 'prod'
      ? window.location.pathname.substring(1) : this.$config.test_post;

    const data = await this.$api.postDetail({
      slug,
    });
    this.post = data;
    console.log(data);

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
      max-width: 1140px;
      min-height: 300px;
      margin: -100px auto 30px;
      padding: 30px;
      background: #ffffff;
      border-radius: 5px;
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
