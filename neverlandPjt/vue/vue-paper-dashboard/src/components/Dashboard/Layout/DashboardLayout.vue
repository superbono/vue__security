<template>
  <div class="wrapper">
    <side-bar
      :active-color="activeColor"
      :background-color="backgroundColor"
      type="sidebar"
    >
<!--      <user-menu></user-menu>-->
      <template slot-scope="props" slot="links">
<!--        <sidebar-item-->
<!--          :link="{-->
<!--            name: 'Dashboard',-->
<!--            icon: 'nc-icon nc-bank',-->
<!--            path: '/admin/overview',-->
<!--          }"-->
<!--        >-->
<!--        </sidebar-item>-->
<!--        <sidebar-item-->
<!--          opened-->
<!--          class="example"-->
<!--          :link="{ name: 'Examples (API)', icon: 'fab fa-vuejs fa-2x' }"-->
<!--        >-->
<!--          <sidebar-item-->
<!--            :link="{-->
<!--              name: 'User Profile',-->
<!--              path: '/examples/user-profile',-->
<!--            }"-->
<!--          />-->
<!--          <sidebar-item-->
<!--            :link="{-->
<!--              name: 'User Management',-->
<!--              path: '/examples/user-management/list-users',-->
<!--            }"-->
<!--          />-->
<!--        </sidebar-item>-->
<!--        <sidebar-item-->
<!--          :link="{-->
<!--            name: 'Typography',-->
<!--            path: '/components/typography',-->
<!--            icon: 'nc-icon nc-caps-small',-->
<!--          }"-->
<!--        />-->
<!--        <sidebar-item-->
<!--            :link="{-->
<!--            name: 'Table List',-->
<!--            icon: 'nc-icon nc-single-copy-04',-->
<!--            path: '/table-list/regular',-->
<!--          }"-->
<!--        >-->
<!--        <sidebar-item-->
<!--            :link="{-->
<!--            name: 'Notifications',-->
<!--            path: '/components/notifications',-->
<!--            icon: 'nc-icon nc-bell-55',-->
<!--          }"-->
<!--        >-->
<!--        </sidebar-item>-->
<!--        <sidebar-item-->
<!--            :link="{-->
<!--            name: 'Icons',-->
<!--            icon: 'nc-icon nc-planet',-->
<!--            path: '/components/icons',-->
<!--          }"-->
<!--        >-->
<!--        </sidebar-item>-->
<!--        <sidebar-item-->
<!--            :link="{-->
<!--            name: 'Maps',-->
<!--            icon: 'nc-icon nc-pin-3',-->
<!--            path: '/maps/google',-->
<!--          }"-->
<!--        >-->
<!--        </sidebar-item>-->
<!--        <span style="color: #fff">asdffds</span>-->
        <drop-down
            icon="nc-icon nc-settings-gear-65"
            tag="li"
            position="right"
            direction="none"
            class="nav-item btn-rotate dropdown"
        >
        <sidebar-item
            :link="{
            name: '상담',
            path: '/components/typography',
            icon: 'nc-icon nc-badge',
          }"
        />
          <a
              slot="title"
              slot-scope="{ isOpen }"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              :aria-expanded="isOpen"
          >
<!--            <i class="nc-icon nc-settings-gear-65"></i>-->
            <span style="margin-right: 10px;font-size: 6px; opacity: 1">상담</span>
            <i class="nc-icon nc-badge"></i>
<!--            <p>-->
<!--              <span class="d-lg-none d-md-block">Profile</span>-->
<!--            </p>-->
          </a>
          <a class="dropdown-item" href="http://localhost:8090/components/cs-new" @click="goToProfile">상담등록</a>
          <a class="dropdown-item" @click="logout" href="http://localhost:8090/components/cs-contract">상담계약</a>
        </drop-down>
        <drop-down
            icon="nc-icon nc-settings-gear-65"
            tag="li"
            position="right"
            direction="none"
            class="nav-item btn-rotate dropdown"
        >
        <sidebar-item
          :link="{
            name: '계약',
            icon: 'nc-icon nc-single-copy-04',
            path: '/table-list/regular',
          }"
        >
        </sidebar-item>
          <a
              slot="title"
              slot-scope="{ isOpen }"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              :aria-expanded="isOpen"
          >
            <!--            <i class="nc-icon nc-settings-gear-65"></i>-->
            <span style="margin-right: 10px;font-size: 6px;">계약</span>
            <i class="nc-icon nc-single-copy-04"></i>
