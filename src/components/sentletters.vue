

<template>
    <div class="container col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <v-expansion-panels
  focusable
  >
    <v-expansion-panel
    v-for="(sentLetter,i) in sentLetters"
    :key="i"
    >
      <v-expansion-panel-header class=" teal--text">
         {{sentLetter.fname}} <v-spacer></v-spacer> {{sentLetter.remail}}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>  
    </div>
</template>
<script>
export default {
  data(){
    return{
      sentLetters:''
    }
  },
    created(){
        this.fetchdata();
    },
    methods: {
        fetchdata(){
        this.$http.get('http://localhost:3004/sentLetters')
        .then(response=>{
            this.sentLetters=response.body
        })
    }
    },
    
}
</script>