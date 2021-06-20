<template>
	<div class="app">
		<button @click="changeName('zelda')">Click me</button>
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
import { defineComponent, ref } from "vue";
import Job from "./types/Job";
import OrderTerm from "./types/OrderTerm";
import JobList from "./components/JobList.vue";

export default defineComponent({
	name: "App",
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
	// data() {
	// 	return {
	// 		name: "link",
	// 		age: 25 as number | string,
	// 	};
	// },
	// methods: {
	// 	changeName(nouveau: string) {
	// 		this.name = nouveau;
	// 	},
	// },
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

.lol {
	border: 3px solid blue;
	border-radius: 5px;
	background-color: #eaea;
	height: 60px;
	margin: 0 20px 0 20px;
}
</style>
