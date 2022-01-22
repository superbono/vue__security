<template>
  <div
    class="sidebar"
    :data-color="backgroundColor"
    :data-active-color="activeColor"
  >
    <div class="logo" style="width: 140px; height: 90px; border: none;">
<!--      <a-->
<!--        class="simple-text logo-mini"-->
<!--        aria-label="sidebar mini logo"-->
<!--        href="https://www.creative-tim.com/product/vue-paper-dashboard-laravel"-->
<!--      >-->
<!--        <div class="logo-img">-->
<!--          <img :src="logo" alt="" />-->
<!--        </div>-->
<!--      </a>-->
<!--      <a-->
<!--        class="simple-text logo-normal"-->
<!--        href="https://www.creative-tim.com/vue-paper-dashboard-laravel"-->
<!--        style="font-size: 30px; font-weight: bold"-->
<!--      >-->
      <a
          class="simple-text logo-normal"
          href="http://localhost:8090/components/buttons"
          style="font-size: 30px; font-weight: bold"
      >
<!--        {{ title }}-->
        <div style="width: 150px;height: 80px">
<!--          <img :src="require(`@/assets/img/pincar_logo.png`)">-->
          <img :src="require(`@/assets/img/logo_white.png`)" style="margin-left: -25px; opacity: .6; margin-top: -40px;">
        </div>
      </a>
    </div>
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <slot> </slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-item
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :link="link"
          >
            <sidebar-item
              v-for="(subLink, index) in link.children"
              :key="subLink.name + index"
              :link="subLink"
            >
            </sidebar-item>
          </sidebar-item>
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Vuex from "vuex";
export default {
  props: {
    title: {
      type: String,
      default: "PINCAR",
      description: "Sidebar title",
    },
    backgroundColor: {
      type: String,
      default: "black",
      validator: (value) => {
        let acceptedValues = ["white", "brown", "black"];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: "Sidebar background color (white|brown|black)",
    },
    activeColor: {
      type: String,
      default: "success",
      validator: (value) => {
        let acceptedValues = [
          "primary",
          "info",
          "success",
          "warning",
          "danger",
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
      description:
        "Sidebar active text color (primary|info|success|warning|danger)",
    },
    logo: {
      type: String,
      default: "/img/laravel-vue.svg",
      description: "Sidebar Logo",
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
      description:
        "Sidebar links. Can be also provided as children components (sidebar-item)",
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  methods: {
    async initScrollBarAsync() {
      let isWindows = navigator.platform.startsWith("Win");
      if (!isWindows) {
        return;
      }
      const PerfectScroll = await import("perfect-scrollbar");
      PerfectScroll.initialize(this.$refs.sidebarScrollArea);
    },
  },
  mounted() {
    this.initScrollBarAsync();
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
@media (min-width: 992px) {
  .navbar-search-form-mobile,
  .nav-mobile-menu {
    display: none;
  }
}
.simple-text {
  font-family: 'Julius Sans One', sans-serif;
}
</style>
