export const scroll = {
  data() {
    return {
      hasScrolled: false
    }
  },
  created() {
    if (process.client && !this.hasScrolled) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.hasScrolled = window.scrollY !== 0
    }
  }
}
