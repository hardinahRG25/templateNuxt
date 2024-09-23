<template>
	<div class="hero-banner-one">
		<div class="hero-upper-container">
			<div class="icon-box-one">
				<nuxt-img src="/images/logo/01.png" alt="" />
			</div>
			<div class="icon-box-two">
				<nuxt-img src="/images/logo/02.png" alt="" />
			</div>
			<div class="icon-box-three">
				<nuxt-img src="/images/logo/03.png" alt="" />
			</div>
			<div class="icon-box-four">
				<nuxt-img src="/images/logo/04.png" alt="" />
			</div>
			<div class="icon-box-five">
				<nuxt-img src="/images/logo/05.png" alt="" />
			</div>
			<div class="icon-box-six">
				<nuxt-img src="/images/logo/06.png" alt="" />
			</div>
			<div class="icon-box-seven">
				<nuxt-img src="/images/logo/07.png" alt="" />
			</div>
			<div class="icon-box-eight">
				<nuxt-img src="/images/logo/08.png" alt="" />
			</div>

			<div class="bubble-one"></div>
			<div class="bubble-two"></div>
			<div class="bubble-three"></div>
			<div class="bubble-four"></div>
			<div class="bubble-five"></div>
			<div class="bubble-six"></div>
			<div class="container">
				<div class="row">
					<div class="col-xl-8 col-lg-10 m-auto">
						<h1 class="font-rubik hero-heading">
							Get your work done with <span>deski</span>
						</h1>
						<p class="hero-sub-heading">
							The first project management platform that brings
							everything together
						</p>
					</div>
				</div>
				<form @submit.prevent="onSubmit" class="subscription-form">
					<input
						required
						type="email"
						placeholder="Your work email"
					/>
					<button>Try for free</button>
				</form>
				<p class="sing-in-call">
					Already using deski?
					<NuxtLink to="/login">Sign in</NuxtLink>.
				</p>
			</div>
		</div>
		<!-- /.hero-upper-container -->
	</div>
</template>

<script>
export default {
	name: "HeroArea",
	methods: {
		onSubmit() {
			console.log("Submitted");
		},
	},
};
</script>
