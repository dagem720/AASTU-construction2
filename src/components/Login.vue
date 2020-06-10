<template>
<div class="container col-xs-12 col-sm-12 col-md-8 col-lg-6">
    <b-card 
        header="Login"
        header-bg-variant="primary"
        border-variant="primary"
    >
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordrules"
      label="Password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      @click:append="show1 = !show1"
      required

    ></v-text-field>

    <v-btn
    xs12
      block
      color=""
      class="my-4 teal"
      @click="reset"
    >
     Login
    </v-btn>
    <strong class="mt-9">
        create account 
        <a @click="signup">
            signup
        </a>
    </strong>
    
  </v-form>
  </b-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      show1:false,
      
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordrules:[
       v => !!v || 'Password is required',
        v => v.length >=8 || 'minimum 8 character',
      ],
     
    }),
methods:{
    signup(){
        this.$router.push('./signup')
    }
}
    
  }
</script>