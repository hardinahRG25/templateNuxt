<template>
	<div class="feature-blog-four mt-250 md-mt-200">
		<div class="container">
			<div class="title-style-five text-center mb-70 md-mb-50">
				<h6>News & Updates</h6>
				<h2>Latest news & articles</h2>
			</div>

			<div class="row">
				<div
					v-for="blog in blogs.slice(0, 3)"
					:key="blog.id"
					class="col-lg-4"
					data-aos="fade-up"
					data-aos-duration="1200"
					:data-aos-delay="blog.delay"
				>
					<div class="feature-article-meta">
						<div class="img-meta">
							<nuxt-img :src="blog.img" alt="" />
						</div>
						<div class="post-meta">
							<h3>
								<NuxtLink :to="`/blog-details/${blog.id}`">{{
									blog.title
								}}</NuxtLink>
							</h3>
							<div class="author_info">
								{{ blog.author }}
								<span>{{ blog.position }}</span>
							</div>
						</div>
					</div>
					<!-- /.feature-article-meta -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import blogMixin from "@/mixin/blog-mixin";

export default {
	name: "FeatureBlog",
	mixins: [blogMixin],
};
</script>
