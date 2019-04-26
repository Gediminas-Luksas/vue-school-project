<template>
	<div>
  <NavBar />
  <h1>Welcome Login</h1>
	<Footer />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
	name: 'LoginView',
	components: {
		NavBar,
		Footer
	}
}
</script>
