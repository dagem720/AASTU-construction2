<!--template>



        <div class="container"
            style="text-align: center;font-family: 'Arizonia', cursive;"
        >
     <v-btn
          color="teal"
          dark
        >
          Home
        </v-btn>
  
    <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
  
        <v-btn
          color="teal"
          dark
    
        >
          Company
        </v-btn>


   
    </v-menu>

    <v-menu
      transition="scale-transition"
      bottom
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="teal"
          dark
          v-on="on"
        >
          Letters
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
   <v-btn
          color="teal"
          dark
        >
          Company
        </v-btn>
  
        <v-btn
          color="teal"
          dark
        >
          Login
        </v-btn>
      
   
      </div>


</template>

<script>

export default {
    data()
    {
        return{
            items:[{title:"Send New Letter"}, {title:"Receiver Letter"},{title:"Sent Letters"}]
        }
    }
}
</script>
-->
<template>


<div class="teal" style="color:white" fixed>
  <b-navbar toggleable="lg"  style="align:center" >
    <b-navbar-brand href="#"><img src="../assets/aastu_logo2.jpg" style="height:50px" alt=""><strong style="font-family: 'Arizonia', cursive;color:white">AASTU Construction</strong></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav style="align:center">
      <b-navbar-nav>
        <b-nav-item @click="home" style="font-family: 'Arizonia', cursive;" class="white--text">Home</b-nav-item>
        <b-nav-item href="#" style="color:white">Company</b-nav-item>
        <b-nav-item-dropdown text="Letter" left >
          <b-dropdown-item @click="sendletter">Send New Letter</b-dropdown-item>
          <b-dropdown-item @click="receivedletter">Received Letters</b-dropdown-item>
          <b-dropdown-item @click="sentletter">Sent Letters</b-dropdown-item>
        </b-nav-item-dropdown>
         <b-nav-item @click="login" style="color:white">Login</b-nav-item>
      </b-navbar-nav>

     
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {
  methods:{
    sendletter(){
      this.$router.push('./sendletter')
    },
    home(){
      this.$router.push('./')
    },
    login(){
      this.$router.push('./Login')
    },
    receivedletter()
    {
      this.$router.push('./receivedletter')
    },
    sentletter()
    {
      this.$router.push('./sentletter')
    }
  }
}
</script>