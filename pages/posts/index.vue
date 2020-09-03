<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
  import PostList from '../../components/Post/PostList'

  export default {
    components: {
      PostList
    },

    // runs on the client
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    }
  }
</script>

<style scoped>


</style>
