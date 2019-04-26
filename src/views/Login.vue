<template>
	<div>
  <h1>Welcome Login</h1>
	<label for="">Email</label>
	<input type="email" v-model="login.email" />
	<br>
	<label for="">Password</label>
	<input type="text" v-model="login.password" />
	<br>
	<button @click="loginUser">Login</button>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'LoginView',
	data () {
		return {
			login: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		loginUser () {
			let userLogin = {
				email: this.login.email,
				password: this.login.password
			}
			console.log(userLogin)

			axios
			.post('http://localhost:51515/login', userLogin)
			.then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
          })
		}
	}
}
</script>
