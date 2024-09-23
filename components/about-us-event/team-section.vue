<template>
	<div class="team-section-four mt-250 md-mt-150">
		<nuxt-img src="/images/shape/129.svg" alt="" class="shapes shape-one" />
		<nuxt-img src="/images/shape/130.svg" alt="" class="shapes shape-two" />
		<div class="container">
			<div class="title-style-five text-center mb-90 md-mb-60">
				<h6>Our Team</h6>
				<h2>The team behind deski</h2>
			</div>

			<div class="team-wrapper">
				<div class="row">
					<div
						v-for="team in teams.slice(12, 18)"
						:key="team.id"
						class="col-lg-4 col-sm-6"
						data-aos="fade-up"
						data-aos-duration="1200"
						:data-aos-delay="team.delay"
					>
						<div class="team-member">
							<NuxtLink :to="`/team-details/${team.id}`">
								<div class="img-holder">
									<nuxt-img :src="team.img" alt="" />
								</div>
								<h6 class="name">{{ team.name }}</h6>
								<div class="position">{{ team.title }}</div>
							</NuxtLink>
						</div>
						<!-- /.team-member -->
					</div>
				</div>
				<nuxt-img
					src="/images/shape/126.svg"
					alt=""
					class="shapes shape-one"
				/>
			</div>
			<!-- /.team-wrapper -->
		</div>
	</div>
</template>

<script>
import teamMixin from "@/mixin/team-mixin";

export default {
	name: "TeamSection",
	mixins: [teamMixin],
};
</script>
