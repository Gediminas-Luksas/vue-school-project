<template>
	<div>
		<div class="header">
			<h1>Fifa World Cup in 2019</h1>
			<p>
				Burtų traukimas prasideda <router-link
					class="link"
					to="/register"
				>
					Čia
				</router-link>
			</p>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.header {
  padding: 30px;
  text-align: center;
  background: rgba(255, 255, 255, 0.16);
  color: antiquewhite;
}

.header h1 {
  font-size: 50px;
}
.link{
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
