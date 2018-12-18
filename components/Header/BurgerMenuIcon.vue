<template>
  <div 
    class="burger-menu-icon__container" 
    @click="toggleDrawer">
    <span 
      :class="{ 'drawer-open': isDrawerOpen }"
    />
    <span
      :class="{ 'drawer-open': isDrawerOpen }"
    />
    <span
      :class="{ 'drawer-open': isDrawerOpen }"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'BurgerMenuIcon',
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
.burger-menu-icon {
  &__container {
    cursor: pointer;
    display: inline-block;
    height: 17px;
    width: 22px;
    @include voodoo-transform(rotate(0deg));
    @include voodoo-transition(transform 0.5s ease-in-out);
    z-index: 2;
    position: fixed;
    top: 29px;
    left: 24px;

    & span {
      @include voodoo-transition(transform 0.25s ease-in-out);
      transform-origin: left center;
      position: absolute;
      background-color: black;
      border-radius: 2px;
      width: 19px;
      height: 1px;
    }

    & span:nth-child(1) {
      top: 0px;

      &.drawer-open {
        @include voodoo-transform(rotate(45deg));
      }
    }

    & span:nth-child(2) {
      top: 8px;

      &.drawer-open {
        opacity: 0;
      }
    }

    & span:nth-child(3) {
      top: 16px;

      &.drawer-open {
        top: 14px;
        @include voodoo-transform(rotate(-45deg));
      }
    }
  }
}
</style>
