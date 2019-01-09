<template>
  <div id="components-header">
    <el-header height="80px">
      <el-row>
        <el-col :span="6">
          <div class="logo"><a href="/">{{meta_title}}</a></div>
        </el-col>
        <el-col :span="12" :offset="6">
          <ul class="nav">
            <li><a href="/">首页</a></li>
            <li><a href="/tag">标签</a></li>
            <li><a href="/author">作者</a></li>
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
    return {
      meta_title: '',
    };
  },
  components: {},
  async mounted() {
    // 获取 Meta
    this.meta_title = document.querySelector('title').text;
  },
};
</script>

<style lang="less" scoped>
#components-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

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
