<template>
	<div class="login">
		<h1>Register</h1>
		<form>
			<input
				v-model="userName"
				type="text"
				placeholder="Username"
				required="required"
			>
			<input
				v-model="email"
				type="text"
				placeholder="Email"
				required="required"
			>
			<input
				v-model="password"
				type="password"
				placeholder="Password"
				required="required"
			>
			<button
				class="btn"
				type="submit"
				@click="register"
			>
				Register
			</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios'
import router from '../routes'

export default {
	data () {
		return {
			userName: '',
			email: '',
			password: ''
		}
	},
	methods: {
		register () {
			axios.post('user/register', {
				userName: this.userName,
				email: this.email,
				password: this.password
			}).then(res => {
				this.$router.push({ name: 'Login' })
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>
<style scoped>
.login{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
margin: -150px 0 0 -150px;
}
.login h1 {
	color: #fff;
	text-shadow: 0 0 35px rgba(0,0,0,0.3);
	letter-spacing:1px;
	text-align:center;
	}

input {
    width: 100%;
    margin-bottom: 10px;
    background: rgba(0,0,0,0.3);
    border: none;
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 4px;
    box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
    -webkit-transition: box-shadow .5s ease;
    -moz-transition: box-shadow .5s ease;
    -o-transition: box-shadow .5s ease;
    -ms-transition: box-shadow .5s ease;
    transition: box-shadow .5s ease;
}
input:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }
</style>
