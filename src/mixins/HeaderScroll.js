export default {
  data() {
    return {
      HeaderHeight: '80px',
      HeaderFontColor: '#FFFFFF',
      HeaderScrollColor: 'transparent',
      HeaderShadow: 'none',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.throttle(this.scroll));
  },
  methods: {
    scroll() {
      const toTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (toTop > 300) {
        this.HeaderHeight = '60px';
        this.HeaderFontColor = '#000000';
        this.HeaderScrollColor = '#FFFFFF';
        this.HeaderShadow = '0 0 2px 0 rgba(32,30,36,0.18)';
      } else {
        this.HeaderHeight = '80px';
        this.HeaderFontColor = '#FFFFFF';
        this.HeaderScrollColor = 'transparent';
        this.HeaderShadow = 'none';
      }
    },
    // 函数节流
    throttle(fn) {
      let lastTime = null;
      return () => {
        const nowTime = (new Date()).getTime();
        if (nowTime - lastTime > 50 || !lastTime) {
          fn();
          lastTime = nowTime;
        }
      };
    },
  },
};
