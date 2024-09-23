<template>
	<div class="fancy-hero-five">
		<div class="bg-wrapper">
			<div class="container">
				<div class="text-center">
					<h1 class="heading">Find docs</h1>
					<p class="sub-heading space-xs">
						Find articles, help and advice for getting the most our
						of docall theme
					</p>
				</div>
				<div class="search-filter-form mt-30">
					<form @submit.prevent="onSubmit">
						<input type="text" placeholder="Search Somthing.." />
						<button>
							<nuxt-img src="/images/icon/54.svg" alt="" />
						</button>
						<select
							class="form-control"
							id="exampleFormControlSelect1"
						>
							<option>All</option>
							<option>Layout</option>
							<option>API</option>
							<option>Doc</option>
						</select>
					</form>
				</div>
			</div>
		</div>
		<!-- /.bg-wrapper -->
	</div>
</template>

<script>
export default {
	name: "FancyHero",
	methods: {
		onSubmit() {
			console.log("Submitted");
		},
	},
};
</script>
