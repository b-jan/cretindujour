<template>
  <div class="publishing-banner">
    <div class="publishing-banner__content">
      <span class="content__title">{{ publishingContent.title }}</span>
      <span
        :class="$device"
        class="content__description">{{ publishingContent.description }}</span>
      <a href="https://publishing.voodoo.io">
        <VoodooButton :button-text="publishingContent.buttonText" />
      </a>
    </div>
    <div
      v-if="!$device.isMobile"
      class="publishing-banner__overlay"/>
    <div
      v-if="!$device.isMobile"
      :style="{ backgroundImage: `url(${publishingContent.banner.fields.file.url})` }"
      class="publishing-banner__image" />
  </div>
</template>

<script>
import VoodooButton from '~/components/VoodooButton'

export default {
  name: 'Banner',
  components: {
    VoodooButton
  },
  props: {
    publishingContent: {
      default: function() {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.publishing-banner {
  &__content {
    height: 400px;
    padding: 0 130px;
    margin: 0 auto;
    max-width: $content-max-width;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    &__title {
      font-family: voodoo-title;
      color: $text-secondary;
      font-size: $desktop-font-extra-large;
      line-height: $desktop-title-line-height;
      max-width: 690px;
      margin-bottom: 16px;
    }

    &__description {
      font-family: voodoo-text-light;
      color: $text-secondary;
      font-size: $desktop-font-small;
      max-width: 412px;
      margin-bottom: 24px;

      &.isDesktop {
        line-height: $desktop-text-line-height;
      }

      &.isMobileOrTablet {
        line-height: $mobile-text-line-height;
      }
    }
  }

  &__image {
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    z-index: -2;
    background-size: cover;
  }

  &__overlay {
    z-index: -1;
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
