<template>
  <div>
    <BurgerMenuIcon v-if="$device.isMobileOrTablet"/>
    <div
      :class="[$device, hasScrolled ? 'header--scrolled' : '']"
      class="header">
      <div
        :class="$device"
        class="header__container">
        <nuxt-link to="/" class="header__logo">
          DumbassOTD
        </nuxt-link>
        <div
          v-if="!$device.isMobileOrTablet"
          class="header__nav-menu">
          <div class="header__nav-title">
            <NavTitle
              title="Week"
              link="/week"/>
          </div>
          <div class="header__nav-title">
            <NavTitle
              title="Month"
              link="/month"/>
          </div>
          <div class="header__nav-title">
            <NavTitle
              title="Year"
              link="/year"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { scroll } from '~/components/mixins/scroll'
import NavTitle from './NavTitle'
import BurgerMenuIcon from './BurgerMenuIcon'

export default {
  name: 'Header',
  components: {
    NavTitle,
    BurgerMenuIcon
  },
  mixins: [scroll],
  computed: {
    ...mapGetters({
      isDrawerOpen: 'drawer/isDrawerOpen'
    })
  },
  methods: {
    ...mapMutations({
      toggleDrawer: 'drawer/toggleDrawer'
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  background-color: $white;
  z-index: 1;
  border: 1px solid transparent;
  transition: border-color 0.5s ease;

  &__logo {
    font-family: voodoo-title;
    color: $text-primary;
    font-size: $desktop-font-large;
  }

  &--scrolled.isDesktop {
    border-bottom: 1px solid $border-primary;
    transition: border-color 1s ease;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    flex: 1;
    flex-direction: row;
    max-width: $content-max-width;
    margin: auto;
    width: 100%;

    &.isDesktop {
      padding: 32px 70px;
    }

    &.isMobileOrTablet {
      padding: 24px 24px;
    }

    &.isMobileOrTablet {
      justify-content: center;
    }
  }

  &__nav-title {
    margin-right: 32px;
  }

  &__nav-menu {
    display: flex;
  }
}
</style>
