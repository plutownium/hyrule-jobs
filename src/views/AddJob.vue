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
import { computed, defineComponent, PropType, inject } from "vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";
import { myEventBus, MyEventBusEvents } from "../bus/myEventBus";

export default defineComponent({
	data() {
		return {
			title: "",
			location: "",
			salary: 0,
			ft: "",
			// isABool: false,
		};
	},
	computed: {
		isABool: function () {
			const res = this.ft as string;
			const qualified = res === "true" || res === "false";
			return qualified;
		},
		salaryIsOk: function () {
			const salary = this.salary as number;
			return salary > 200;
		},
		locationIsGood: function () {
			const loc = this.location as string;
			return loc.length > 3;
		},
		titleCheck: function () {
			const title = this.title as string;
			return title.length > 3;
		},
	},

	methods: {
		// test1: will inject work in this method?
		// test2: will I have to use setup()?
		addJobToList() {
			// affirm the inputs are right & add 'em to the main list on the other page
			if (
				this.isABool &&
				this.salaryIsOk &&
				this.locationIsGood &&
				this.titleCheck
			) {
				console.log("asdding a jobbb");
				let ft: boolean = true;
				if (this.ft === "true") {
					ft = true;
				} else if (this.ft === "false") {
					ft = false;
				}
				// this.$root!.$emit(
				// 	"addJob",
				// 	this.title,
				// 	this.location,
				// 	this.salary,
				// 	ft
				// );
				// https://stackoverflow.com/questions/66537320/vue-3-event-bus-with-composition-api
				const emitter = inject("emitter") as any; // Inject `emitter`
				// const mymethod = () => {
				emitter.emit(
					"addJob",
					this.title,
					this.location,
					this.salary,
					ft
				);
				// };
				// myEventBus.$emit(
				// 	MyEventBusEvents.AddJob,
				// 	this.title,
				// 	this.location,
				// 	this.salary,
				// 	ft
				// );
			}
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

.redTextActive {
	color: red;
	font-size: 1.2em;
}

.inactiveShadow {
	text-shadow: 2px 4px #3388;
	font-size: 2em;
}
</style>
