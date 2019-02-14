<template>
  <div id="components-header">
    <el-header
      :height="HeaderHeight"
      :style="{
        lineHeight: HeaderHeight,
        background: HeaderScrollColor,
        boxShadow: HeaderShadow,
      }"
    >
      <el-row>
        <el-col :span="6">
          <div class="logo"><a href="/" :style="{color: HeaderFontColor}">{{title}}</a></div>
        </el-col>
        <el-col :span="12" :offset="6">
          <ul class="nav">
            <li v-for="(item, index) in navigation" v-bind:key="index">
              <a :href="item.url" :style="{color: HeaderFontColor}">{{item.label}}</a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>

import HeaderScrollMixin from '../mixins/HeaderScroll';

export default {
  name: 'HeaderComponent',
  data() {
    return {};
  },
  mixins: [
    HeaderScrollMixin,
  ],
  computed: {
    title() {
      return this.$store.state.site_title;
    },
    navigation() {
      return this.$store.state.site_nav;
    },
  },
  components: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#components-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;

  a {
    font-size: 1.1rem;
    text-decoration: none;
    transition: all .3s;
    &:hover {
      color: #000000 !important;
    }
  }

  .logo {}

  .nav {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    li {
      flex: 0 0 70px;
      list-style: none;
    }
  }
}
</style>
