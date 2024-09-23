<template>
	<div class="h-100">
		<div class="full-height-layout d-flex align-items-center">
			<div class="coming-soon-content font-gordita">
				<h6>COMING SOON</h6>
				<h1>Get notified when we’r ready to launch!</h1>
				<div class="row">
					<div class="col-lg-9 m-auto">
						<p>
							We're under construction. Check back for an update
							soon. Stay in touch!
						</p>
					</div>
				</div>
				<form @submit.prevent="onSubmit">
					<input type="email" placeholder="ihidago@ujufidnan.gov" />
					<button>Notify Me</button>
				</form>

				<ul class="social-icon d-flex justify-content-center">
					<li>
						<a href="#"
							><i class="fa fa-facebook" aria-hidden="true"></i
						></a>
					</li>
					<li>
						<a href="#"
							><i class="fa fa-instagram" aria-hidden="true"></i
						></a>
					</li>
					<li>
						<a href="#"
							><i class="fa fa-pinterest-p" aria-hidden="true"></i
						></a>
					</li>
					<li>
						<a href="#"
							><i class="fa fa-linkedin" aria-hidden="true"></i
						></a>
					</li>
				</ul>

				<nuxt-img
					src="/images/shape/179.svg"
					alt=""
					class="shapes shape-one"
				/>
				<nuxt-img
					src="/images/shape/180.svg"
					alt=""
					class="shapes shape-two"
				/>
				<nuxt-img
					src="/images/shape/181.svg"
					alt=""
					class="shapes shape-three"
				/>
				<nuxt-img
					src="/images/shape/182.svg"
					alt=""
					class="shapes shape-four"
				/>
				<nuxt-img
					src="/images/shape/183.svg"
					alt=""
					class="shapes shape-five"
				/>
				<nuxt-img
					src="/images/shape/184.svg"
					alt=""
					class="shapes shape-six"
				/>
				<nuxt-img
					src="/images/shape/185.svg"
					alt=""
					class="shapes shape-seven"
				/>
				<nuxt-img
					src="/images/shape/186.svg"
					alt=""
					class="shapes shape-eight"
				/>
				<nuxt-img
					src="/images/shape/187.svg"
					alt=""
					class="shapes shape-nine"
				/>
				<nuxt-img
					src="/images/shape/188.svg"
					alt=""
					class="shapes shape-ten"
				/>
			</div>
			<!-- /.coming-soon-content -->
		</div>
		<!-- /.full-height-layout -->
	</div>
</template>

<script>
export default {
	name: "ComingSoonMain",
	methods: {
		onSubmit() {
			console.log("Submitted");
		},
	},
};
</script>
