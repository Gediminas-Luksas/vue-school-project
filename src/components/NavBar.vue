<template>
  <div>
    <div class="topnav">
      <a href="/">Home</a>
      <a href="/rules">Rules</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
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
