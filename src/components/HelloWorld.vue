<template>
  <div class="hello">
        <b-sidebar
        :visible="true"
        id="sidebar-backdrop"
        title="Sidebar with backdrop"
        :backdrop-variant="variant"
        shadow>
        <div class="px-3 py-2">
            <b-form-group label="Backdrop variant" label-for="backdrop-variant">
            <!-- <b-form-select id="backdrop-variant" v-model="variant" :options="variants"></b-form-select> -->
            
            </b-form-group>
        </div>
        </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }, 

  data () {
    return {
        variant: 'dark',
        variants: [
          'transparent',
          'white',
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
