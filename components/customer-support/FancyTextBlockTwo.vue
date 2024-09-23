<template>
	<div class="fancy-text-block-seven mt-150 md-mt-100">
		<div class="bg-wrapper">
			<nuxt-img
				src="/images/shape/29.svg"
				alt=""
				class="shapes shape-one"
			/>
			<nuxt-img
				src="/images/shape/30.svg"
				alt=""
				class="shapes shape-two"
			/>
			<nuxt-img
				src="/images/shape/31.svg"
				alt=""
				class="shapes shape-three"
			/>
			<nuxt-img
				src="/images/shape/32.svg"
				alt=""
				class="shapes shape-four"
			/>
			<nuxt-img
				src="/images/shape/33.svg"
				alt=""
				class="shapes shape-five"
			/>
			<div class="container">
				<div class="row">
					<div
						class="col-lg-5 col-md-6 col-sm-10 m-auto"
						data-aos="fade-right"
						data-aos-duration="1200"
					>
						<div class="img-holder">
							<nuxt-img src="/images/media/img_19.png" alt="" />
							<nuxt-img
								src="/images/shape/34.svg"
								alt=""
								class="shapes shape-six"
							/>
						</div>
					</div>
					<div
						class="col-xl-6 col-lg-7 ms-auto"
						data-aos="fade-left"
						data-aos-duration="1200"
					>
						<div class="quote-wrapper pt-60">
							<nuxt-img
								src="/images/icon/26.svg"
								alt=""
								class="icon"
							/>
							<blockquote class="font-rubik">
								Deski combines excellent live chat, ticketing
								and automation that allow us to provide quality.
							</blockquote>
							<h6>
								Zubayer Hasan <span>CEO & Founder deksi</span>
							</h6>
							<NuxtLink
								to="/about-us-cs"
								class="theme-btn-two mt-45 md-mt-30"
								>Learn More</NuxtLink
							>
						</div>
						<!-- /.quote-wrapper -->
					</div>
				</div>
			</div>
		</div>
		<!-- /.bg-wrapper -->
	</div>
</template>

<script>
export default {
	name: "FancyTextBlockTwo",
};
</script>
