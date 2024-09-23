<template>
	<div class="feature-blog-one pt-170 pb-120 md-pt-100 md-pb-60">
		<div class="container">
			<div
				class="header d-md-flex align-items-center justify-content-between mb-90 md-mb-40"
			>
				<div class="title-style-one">
					<h6 class="font-rubik">Our News</h6>
					<h2>Have any thought? Look here.</h2>
				</div>
				<!-- /.title-style-one -->
				<NuxtLink to="/blog-v1" class="theme-btn-one sm-mt-30"
					>Go to Blog</NuxtLink
				>
			</div>

			<div class="row justify-content-center">
				<div
					v-for="blog in blogs.slice(3, 6)"
					:key="blog.id"
					class="col-lg-4 col-md-6"
					data-aos="fade-up"
					data-aos-duration="1200"
					:data-aos-delay="blog.delay"
				>
					<div class="post-meta">
						<nuxt-img :src="blog.img" alt="" class="image-meta" />
						<div class="tag">{{ blog.tag }}</div>
						<h3>
							<NuxtLink
								:to="`/blog-details/${blog.id}`"
								class="title"
								>{{ blog.title }}</NuxtLink
							>
						</h3>
						<NuxtLink
							:to="`/blog-details/${blog.id}`"
							class="read-more d-flex justify-content-between align-items-center"
						>
							<span>Read More</span>
							<i class="flaticon-right-arrow"></i>
						</NuxtLink>
					</div>
					<!-- /.post-meta -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import blogMixin from "@/mixin/blog-mixin";

export default {
	name: "BlogArea",
	mixins: [blogMixin],
};
</script>
