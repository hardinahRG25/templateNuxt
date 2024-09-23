<template>
	<div
		:class="`theme-main-menu sticky-menu theme-menu-five ${
			isSticky ? 'fixed' : ''
		}`"
	>
		<div class="d-flex align-items-center justify-content-center">
			<div class="logo">
				<NuxtLink to="/">
					<nuxt-img src="/images/logo/deski_06.svg" alt="" />
				</NuxtLink>
			</div>

			<nav id="mega-menu-holder" class="navbar navbar-expand-lg">
				<div class="nav-container">
					<button
						class="navbar-toggler"
						data-bs-toggle="collapse"
						data-bs-target="#collapsibleNavbar"
						:class="
							menuActive
								? 'navbar-toggler open'
								: 'navbar-toggler'
						"
						@click="menuActive = !menuActive"
					>
						<span></span>
					</button>
					<div
						:class="
							menuActive
								? 'navbar-collapse collapse ss'
								: 'navbar-collapse collapse'
						"
						id="collapsibleNavbar"
					>
						<div
							class="d-lg-flex justify-content-between align-items-center"
						>
							<ul
								class="navbar-nav main-side-nav font-gordita"
								id="one-page-nav"
							>
								<li class="nav-item dropdown position-static">
									<a
										class="nav-link dropdown-toggle"
										href="#"
										data-bs-toggle="dropdown"
										>Home</a
									>
									<div class="dropdown-menu">
										<!-- megaMenus start -->
										<megaMenus />
										<!-- megaMenus end -->
									</div>
								</li>
								<li class="nav-item">
									<a href="#feature" class="nav-link"
										><span
											@click.self="
												menuActive = !menuActive
											"
											>Features</span
										></a
									>
								</li>
								<li class="nav-item">
									<a href="#effect" class="nav-link"
										><span
											@click.self="
												menuActive = !menuActive
											"
											>Effects</span
										></a
									>
								</li>
								<li class="nav-item">
									<a href="#template" class="nav-link"
										><span
											@click.self="
												menuActive = !menuActive
											"
											>Template</span
										></a
									>
								</li>
								<li class="nav-item">
									<a href="#feedback" class="nav-link"
										><span
											@click.self="
												menuActive = !menuActive
											"
											>Feedback</span
										></a
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div class="right-widget">
				<ul class="d-flex align-items-center">
					<li>
						<NuxtLink
							to="/login"
							class="signIn-action d-flex align-items-center"
						>
							<nuxt-img src="/images/icon/52.svg" alt="" />
							<span>login</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/sign-up" class="signup-btn"
							><span>Sign up</span>- It’s Free</NuxtLink
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import megaMenus from "./mega-menus.vue";

export default {
	name: "HeaderEight",
	components: {
		megaMenus,
	},
	data() {
		return {
			isSticky: false,
			menuActive: false,
		};
	},
	methods: {
		handleSticky() {
			if (window.scrollY > 80) {
				this.isSticky = true;
			} else {
				this.isSticky = false;
			}
		},
	},
	mounted() {
		window.addEventListener("scroll", this.handleSticky);
	},
};
</script>
