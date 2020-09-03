<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPost @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>

  import AdminPost from "../../../components/Admin/AdminPostForm";

  export default {
    name: "index",
    layout: 'admin',
    components: {
      AdminPost
    },
    methods: {
      onSubmitted(postData) {
        this.$store.dispatch('addPost', postData)
        .then(() => {
          this.$router.push('/admin')
        })
      }
    }
  }

</script>

<style scoped>

</style>
