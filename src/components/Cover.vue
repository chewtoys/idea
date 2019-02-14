<template>
  <div id="components-cover">
    <div
      class="cover"
      :style="{
        minHeight: `${height}px`,
        background: `url(${image}) no-repeat`
      }"
    >
      <div
        class="cover-mask"
        :style="{
          background: `rgba(0,0,0,${mask})`
        }"
      ></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CoverComponent',
  data() {
    return {};
  },
  props: [
    'height',
    'mask',
    'image',
  ],
  computed: {},
  components: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#components-cover {

  // 封面
  .cover {
    position: relative;
    width: 100%;
    background-position: bottom !important;
    background-size: cover !important;

    .cover-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

}
</style>
