<template>
  <div>
    <h1 v-on:click='selected'>{{ title }}</h1>
    <pre>{{ content }}</pre>
  </div>
</template>
<script>
export default {
  props: [ 'title', 'content', 'created' ],
  methods: {
    selected() {
      this.$emit('selected:article', this.created)
    }
  }
}
</script>
<style scoped>
h1 {
  cursor: pointer;
}
</style>