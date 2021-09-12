<template>
  <div>
      <div class="container">
          <div class="py-5">
              <div class="row">
                  <div class="col-md-6 offset-3">
                      <div class="card card-default">
                          <div class="card-header">Login</div>
                          <div class="card-body">
                              <form action="#" method="" @submit.prevent="Login()">
                                  <div class="form-group">
                                      <label for="email">Email</label>
                                      <input type="email" v-model="loginForm.email" name="email" id="email" class="form-control" placeholder="enter-eamil" :class="{'is-invalid':loginForm.errors.has('email')}">
                                      <div class="text-danger" v-if="loginForm.errors.has('email')" v-html="loginForm.errors.get('email')" />
                                  </div>
                                  <div class="form-group">
                                      <label for="password">Password</label>
                                      <input type="password" v-model="loginForm.password" name="password" id="password" class="form-control" placeholder="enter-password" :class="{'is-invalid':loginForm.errors.has('password')}">
                                      <div class="text-danger" v-if="loginForm.errors.has('password')" v-html="loginForm.errors.get('password')" />
                                  </div>
                                  <div class="form-group">
                                     <button  type="submit" class="btn btn-success">Login</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios';
export default {
    data: () => ({
      loginForm: new Form({
        email: 'ayon@gmail.com',
        password: 'password',
    })
  }),
    methods:{
        Login(){
            axios.get('/sanctum/csrf-cookie').then(response => {

                this.loginForm.post('/login').then(res =>{
                    this.$router.push({name: 'dashboard'});
                    this.$toast.success({
                        title:'success',
                        message:'Welcom to dashboard',
                    })
               })
            });
        },
        getUserData(){
            axios.get('/api/user').then(res=>{
                console.log(res.data);
            })
        }
    },
    mounted(){

    }
}
</script>

<style>

</style>
