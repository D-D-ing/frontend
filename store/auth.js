import api from '~/api'
import { setAuthToken, resetAuthToken } from '~/utils/auth'
import cookies from 'js-cookie'

export const state = () => ({
  user: null,
  token: null
})

export const mutations = {
  set_user(store, data) {
    store.user = data
  },
  reset_user(store) {
    store.user = null
  },
  set_token(store, data) {
    store.token = data
  },
  reset_token(store, data) {
    store.token = null
  }
}

export const actions = {
  fetch({ commit }) {
    return api.auth
      .my_user()
      .then(response => {
        commit('set_user', response.data.user)
        return response
      })
      .catch(error => {
        commit('reset_user')
        return error
      })
  },
  gqlLogin({ commit }, token) {
    commit('set_token', token)
    this.$apolloHelpers.onLogin(token)
    //cookies.set('bearer-token', token)
  },
  isLoggedIn({ commit }) {
    if (cookies.get('bearer-token')) {
      commit('set_token', cookies.get('bearer-token'))
    }
  },
  login({ commit }, data) {
    return api.auth.login(data).then(response => {
      setAuthToken(response.data.token)
      commit('set_user', response.data.user)
      this.$apolloHelpers.onLogin(response.data.token)
      cookies.set('bearer-token', response.data.token, { expires: 7 })
      return response
    })
  },
  reset({ commit }) {
    commit('reset_user')
    resetAuthToken()
    this.$apolloHelpers.onLogout()
    cookies.remove('bearer-token')
    return Promise.resolve()
  }
}
