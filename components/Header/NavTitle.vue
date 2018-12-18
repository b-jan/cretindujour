<template>
  <nuxt-link 
    v-if="!isAbsoluteLink"
    :to="link">
    <span class="nav-title">{{ title }}</span>
  </nuxt-link>
  <a 
    v-else 
    :href="link">
    <span class="nav-title">{{ title }}</span>
  </a>
</template>

<script>
export default {
  name: 'NavTitle',
  props: {
    title: {
      default: '',
      type: String
    },
    link: {
      default: '/',
      type: String
    },
    isAbsoluteLink: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
/* This class is added by vue-router, and configured in nuxt-config.js */
.active-link {
  & .nav-title {
    color: $text-hover;
  }
}

.nav-title {
  font-family: voodoo-text-regular;
  color: $text-primary;
  font-size: $desktop-font-small;
  cursor: pointer;

  &:hover {
    color: $text-hover;
  }
}
</style>
