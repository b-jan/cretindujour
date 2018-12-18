<template>
  <div
    :class="$device"
    class="games__container">
    <div
      :class="$device"
      class="games__banner-title">
      <span
        :class="$device"
        class="banner-title__title">
        Crétin du jours, Bonjours ! Nous sommes le {{ todayList.name }}
      </span>
      <span
        :class="$device"
        class="banner-title__description"
      >
        description
      </span>
    </div>
    <Grid :app-list="cards" :upvote="upvote" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Grid from '~/components/Grid'

export default {
  name: 'Games',
  components: {
    Grid
  },
  computed: {
    todayList() { return this.$store.state.todayList },
    cards() { return this.$store.state.cards }
  },
  methods: {
    ...mapActions([
      'upvote'
    ])
  }
}
</script>

<style lang="scss" scoped>
.games {
  &__container {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: $content-max-width;

    &.isDesktop {
      padding: 40px 130px 0px 130px;
    }

    &.isMobileOrTablet {
      padding: 56px 24px;
      text-align: center;
    }
  }

  &__banner-title {
    display: flex;
    flex-direction: column;

    &.isDesktop {
      margin-bottom: 88px;
    }

    &.isMobileOrTablet {
      margin-bottom: 72px;
      padding: 0 24px;
    }

    .banner-title {
      &__title {
        max-width: 690px;
        font-family: voodoo-title;
        color: $text-primary;
        margin-bottom: 16px;

        &.isDesktop {
          font-size: $desktop-font-extra-large;
          line-height: $desktop-title-line-height;
        }

        &.isMobileOrTablet {
          font-size: $mobile-font-extra-large;
          line-height: $mobile-title-line-height;
        }
      }

      &__description {
        max-width: 412px;
        font-family: voodoo-text-light;
        color: $text-primary;
        font-size: $desktop-font-small;

        &.isDesktop {
          line-height: $desktop-text-line-height;
        }

        &.isMobileOrTablet {
          line-height: $mobile-text-line-height;
        }
      }
    }
  }
  .grid-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
