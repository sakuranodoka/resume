<template>
  <div class="home mx-auto">
      <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'Experiance',
}
</script>

<style>
    .home {
        max-width: 1050px;
        margin: 0 auto;
    }

    .card-body {
        padding : 0 !important;
    }
</style>