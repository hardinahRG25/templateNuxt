<template>
	<div class="fancy-text-block-six mt-250 md-mt-130">
		<div class="container">
			<div class="row">
				<div
					class="col-lg-6"
					data-aos="fade-right"
					data-aos-duration="1200"
				>
					<div class="title-style-three mb-35">
						<p>GET STARTED IN MINUTES</p>
						<h2>
							<span
								>3 Main Reaosn to
								<nuxt-img
									src="/images/shape/line-shape-3.svg"
									alt=""
							/></span>
							Choose us.
						</h2>
					</div>

					<!-- Accordion Style Two -->
					<div id="accordionExample" class="accordion-style-two pe-5">
						<div
							v-for="item in faqData"
							:key="item.id"
							class="accordion-item"
						>
							<div class="accordion-header" :id="item.headingNum">
								<h5 class="mb-0">
									<button
										class="btn btn-link accordion-button"
										type="button"
										data-bs-toggle="collapse"
										:data-bs-target="'#' + item.collapseNum"
										:aria-expanded="
											item.expanded ? 'true' : 'false'
										"
										:aria-controls="item.collapseNum"
									>
										{{ item.btnText }}
									</button>
								</h5>
							</div>
							<div
								:id="item.collapseNum"
								:class="item.collapseClass"
								:aria-labelledby="item.headingNum"
								data-bs-parent="#accordionExample"
								style=""
							>
								<div class="accordion-body">
									<p>{{ item.desc }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="img-meta-container"
			data-aos="fade-left"
			data-aos-duration="1200"
			data-aos-delay="100"
		>
			<nuxt-img src="/images/assets/feature-img-08.png" alt="" />
			<nuxt-img
				src="/images/shape/22.svg"
				alt=""
				class="shapes shape-one"
			/>
			<nuxt-img
				src="/images/shape/23.svg"
				alt=""
				class="shapes shape-two"
			/>
			<nuxt-img
				src="/images/shape/24.svg"
				alt=""
				class="shapes shape-three"
			/>
			<nuxt-img
				src="/images/shape/25.svg"
				alt=""
				class="shapes shape-four"
			/>
			<nuxt-img
				src="/images/shape/26.svg"
				alt=""
				class="shapes shape-five"
			/>
			<nuxt-img
				src="/images/shape/27.svg"
				alt=""
				class="shapes shape-six"
			/>
			<nuxt-img
				src="/images/shape/28.svg"
				alt=""
				class="shapes shape-seven"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "FancyTextBlock",
	data() {
		return {
			faqData: [
				{
					id: 1,
					headingNum: "headingOne",
					collapseNum: "collapseOne",
					btnText: "Register and create your first support portal",
					desc: "It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.",
					collapseClass: "accordion-collapse collapse show",
					expanded: true,
				},
				{
					id: 2,
					headingNum: "headingTwo",
					collapseNum: "collapseTwo",
					btnText: "Manage your dashbaord easily",
					desc: "It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.",
					collapseClass: "accordion-collapse collapse",
				},
				{
					id: 3,
					headingNum: "headingThree",
					collapseNum: "collapseThree",
					btnText: "Start giving support",
					desc: "It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.",
					collapseClass: "accordion-collapse collapse",
				},
			],
		};
	},
};
</script>
