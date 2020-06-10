<template>
<v-app>
  <Header/>
  <Tabs/>
    <v-content>
      <router-view>
      </router-view>
    </v-content>
  <Footer/>
</v-app>
 </template>
<script>
    import Tabs from './components/tabs'
    import Header from './components/Header'
    import Footer from './components/footer'
  export default {
  components:{
    Tabs,
    Header,
    Footer
  } 
}
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
</style>

