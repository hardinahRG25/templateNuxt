<template>
	<div class="clearfix">
		<HeaderThree />
		<FancyHero />
		<DocArea :doc_banner="true" />
	</div>
</template>

<script>
import HeaderThree from "../common/Headers/HeaderThree.vue";
import FancyHero from "./fancy-hero.vue";
import DocArea from "../doc-fullwidth/doc-area-fullwidth.vue";

export default {
	name: "DocFullWidthBannerMain",
	components: { HeaderThree, FancyHero, DocArea },
};
</script>
