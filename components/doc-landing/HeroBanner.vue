<template>
	<div class="hero-banner-three">
		<div class="container">
			<div class="row">
				<div class="col-xl-9 col-lg-11 col-md-8 m-auto">
					<h1 class="font-rubik">Doc software you looking for.</h1>
				</div>
				<div class="col-xl-8 col-lg-9 m-auto">
					<p class="sub-text font-rubik">
						With deski Docs, you can write, edit, and collaborate
						wherever you are with 7 day trial
					</p>
				</div>
			</div>
			<div class="search-filter-form">
				<form @submit.prevent="onSubmit">
					<input type="text" placeholder="Search Somthing.." />
					<button>
						<nuxt-img src="/images/icon/54.svg" alt="" />
					</button>
					<select class="form-control" id="exampleFormControlSelect1">
						<option>All</option>
						<option>Layout</option>
						<option>API</option>
						<option>Doc</option>
					</select>
				</form>
			</div>
			<p class="sing-in-call">
				Already using deski?
				<NuxtLink to="/login" class="font-rubik">Sign in</NuxtLink>.
			</p>
			<nuxt-img
				src="/images/assets/ils_09.svg"
				alt=""
				class="illustration"
			/>
		</div>
		<!-- /.container -->
		<nuxt-img src="/images/shape/68.svg" alt="" class="shapes shape-one" />
		<nuxt-img src="/images/shape/69.svg" alt="" class="shapes shape-two" />
		<nuxt-img
			src="/images/shape/70.svg"
			alt=""
			class="shapes shape-three"
		/>
		<nuxt-img src="/images/shape/71.svg" alt="" class="shapes shape-four" />
		<nuxt-img src="/images/shape/72.svg" alt="" class="shapes shape-five" />
		<nuxt-img src="/images/shape/73.svg" alt="" class="shapes shape-six" />
		<nuxt-img
			src="/images/shape/74.svg"
			alt=""
			class="shapes shape-seven"
		/>
		<nuxt-img
			src="/images/shape/75.svg"
			alt=""
			class="shapes shape-eight"
		/>
		<nuxt-img src="/images/shape/76.svg" alt="" class="shapes shape-nine" />
		<nuxt-img src="/images/shape/77.svg" alt="" class="shapes shape-ten" />
	</div>
</template>

<script>
export default {
	name: "HeroBanner",
	methods: {
		onSubmit() {
			console.log("Submitted");
		},
	},
};
</script>
