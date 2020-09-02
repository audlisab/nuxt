<template>
  <div>
    <section class="post-list">
      <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://uiaa-web.azureedge.net/wp-content/uploads/2017/11/RTM19-banner-web.jpg"
        title="Hello There!"
        preview-text="This is my first post"/>
      <PostPreview
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://uiaa-web.azureedge.net/wp-content/uploads/2017/11/RTM19-banner-web.jpg"
        title="Hello There!"
        preview-text="This is my second post"/>
      <PostPreview
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://uiaa-web.azureedge.net/wp-content/uploads/2017/11/RTM19-banner-web.jpg"
        title="Hello There!"
        preview-text="This is my third post"/>
    </section>
  </div>
</template>

<script>
  export default {
    name: "PostList",
    props: {
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
