<template>
	<div
		:class="
			team_v2 ? 'team-section-one' : 'team-section-one pt-150 md-pt-100'
		"
	>
		<div class="container">
			<div v-if="!team_v2" class="title-style-one text-center">
				<h2>Our Leadership</h2>
			</div>
			<!-- /.title-style-one -->

			<div
				:class="
					team_v2
						? 'controls mb-100 md-mb-60'
						: 'controls mt-80 mb-100 md-mt-60 md-mb-60'
				"
			>
				<button
					type="button"
					:class="`control ${isActive === 'all' ? 'active' : ''} `"
					@click="handleItem('all')"
				>
					All
				</button>

				<button
					type="button"
					:class="`control ${
						isActive === 'leadership' ? 'active' : ''
					} `"
					@click="handleItem('leadership')"
				>
					Leadership
				</button>

				<button
					type="button"
					:class="`control ${
						isActive === 'designer' ? 'active' : ''
					} `"
					@click="handleItem('designer')"
				>
					Designer
				</button>

				<button
					type="button"
					:class="`control ${
						isActive === 'developer' ? 'active' : ''
					} `"
					@click="handleItem('developer')"
				>
					Developer
				</button>

				<button
					type="button"
					:class="`control ${
						isActive === 'marketing' ? 'active' : ''
					} `"
					@click="handleItem('marketing')"
				>
					Marketing
				</button>
			</div>

			<div class="mixitUp-container">
				<div v-for="team in t_items" :key="team.id" class="mix">
					<div class="team-member">
						<nuxt-img :src="team.img" alt="" />
						<h4>{{ team.name }}</h4>
						<strong>{{ team.title }}</strong>
					</div>
					<!-- /.team-member -->
				</div>

				<div class="gap"></div>
				<div class="gap"></div>
				<div class="gap"></div>
			</div>
			<!-- /.mixitUp-container -->
		</div>
	</div>
</template>

<script>
import teamMixin from "@/mixin/team-mixin";

export default {
	name: "TeamSection",
	mixins: [teamMixin],
	props: { team_v2: Boolean },
	data() {
		return {
			t_items: [],
			isActive: "all",
		};
	},
	methods: {
		handleItem(category) {
			this.isActive = category;
			if (category === "all") {
				return (this.t_items = this.teams.slice(18, 30));
			} else {
				return (this.t_items = this.teams.filter(
					(item) => item.category === category
				));
			}
		},
	},
	mounted() {
		this.t_items = this.teams.slice(18, 30);
	},
};
</script>
