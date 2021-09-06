export const state = () => ({
  count: 0
})

export const mutations = {
  add (state) {
    state.count += 1
  },
  subtract (state) {
    state.count -= 1
  },
  multiplication (state) {
    state.count = state.count * 2
  },
  division (state) {
    state.count = state.count / 2
  },
  clear (state) {
    state.count = 0
  }
}
