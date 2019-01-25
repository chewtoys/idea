<template>
  <div id="index">
    <el-container>
      <Header></Header>

      <div class="cover">
        <div class="cover-mask"></div>
      </div>
      <div class="desc">{{description}}</div>

      <el-main class="main">

        <div class="main-inner">

          <article
            v-for="(item, index) of posts"
            v-bind:key="index"
            class="posts hairline"
          >

            <el-row :gutter="30">
              <el-col :xs="24" :sm="8" :md="8" class="post-feature" v-if="item.feature_image">
                <a :href="item.url">
                  <img :src="item.feature_image" :alt="item.title" />
                </a>
              </el-col>
              <el-col :xs="24" :sm="16" :md="16" class="post-content">
                <span class="post-content-tag">
                  <a :href="`/tag/${item.primary_tag.slug}`">{{item.primary_tag.name}}</a>
                </span>
                <h1 class="post-content-title">
                  <a :href="`/${item.slug}`">{{item.title}}</a>
                </h1>
                <p class="post-content-excerpt" v-if="item.custom_excerpt">
                  {{item.custom_excerpt}}
                </p>
                <p class="post-content-excerpt" v-else>
                  {{item.excerpt}}
                </p>
              </el-col>
            </el-row>

          </article>

        </div>

      </el-main>

      <div class="pagination">
        <div class="pagination-inner"></div>
      </div>

      <el-footer class="footer" height="80px">© 2018 {{title}} All right Reserved.</el-footer>
    </el-container>
  </div>
</template>

<script>

import Header from '../../components/Header.vue';

export default {
  name: 'Index',
  data() {
    return {
      posts: [],
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

    // 获取文章列表
    const data = await this.$api.posts();
    this.posts = data;
  },
};
</script>

<style lang="less" scoped>
#index {
  position: relative;

  // 封面
  .cover {
    position: relative;
    width: 100%;
    min-height: 650px;
    background: url(../../assets/background.jpg) no-repeat;
    background-position: bottom;
    background-size: cover;

    .cover-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(#000000, 0.16);
    }
  }

  // 介绍
  .desc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 260px;
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
    color: #fff;
    user-select: none;
    z-index: 1;
  }

  // 文章列表
  .main {
    padding-bottom: 30px;
    background: #f6f6f6;
    overflow: initial;
    z-index: 1;
    .main-inner {
      max-width: 1140px;
      min-height: 300px;
      margin: -100px auto 0;
      padding: 20px 0;
      background: #ffffff;
      border-radius: 5px;

      .posts {
        position: relative;
        width: 86%;
        margin: 0 auto;
        padding: 30px 0;

        &:last-child::after {
          border: none;
        }

        .post-feature {
          position: relative;
          a {
            position: relative;
            display: block;
            border-radius: 5px;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              height: auto;
              transition: all .3s ease-in-out;
            }
          }
          a::before {
            background-color: rgba(#000000, 0.16);
            bottom: 0;
            content: "";
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 1;
            transition: all .8s ease 0s;
          }
          a:hover {
            img {
              transform: scale(1.05);
            }
          }
          a:hover::before {
            opacity: 0;
          }
        }

        .post-content {
          .post-content-tag {
            display: block;
            font-size: .9rem;
            a {
              color: #999;
            }
          }
          @media (max-width: 768px) {
            .post-content-tag {
              padding-top: 10px;
            }
          }
          .post-content-title {
            line-height: 40px;
            margin: 0;
            padding-bottom: 10px;
            font-size: 1.8rem;
            font-weight: 400;
          }
          .post-content-excerpt {
            line-height: 1.4;
            margin: 0;
            color: #6c757d;
          }
        }
      }
    }
  }

  // 分页
  .pagination {
    padding: 0 20px 60px 20px;
    background: #f6f6f6;
    overflow: initial;
    .pagination-inner {
      max-width: 1140px;
      margin: 0 auto;
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