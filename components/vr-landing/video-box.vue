<template>
	<div>
		<div
			class="fancy-feature-thirtyNine lg-container position-relative pt-150 md-pt-80"
		>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 ms-auto">
						<div class="title">
							Stylish Afford<span>able.</span> Quality.
						</div>
						<button
							data-bs-toggle="modal"
							data-bs-target="#videoModal"
							class="fancybox video-icon tran3s mt-70 d-flex align-items-center"
						>
							<span class="icon"><i class="fa fa-play"></i></span>
							<div class="ps-5 text-start">
								<span class="d-block ps-text"
									>Watch Intro video
								</span>
								<strong class="d-block"
									>It is a long established fact that will get
									it.
								</strong>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div class="img-meta">
				<img
					src="/images/media/img_119.png"
					alt=""
					data-aos="fade-up"
				/>
			</div>
		</div>

		<!-- VideoModal start -->
		<VideoModal videoId="kJg_P49inPk" />
		<!-- VideoModal end -->
	</div>
</template>

<script>
import VideoModal from "../common/Modal/VideoModal.vue";

export default {
	name: "VideoBox",
	components: {
		VideoModal,
	},
};
</script>
