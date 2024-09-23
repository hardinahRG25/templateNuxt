<template>
	<div class="hero-banner-twelve lg-container" id="home">
		<div class="container">
			<div class="row">
				<div class="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
					<h1 class="hero-heading font-gordita">
						Building website
						<span style="color: #ff006b">products</span>,
						<span style="color: #fedc00">brands</span> & expereince
					</h1>
					<p class="hero-sub-heading">
						Make stunning videos with animation, stock footage, and
						photos.
					</p>
					<a href="#" class="get-start-btn"
						>Get Started fo free
						<i class="fa fa-angle-right ms-1" aria-hidden="true"></i
					></a>
				</div>
			</div>

			<div class="screen-holder">
				<nuxt-img
					src="/images/assets/screen_32.png"
					alt=""
					class="img-meta"
				/>
				<nuxt-img
					src="/images/assets/screen_33.png"
					alt=""
					class="shapes screen-one"
				/>
				<nuxt-img
					src="/images/assets/screen_34.png"
					alt=""
					class="shapes screen-two"
				/>
				<nuxt-img
					src="/images/shape/230.svg"
					alt=""
					class="shapes shape-one"
				/>
				<nuxt-img
					src="/images/shape/231.svg"
					alt=""
					class="shapes shape-two"
				/>
			</div>
			<!-- /.screen-holder -->
		</div>
		<nuxt-img
			src="/images/shape/232.svg"
			alt=""
			class="shapes shape-three"
		/>
		<nuxt-img
			src="/images/shape/233.svg"
			alt=""
			class="shapes shape-four"
		/>
		<nuxt-img
			src="/images/shape/234.svg"
			alt=""
			class="shapes shape-five"
		/>
		<nuxt-img src="/images/shape/235.svg" alt="" class="shapes shape-six" />
		<nuxt-img
			src="/images/shape/236.svg"
			alt=""
			class="shapes shape-seven"
		/>
		<nuxt-img
			src="/images/shape/232.svg"
			alt=""
			class="shapes shape-eight"
		/>
	</div>
</template>

<script>
export default {
	name: "HeroBanner",
};
</script>
