import cookies from 'js-cookie'

export const state = () => ({
  token: null
})

export const mutations = {
  set_token(store, data) {
    store.token = data
  },
  reset_token(store, data) {
    store.token = null
  }
}

export const actions = {
  login({ commit }, token) {
    commit('set_token', token)
    this.$apolloHelpers.onLogin(token)
  },
  isLoggedIn({ commit }) {
    if (cookies.get('bearer-token')) {
      commit('set_token', cookies.get('bearer-token'))
    }
  },
  reset({ commit }) {
    commit('reset_token')
    this.$apolloHelpers.onLogout()
    cookies.remove('bearer-token')
    return Promise.resolve()
  }
}
