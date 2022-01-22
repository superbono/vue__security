import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'

//import middleware
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
const Overview = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Overview.vue')
const Widgets = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Widgets.vue')

// Pages
import User from 'src/components/Dashboard/Views/Pages/UserProfile.vue'
import TimeLine from 'src/components/Dashboard/Views/Pages/TimeLinePage.vue'
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Register from 'src/components/Dashboard/Views/Pages/Register.vue'
import Lock from 'src/components/Dashboard/Views/Pages/Lock.vue'

import PasswordReset from "src/components/Dashboard/Views/Password/Reset.vue";
import PasswordEmail from "src/components/Dashboard/Views/Password/Email.vue";

// Components pages
import Buttons from 'src/components/Dashboard/Views/Components/Buttons.vue'
import GridSystem from 'src/components/Dashboard/Views/Components/GridSystem.vue'
import Panels from 'src/components/Dashboard/Views/Components/Panels.vue'
import SweetAlert from 'src/components/Dashboard/Views/Components/SweetAlert.vue'
import Notifications from 'src/components/Dashboard/Views/Components/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Components/Icons.vue'
import Typography from 'src/components/Dashboard/Views/Components/Typography.vue'
import CsContract from "@/components/Dashboard/Views/Components/CsContract";
import CsNew from "@/components/Dashboard/Views/Components/CsNew";
import CtNew from "@/components/Dashboard/Views/Components/CtNew";
import CtRefer from "@/components/Dashboard/Views/Components/CtRefer";
import CarDeliveryNew from "@/components/Dashboard/Views/Components/CarDeliveryNew";
import CarDeliveryRefer from "@/components/Dashboard/Views/Components/CarDeliveryRefer";
import CtStatus from "@/components/Dashboard/Views/Components/CtStatus";
import CdStatus from "@/components/Dashboard/Views/Components/CdStatus";
import AdStatus from "@/components/Dashboard/Views/Components/AdStatus";

// TableList pages
const RegularTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/RegularTables.vue');

// Maps pages
const GoogleMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/GoogleMaps.vue')

// Charts
const Charts = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Charts.vue')

// Example pages
const UserProfile = () => import('src/components/Dashboard/Views/Examples/UserProfile.vue');
// // User Management
const ListUserPage = () => import("src/components/Dashboard/Views/Examples/UserManagement/ListUserPage.vue");

let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      component: GridSystem
    },
    {
      path: 'panels',
      name: 'Panels',
      component: Panels
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      component: SweetAlert
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: 'cs-contract',
      name: 'cs-contract',
      component: CsContract
    },
    {
      path: 'cs-new',
      name: 'cs-new',
      component: CsNew
    }

  ]
}

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      component: RegularTables
    },
    {
      path: 'ct-new',
      name: 'ct-new',
      component: CtNew
    },
    {
      path: 'ct-refer',
      name: 'ct-refer',
      component: CtRefer
    },
    {
      path: 'cd-new',
      name: 'cd-new',
      component: CarDeliveryNew
    },
    {
      path: 'cd-refer',
      name: 'cd-refer',
      component: CarDeliveryRefer
    },
    {
      path: 'ct-status',
      name: 'ct-status',
      component: CtStatus
    },
    {
      path: 'cd-status',
      name: 'cd-status',
      component: CdStatus
    }
  ]
}

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      component: GoogleMaps
    },
    {
      path: 'ad-status',
      name: 'ad-status',
      component: AdStatus
    }
  ]
}

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: User
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      component: TimeLine
    }
  ]
}

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login,
  meta: { middleware: guest }
}

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register,
  meta: { middleware: guest }
}

let lockPage = {
  path: '/lock',
  name: 'Lock',
  component: Lock
}
let forgotPassword = {
  path: "/password/reset",
  name: "Password Reset",
  component: PasswordReset,
  meta: { middleware: guest }
}

let resetPassword = {
  path: "/password/email",
  name: "Password Reset",
  component: PasswordEmail,
  meta: { middleware: guest }
}

let examplesMenu = {
  path: "/examples",
  component: DashboardLayout,
  name: "Examples",
  children: [
    {
      path: "user-profile",
      name: "User Profile",
      components: { default: UserProfile },
      meta: { middleware: auth }
    },
    {
      path: "user-management/list-users",
      name: "List Users",
      components: { default: ListUserPage },
      meta: { middleware: auth }
    }
  ]
};

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      }
    ]
  },
  componentsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  loginPage,
  registerPage,
  lockPage,
  forgotPassword,
  resetPassword,
  examplesMenu,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    meta: { middleware: auth },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
        meta: { middleware: auth },
      },
      {
        path: 'widgets',
        name: 'Widgets',
        component: Widgets,
        meta: { middleware: auth },
      }
    ]
  },
  {path: '*', component: NotFound}
];

export default routes
