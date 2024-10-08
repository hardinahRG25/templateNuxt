<template>
	<div :class="`doc-container ${doc_banner ? 'mt-70 sm-m0' : 'top-border'}`">
		<div class="container">
			<div class="row flex-xl-nowrap g-0">
				<!-- ****************************** DOC SIDEBAR ********************************* -->
				<div class="col-xl-3 col-md-4 doc-sidebar">
					<div class="clearfix">
						<button
							class="btn btn-link d-md-none collapsed"
							type="button"
							data-bs-target="#doc-sidebar-nav"
							data-bs-toggle="collapse"
							aria-controls="doc-sidebar-nav"
							aria-expanded="false"
							aria-label="Toggle docs navigation"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 30 30"
								width="30"
								height="30"
								focusable="false"
							>
								<title>Menu</title>
								<path
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-miterlimit="10"
									d="M4 7h22M4 15h22M4 23h22"
								></path>
							</svg>
						</button>
					</div>
					<nav
						class="doc-links collapse clearfix nav-fix"
						id="doc-sidebar-nav"
					>
						<div class="search-form">
							<form @submit.prevent="onSubmit">
								<input
									type="text"
									placeholder="Search here.."
								/>
								<button>
									<nuxt-img
										src="/images/icon/59.svg"
										alt=""
									/>
								</button>
							</form>
						</div>
						<ul class="list-item">
							<li class="dropdown-holder">
								<h4>Getting Started</h4>
								<ul class="sub-menu show">
									<li><a href="#">Quick start</a></li>
									<li>
										<a href="#" class="sec-menu"
											>Installation</a
										>
										<ul class="sub-menu main-side-nav open">
											<li>
												<a
													href="#installing"
													class="nav-link"
													>Installing Deski</a
												>
												<a
													href="#verifying"
													class="nav-link"
													>Verifying Installation</a
												>
												<a
													href="#manual-installation"
													class="nav-link"
													>Manual Installation</a
												>
												<a
													href="#running-example"
													class="nav-link"
													>Running example website</a
												>
												<a
													href="#launching-server"
													class="nav-link"
													>Launching the server</a
												>
												<a
													href="#loading-dialog"
													class="nav-link"
													>Loading dialog</a
												>
											</li>
										</ul>
									</li>
									<li><a href="#">Site Preparation</a></li>
									<li><a href="#">Manual Installation</a></li>
									<li>
										<a href="#">Publishing your site</a>
									</li>
								</ul>
							</li>
							<li class="dropdown-holder">
								<h4>Customization</h4>
								<ul class="sub-menu">
									<li><a href="#">Theme color</a></li>
									<li><a href="#">Header</a></li>
									<li><a href="#">Blog widget</a></li>
									<li><a href="#">Theme Footer</a></li>
								</ul>
							</li>
							<li class="dropdown-holder">
								<h4>Layout</h4>
								<ul class="sub-menu">
									<li><a href="#">Box Layout</a></li>
									<li><a href="#">Full width layout</a></li>
								</ul>
							</li>
							<li class="dropdown-holder">
								<h4>Table of Content</h4>
								<ul class="sub-menu">
									<li><a href="#">HTML Structure</a></li>
									<li><a href="#">Favicon Settings</a></li>
									<li><a href="#">Logo Settings</a></li>
									<li><a href="#">CSS Structure</a></li>
								</ul>
							</li>
							<li class="dropdown-holder">
								<h4>API</h4>
								<ul class="sub-menu">
									<li><a href="#">Getting started</a></li>
									<li><a href="#">Subscriptions</a></li>
									<li><a href="#">Invoices</a></li>
									<li><a href="#">Refunds</a></li>
								</ul>
							</li>
						</ul>
					</nav>
					<!-- /.doc-links -->
				</div>
				<!-- /.doc-sidebar -->
				<!-- ****************************** DOC MAIN BODY ********************************* -->
				<main class="col-xl-9 col-md-8 doc-main-body">
					<h2>Installation</h2>
					<h3 id="installing">Installing deski</h3>
					<p>
						Deski was designed from the ground up to be easily
						installed and used to get your website up and running
						quickly.
					</p>
					<div class="mark-blue">
						<pre><span class="s1">npm</span> i deski-cli-g</pre>
					</div>
					<!-- /.mark-blue -->
					<h3 id="verifying">Verifying Installation</h3>
					<p>
						If you want to write the documentation in the
						<code>./docs</code> subdirectory, you can use the
						<code>init</code> command.
					</p>
					<div class="mark-red">
						<pre>deski init./docs</pre>
					</div>
					<!-- /.mark-red -->
					<p>
						Create a project, if none exists, and change your
						directory to this project's root.
					</p>
					<p>
						You will be creating the docs in this directory. The
						root directory may contain other files. The Docusaurus
						installation script will create two new directories:
						<code>docs</code> and <code>website.</code>
					</p>
					<div class="mark-red">
						<pre>
You have to be on Node >= 10.9.0 and Yarn >= 1.5.</pre
						>
					</div>
					<!-- /.mark-red -->
					<div class="mark-red">
						<pre>if you don't have Node 1.8.2+ or if you prefer to install deski globally, run  <span class="s1">yarn global add deski-init</span>  or  <span class="s1">npm install --global deski-init</span>. After that, run docusaurus-init.</pre>
					</div>
					<!-- /.mark-blue -->
					<h3 id="manual-installation">Manual Installation</h3>
					<p>
						If you don't like <code>npm</code> or have trouble
						installing the tool, you can manually create
						<code>index.html</code>:
					</p>
					<pre
						class="bg-black"
					><code><span class="s1">&#60;!-- index.html --&#62;</span>

