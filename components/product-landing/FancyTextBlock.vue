<template>
	<div>
		<div class="fancy-text-block-twentyOne pt-170 md-pt-100" id="about">
			<div class="container">
				<div class="row align-items-center">
					<div
						class="col-lg-6 col-md-7 m-auto"
						data-aos="fade-right"
						data-aos-duration="1200"
					>
						<div class="img-meta">
							<img
								src="/images/media/img_72.png"
								alt=""
								class="m-auto"
							/>
							<img
								src="/images/shape/138.svg"
								alt=""
								class="shapes shape-one"
							/>
						</div>
					</div>
					<div
						class="col-xl-5 col-lg-6 ms-auto"
						data-aos="fade-left"
						data-aos-duration="1200"
					>
						<div class="text-wrapper md-pt-50">
							<button
								class="fancybox"
								data-bs-toggle="modal"
								data-bs-target="#videoModal"
							>
								<img
									src="/images/icon/71.svg"
									alt=""
									class="icon"
								/>
							</button>
							<div class="client-info">
								Over <span>150,000+ client</span>
							</div>
							<p>
								We created over <span>27,000+</span> stunning
								and quality products over last 5 years with
								satisfaction.
							</p>
							<div class="name">Carl Henderson</div>
						</div>
						<!-- /.text-wrapper -->
					</div>
				</div>
			</div>
		</div>
		<!-- VideoModal start  -->
		<VideoModal videoId="yJg-Y5byMMw" />
		<!-- VideoModal end  -->
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
