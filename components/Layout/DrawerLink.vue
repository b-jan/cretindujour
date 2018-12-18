<template>
  <a
    v-if="isAbsoluteLink"
    :href="link"
    class="drawer-link__container"
  >
    <span class="drawer-link__text">{{ title }}</span>
  </a>
  <nuxt-link
    v-else
    :to="link"
    class="drawer-link__container"
  >
    <span class="drawer-link__text">{{ title }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'DrawerLink',
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
.drawer-link {
  &__container {
    padding: 20px 24px;
    &:active {
      background-color: $nav-link-active;
    }
    /* This class is added by vue-router, and configured in nuxt-config.js */
    &.active-link {
      background-color: $nav-link-active;
    }
  }
  &__text {
    font-family: voodoo-text-regular;
    color: $text-primary;
    font-size: $desktop-font-small;
  }
}
</style>
