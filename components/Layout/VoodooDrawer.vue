<template>
  <drawer
    :cross-icon="false"
    :burger-icon="false"
    :is-open="isDrawerOpen"
    no-overlay
    width="280"
    @closeMenu="closeDrawer">
    <div class="drawer__container">
      <div 
        :class="{'drawer-open': isDrawerOpen}" 
        class="drawer__logo">
        <nuxt-link to="/">
          <img
            src="~/assets/images/logo.png"
            width="96"
            height="24">
        </nuxt-link>
      </div>
      <div class="drawer__nav-container">
        <DrawerLink
          title="Games"
          link="/games"
        />
        <DrawerLink
          title="Publishing"
          link="/publishing"
        />
        <DrawerLink
          title="Jobs"
          link="https://jobs.lever.co/voodoo"
          is-absolute-link
        />
      </div>
    </div>
  </drawer>
</template>

<script>
import DrawerLink from './DrawerLink'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    DrawerLink
  },
  computed: {
    ...mapGetters({
      isDrawerOpen: 'drawer/isDrawerOpen'
    })
  },
  methods: {
    ...mapMutations({
      closeDrawer: 'drawer/closeDrawer'
    })
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  &__logo {
    display: flex;
    margin-left: 92px;
    margin-bottom: 24px;
    @include voodoo-transition(opacity 0.25s ease-in-out);
    opacity: 0;
    &.drawer-open {
      opacity: 1;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
  }
  &__nav-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
