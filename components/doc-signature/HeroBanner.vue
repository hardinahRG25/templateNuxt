<template>
	<div class="hero-banner-eleven lg-container">
		<div class="container">
			<div class="row">
				<div class="col-xl-7 col-lg-6">
					<div class="hero-text-wrapper">
						<h1>
							Edit & Sign <br />
							PDF
							<span>
								documents
								<nuxt-img
									src="/images/shape/line-shape-12.svg"
									alt=""
									class="cs-screen"
								/>
							</span>
							Online free.
						</h1>
						<p class="hero-sub-heading">
							Document edit, workflow, simplified
						</p>
						<form @submit.prevent="onSubmit">
							<input
								type="email"
								placeholder="ihidago@deski.gov"
							/>
							<button>Try free demo</button>
						</form>
						<p class="term-text">No credit card d</p>
					</div>
					<!-- /.hero-text-wrapper -->
				</div>
				<!-- End .col -->

				<div class="illustration-container">
					<nuxt-img src="/images/assets/ils-02.png" alt="" />
				</div>
			</div>
			<!-- End .row -->
		</div>
		<!-- End .container -->

		<div class="partner-slider-two mt-150 md-mt-20">
			<div class="container">
				<div class="row">
					<div class="col-xl-8 col-lg-10 col-md-10 m-auto">
						<p class="text-center text-lg">
							Join <span>27,000+</span> companies who’ve reached
							document workflow with Deski
						</p>
					</div>
				</div>
				<div class="partnerSliderTwo">
					<carousel
						:items-to-show="5"
						:wrap-around="true"
						:autoplay="4000"
						:mouseDrag="true"
						:breakpoints="breakpoints"
					>
						<slide v-for="logo in logoSliderData" :key="logo.id">
							<div class="item">
								<div
									class="img-meta d-flex align-items-center justify-content-center"
								>
									<nuxt-img :src="logo.img" alt="" />
								</div>
							</div>
						</slide>
					</carousel>
				</div>
			</div>
		</div>
		<!-- /.partner-slider-two -->
	</div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

export default {
	name: "HeroBanner",
	data() {
		return {
			logoSliderData: [
				{
					id: 1,
					img: `/images/logo/logo-1.png`,
				},
				{
					id: 2,
					img: `/images/logo/logo-2.png`,
				},
				{
					id: 3,
					img: `/images/logo/logo-3.png`,
				},
				{
					id: 4,
					img: `/images/logo/logo-4.png`,
				},
				{
					id: 5,
					img: `/images/logo/logo-5.png`,
				},
				{
					id: 6,
					img: `/images/logo/logo-2.png`,
				},
				{
					id: 7,
					img: `/images/logo/logo-4.png`,
				},
			],
			breakpoints: {
				0: {
					itemsToShow: 2,
					snapAlign: "left",
				},
				576: {
					itemsToShow: 3,
					snapAlign: "left",
				},
				768: {
					itemsToShow: 4,
					snapAlign: "left",
				},
				992: {
					itemsToShow: 5,
					snapAlign: "left",
				},
			},
		};
	},
	components: {
		Carousel,
		Slide,
	},
	methods: {
		onSubmit() {
			console.log("Submitted");
		},
	},
};
</script>
