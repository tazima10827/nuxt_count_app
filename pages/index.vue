<!-- pages/index.vue -->
<template>
  <section class="container">
    <h1>カウントアプリ</h1>
    <blockquote>
      <p><h2>{{count}}</h2></p>
    </blockquote>
    <div class="Filter">
      <button @click="addCount">アップ</button><p/>
      <button @click="subtractCount">ダウン</button><p/>
      <button @click="multiplicationCount">かけざん</button><p/>
      <button @click="divisionCount">わりざん</button><p/>
      <button @click="clearCount">クリア</button><p/>
    </div>
    <blockquote>
      Apr/3/2019<p/>
    </blockquote>
  </section>
</template>

<script>
export default {
  computed: {
    count () { return this.$store.state.counter.count }
  },
  methods: {
    addCount (e) {
      this.$store.commit('counter/add')
    },
    subtractCount (e) {
      this.$store.commit('counter/subtract')
    },
    multiplicationCount (e) {
      this.$store.commit("counter/multiplication")
    },
    divisionCount (e) {
      this.$store.commit("counter/division")
    },
    clearCount (e) {
      this.$store.commit('counter/clear')
    }
  }
}
</script>

<style>
/* 省略 */
</style>
HTML
