<template>
	<div class="fancy-feature-thirteen pt-250 md-pt-110" id="feature">
		<div class="container">
			<div class="row">
				<div class="col-xl-8 col-lg-11 col-md-10 m-auto">
					<div class="title-style-six text-center">
						<h2>
							Bring all Team <span>Managment</span> & task
							togather
						</h2>
						<p class="text-xs">
							Lorem ipsum dolor on adipisci elit io sed do eiusmod
							tempor dsu elit
						</p>
					</div>
					<!-- /.title-style-six -->
				</div>
			</div>

			<div class="sldier-wrapper mt-110 md-mt-50">
				<div
					id="productScreenSlider"
					class="carousel slide"
					data-bs-ride="carousel"
					data-interval="20000"
				>
					<ol class="carousel-indicators justify-content-between">
						<li
							data-bs-target="#productScreenSlider"
							data-bs-slide-to="0"
							class="active"
						>
							<div class="d-flex">
								<div
									class="icon d-flex align-items-center justify-content-center"
								>
									<nuxt-img
										src="/images/icon/81.svg"
										alt=""
									/>
								</div>
								<p>Create task for any <br />team person</p>
							</div>
						</li>
						<li
							data-bs-target="#productScreenSlider"
							data-bs-slide-to="1"
						>
							<div class="d-flex">
								<div
									class="icon d-flex align-items-center justify-content-center"
								>
									<nuxt-img
										src="/images/icon/81.svg"
										alt=""
									/>
								</div>
								<p>Make timeframe for <br />do the task</p>
							</div>
						</li>
						<li
							data-bs-target="#productScreenSlider"
							data-bs-slide-to="2"
						>
							<div class="d-flex">
								<div
									class="icon d-flex align-items-center justify-content-center"
								>
									<nuxt-img
										src="/images/icon/81.svg"
										alt=""
									/>
								</div>
								<p>Get task complated by <br />your member</p>
							</div>
						</li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img
								src="/images/assets/screen_07.png"
								alt=""
								class="m-auto"
							/>
						</div>
						<div class="carousel-item">
							<img
								src="/images/assets/screen_08.png"
								alt=""
								class="m-auto"
							/>
						</div>
						<div class="carousel-item">
							<img
								src="/images/assets/screen_09.png"
								alt=""
								class="m-auto"
							/>
						</div>
						<img
							src="/images/shape/152.svg"
							alt=""
							class="shapes shape-one"
						/>
						<img
							src="/images/shape/153.png"
							alt=""
							class="shapes shape-two"
						/>
					</div>
				</div>
			</div>
			<!-- /.sldier-wrapper -->
		</div>
	</div>
</template>

<script>
export default {
	name: "FeatureTwo",
};
</script>
