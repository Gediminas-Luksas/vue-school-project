<template>
	<div class="container">
		<table>
			<tr>
				<th class="title">
					PLAYER Team
				</th>
				<th class="title">
					PLAYER Name
				</th>
			</tr>
			<tr
				v-for="team in getTeams"
				:key="team._id"
			>
				<td class="team">
					{{ team.team }}
				</td>
				<td>
					<template v-if="team.name !== ''">
						{{ team.name }}
					</template>
					<Spinner v-else />
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
import axios from 'axios'
import Spinner from '@/components/Spinner'
export default {
	components: {
		Spinner
	},
	data () {
		return {
			getTeams: []
		}
	},
	created () {
		axios.get('teams')
			.then(response => {
				this.getTeams = response.data
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
    font-size: 28px;
    color: beige;
    padding: 40px 55px;
  }
  .title{
	color: #000;
  }
  .team{
	padding: 15px;
  }
  table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

</style>
