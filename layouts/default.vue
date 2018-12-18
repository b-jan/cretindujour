<template>
  <div
    :class="$device"
    class="root">
    <no-ssr v-if="$device.isMobileOrTablet">
      <transition name="backdrop-fade">
        <div 
          v-if="isDrawerOpen" 
          class="backdrop"/>
      </transition>
      <VoodooDrawer/>
    </no-ssr>
    <Header/>
    <section 
      :class="$device" 
      class="content">
      <nuxt/>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header/Header'
import VoodooDrawer from '~/components/Layout/VoodooDrawer'
import { mapGetters } from 'vuex'

export default {
  components: {
    Header,
    VoodooDrawer
  },
  computed: {
    ...mapGetters({
      isDrawerOpen: 'drawer/isDrawerOpen'
    })
  }
}
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;

  &.isDesktop {
    min-height: 100vh;
  }
}

.backdrop {
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  @include voodoo-transition(opacity 0.5s);
}
.backdrop-fade-enter,
.backdrop-fade-leave-to {
  opacity: 0;
}

.content {
  display: flex;
  flex-direction: row;
  flex: 1;

  &.isMobileOrTablet {
    padding-top: 104px;
  }

  &.isDesktop {
    padding-top: 88px;
  }
}
</style>
