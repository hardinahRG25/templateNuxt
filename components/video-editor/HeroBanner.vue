<template>
	<div class="hero-banner-eight">
		<div class="container">
			<div class="row">
				<div class="col-lg-10 m-auto">
					<h1 class="hero-heading">
						Edit video & create great content
					</h1>
					<p class="hero-sub-heading">
						Make stunning videos with animation, stock footage, and
						photos.
					</p>
					<a href="#" class="theme-btn-nine">Download - It’s free</a>
				</div>
			</div>

			<div class="video-wrapper">
				<video
					preload=""
					muted="muted"
					playsinline=""
					autoplay=""
					loop=""
				>
					<source
						src="https://creativegigs.net/video/demo_01.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<!-- /.video-wrapper -->
		</div>

		<div class="partner-slider-two mt-130 md-mt-80">
			<div class="container">
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
		<img src="/images/shape/173.svg" alt="" class="shapes shape-right" />
		<img src="/images/shape/174.svg" alt="" class="shapes shape-left" />
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
					img: `/images/logo/logo-6.png`,
				},
				{
					id: 6,
					img: `/images/logo/logo-3.png`,
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
};
</script>
