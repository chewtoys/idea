<template>
  <div id="components-header">
    <el-header height="80px">
      <el-row>
        <el-col :span="6">
          <div class="logo"><a href="/">{{title}}</a></div>
        </el-col>
        <el-col :span="12" :offset="6">
          <ul class="nav">
            <li v-for="(item, index) in navigation" v-bind:key="index">
              <a :href="item.url">{{item.label}}</a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {};
  },
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
  z-index: 1;

  a {
    font-size: 1.1rem;
    color: #fff;
    text-decoration: none;
    transition: all .5s;
    &:hover {
      font-size: 1.15rem;
      color: #000;
    }
  }

  .logo {
    line-height: 80px;
  }

  .nav {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    li {
      flex: 0 0 70px;
      line-height: 80px;
      text-align: center;
      list-style: none;
    }
  }
}
</style>
