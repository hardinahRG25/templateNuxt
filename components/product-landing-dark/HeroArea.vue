<template>
	<div>
		<div class="hero-banner-six">
			<div class="illustration-content">
				<img
					src="/images/shape/144.svg"
					alt=""
					class="main-img ms-auto"
				/>
				<img
					src="/images/assets/screen_05.png"
					alt=""
					class="screen-one"
				/>
				<div class="screen-two">
					<img
						src="/images/assets/screen_06.png"
						alt=""
						class="ms-auto"
					/>
				</div>
				<img
					src="/images/shape/145.svg"
					alt=""
					class="shapes shape-one"
				/>
				<img
					src="/images/shape/146.svg"
					alt=""
					class="shapes shape-two"
				/>
				<img
					src="/images/shape/147.svg"
					alt=""
					class="shapes shape-three"
				/>
				<img
					src="/images/shape/148.svg"
					alt=""
					class="shapes shape-four"
				/>
				<img
					src="/images/shape/149.svg"
					alt=""
					class="shapes shape-five"
				/>
				<img
					src="/images/shape/150.png"
					alt=""
					class="shapes shape-six"
				/>
				<div class="shapes oval-one"></div>
				<div class="shapes oval-two"></div>
				<div class="shapes oval-three"></div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-xl-6 col-lg-6">
						<h1 class="font-recoleta hero-heading">
							Build your Next <span>Product</span> with Deski.
						</h1>
						<p class="hero-sub-heading">
							Deski delivered blazing fast, striking soludtion
						</p>
						<div class="d-sm-flex align-items-center button-group">
							<button
								data-bs-toggle="modal"
								data-bs-target="#videoModal"
								class="d-flex align-items-center video-button fancybox order-sm-last"
							>
								<img
									src="/images/icon/play-circle.svg"
									alt=""
									class="icon"
								/>
								<span>See Intro Video</span>
							</button>
							<a
								href="#"
								class="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one order-sm-first"
							>
								<img
									src="/images/icon/apple.svg"
									alt=""
									class="icon"
								/>
								<div>
									<span>Download on the</span>
									<strong>App store</strong>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- VideoModal -->
		<VideoModal videoId="aXFSJTjVjw0" />
	</div>
</template>

<script>
import VideoModal from "../common/Modal/VideoModal.vue";

export default {
	name: "HeroArea",
	components: {
		VideoModal,
	},
};
</script>
