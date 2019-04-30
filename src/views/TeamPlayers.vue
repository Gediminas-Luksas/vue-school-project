<template>
	<div class="container">
		<form>
			<div class="row">
				<div class="col-25">
					<label for="fname">Teams</label>
				</div>
				<div class="col-75">
					<input
						v-model="teams.team"
						type="text"
						placeholder="Teams Name..."
					>
				</div>
			</div>
			<div class="row">
				<div class="col-25">
					<label for="fname">Players Name</label>
				</div>
				<div class="col-75">
					<input
						v-model="teams.name"
						type="text"
						placeholder="Palayes Name..."
					>
				</div>
			</div>
			<div class="row">
				<input
					type="submit"
					value="Submit"
					@click="addAPI"
				>
			</div>
		</form>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data () {
		return {
			teams: {
				team: '',
				name: ''
			}
		}
	},
	methods: {
		addAPI () {
			let teamPost = {
				team: this.teams.team,
				name: this.teams.name
			}
			console.log(teamPost)
			axios
				.post('teams', teamPost)
				.then(response => {
					console.log(response)
				})
				.catch(error => {
					console.log(error)
				})
		}
	}
}
</script>

<style scoped>
input[type=text], select, textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
	width: 70%;
  border-radius: 5px;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 15%;
  margin-top: 6px;
}
.col-75 {
  float: left;
  width: 70%;
  margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
