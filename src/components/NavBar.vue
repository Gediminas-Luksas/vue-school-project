<template>
  <div>
    <div class="topnav">
				<router-link to="/">News</router-link>
				<router-link to="/rules">Rules</router-link>
				<router-link to="/login">Login</router-link>
				<router-link to="/register">Register</router-link>
    	</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.topnav {
  font-family: 'Merriweather', serif;
  overflow: hidden;
  background-color: rgba(6, 50, 104, 0.8);
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
  color: black;
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
