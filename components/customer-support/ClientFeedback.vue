<template>
	<div class="client-feedback-slider-one pt-50 pb-170 md-pb-80">
		<div class="shapes-holder">
			<nuxt-img src="/images/shape/39.svg" alt="" />
			<nuxt-img
				src="/images/shape/42.svg"
				alt=""
				class="shapes shape-one"
			/>
			<nuxt-img
				src="/images/media/img_21.png"
				alt=""
				class="cp-img-one"
			/>
			<nuxt-img
				src="/images/media/img_22.png"
				alt=""
				class="cp-img-two"
			/>
			<nuxt-img
				src="/images/media/img_23.png"
				alt=""
				class="cp-img-three"
			/>
			<nuxt-img
				src="/images/media/img_24.png"
				alt=""
				class="cp-img-four"
			/>
			<div class="title-style-two">
				<h2>What’s <br />Our Client Say <br />About Us.</h2>
			</div>
		</div>
		<!-- /.shapes-holder -->
		<div class="container">
			<div class="row">
				<div class="col-lg-6 ms-auto">
					<div class="feedback-meta">
						<div class="watermark font-gilroy-bold">Feedback</div>
						<nuxt-img
							src="/images/icon/30.svg"
							alt=""
							class="icon"
						/>

						<swiper
							class="clientSliderOne"
							ref="mySwiper"
							:modules="modules"
							:loop="true"
							:navigation="{
								nextEl: '.prev_c',
								prevEl: '.next_c',
							}"
						>
							<swiper-slide
								v-for="testimonial in testimonialData"
								:key="testimonial.id"
							>
								<div class="item">
									<p class="font-rubik">
										{{ testimonial.desc }}
									</p>
									<div class="d-lg-flex align-items-center">
										<nuxt-img
											:src="testimonial.img"
											alt=""
											class="c_img"
										/>
										<div class="info">
											<strong>{{
												testimonial.name
											}}</strong>
											<span>{{ testimonial.title }}</span>
										</div>
									</div>
								</div>
							</swiper-slide>

							<ul class="d-flex slider-arrow mt-40">
								<li class="prev_c">
									<i class="flaticon-right-arrow"></i>
								</li>
								<li class="next_c">
									<i class="flaticon-right-arrow"></i>
								</li>
							</ul>
						</swiper>
					</div>
					<!-- /.feedback-meta -->
				</div>
			</div>
		</div>
		<!-- /.container -->
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

export default {
	name: "ClientFeedback",
	data() {
		return {
			testimonialData: [
				{
					id: 1,
					name: "Rashed kabir",
					title: "Designer",
					img: `/images/media/img_20.png`,
					desc: "Having a home based business is a wonderful asset to your life.The problem still stands it comes time advertise your business for a cheap cost.I know you have looked answer everywhere.",
				},
				{
					id: 2,
					name: "Zubayer Hasan",
					title: "Developer",
					img: `/images/media/img_20.png`,
					desc: "Having a home based business is a wonderful asset to your life.The problem still stands it comes time advertise your business for a cheap cost.I know you have looked answer everywhere.",
				},
			],
		};
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Navigation],
		};
	},
};
</script>
