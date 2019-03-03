<template>
  <div id="tag">
    <el-container>
      <Header
        :title="config.title"
        :navigation="config.navigation" >
      </Header>
      <Cover
        :height="340"
        :mask=".5"
        :image="config.coverImage" >
      </Cover>

      <div class="desc">
        <h1>{{info.name}}</h1>
        <p v-if="info.count">共 {{info.count.posts}} 篇文章</p>
      </div>

      <el-main class="main">

        <div class="main-inner">

          <article
            v-for="(item, index) of list"
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
        <div class="pagination-inner">
          <el-pagination
            layout="prev, pager, next"
            :page-size="10"
            :page-count="pageCount"
            :current-page="currentPage"
            @current-change="pageChange">
          </el-pagination>
        </div>
      </div>

      <el-footer height="auto" style="padding: 0 0 60px 0;">
        <Footer
          :title="config.title"
          :navigation="config.navigation"
          :facebook="config.socialFacebook"
          :twitter="config.socialTwitter" >
        </Footer>
      </el-footer>

    </el-container>
  </div>
</template>

<script>

import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Cover from '../../components/Cover.vue';

import ConfigMixin from '../../mixins/Config';

export default {
  name: 'Tag',
  data() {
    return {
      slug: '',
      info: {},
      list: [],
      coverImage: '',
      currentPage: 1,
      pageCount: 1,
    };
  },
  components: {
    Header,
    Footer,
    Cover,
  },
  mixins: [
    ConfigMixin,
  ],
  async mounted() {
    // 获取 Slug
    const path = window.config.env === 'prod'
      ? window.location.pathname : window.config.test_author;

    this.slug = path.split('/')[2];

    // 获取作者信息
    const info = await this.$api.authorInfo({
      slug: this.slug,
    });

    // 获取标签列表
    const data = await this.$api.authorPostList({
      slug: this.slug,
      page: 1,
    });

    this.info = info[0];
    this.list = data;
    this.pageCount = data.meta.pagination.pages;
  },
  methods: {
    async pageChange(e) {
      const data = await this.$api.authorPostList({
        slug: this.slug,
        page: e,
      });
      this.list = data;
    },
  },
};
</script>

<style lang="less" scoped>
#tag {
  position: relative;

  // 介绍
  .desc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 100px;
    user-select: none;
    z-index: 1;
    color: #fff;
    h1 {
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }
    p {
      font-size: 1.1rem;
      font-weight: 300;
      text-align: center;
      margin: 0;
    }

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
      padding: 50px 0;
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
      display: flex;
      justify-content: center;
      .el-pagination {
        border-radius: 5px;
        overflow: hidden;
        padding: 0;
        color: #999;
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
