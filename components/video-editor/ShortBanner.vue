<template>
	<div class="fancy-short-banner-nine mt-170 md-mt-80">
		<div class="container">
			<div class="row">
				<div
					class="col-xl-8 col-lg-11 m-auto"
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<div class="title-style-seven text-center">
						<h2>200k+ Customers have our deski.Try it now!</h2>
						<p>
							Try it risk free — we don’t charge cancellation
							fees.
						</p>
					</div>
				</div>
			</div>
			<div
				data-aos="fade-up"
				data-aos-duration="1200"
				data-aos-delay="150"
			>
				<div class="dropdown download-btn">
					<button
						class="dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Get Deski app
					</button>
					<div
						class="dropdown-menu"
						aria-labelledby="dropdownMenuButton"
					>
						<a
							class="dropdown-item d-flex align-items-center"
							href="#"
						>
							<nuxt-img src="/images/icon/103.svg" alt="" />
							<span>IOS & Android</span>
						</a>
						<a
							class="dropdown-item d-flex align-items-center"
							href="#"
						>
							<nuxt-img src="/images/icon/104.svg" alt="" />
							<span>Mac & Windows</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- /.container -->
		<nuxt-img src="/images/shape/177.svg" alt="" class="shapes shape-one" />
		<nuxt-img src="/images/shape/178.svg" alt="" class="shapes shape-two" />
	</div>
</template>

<script>
export default {
	name: "ShortBanner",
};
</script>
