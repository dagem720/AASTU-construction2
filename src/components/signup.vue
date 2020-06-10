<template>
    <div class="container col-xs-12 col-sm-12 col-md-8 col-lg-6"
        style="align:center"
    >
        <b-card 
        header="Sign UP" 
        header-bg-variant="primary"
        border-variant="primary"
        >
            
        <form>
        <div class="row">
            <div class="col-sm-12">
               <div class="form-group">
                            <label for="fname">First Name</label>
                            <input type="text" class="form-control" id="fname" v-model="account.fname">
                        </div>
                        <div class="form-group">
                            <label for="lname">Last Name</label>
                            <input type="text" class="form-control" id="lname" v-model="account.lname">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" v-model="account.email">
                        </div>
                        <div class="form-group">
                            <label for="pwr">Password</label>
                            <input type="password" class="form-control" id="pwr" v-model="account.pwr">
                        </div>
                        <div class="form-group">
                            <label for="cpwr">Confirm Password</label>
                            <input type="password" class="form-control" id="cpwr">
                        </div>
                        <div class="form-group">
                    <button class="btn teal" style="float:right" @click="signup">Sign UP</button>
                </div>
                <strong class="mt-9">already have an account <a @click="login">Login</a></strong>
            </div>
        </div>
        </form>
        </b-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            account:{
                fname:'',
                lname:'',
                email:'',
                pwr:''
            }
        }
    },
    methods:{
        login()
        {
            this.$router.push('./login')
        },
        signup(){
            this.$http.post('http://localhost:3005/users',this.account)
        }
    }
}
</script>