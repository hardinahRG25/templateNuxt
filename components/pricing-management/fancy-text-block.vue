<template>
	<div class="fancy-text-block-fifteen">
		<div class="shapes shape-one"></div>
		<div class="shapes shape-two"></div>
		<div class="shapes shape-three"></div>
		<div class="shapes shape-four"></div>
		<div class="container">
			<div class="bg-wrapper">
				<div class="row">
					<div
						class="col-lg-6 order-lg-last"
						data-aos="fade-left"
						data-aos-duration="1200"
					>
						<div class="text-wrapper md-pb-40">
							<nuxt-img
								src="/images/icon/42.svg"
								alt=""
								class="icon"
							/>
							<div class="more-text">
								More Over <span>1500+ customers</span>
							</div>
							<p class="font-rubik">
								Just simply amazing. Feel lucky use their
								service. Highly recommended andappriciate their
								service & highly trusted.
							</p>
							<h6>Jimmy Klein. <span>California USA</span></h6>
						</div>
						<!-- /.text-wrapper -->
					</div>
					<div
						class="col-lg-6 order-lg-first"
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						<nuxt-img
							src="/images/media/img_40.png"
							alt=""
							class="main-img"
						/>
					</div>
				</div>
			</div>
			<!-- /.bg-wrapper -->

			<div class="contact-banner mt-100 md-mt-60">
				<div class="row justify-content-between align-items-center">
					<div
						class="col-xl-7 col-lg-8"
						data-aos="fade-right"
						data-aos-duration="1200"
					>
						<p class="font-rubik">
							Want a custome pricing for your business? Send us
							mail
						</p>
					</div>
					<div
						class="col-xl-4 col-lg-3"
						data-aos="fade-left"
						data-aos-duration="1200"
					>
						<NuxtLink
							to="/contact-us-cs"
							class="theme-btn-four ms-auto"
							>Contact us</NuxtLink
						>
					</div>
				</div>
			</div>
			<!-- /.contact-banner -->
		</div>
	</div>
</template>

<script>
export default {
	name: "FancyTextBlock",
};
</script>
