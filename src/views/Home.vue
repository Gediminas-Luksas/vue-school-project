<template>
	<div>
		<NavBar />
		<Header />
		<Footer />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
	name: 'HomeView',
	components: {
		NavBar,
		Header,
		Footer
	}
}
</script>
