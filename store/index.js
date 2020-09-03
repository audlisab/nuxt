import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit(vuexContext, payloadContext) {
        return axios.get('https://gpstracker-d7f18.firebaseio.com/posts.json')
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
        return axios.post('https://gpstracker-d7f18.firebaseio.com/posts.json', createdPost)
          .then( result => {
            vuexContext.commit('addPost', { ...createdPost, id: result.data.name } )
          })
      },

      editPost(vuexContext, post) {
        return axios.put(
          'https://gpstracker-d7f18.firebaseio.com/posts/' +
          post.id + ".json", post)
          .then(res => {
            vuexContext.commit('editPost', post)
          })
      }
    },
    getters: {
      // each getter receives a state object automatically
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

// will be injected into all our components
export default createStore
