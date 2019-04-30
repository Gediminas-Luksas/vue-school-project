<template>
  <div>
    <div class="topnav">
      <router-link to="/">Home</router-link>
      <router-link to="/rules">Rules</router-link>
      <router-link v-if="auth==='l'" to="/login">Login</router-link>
      <router-link v-if="auth==='l'" to="/register">Register</router-link>
      <router-link v-if="auth==='loggedin'" to="/profile">Profile</router-link>
      <router-link to="/templayer">Team & Player</router-link>
      <a v-if="auth==='loggedin'" href="/" @click="logout">Logout</a>
      <router-link v-if="auth==='loggedin'" to="/news">Post News</router-link>
    </div>
  </div>
</template>

<script>
import EventBus from "./EventBus"

EventBus.$on("logged-in", test => {
  console.log(test)
});
export default {
  name: "NavBar",
  data () {
    return {
      auth: "l",
      user: ""
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("usertoken")
    }
  },
  mounted () {
    EventBus.$on("logged-in", status => {
      this.auth = status
    })
  }
}
</script>

<style scoped>
.topnav {
  font-family: "Merriweather", serif;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.822);
  width: 100%;
  top: 0;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.topnav a:hover {
  color: rgba(99, 97, 97, 0.719);
}

.header {
  padding: 30px;
  text-align: center;
  background: white;
}

.header h1 {
  font-size: 50px;
}
</style>
