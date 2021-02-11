import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/app/user/users', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/app/user/users/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/app/user/users', { user: userData })
          .then(response => {
            // console.log(response)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    updateUser(ctx, userData) {
      // console.log(userData.id)
      return new Promise((resolve, reject) => {
        axios
          .put(`/app/user/users/${userData.id}`, { userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

  },
}
