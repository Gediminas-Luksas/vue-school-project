<template>
	<div>
		<Header />
		<div class="container">
			<div
				v-for="news in newsGet"
				:key="news._id"
				class="border"
			>
				{{ news.title }}
				<hr>
				<div class="row">
					{{ news.texts }}
					<div class="data">
						{{ news.date }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header'
export default {
	name: 'HomeView',
	components: {
		Header
	},
	data () {
		return {
			newsGet: []
		}
	},
	created () {
		axios.get('news')
			.then(response => {
				this.newsGet = response.data
			})
			.catch(error => {
				console.log(error)
			})
	}
}
</script>
<style scoped>
	.container{
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		padding: 5px 15px;
		margin: 50px 35px;
		text-align: center;
		font-size: 28px;
		color: beige;
		border: 1px solid rgb(168, 166, 166);
	}
	.border{
		border: 1px solid rgb(168, 166, 166);
		padding: 15px;
		margin: 15px 5px;
	}
	.row{
		font-family: 'Times New Roman', Times, serif;
		padding: 20px;
		text-align: left;
		font-size: 18px;
		color: beige;
	}
	hr{
		width: 20%;
	}
	.data{
		font-family:fantasy;
		padding: 4px 0 0 0;
		font-size: 14px;
		text-align: right;
	}
</style>
