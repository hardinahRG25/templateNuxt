<template>
	<div class="hero-banner-fourteen lg-container">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h1 class="hero-heading" data-aos="fade-right">
						Let’s explore the virtual world.
					</h1>
					<p
						class="hero-sub-heading"
						data-aos="fade-right"
						data-aos-delay="100"
					>
						Deski delivered blazing performance, striking word
						solution lorem.
					</p>
					<div
						class="d-lg-flex align-items-center justify-content-between pe-xl-5"
						data-aos="fade-right"
						data-aos-delay="200"
					>
						<div class="info">
							Virtual Reality Glass
							<span class="d-block"
								>20% <span>SALE ON</span></span
							>
						</div>
						<div class="price">$49.</div>
					</div>
					<a
						href="#"
						class="explore-btn mt-5 md-mt-40"
						data-aos="fade-right"
						data-aos-delay="300"
						>Explore more & Shop</a
					>
				</div>
			</div>

			<div class="screen-holder">
				<nuxt-img src="/images/shape/241.svg" alt="" class="img-meta" />
				<nuxt-img
					src="/images/assets/ils-03.png"
					alt=""
					class="shapes vr-image"
				/>
				<nuxt-img
					src="/images/shape/242.svg"
					alt=""
					class="shapes shape-one"
				/>
				<nuxt-img
					src="/images/shape/242.svg"
					alt=""
					class="shapes shape-two"
					width="45"
				/>
				<nuxt-img
					src="/images/shape/242.svg"
					alt=""
					class="shapes shape-three"
					width="75"
				/>
				<div class="rating-box">
					<nuxt-img src="/images/shape/243.svg" alt="" />
					<div class="rate">9.3 <br /><span>Rating</span></div>
				</div>
			</div>
			<!-- /.screen-holder -->
		</div>
	</div>
</template>

<script>
export default {
	name: "HeroBanner",
};
</script>
