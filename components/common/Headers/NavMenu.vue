<template>
	<ul class="navbar-nav">
		<li class="nav-item dropdown position-static active">
			<NuxtLink
				class="nav-link dropdown-toggle"
				href="/"
				data-bs-toggle="dropdown"
				>Home</NuxtLink
			>
			<div class="dropdown-menu">
				<!-- megaMenus start -->
				<megaMenus />
				<!-- megaMenus end -->
			</div>
			<!-- /.dropdown-menu -->
		</li>
		<li class="nav-item dropdown">
			<NuxtLink
				class="nav-link dropdown-toggle"
				to="#"
				data-bs-toggle="dropdown"
				>Portfolio</NuxtLink
			>
			<ul class="dropdown-menu">
				<li v-for="(menu, index) in portfolio_data" :key="index">
					<NuxtLink :to="menu.url" class="dropdown-item">{{
						menu.title
					}}</NuxtLink>
				</li>
			</ul>
			<!-- /.dropdown-menu -->
		</li>
		<li class="nav-item dropdown mega-dropdown-md">
			<NuxtLink
				class="nav-link dropdown-toggle"
				to="#"
				data-bs-toggle="dropdown"
				>Pages</NuxtLink
			>
			<ul class="dropdown-menu">
				<li>
					<div class="row">
						<div
							v-for="(item, index) in pages_menu_data"
							:key="index"
							class="col-lg-3"
						>
							<div class="menu-column">
								<h6 class="mega-menu-title">
									{{ item.title }}
								</h6>
								<ul class="mega-dropdown-list">
									<li
										v-for="(
											list, index
										) in item.dropdown_list"
										:key="index"
									>
										<NuxtLink
											:to="list.url"
											class="dropdown-item"
											>{{ list.title }}</NuxtLink
										>
									</li>
								</ul>
								<h6
									v-if="item.dropdown_list_2"
									class="mega-menu-title"
								>
									{{ item.title_2 }}
								</h6>
								<ul
									v-if="item.dropdown_list_2"
									class="mega-dropdown-list"
								>
									<li
										v-for="(
											list, index
										) in item.dropdown_list_2"
										:key="index"
									>
										<NuxtLink
											:to="list.url"
											class="dropdown-item"
											>{{ list.title }}</NuxtLink
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</li>
		<li class="nav-item dropdown">
			<NuxtLink
				class="nav-link dropdown-toggle"
				to="#"
				data-bs-auto-close="outside"
				data-bs-toggle="dropdown"
				>Blogs</NuxtLink
			>
			<ul class="dropdown-menu">
				<li class="dropdown-submenu dropdown">
					<NuxtLink
						to="#"
						class="dropdown-item dropdown-toggle"
						data-bs-auto-close="outside"
						data-bs-toggle="dropdown"
						>Third Level Menu</NuxtLink
					>
					<ul class="dropdown-menu">
						<li>
							<NuxtLink to="#" class="dropdown-item"
								>Menu Level 01</NuxtLink
							>
						</li>
						<li>
							<NuxtLink to="#" class="dropdown-item"
								>Menu Level 02</NuxtLink
							>
						</li>
						<li>
							<NuxtLink to="#" class="dropdown-item"
								>Menu Level 03</NuxtLink
							>
						</li>
					</ul>
				</li>
				<li v-for="(menu, index) in blog_menu_data" :key="index">
					<NuxtLink :to="menu.url" class="dropdown-item">{{
						menu.title
					}}</NuxtLink>
				</li>
			</ul>
			<!-- /.dropdown-menu -->
		</li>
		<li class="nav-item dropdown">
			<NuxtLink
				class="nav-link dropdown-toggle"
				to="#"
				data-bs-toggle="dropdown"
				>Docs</NuxtLink
			>
			<ul class="dropdown-menu">
				<li v-for="(menu, index) in doc_menu_data" :key="index">
					<NuxtLink
						:to="menu.url"
						class="dropdown-item"
						v-html="menu.title"
					></NuxtLink>
				</li>
			</ul>
			<!-- /.dropdown-menu -->
		</li>
	</ul>
</template>

