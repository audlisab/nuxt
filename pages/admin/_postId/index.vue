<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPost :post="loadedPost"/>
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
