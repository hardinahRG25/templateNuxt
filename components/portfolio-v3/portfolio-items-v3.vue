<template>
  <div>
    <div class="fancy-portfolio-four lg-container">
      <div class="container">
        <div class="top-border bottom-border pb-130 md-pb-90">
          <div
            class="controls po-control-one text-center mb-90 md-mb-50 mt-90 md-mt-60"
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
              :class="`control ${isActive === 'dev-3' ? 'active' : ''} `"
              @click="handleItem('dev-3')"
            >
              Development
            </button>
            <button
              type="button"
              :class="`control ${isActive === 'plugin-3' ? 'active' : ''} `"
              @click="handleItem('plugin-3')"
            >
              Plugin
            </button>
            <button
              type="button"
              :class="`control ${isActive === 'design-3' ? 'active' : ''} `"
              @click="handleItem('design-3')"
            >
              Design
            </button>
            <button
              type="button"
              :class="`control ${isActive === 'branding-3' ? 'active' : ''} `"
              @click="handleItem('branding-3')"
            >
              Branding
            </button>
          </div>

          <div class="mixitUp-container gutter-space-two d-flex flex-wrap">
            <div
              v-for="(item, imageIndex) in p_items"
              :key="item.id"
              class="mix"
              data-aos="fade-right"
            >
              <div class="portfolio-block-two position-relative">
                <img
                  :src="item.img"
                  alt=""
                  class="w-100 h-100 tran4s img-meta"
                />
                <button
                  @click="showImg(imageIndex)"
                  v-if="!item.video"
                  class="fancybox d-flex align-items-center justify-content-center"
                >
                  <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                </button>
                <button
                  v-else
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  class="fancybox d-flex align-items-center justify-content-center"
                >
                  <i class="fa fa-play" aria-hidden="true"></i>
                </button>
                <div class="hover-content">
                  <h3>
                    <NuxtLink :to="`/portfolio-details/${item.id}`">{{
                      item.title
                    }}</NuxtLink>
                  </h3>
                  <div class="tag">{{ item.tag }}</div>
                </div>
                <!-- /.hover-content -->
              </div>
              <!-- /.portfolio-block-two -->
            </div>
          </div>
          <!-- /.mixitUp-container -->

          <div class="text-center mt-90 md-mt-50">
            <h2 class="contact-title font-gordita">
              Do you have any projects? <br />Contact us.
            </h2>
            <NuxtLink to="/contact-us-cs" class="theme-btn-nine mt-35"
              >Contact Now</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>

    <!-- image light box start -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="p_items?.map((img) => img.img)"
      :index="index"
      @hide="handleHide"
    >
    </vue-easy-lightbox>
    <!-- image light box end -->

    <!-- VideoModal start -->
    <VideoModal videoId="aXFSJTjVjw0" />
    <!-- VideoModal end -->
  </div>
</template>

<script>
import VideoModal from "../common/Modal/VideoModal.vue";
import VueEasyLightbox from "vue-easy-lightbox";
import portfolioMixin from "@/mixin/portfolio-mixin";

export default {
  name: "PortfolioItems",
  mixins: [portfolioMixin],
  components: { VideoModal, VueEasyLightbox },
  data() {
    return {
      p_items: [],
      isActive: "all",
      visible: false,
      index: 0,
    };
  },
  methods: {
    handleItem(category) {
      this.isActive = category;
      if (category === "all") {
        return (this.p_items = this.portfolioItems.slice(14, 23));
      } else {
        return (this.p_items = this.portfolioItems.filter(
          (item) => item.category === category
        ));
      }
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  mounted() {
    this.p_items = this.portfolioItems.slice(14, 23);
  },
};
</script>
