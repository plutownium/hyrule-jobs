<template>
	<div>
		<div>
			<input class="j-input" v-model="title" />
			<input class="j-input" v-model="location" />
			<input class="j-input" v-model="salary" type="number" />
			<input class="j-input" v-model="ft" />
			<p :class="isABool ? 'redTextActive' : 'inactiveShadow'">
				this text is red if your bool input is ok!
			</p>
		</div>
		<div>
			<button @click="addJobToList">Add the job</button>
		</div>
		<div>
			<router-link to="/">Postings for all Jobs</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";

export default defineComponent({
	data() {
		return {
			title: "",
			location: "",
			salary: 0,
			ft: false,
			isABool: false,
		};
	},
	methods: {
		addJobToList() {
			// affirm the inputs are right & add 'em to the main list on the other page
			console.log("the btn works!", this.$data);
		},
	},
	// todo: make text light up if & only if bool input is "true" or "false" exactly. use a Union type.
	// todo: put bool into existence
});
</script>

<style scoped>
.j-input {
	height: 45px;
	background-color: #a0bbde;
	margin: 10px 20px 10px 20px;
	padding: 5px;
}
</style>
