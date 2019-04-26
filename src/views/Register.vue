<template>
<div>
  <NavBar />
  <h1>Welcome Register</h1>
	<Footer />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
	name: 'RegisterView',
	components: {
		NavBar,
		Footer
	}
}
</script>
