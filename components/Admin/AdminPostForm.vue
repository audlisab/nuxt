<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author"> Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title"> Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail"> Thumbnail Link</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content"> Content </AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton type="button"
               style="margin-left: 10px"
               btn-style="cancel"
               @click="onCancel">Cancel </AppButton>
  </form>
</template>

<script>
  import AppControlInput from "../UI/AppControlInput";
  import AppButton from "../UI/AppButton";

  export default {
    props: {
      post: {
        type: Object,
        required: false
      }
    },
    components: {
      AppControlInput,
      AppButton
    },
    name: "AdminPost",
    data() {
      return {
        editedPost: this.post
          ? { ...this.post }
          : {
          author: '',
          title: '',
          thumbnail: '',
          content: ''
        }
      }
    },
    methods: {
      onSave() {
        this.$emit('submit', this.editedPost)
        console.log(this.editedPost);
      },
      onCancel() {
        this.$router.push('/admin');
      }
    }
  }
</script>

<style scoped>

</style>
