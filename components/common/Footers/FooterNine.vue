<template>
	<footer class="theme-footer-eight mt-100">
		<div class="top-footer">
			<div class="container">
				<div class="row justify-content-end">
					<div class="col-xl-4 col-lg-3 col-12 footer-about-widget">
						<div class="logo">
							<NuxtLink to="/"
								><nuxt-img
									src="/images/logo/deski_06.svg"
									alt=""
							/></NuxtLink>
						</div>
						<ul class="font-rubik mt-10">
							<li>
								<a href="mailto:deskiinc@gmail.com"
									>deskiinc@gmail.com</a
								>
							</li>
							<li>
								<a href="tel:+761 412 3224" class="phone"
									>+761 412 3224</a
								>
							</li>
						</ul>
					</div>
					<!-- /.about-widget -->
					<div class="col-lg-3 col-md-4 footer-list">
						<h5 class="footer-title">Links</h5>
						<ul>
							<li><NuxtLink to="/event">Home</NuxtLink></li>
							<li><NuxtLink to="#">Product</NuxtLink></li>
							<li>
								<NuxtLink to="/pricing-event">Pricing</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/about-us-event"
									>About us</NuxtLink
								>
							</li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">Features</a></li>
							<li><a href="#">Demo the product</a></li>
						</ul>
					</div>
					<!-- /.footer-list -->
					<div class="col-lg-3 col-md-4 footer-list">
						<h5 class="footer-title">Legal</h5>
						<ul>
							<li><a href="#">Terms of use</a></li>
							<li><a href="#">Terms &amp; conditions</a></li>
							<li><a href="#">Privacy policy</a></li>
							<li><a href="#">Cookie policy</a></li>
						</ul>
					</div>
					<!-- /.footer-list -->
					<div class="col-xl-2 col-lg-3 col-md-4 footer-list">
						<h5 class="footer-title">Products</h5>
						<ul>
							<li><a href="#">Take the tour</a></li>
							<li><a href="#">Live chat</a></li>
							<li><a href="#">Self-service</a></li>
							<li><a href="#">Social</a></li>
							<li><a href="#">Mobile</a></li>
							<li><a href="#">deski Reviews</a></li>
						</ul>
					</div>
					<!-- /.footer-list -->
				</div>
				<!-- /.row -->
			</div>
			<!-- /.container -->
		</div>

		<div class="container">
			<div class="bottom-footer mt-50 md-mt-30">
				<div class="row">
					<div class="col-lg-6 order-lg-last mb-20">
						<ul
							class="d-flex justify-content-center justify-content-lg-end social-icon"
						>
							<li>
								<a href="#"
									><i
										class="fa fa-facebook"
										aria-hidden="true"
									></i
								></a>
							</li>
							<li>
								<a href="#"
									><i
										class="fa fa-twitter"
										aria-hidden="true"
									></i
								></a>
							</li>
							<li>
								<a href="#"
									><i
										class="fa fa-linkedin"
										aria-hidden="true"
									></i
								></a>
							</li>
						</ul>
					</div>
					<div class="col-lg-6 order-lg-first mb-20">
						<p class="copyright text-center text-lg-start">
							Copyright @2022 deski inc.
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "FooterNine",
};
</script>
