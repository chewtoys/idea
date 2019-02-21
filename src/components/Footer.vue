<template>
  <div id="components-footer">
    <el-row :gutter="30">

      <el-col
        class="footer-item footer-item__title"
        :xs="24" :sm="6" :md="6"
      >{{title}}</el-col>

      <el-col
        class="footer-item footer-item__nav"
        :xs="24" :sm="6" :md="6"
      >
        <div class="footer-item-title">Navigation</div>
        <ul>
          <li v-for="(item, index) in navigation" v-bind:key="index">
            <a :href="item.url">{{item.label}}</a>
          </li>
        </ul>
      </el-col>

      <el-col
        class="footer-item"
        :xs="24" :sm="6" :md="6"
      >
        <div class="footer-item-title">Social</div>
        <div class="footer-item-links">
          <p><a href="/rss/" target="_blank">RSS</a></p>
          <p v-if="facebook"><a :href="`https://www.facebook.com/${facebook}`" target="_blank">Facebook</a></p>
          <p v-if="twitter"><a :href="`https://twitter.com/${twitter}`" target="_blank">Twitter</a></p>
        </div>
      </el-col>

      <el-col
        class="footer-item"
        :xs="24" :sm="6" :md="6"
      >
        <div class="footer-item-title">About</div>
        <div class="footer-item-detail">
          <p>Copyright © 2019 {{title}}</p>
          <p>Theme by <a href="https://linhong.me/ghost-idea" target="_blank">idea</a></p>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: 'FooterComponent',
  data() {
    return {};
  },
  mixins: [],
  props: ['title', 'navigation', 'facebook', 'twitter'],
  components: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#components-footer {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 30px;

  .footer-item {
    .footer-item-title {
      padding: 50px 0 20px 0;
      font-size: 24px;
      font-weight: 500;
      color: #000000;
    }
    .footer-item-detail {
      p {
        margin: 0;
        line-height: 1.6;
        font-size: 14px;
        color: #6c757d;
        a {
          color: #000000;
          transition: all .3s;
        }
        a:hover {
          color: #6c757d;
        }
      }
    }
    .footer-item-links {
      p {
        margin: 0;
        line-height: 1.6;
        font-size: 14px;
        color: #6c757d;
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

  .footer-item__title {
    padding: 80px 0 0 0;
    font-size: 28px;
    font-weight: 500;
    color: #000000;
  }
  .footer-item__nav {
    ul {
      margin: 0;
      padding: 0;
      li {
        line-height: 1.6;
        font-size: 14px;
        list-style: none;
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
}
</style>
