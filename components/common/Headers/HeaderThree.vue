<template>
	<div
		:class="
			isSticky
				? 'theme-main-menu sticky-menu theme-menu-three fixed'
				: 'theme-main-menu sticky-menu theme-menu-three'
		"
	>
		<div class="d-flex align-items-center justify-content-center">
			<div class="logo">
				<NuxtLink to="/">
					<nuxt-img src="/images/logo/deski_01.svg" alt="" />
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
						class="navbar-collapse collapse"
						id="collapsibleNavbar"
					>
						<div
							class="d-lg-flex justify-content-between align-items-center"
						>
							<!-- nav menu start -->
							<NavMenu />
							<!-- nav menu end -->

							<ul
								class="right-widget user-login-button d-flex align-items-center justify-content-center"
							>
								<li>
									<NuxtLink
										to="/login"
										class="signIn-action d-flex align-items-center"
									>
										<nuxt-img
											src="/images/icon/52.svg"
											alt=""
										/>
										<span>Login</span>
									</NuxtLink>
								</li>
								<li>
									<NuxtLink
										to="/sign-up"
										class="signUp-action d-flex align-items-center"
									>
										<span>Getting Started</span>
										<nuxt-img
											src="/images/icon/53.svg"
											alt=""
										/>
									</NuxtLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import NavMenu from "./NavMenu.vue";

export default {
	name: "HeaderThree",
	components: {
		NavMenu,
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
