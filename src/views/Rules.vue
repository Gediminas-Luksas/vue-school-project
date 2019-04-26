<template>
<div>
  <NavBar />
  <h1>Welcome Rules</h1>
		<Footer />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
	name: 'RulerView',
	components: {
		NavBar,
		Footer
	}
}
</script>
