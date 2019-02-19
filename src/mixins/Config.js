export default {
  data() {
    return {
      config: {
        title: '',
        navigation: [],
        description: [],
        coverImage: '',
      },
    };
  },
  async mounted() {
    // 获取博客设置
    const config = await this.$api.setting();
    this.config.title = config.title;
    this.config.navigation = config.navigation;
    this.config.description = config.description;
    this.config.coverImage = config.cover_image;
  },
};
