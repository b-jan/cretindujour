const actions = {
  async nuxtServerInit ({ commit }, { app }) {
    const lists = await app.$axios.$get('https://api.trello.com/1/boards/5bfc80f9b9446e65da7b3518/lists?key=502ec3543cb5e557eb49a41cf286f97a&token=d0c4cab0e270cc6db457a404543af177d69b89526f9a209c091a181bc66546f3')
    commit('setTodayList', lists[0])
    const cards = await app.$axios.$get(`https://api.trello.com/1/lists/${lists[0].id}/cards?key=502ec3543cb5e557eb49a41cf286f97a&token=d0c4cab0e270cc6db457a404543af177d69b89526f9a209c091a181bc66546f3`)
    
    const formattedCards = await Promise.all(cards.map(async card => {
      const attachments = await app.$axios.$get(`https://api.trello.com/1/cards/${card.id}/attachments?key=502ec3543cb5e557eb49a41cf286f97a&token=d0c4cab0e270cc6db457a404543af177d69b89526f9a209c091a181bc66546f3`)
      return {
        id: card.id,
        name: card.name,
        desc: parseInt(card.desc),
        imageUrl: attachments[0].url
      }
    }))
    commit('setCards', formattedCards)    
  },
  upvote ({ commit, state }, id) {
    if (state.cards) {
      state.cards.map(async card => {
        if (card.id === id) {
          const updatedDesc = card.desc + 1
          const updatedCard = await this.$axios.$put(`https://api.trello.com/1/cards/${card.id}/desc?value=${updatedDesc}&key=502ec3543cb5e557eb49a41cf286f97a&token=d0c4cab0e270cc6db457a404543af177d69b89526f9a209c091a181bc66546f3&`)
          commit('upvote', updatedCard.id)
        }
        return card
      })
    }
  }
}

export default actions