<script>
import megaMenus from "./mega-menus.vue";

export default {
	name: "NavMenu",
	components: {
		megaMenus,
	},
	data() {
		return {
			portfolio_data: [
				{
					url: "/portfolio-v1",
					title: "Classic Style",
				},
				{
					url: "/portfolio-v2",
					title: "Grid 2 Columns",
				},
				{
					url: "/portfolio-v3",
					title: "Grid 3 Columns",
				},
				{
					url: "/portfolio-v4",
					title: "Gallery Slider",
				},
				{
					url: "/portfolio-v5",
					title: "Grid Single",
				},
				{
					url: "/portfolio-details",
					title: "Classic Details",
				},
			],
			pages_menu_data: [
				{
					title: "About Us",
					title_2: "Team",
					dropdown_list: [
						{
							url: "/about-us-cs",
							title: "Customer Support",
						},
						{
							url: "/about-us-event",
							title: "Event Organizer",
						},
						{
							url: "/about-us-management",
							title: "Project Management",
						},
						{
							url: "/about-us-doc",
							title: "Documentation",
						},
					],
					dropdown_list_2: [
						{
							url: "/team-v1",
							title: "Team Version 01",
						},
						{
							url: "/team-v2",
							title: "Team Version 02",
						},
						{
							url: "/team-details",
							title: "Team Details",
						},
					],
				},

				{
					title: "Pricing",
					title_2: "Contact Us",
					dropdown_list: [
						{
							url: "/pricing-cs",
							title: "Customer Support",
						},
						{
							url: "/pricing-event",
							title: "Event Organizer",
						},
						{
							url: "/pricing-management",
							title: "Project Management",
						},
					],
					dropdown_list_2: [
						{
							url: "/contact-us-cs",
							title: "Customer Support",
						},
						{
							url: "/contact-us-event",
							title: "Event Organizer",
						},
						{
							url: "/contact-us-management",
							title: "Project Management",
						},
						{
							url: "/contact-us-doc",
							title: "Documentation",
						},
					],
				},

				{
					title: "Services",
					title_2: "Feature",
					dropdown_list: [
						{
							url: "/services-v1",
							title: "Service Version 01",
						},
						{
							url: "/services-v2",
							title: "Service Version 02",
						},
						{
							url: "/services-v3",
							title: "Service Version 03",
						},
						{
							url: "/services-v4",
							title: "Service Version 04",
						},
						{
							url: "/service-details",
							title: "Service Details",
						},
					],
					dropdown_list_2: [
						{
							url: "/solution-management",
							title: "Our Solution",
						},
						{
							url: "/product-cs",
							title: "Product Feature",
						},
						{
							url: "/feature-cs",
							title: "Our Features",
						},
					],
				},

				{
					title: "Others",
					dropdown_list: [
						{
							url: "/faq-page",
							title: "FAQ",
						},
						{
							url: "/faq-details",
							title: "Faq Details",
						},
						{
							url: "/terms-condition",
							title: "Terms & Condition",
						},
						{
							url: "/login",
							title: "Login",
						},
						{
							url: "/sign-up",
							title: "Signup",
						},
						{
							url: "/404",
							title: "404 Error",
						},
					],
				},
			],
			blog_menu_data: [
				{
					url: "/blog-v1",
					title: "Blog Version 01",
				},
				{
					url: "/blog-v2",
					title: "Blog Version 02",
				},
				{
					url: "/blog-v3",
					title: "Blog Version 03",
				},
				{
					url: "/blog-v4",
					title: "Blog Version 04",
				},
				{
					url: "/blog-details",
					title: "Blog Details",
				},
			],
			doc_menu_data: [
				{
					url: "/doc-fullwidth",
					title: "Full Width",
				},
				{
					url: "/doc-full-width-banner",
					title: "Full Width Banner",
				},
				{
					url: "/doc-box",
					title: "Doc Box",
				},
				{
					url: "/doc-box-banner",
					title: "with Banner",
				},
				{
					url: "/changelog",
					title: 'Changelog <code class="text-danger">**</code>',
				},
			],
		};
	},
};
</script>