<span class="s1">&#60;!DOCTYPE html&#62;</span>
<span class="s2">&#60;html&#62;</span>
<span class="s2">&#60;head&#62;</span>
    <span class="s2">&#60;meta http-equiv="<span class="s3">X-UA-Compatible</span>" <span class="s1">content</span>="<span class="s3">IE=edge,chrome=1</span>"&#62;</span>
    <span class="s2">&#60;meta name="<span class="s3">viewport</span>" <span class="s1">content</span>="<span class="s3">width=device-width,initial-scale=1</span>"&#62;</span>
    <span class="s2">&#60;meta charset="<span class="s3">UTF-8</span>"&#62;</span>
    <span class="s2">&#60;link rel="stylesheet" <span class="s1">href</span>="<span class="s3">//cdn.jsdelivr.net/npm/docsify@4/themes/vue.css</span>"&#62;</span>
<span class="s2">&#60;/head&#62;</span>
<span class="s2">&#60;body&#62;</span>
    <span class="s2">&#60;div id="<span class="s3">app</span>"&#62;</span>
    <span class="s2">&#60;/div&#62;</span>
    <span class="s2">&#60;script&#62;</span>
        <span class="s2">window.$docsify = {</span>
        <span class="s2">//....</span>
        <span class="s2">}</span>
    <span class="s2">&#60;/script&#62;</span>
    <span class="s2">&#60;script src="<span class="s3">//cdn.jsdelivr.net/npm/docsify@4</span>"&#62;</span><span class="s2">&#60;/script&#62;</span>
<span class="s2">&#60;/body&#62;</span>
<span class="s2">&#60;/html&#62;</span></code>
							</pre>
					<!-- /.bg-black -->
					<div class="mark-blue">
						<pre>Note that in both of the examples below, docsify URLs will need to be manually updated when a new version of deski is released (e.g.  <code>v4.x.x => v5.x.x</code> ). Check the docsify website periodically to see if a new major version has been released.</pre>
					</div>
					<!-- /.mark-blue -->
					<h3 id="running-example">Running Example Website</h3>
					<p>
						After running the Deski initialization script,
						docusaurus-init as described in the Installation
						section, you will have a runnable, example website to
						use as your site's base. To run:
					</p>
					<ul class="list-item-one">
						<li>
							It can have an identifier which is either a number
							or a string.
						</li>
						<li>
							Loads navbar from the Markdown file
							<code>_navbar.md</code> if true, else loads it from
							the path specified.
						</li>
						<li>
							Load the example site at
							<code>http://localhost:3000</code> if it did not
							already open automatically. If port
							<code>3000</code> has already been taken, another
							port will be used. Look at the console messages to
							see which
						</li>
					</ul>
					<nuxt-img
						src="/images/doc/img_01.png"
						alt=""
						class="img-meta"
					/>
					<h3 id="launching-server">Launching the server</h3>
					<p>
						If you are behind a corporate proxy, you need to disable
						it for the development server requests. It can be using
						the <code>NO_PROXY</code> environment variable.
					</p>
					<div class="mark-red">
						<pre>window.$deski = { <br> name: <span class="s1"><code>'&#60;span&#62;deski&#60;/span&#62;'</code></span>, <br>};</pre>
					</div>
					<!-- /.mark-red -->
					<h3 id="loading-dialog">Loading dialog</h3>
					<div class="mark-red">
						<pre>&#60;!-- index.html --&#62; <br><br>&#60;div id="<span class="s1">app</span>"&#62;Please wait...&#60;/div&#62;</pre>
					</div>
					<!-- /.mark-red -->
					<p>
						You should set the <code>data-app</code> attribute if
						you changed <code>el</code> :
					</p>
					<div class="mark-blue">
						<pre>&#60;!-- index.html --&#62; <br><br>&#60;div data-app id="<span class="s1">main</span>"&#62;Please wait...&#60;/div&#62; <br><span class="s2">&#60;script&#62;</span>
    <span class="s2">window.$docsify = {</span>
    <span class="s2">el: '<span class="s1">#main</span>'</span>
    <span class="s2">}</span>
<span class="s2">&#60;/script&#62;</span></pre>
					</div>
					<!-- /.mark-blue -->
					<p>
						You can update to the latest version of Docusaurus by:
					</p>
					<pre
						class="bg-black"
					><code><span>yarn <span class="s3">upgrade</span> deski --latest</span></code>
							</pre>
					<!-- /.bg-black -->

					<div class="doc-pagination pt-40">
						<ul
							class="d-flex align-items-center justify-content-between"
						>
							<li class="d-flex align-items-center">
								<a href="#"
									><i
										class="fa fa-angle-left"
										aria-hidden="true"
									></i></a
								>&nbsp;&nbsp;&nbsp;
								<span>Quick Start</span>
							</li>
							<li class="d-flex align-items-center">
								<span>Site Preparation</span> &nbsp;&nbsp;&nbsp;
								<a href="#"
									><i
										class="fa fa-angle-right"
										aria-hidden="true"
									></i
								></a>
							</li>
						</ul>
					</div>
				</main>
				<!-- /.doc-main-body -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DocArea",
	props: { doc_banner: Boolean },
	methods: {
		onSubmit() {
			console.log("Submitted");
		},
	},
};
</script>
