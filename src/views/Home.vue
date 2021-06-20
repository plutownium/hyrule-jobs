<template>
	<div class="home">
		<img alt="Vue logo" src="" />
		<h1>HEY</h1>
		<p>{{ jobs[0].location }} - {{ jobs[0].salary }}</p>
		<button class="lol" @click="handleClick('title')">
			Order by title
		</button>
		<button class="lol" @click="handleClick('location')">
			Order by location
		</button>
		<button class="lol" @click="handleClick('salary')">
			Order by salary
		</button>
		<JobList :jobs="jobs" :order="order" />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import JobList from "../components/JobList.vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Home",
	components: { JobList },
	setup() {
		const jobs = ref<Job[]>([
			{
				title: "bartender",
				location: "vancouver",
				salary: 35,
				id: "jd290dfsIAJSD",
				ft: true,
			},
			{
				title: "priest",
				location: "Calgary",
				salary: 90,
				id: "ffffffff3f3f3f3f3",
				ft: true,
			},
			{
				title: "Farmworker",
				location: "Hyrule",
				salary: 40000,
				id: "fj0009i0i0k0",
				ft: true,
			},
			{
				title: "potus",
				location: "USA",
				salary: 999999,
				id: "leet0k0",
				ft: true,
			},
		]);

		const order = ref<OrderTerm>("title");

		const handleClick = (term: OrderTerm) => {
			order.value = term;
		};

		return { jobs, handleClick, order };
	},
	methods: {
		ayy() {
			console.log("asdfasdfds wow it worked");
			this.$router.push({ path: "add" });
		},
	},
});
</script>
