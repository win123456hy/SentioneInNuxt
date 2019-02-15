<template>
  <div class="container">
    <div class="primary">
      <img :src="logo"
           height="100px"
           width="auto"
           alt="">
      <h1>{{ $config.app.name }}</h1>
    </div>
  </div>
</template>

<style scoped>
  .container {
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>

<script>
export default {
  components: {
  },

  computed:{
    logo(){
      return this.$config.images.logo;
    }
  }
}
</script>

