<template>
    <div class="container col-xs-12 col-sm-12 col-md-8 col-lg-8">
        <b-card
            header-bg-variant="primary"
            header="Send New Letter"
            border-variant="primary"
        >
            <form>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="sfname">First Name</label>
                            <input type="text" class="form-control" id="sfname" v-model="sendletter.fname">
                        </div>
                        <div class="form-group">
                            <label for="slname">Last Name</label>
                            <input type="text" class="form-control" id="slname" v-model="sendletter.lname">
                        </div>
                        <div class="form-group">
                            <label for="semail">Email</label>
                            <input type="email" class="form-control" id="semail" v-model="sendletter.email">
                        </div>
                        <div class="form-group">
                            <label for="remail">Receivers Email</label>
                            <input type="email" class="form-control" id="remail" v-model="sendletter.remail">
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea style="height:500px;" id="message" cols="30" rows="10" class="form-control" v-model="sendletter.message"></textarea>
                        </div>
                        <button class="btn teal" style="float:right" @click="send">Send</button>
                    </div>
                </div>
            </form>
        </b-card>
    </div>
</template>
<script>
export default {
    data()
    {
        return{
            sendletter:{
                fname:'',
                lname:'',
                email:'',
                remail:'',
                message:'',
            }
        }
    },
    methods:{
        send(){
            this.$http.post('http://localhost:3004/sentLetters',this.sendletter)
        }
    }
}
</script>
        