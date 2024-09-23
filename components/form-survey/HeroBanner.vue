<template>
	<div>
		<div class="hero-banner-thirteen lg-container" id="home">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<NuxtLink to="/pricing-management" class="slogan tran3s"
							><strong>Offer</strong> is going on till friday,
							$1.99/mo.
							<i
								class="fa fa-chevron-right"
								aria-hidden="true"
							></i
						></NuxtLink>
						<h1 class="hero-heading">
							Ask your customer in a better way.
						</h1>
						<p class="hero-sub-heading">
							Deski delivered blazing fast performance, striking
							word soludtion
						</p>
						<a href="#" class="theme-btn-fourteen"
							>Get Started - It’s Free</a
						>
						<div class="info">No credit card required</div>
					</div>
				</div>

				<div class="screen-holder">
					<nuxt-img
						src="/images/assets/ils_22.svg"
						alt=""
						class="img-meta"
					/>
					<nuxt-img
						src="/images/assets/ils_22.1.svg"
						alt=""
						class="shapes shape-one"
					/>
					<nuxt-img
						src="/images/assets/ils_22.2.svg"
						alt=""
						class="shapes shape-two"
					/>
				</div>
				<!-- /.screen-holder -->
			</div>
		</div>

		<!-- ContactModal start -->
		<ContactModal />
		<!-- ContactModal end -->
	</div>
</template>

<script>
import ContactModal from "../common/Modal/ContactModal.vue";

export default {
	name: "HeroBanner",
	components: {
		ContactModal,
	},
};
</script>
