<template>
	<div
		class="fancy-short-banner-eleven bg-color mt-70 mb-50 md-mb-20 md-mt-30"
	>
		<div class="container">
			<div class="clearfix">
				<div class="row">
					<div class="col-lg-8 m-auto">
						<h2
							class="font-rubik"
							data-aos="fade-up"
							data-aos-duration="1200"
						>
							Want to be a part of our talented team?
						</h2>
						<NuxtLink
							to="/contact-us-cs"
							class="theme-btn-one btn-lg mt-50 md-mt-30"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="100"
							>SEND YOUR CV</NuxtLink
						>
					</div>
				</div>
			</div>
		</div>
		<div class="bubble-one"></div>
		<div class="bubble-two"></div>
		<div class="bubble-three"></div>
		<div class="bubble-four"></div>
		<nuxt-img src="/images/shape/212.svg" alt="" class="shapes shape-one" />
		<nuxt-img src="/images/shape/213.svg" alt="" class="shapes shape-two" />
	</div>
</template>

<script>
export default {
	name: "ShortBanner",
};
</script>
