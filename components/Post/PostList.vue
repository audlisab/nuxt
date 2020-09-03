<template>
  <div>
    <section class="post-list">
      <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :content="post.content"
      :previewPost="post.previewText">
      </PostPreview>
    </section>
  </div>
</template>

<script>
  import PostPreview from "./PostPreview";
  export default {
    name: "PostList",
    components: {PostPreview},
    props: {
      posts: {
        type: Array,
        required: true
      },
      isAdmin: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
