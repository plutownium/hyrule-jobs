<template>
	<div class="app">
		<!-- <button @click="changeName('zelda')">Click me</button> -->
		<nav>
			<!-- <router-link to="/add">Add Job Page Is Here</router-link> -->
			<a @click="ayy()">Goooo</a>
			<router-link to="/test">FOOOO</router-link>
		</nav>

		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "./types/Job";
import OrderTerm from "./types/OrderTerm";

// todo: make the vue router send me to another page onclick. Specifically the AddJob vue, and then send me back
// once im done

export default defineComponent({
	name: "App",
	
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
