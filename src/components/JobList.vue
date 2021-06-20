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
import Vue from "vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";
import { myEventBus, MyEventBusEvents } from "../bus/myEventBus";

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
	created() {
		myEventBus.$on(
			MyEventBusEvents.AddJob,
			(title: string, loc: string, salary: number, ft: boolean) =>
				this.addJob(title, loc, salary, ft)
		);
	},
	methods: {
		addJob(title: string, loc: string, salary: number, ft: boolean) {
			// ...
		},
	},
	mounted() {
		// todo: tell TS to kcik rocks, $root.$on is perfectly fine.
		// todo: use teh event bus tutorial. teh
		// const typeScriptIsOverlyStrict = this.$root! as any;
		// console.log(
		// 	"adsfadsfdasf3390938903",
		// 	typeScriptIsOverlyStrict,
		// 	Object.keys(typeScriptIsOverlyStrict)
		// );
		// this.$root.$on(
		// 	"addJob",
		// 	(title: string, loc: string, salary: number, ft: boolean) => {
		// 		this.$props.jobs.push({
		// 			title: title,
		// 			location: loc,
		// 			salary: salary,
		// 			ft: ft,
		// 			id: Math.random().toString(),
		// 		});
		// 	}
		// );
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
