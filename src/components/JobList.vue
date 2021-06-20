<template>
	<div class="jobList">
		<h1>Ordered by: {{ order }}</h1>
		<ul>
			<li v-for="job in jobs" :key="job.id">
				<div class="card">
					<div>{{ job.id }}</div>
					<h2>{{ job.title }} in the city of {{ job.location }}</h2>
					<p>{{ job.salary }} rupees</p>
					<div class="description">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Accusantium earum obcaecati ducimus atque sed
						doloremque soluta quasi iure tempora veniam quibusdam,
						repellendus eum error dicta ad ullam. Impedit, ad
						cumque?
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";

export default defineComponent({
	props: {
		jobs: {
			required: true,
			type: Array as PropType<Job[]>,
		},
		order: {
			required: true,
			type: String as PropType<OrderTerm>,
		},
	},
	setup(props) {
		// console.log("aaaaaa", props.jobs);
		// const jobs = [...props.jobs] as Job[];
		// // const x = computed(() => {
		// // 	console.log("asdfsaf");
		// // 	// const jobs = [...props.jobs] as Job[];
		// // 	return jobs.sort((a: Job, b: Job) => {
		// // 		return a[props.order] > b[props.order] ? 1 : -1;
		// // 	});
		// // });
		// // return { x };
		// return { jobs };
	},
});
</script>

<style scoped>
.card {
	margin: 10px;
	border: 3px solid #999;
	background-color: #ddd;
	padding-top: 20px;
}
</style>
