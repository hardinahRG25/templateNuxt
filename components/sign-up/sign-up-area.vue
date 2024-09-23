<template>
	<div class="user-data-page clearfix d-lg-flex">
		<div
			class="illustration-wrapper d-flex align-items-center justify-content-between flex-column"
		>
			<h3 class="font-rubik">
				We have a “strategic” plan its <br />
				called doing things.
			</h3>
			<div class="illustration-holder">
				<nuxt-img
					src="/images/assets/ils_08.svg"
					alt=""
					class="illustration"
				/>
				<nuxt-img
					src="/images/assets/ils_08.1.svg"
					alt=""
					class="shapes shape-one"
				/>
				<nuxt-img
					src="/images/assets/ils_08.2.svg"
					alt=""
					class="shapes shape-two"
				/>
			</div>
		</div>
		<!-- /.illustration-wrapper -->

		<div class="form-wrapper">
			<div class="d-flex justify-content-between">
				<div class="logo">
					<NuxtLink to="/">
						<nuxt-img src="/images/logo/deski_01.svg" alt="" />
					</NuxtLink>
				</div>
				<NuxtLink to="/" class="font-rubik go-back-button"
					>Go to home</NuxtLink
				>
			</div>
			<form @submit.prevent="onSubmit" class="user-data-form mt-30">
				<h2>Join with thousands of startup!</h2>
				<p class="header-info pt-30 pb-50">
					Already have an account?
					<NuxtLink to="/login">Login</NuxtLink>
				</p>

				<div class="row">
					<div class="col-12">
						<div class="input-group-meta mb-50">
							<label>Full Name</label>
							<input
								required
								type="text"
								placeholder="Melvin Carlson"
							/>
						</div>
					</div>
					<div class="col-12">
						<div class="input-group-meta mb-50">
							<label>Email</label>
							<input
								required
								type="email"
								placeholder="bolcovfed@ce.edu"
							/>
						</div>
					</div>
					<div class="col-12">
						<div class="input-group-meta mb-50">
							<label>Password</label>
							<input
								required
								:type="hidePassword ? 'text' : 'password'"
								placeholder="Enter Password"
								class="pass_log_id"
							/>
							<span class="placeholder_icon">
								<span
									:class="`passVicon ${
										hidePassword ? 'hide-pass' : ''
									}`"
									@click="handleHidePassword"
								>
									<nuxt-img
										src="/images/icon/view.svg"
										alt=""
									/>
								</span>
							</span>
						</div>
					</div>
					<div class="col-12">
						<div class="input-group-meta mb-15">
							<label>Re-type Password</label>
							<input
								required
								:type="
									hideConfirmPassword ? 'text' : 'password'
								"
								placeholder="Enter Password"
								class="pass_log_id"
							/>
							<span class="placeholder_icon">
								<span
									:class="`passVicon ${
										hideConfirmPassword ? 'hide-pass' : ''
									}`"
									@click="handleHideConfirmPassword"
								>
									<nuxt-img
										src="/images/icon/view.svg"
										alt=""
									/>
								</span>
							</span>
						</div>
					</div>
					<div class="col-12">
						<div
							class="agreement-checkbox d-flex justify-content-between align-items-center sm-mt-10"
						>
							<div>
								<input
									required
									type="checkbox"
									id="agree_to_policy"
								/>
								<label for="agree_to_policy"
									>By clicking "SIGN UP" I agree to the Terms
									and Conditions and Privacy Policy.</label
								>
							</div>
						</div>
						<!-- /.agreement-checkbox -->
					</div>
					<div class="col-12">
						<button class="theme-btn-one mt-30 mb-50">
							Sign Up
						</button>
					</div>
					<div class="col-12">
						<p class="text-center font-rubik copyright-text">
							© Copyright 2021 deski
						</p>
					</div>
				</div>
			</form>
		</div>
		<!-- /.form-wrapper -->
	</div>
</template>

<script>
export default {
	name: "SignUpArea",
	data() {
		return {
			hidePassword: false,
			hideConfirmPassword: false,
		};
	},
	methods: {
		onSubmit() {
			console.log("Submitted");
		},
		handleHidePassword() {
			this.hidePassword = !this.hidePassword;
		},
		handleHideConfirmPassword() {
			this.hideConfirmPassword = !this.hideConfirmPassword;
		},
	},
};
</script>