<!--            <p>-->
<!--              <span class="d-lg-none d-md-block">Profile</span>-->
<!--            </p>-->
          </a>
          <a class="dropdown-item" href="http://localhost:8090/table-list/ct-new" @click="goToProfile">계약등록</a>
          <a class="dropdown-item" @click="logout" href="http://localhost:8090/table-list/ct-refer">계약조회</a>
        </drop-down>
        <drop-down
            icon="nc-icon nc-settings-gear-65"
            tag="li"
            position="right"
            direction="none"
            class="nav-item btn-rotate dropdown"
        >
        <sidebar-item
          :link="{
            name: '인도',
            path: '/components/notifications',
            icon: 'nc-icon nc-bell-55',
          }"
        >
        </sidebar-item>
          <a
              slot="title"
              slot-scope="{ isOpen }"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              :aria-expanded="isOpen"
          >
            <span style="margin-right: 10px;font-size: 6px;">인도</span>
            <i class="nc-icon nc-bell-55"></i>
<!--            <p>-->
<!--              <span class="d-lg-none d-md-block">Profile</span>-->
<!--            </p>-->
          </a>
          <a class="dropdown-item" href="http://localhost:8090/table-list/cd-new" @click="goToProfile">인도등록</a>
          <a class="dropdown-item" @click="logout" href="http://localhost:8090/table-list/cd-refer">인도현황</a>
        </drop-down>
        <drop-down
            icon="nc-icon nc-settings-gear-65"
            tag="li"
            position="right"
            direction="none"
            class="nav-item btn-rotate dropdown"
        >
        <sidebar-item
          :link="{
            name: '통계',
            icon: 'nc-icon nc-chart-pie-36',
            path: '/components/icons',
          }"
        >
        </sidebar-item>
          <a
              slot="title"
              slot-scope="{ isOpen }"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              :aria-expanded="isOpen"
          >
            <span style="margin-right: 10px;font-size: 6px;">통계</span>
            <i class="nc-icon nc-chart-pie-36"></i>
            <!--            <p>-->
            <!--              <span class="d-lg-none d-md-block">Profile</span>-->
            <!--            </p>-->
          </a>
          <a class="dropdown-item" href="http://localhost:8090/table-list/ct-status" @click="goToProfile">총 계약현황</a>
          <a class="dropdown-item" @click="logout" href="http://localhost:8090/table-list/cd-status">총 인도현황</a>
        </drop-down>
        <drop-down
            icon="nc-icon nc-settings-gear-65"
            tag="li"
            position="right"
            direction="none"
            class="nav-item btn-rotate dropdown"
        >
        <sidebar-item
          :link="{
            name: '관리자관리',
            icon: 'nc-icon nc-settings-gear-65',
            path: '/maps/google',
          }"
        >
        </sidebar-item>
          <a
              slot="title"
              slot-scope="{ isOpen }"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              :aria-expanded="isOpen"
          >
            <span style="margin-right: 10px;font-size: 5px;">관리자</span>
            <i class="nc-icon nc-settings-gear-65"></i>
            <!--            <p>-->
            <!--              <span class="d-lg-none d-md-block">Profile</span>-->
            <!--            </p>-->
          </a>
          <a class="dropdown-item" href="http://localhost:8090/table-list/ct-status" @click="goToProfile">총 계약현황</a>
          <a class="dropdown-item" @click="logout" href="http://localhost:8090/table-list/cd-status">총 인도현황</a>
        </drop-down>
<!--        <sidebar-item-->
<!--          :link="{-->
<!--            name: 'Upgrade to PRO',-->
<!--            icon: 'fa fa-download',-->
<!--            target: '_blank',-->
<!--            isRoute: true,-->
<!--            path:-->
<!--              'https://www.creative-tim.com/product/vue-paper-dashboard-pro-laravel',-->
<!--          }"-->
<!--          class="btn-sm btn-danger"-->
<!--        ></sidebar-item>-->
      </template>
    </side-bar>
    <sidebar-share
      :background-color.sync="backgroundColor"
      :active-color.sync="activeColor"
    >
    </sidebar-share>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import UserMenu from "src/components/UIComponents/SidebarPlugin/UserMenu.vue";
import SidebarItem from "../../UIComponents/SidebarPlugin/SidebarItem.vue";
import SidebarShare from "./SidebarSharePlugin";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    UserMenu,
    SidebarItem,
    SidebarShare,
  },
  data() {
    return {
      backgroundColor: "black",
      activeColor: "success",
    };
  },

  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>

<style>
</style>