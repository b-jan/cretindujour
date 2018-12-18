const mutations = {
  setTodayList(state, list) {
    state.todayList = list
  },
  setCards(state, cards) {
    state.cards = cards
  },
  upvote(state, id) {
    if (state.cards) {
      state.cards.map(card => {
        if (card.id === id) {
          card.desc += 1
        }
        return card
      })
    }
  }
}

export default mutations
