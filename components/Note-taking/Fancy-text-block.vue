<template>
	<div>
		<div
			class="fancy-text-block-twentyTwo lg-container pt-250 md-pt-120"
			id="whyUs"
		>
			<div class="container">
				<div class="row align-items-center">
					<div
						class="col-xl-5 col-lg-6 order-lg-last"
						data-aos="fade-left"
						data-aos-duration="1200"
					>
						<div class="text-wrapper">
							<button
								data-bs-toggle="modal"
								data-bs-target="#videoModal"
								class="fancybox mb-20 md-mb-10"
							>
								<img
									src="/images/icon/71.svg"
									alt=""
									class="icon"
								/>
							</button>
							<div class="title-style-seven">
								<h2>
									Why you should <span>choose</span> Deski?
								</h2>
							</div>
							<!-- /.title-style-seven -->
							<p>
								So how does it work? Let’s check our Getting
								Started tutorial pre-made templates.
							</p>
							<a href="#" class="theme-btn-eight">Learn more</a>
						</div>
						<!-- /.text-wrapper -->
					</div>
					<div
						class="col-xl-7 col-lg-6 col-md-8 m-auto order-lg-first"
						data-aos="fade-right"
						data-aos-duration="1200"
					>
						<div class="illustration-holder">
							<nuxt-img src="/images/assets/ils_21.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- VideoModal start -->
		<VideoModal videoId="aXFSJTjVjw0" />
		<!-- VideoModal end -->
	</div>
</template>

<script>
import VideoModal from "../common/Modal/VideoModal.vue";

export default {
	name: "FancyTextBlock",
	components: {
		VideoModal,
	},
};
</script>
