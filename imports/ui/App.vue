<template>
  <div>
    <h1 class="text-red-500">Welcome to Meteor!</h1>
    <router-link to="/home">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
