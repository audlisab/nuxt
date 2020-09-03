<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPost />
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
    }

  }

</script>

<style scoped>

</style>
