<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPost :post="loadedPost"/>
    </section>
  </div>
</template>

<script>

  import AdminPost from "../../../components/Admin/AdminPostForm";
  export default {
    name: "index",
    components: {AdminPost},
    data() {
      return {
        loadedPost: {
          author: "Liza",
          title: "Title",
          content: "My awesome content",
          thumbnail: 'https://www.wiecznatulaczka.pl/wp-content/uploads/2017/09/Sea-To-Summit-ikona-2.jpg'
        }
      }
    }
  }

</script>

<style scoped>

</style>
