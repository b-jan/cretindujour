import { trelloApiCall } from '~/plugins/trello.js'

// Default state
export const state = () => ({
  list: '',
  cards: []
})

// Getters
export const getters = {
  list: state => state.list,
  cards: state => state.cards
}

// Mutations
export const mutations = {
  setTodayList(state, list) {
    state.todayList = list
  },
  setCards(state, cards) {
    state.cards = cards
  },
  upvote(state, cardId) {
    if (state.cards) {
      state.cards.map(card => {
        if (card.id === cardId) {
          card.desc += 1
        }
        return card
      })
    }
  }
}

// Actions
export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const boardId = '5bfc80f9b9446e65da7b3518'
    const lists = await app.$axios.$get(
      trelloApiCall(`boards/${boardId}/lists?`)
    )
    commit('setTodayList', lists[0])

    const cards = await app.$axios.$get(
      trelloApiCall(`lists/${lists[0].id}/cards?`)
    )

    const formattedCards = await Promise.all(
      cards.map(async card => {
        const attachments = await app.$axios.$get(
          trelloApiCall(`cards/${card.id}/attachments?`)
        )
        return {
          id: card.id,
          name: card.name,
          desc: parseInt(card.desc),
          imageUrl: attachments[0].url
        }
      })
    )
    commit('setCards', formattedCards)
  },
  upvote({ commit, state }, id) {
    if (state.cards) {
      state.cards.map(async card => {
        if (card.id === id) {
          const updatedDesc = card.desc + 1
          const updatedCard = await this.$axios.$put(
            trelloApiCall(`cards/${card.id}/desc?value=${updatedDesc}&`)
          )
          commit('upvote', updatedCard.id)
        }
        return card
      })
    }
  }
}
