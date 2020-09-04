<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPost :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
  import AdminPost from "../../../components/Admin/AdminPostForm";
  import axios from 'axios'

  export default {
    name: "index",
    layout: 'admin',
    components: {
      AdminPost
    },
    asyncData(context) {
      return axios
      .get('https://app-nuxt-b6b87.firebaseio.com/posts/'
        + context.params.postId + '.json')
      .then(result => {
        return {
          loadedPost: { ...result.data, id: context.params.postId}
        }
      })
    },
    methods: {
      onSubmitted(editedPost) {
        this.$store.dispatch('editPost', editedPost)
        .then(() => {
          this.$router.push('/admin')
        })
      }
    }
  }
</script>

<style scoped>

  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }

</style>
