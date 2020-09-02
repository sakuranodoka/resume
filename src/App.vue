<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
    @font-face {
        font-family: "EkkamaiNewRegular";
        src: url('../assets/fonts/EkkamaiNew-Regular.ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "LatoLight";
        src: url('../assets/fonts/Lato-Light.ttf');
        font-weight: normal;
        font-style: normal;
    }

    html, #app { 
        background: #fff;
    }

    #app {
        /* font-family: "EkkamaiNewRegular" !important, Helvetica, Arial, sans-serif; */
        font-family: "LatoLight","EkkamaiNewRegular" !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        
    }

    #nav {
    padding: 30px;
    }

    #nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    #nav a.router-link-exact-active {
    color: #42b983;
    }
</style>
