<template>
	<div class="fancy-short-banner-twelve">
		<div class="container">
			<div class="row">
				<div
					class="col-xl-10 col-lg-11 m-auto"
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<div class="title-style-ten text-center">
						<h2>Love our deski application? Download now!</h2>
						<p class="pt-25 pb-45">
							Try it risk free — we don’t charge any cancellation
							fees
						</p>
					</div>
				</div>
			</div>
			<div
				data-aos="fade-up"
				data-aos-duration="1200"
				data-aos-delay="150"
			>
				<div
					class="d-sm-flex align-items-center justify-content-center button-group"
				>
					<a href="#" class="d-flex align-items-center ios-button">
						<nuxt-img
							src="/images/icon/apple-black.svg"
							alt=""
							class="icon"
						/>
						<div>
							<span>Download on the</span>
							<strong>App store</strong>
						</div>
					</a>
					<a
						href="#"
						class="d-flex align-items-center windows-button"
					>
						<nuxt-img
							src="/images/icon/playstore.svg"
							alt=""
							class="icon"
						/>
						<div>
							<span>Get it on</span>
							<strong>Google play</strong>
						</div>
					</a>
				</div>
			</div>
		</div>
		<!-- /.container -->
		<nuxt-img src="/images/shape/220.svg" alt="" class="shapes shape-one" />
		<nuxt-img src="/images/shape/221.svg" alt="" class="shapes shape-two" />
	</div>
</template>

<script>
export default {
	name: "ShortBanner",
};
</script>
