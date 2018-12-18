<template>
  <div
    :class="$device"
    class="grid-wrapper">
    <figure
      v-scroll-reveal="{delay: index * 150}"
      v-for="(app, index) in appList"
      :key="index"
      class="grid__box"
    >
      <div class="grid__game-image">
        <img
          :src="app.imageUrl"
          :alt="app.name"
        >
      </div>
      <figcaption class="grid__overlay">
        <span
          class="overlay__title"
        >
          {{ app.name }}
        </span>
        <span
          class="overlay__description"
        >
          {{ app.desc }}
        </span>
        <div 
          class="overlay__hr"/>
        <div class="overlay__store-buttons">
          <button
            class="store-buttons__button"
            @click="() => upvote(app.id)"
          >
            +
          </button>
          <button
            class="store-buttons__button"
          >
            -
          </button>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    appList: {
      default: function() {
        return []
      },
      type: Array
    },
    upvote: {
      default: () => {return},
      type: Function
    },
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  &__icon {
    border-radius: 6px;
    opacity: 0;
    @include voodoo-transition(opacity 0.35s);
    height: 30px;
    width: 30px;
    margin-bottom: 10px;

    &.isMobileOrTablet {
      margin-bottom: 32px;
      height: 45px;
      width: 45px;
    }
  }

  &__title {
    max-width: 220px;
    font-family: voodoo-title;
    color: $text-secondary;
    opacity: 0;
    @include voodoo-transform(scale3d(0.8, 0.8, 1));
    @include voodoo-transition(opacity 0.35s, transform 0.35s);
    font-size: $desktop-font-medium;
    line-height: $desktop-box-game-title-line-height;

    &.isMobileOrTablet {
      line-height: $mobile-text-line-height;
      font-size: $mobile-font-extra-large;
    }
  }

  &__description {
    max-width: 200px;
    text-align: center;
    font-family: voodoo-text-regular;
    color: $text-secondary;
    opacity: 0;
    @include voodoo-transform(scale3d(0.8, 0.8, 1));
    @include voodoo-transition(opacity 0.35s, transform 0.35s);
    margin-bottom: 25px;
    line-height: $desktop-box-game-description-line-height;
    font-size: $desktop-font-small;

    &.isMobileOrTablet {
      margin-bottom: 24px;
      line-height: $mobile-text-line-height;
      font-size: $mobile-font-medium;
    }
  }

  &__hr {
    height: 1px;
    width: 0px;
    margin-bottom: 44px;
    background-color: $white;
    @include voodoo-transition(width 0.35s);
    transition-delay: 150ms;
  }

  &__store-buttons {
    opacity: 0;
    display: flex;
    @include voodoo-transform(translate3d(0, 50px, 0px));
    @include voodoo-transition(opacity 0.35s, transform 0.35s);
    transition-delay: 150ms;

    & a:nth-child(1) {
      margin-right: 16px;
    }

    .store-buttons {
      &__button {
        width: 84px;
        height: 28px;

        &.isMobileOrTablet {
          width: 88px;
          height: 28px;
        }
      }
    }
  }
}

.grid {
  &__game-image {
    display: block;
    max-width: 100%;
    opacity: 1;
    @include voodoo-transition(opacity 0.35s, transform 0.35s);
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__box {
    overflow: hidden;
    background: $game-overlay;
    cursor: pointer;
    position: relative;

    &:hover {
      background: $game-overlay;

      & .grid__game-image {
        opacity: 0.4;
        @include voodoo-transform(scale3d(1.3, 1.3, 1));
      }

      & .overlay__icon {
        opacity: 1;
      }

      & .overlay__title {
        @include voodoo-transform(scale3d(1, 1, 1));
        opacity: 1;
      }

      & .overlay__description {
        @include voodoo-transform(scale3d(1, 1, 1));
        opacity: 1;
      }

      & .overlay__hr {
        width: 60px;
      }

      & .overlay__store-buttons {
        opacity: 1;
        @include voodoo-transform(translate3d(0, 0, 0));
      }
    }
  }
}

.grid-wrapper {
  margin-bottom: 24px;
  width: 100%;
  display: grid;
  grid-gap: 24px;
  justify-content: center;

  &.isDesktop {
    visibility: hidden;
    grid-template-columns: repeat(4, 237px);
    grid-template-rows: repeat(3, 237px);
  }

  &.isMobileOrTablet {
    grid-template-columns: repeat(1, 100%);
  }
}
</style>
