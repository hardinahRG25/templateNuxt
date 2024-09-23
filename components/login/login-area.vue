<template>
	<div class="user-data-page clearfix d-lg-flex">
		<div
			class="illustration-wrapper d-flex align-items-center justify-content-between flex-column"
		>
			<h3 class="font-rubik">
				Want your best managment <br />software?
				<NuxtLink to="/sign-up">sign up</NuxtLink>
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
			<form
				@submit.prevent="onSubmit"
				class="user-data-form mt-80 md-mt-40"
			>
				<h2>
					Hi buddy, welcome <br />
					Back!
				</h2>
				<p class="header-info pt-30 pb-50">
					Still don't have an account?
					<NuxtLink to="/sign-up">Sign up</NuxtLink>
				</p>

				<div class="row">
					<div class="col-12">
						<div class="input-group-meta mb-80 sm-mb-70">
							<label>Email</label>
							<input
								required
								type="email"
								placeholder="bolcovfed@ce.edu"
							/>
						</div>
					</div>
					<div class="col-12">
						<div class="input-group-meta mb-15">
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
						<div
							class="agreement-checkbox d-flex justify-content-between align-items-center"
						>
							<div>
								<input required type="checkbox" id="remember" />
								<label for="remember">Keep me logged in</label>
							</div>
							<a href="#">Forget Password?</a>
						</div>
						<!-- /.agreement-checkbox -->
					</div>
					<div class="col-12">
						<button class="theme-btn-one mt-50 mb-50">Login</button>
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
	name: "LoginArea",
	data() {
		return {
			hidePassword: false,
		};
	},
	methods: {
		onSubmit() {
			console.log("Submitted");
		},
		handleHidePassword() {
			this.hidePassword = !this.hidePassword;
		},
	},
};
</script>
