<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>{{ count }}</div>
    <button @click="increment">加</button>
    <button @click="decrement">减</button>
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      msg: 'Vuex计数应用'
    }
  },
  computed: {
      count () {
          return this.$store.state.count
      }
  },
  methods: {
      increment () {
          return this.$store.dispatch('increment')
      },
      decrement () {
          return this.$store.dispatch('decrement')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
