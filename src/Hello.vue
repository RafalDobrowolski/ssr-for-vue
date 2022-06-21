<template>
<div>
  <div>{{ msg }}</div>
  <div>{{ post.title }}</div>
</div>
</template>

<script>
export default {
  name: "Hello",

  data() {
    return {
      msg: "Hello"
    }
  },
  asyncData(store) {
    return store.dispatch("fetchPost")
  },
  mounted() {
    this.$store.dispatch("fetchPost")
  },
  computed: {    
    post() {      
      return this.$store.state.post    
    }   
  } 
}
</script>