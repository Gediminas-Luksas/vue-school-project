<template>
	<div>
		<Header />
		<div class="container">
		<div v-for="news in newsGet" :key="news.id">
			{{ news.title }}
			<div class="data">
				{{ news.date }}
			</div>
			<hr>
			<div class="row">
				{{ news.texts }}
			</div>
		</div>
		</div>
		<News />
	</div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header'
import News from '@/components/News'
export default {
	name: 'HomeView',
	components: {
		Header,
		News
	},
	data () {
		return {
			newsGet: []
		}
	},
	created () {
		axios.get('http://localhost:51515/news')
				.then(response => {
					this.newsGet = response.data
        })
        .catch(error => {
          console.log(error)
        })
	}
}
</script>
<style>
	.container{
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		padding: 35px 15px;
		margin: 25px;
		text-align: center;
		font-size: 28px;
		border: 1px solid rgb(168, 166, 166);
	}
	.row{
		font-family: 'Times New Roman', Times, serif;
		padding: 20px;
		text-align: center;
		font-size: 18px;
	}
	hr{
		width: 30%;
	}
	.data{
		font-family:fantasy;
		padding: 8px 0 0 0;
		font-size: 14px;
	}
</style>
