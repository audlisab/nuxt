
<template>
  <div class="posts-page">
    <section class="post">
      <h1> Title of the post </h1>
      <div class="post-details">
        <div> Last updated on XXX</div>
        <div> Created by NAME </div>
        <div>
          <p> Content of the post </p>
        </div>
      </div>
    </section>
    <section class="post-feedback">
      <p> Let me know what you think about the post, send an email to
        <a href="mailto:feedback@my-awesome-domail.com">  feedback@my-awesome-domail.com</a>
      </p>
    </section>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
