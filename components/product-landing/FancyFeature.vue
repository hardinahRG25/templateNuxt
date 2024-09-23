<template>
	<div class="fancy-feature-ten pt-100 md-pt-70" id="feature">
		<div class="bg-wrapper">
			<div class="container">
				<div class="row justify-content-between align-items-center">
					<div
						class="col-md-6"
						data-aos="fade-right"
						data-aos-duration="1200"
					>
						<div class="title-style-six">
							<h2>The <span>Product</span> we work with.</h2>
						</div>
						<!-- /.title-style-six -->
					</div>
					<div
						class="col-lg-5 col-md-6"
						data-aos="fade-left"
						data-aos-duration="1200"
					>
						<p class="sub-text pt-30 pb-30">
							Commonly used in the graphic, print & publishing
							industris for previewing visual mockups.
						</p>
					</div>
				</div>

				<div class="row justify-content-center mt-35 md-mt-20">
					<div
						v-for="item in fancyFeatureData"
						:key="item.id"
						class="col-lg-4 col-md-6"
						data-aos="fade-up"
						data-aos-duration="1200"
						:data-aos-delay="item.delay"
					>
						<div class="block-style-fifteen mt-40">
							<div
								class="icon d-flex align-items-center justify-content-center"
								:style="{ background: item.bg }"
							>
								<nuxt-img :src="item.icon" alt="" />
							</div>
							<h3>{{ item.title }}</h3>
							<p>{{ item.subtitle }}</p>
							<a href="#" class="mt-30"
								><img src="/images/icon/69.svg" alt=""
							/></a>
						</div>
						<!-- /.block-style-fifteen -->
					</div>
				</div>
			</div>
			<img src="/images/shape/137.svg" alt="" class="shapes shape-one" />
		</div>
		<!-- /.bg-wrapper -->
	</div>
</template>

<script>
export default {
	name: "FancyFeature",
	data() {
		return {
			fancyFeatureData: [
				{
					id: 1,
					icon: `/images/icon/68.svg`,
					bg: "#FFEBDB",
					title: "Secure & Trusted",
					subtitle:
						"Elit esse cillum dolore eu fugiat nulla pariatur",
					delay: "",
				},
				{
					id: 2,
					icon: `/images/icon/67.svg`,
					bg: "#E0F8F8",
					title: "Easy Customizable",
					subtitle:
						"quis nostrud exerct ullamo ea nisi ut aliqui com dolor",
					delay: "100",
				},
				{
					id: 3,
					icon: `/images/icon/70.svg`,
					bg: "#F7EDFF",
					title: "Fast Support",
					subtitle:
						"Elit esse cillum dolore eu fugiat nulla pariatur",
					delay: "200",
				},
			],
		};
	},
};
</script>
