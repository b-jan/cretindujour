// Default state
export const state = () => ({
  isDrawerOpen: false
})

// Getters
export const getters = {
  isDrawerOpen: state => state.isDrawerOpen
}

// Mutations
export const mutations = {
  toggleDrawer(state) {
    state.isDrawerOpen = !state.isDrawerOpen
  },
  closeDrawer(state) {
    state.isDrawerOpen = false
  }
}
