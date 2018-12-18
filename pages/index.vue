<template>
  <section class="container">
    <div>Crétin du jour : {{ todayList.name }}</div>
    <div
      v-for="card in cards"
      :key="card.id"
    >
      <p>{{ card.name }}</p>
      <img
        :src="card.imageUrl"
        :alt="card.name"
        class="card__image"
      >
      <p>{{ card.desc }}</p>
      <button @click="() => upvote(card.id)">+</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
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

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  &__image {
    width: 100px;
    height: 100px;
  }
}
</style>
