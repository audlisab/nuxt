<template>
  <div class="posts-page">
    <section class="post">
      <h1> {{loadedPost.title}} </h1>
      <div class="post-details">
        <div> Last updated on {{ loadedPost.updatedDate }}</div>
        <div> Created by {{ loadedPost.author  }}</div>
        <div>
          <p> {{ loadedPost.content }} </p>
        </div>
      </div>
    </section>
    <section class="post-feedback">
      <p> Let me know what you think about the post, send an email to
        <a href="mailto:feedback@my-awesome-domail.com"> feedback@my-awesome-domail.com</a>
      </p>
    </section>
  </div>
</template>

<script>
  export default {
    name: "index",

    asyncData(context, callback) {
      setTimeout(() => {
        callback(
          null,
          {
            loadedPost:
              {
                id: '1',
                author: 'Me',

                // context.params.id is equivalent to this.$route.params.id
                content: 'Content 1. Id: ' + context.params.id,
                updatedDate: new Date(),
                title: 'Title 1',
                previewText: 'Preview Text',
                thumbnail: 'https://uiaa-web.azureedge.net/wp-content/uploads/2017/11/RTM19-banner-web.jpg'
              }
          }, 1000)
      })
    }
  }
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
