<template>
	<div>
		<div class="container">
			<div
				v-for="rules in rulesGet"
				:key="rules._id"
			>
				{{ rules.title }}
				<div class="row">
					{{ rules.texts }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'RulerView',
	data () {
		return {
			rulesGet: []
		}
	},
	created () {
		axios.get('http://localhost:51515/rules')
			.then(response => {
				this.rulesGet = response.data
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
		padding: 35px 15px;
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
</style>
