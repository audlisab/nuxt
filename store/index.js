import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({

    state: {
      loadedPosts: [],
      token: null
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },

      addPost(state, post) {
        state.loadedPosts.push(post)
      },

      editPost(state, editedPost) {
        const postIndex = state.loadedPosts
          .findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },

      setToken(state, token) {
        state.token = token
      }
    },

    actions: {
      nuxtServerInit(vuexContext, payloadContext) {
        return axios.get('https://app-nuxt-b6b87.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key})
            }
            vuexContext.commit('setPosts', postsArray)
          })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return axios.post('https://app-nuxt-b6b87.firebaseio.com/posts.json', createdPost)
          .then( result => {
            vuexContext.commit('addPost', { ...createdPost, id: result.data.name } )
          })
      },

      editPost(vuexContext, post) {
        return axios.put(
          'https://app-nuxt-b6b87.firebaseio.com/posts/' +
          post.id + ".json?auth=" + vuexContext.state.token,
          post)
          .then(res => {
            vuexContext.commit('editPost', post)
          })
      },

      authenticateUser(vuexContent, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts' +
          ':signInWithPassword?key='
          + process.env.firebaseKeyAPI

        if (!this.isLogin) {
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts' +
            ':signUp?key=' +
            process.env.firebaseKeyAPI
        }

        return this.$axios.$post(
          authUrl,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        ).then(result => {
          vuexContent.commit('setToken', result.idToken)
        })
          .catch(e => console.log(e)
          )
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
