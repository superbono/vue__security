<template>
  <div class="login-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page section-image">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="header-body text-center" style="margin-bottom: 15px;">
                  <div class="row justify-content-center">
<!--                    <div class="text-center">-->
<!--                      <h1 class="text-white">Log in to Vue Paper Dashboard Laravel  Live Preview</h1>-->
<!--                      <p class="text-lead text-white">Log in to see how you can go from frontend to fullstack in an instant with an API-based Laravel backend.</p>-->
<!--                    </div>-->

<!--                    <div class="text-white">-->
<!--                      <h3 class="text-white"><strong>You can log in with:</strong></h3>-->
<!--&lt;!&ndash;                      <div>Username <b>admin@jsonapi.com</b> Password <b>secret</b></div>&ndash;&gt;-->
<!--                    </div>-->
                  </div>
            </div>
            <div class="col-lg-4 col-md-6 ml-auto mr-auto"  style="margin-top: -47px">
<!--              <p style="color: #fff">아이디: test@test.com / 비밀번호: 1234</p>-->
              <form @submit.prevent="login">
                <card type="login" style="width: 380px; height: 529px; background: #2f2f37; opacity: 0.75">
<!--                  <h3 slot="header" class="header text-center">Login</h3>-->
                    <div style="margin-bottom: -160px; width: 200px; height: 50px; text-align: center; margin-top: 80px;">
                      <img :src="require(`@/assets/img/logo_white.png`)" style="margin-left: 70px; opacity: .8; margin-top: -20px">
<!--                      <p class="subtitle" style="color: #fff; margin-left: 130px; margin-top: -10px">영업 ERP</p>-->
                    </div>
<!--                  border-radius: 3px;-->
<!--                  border: solid 1px #505050;-->
<!--                  background-color: #2f2f37;-->
                  <fg-input v-model="email" placeholder="아이디" style="margin-top: 240px; padding: 0 30px;"/>
                  <validation-error :errors="apiValidationErrors.email" />
                  <fg-input v-model="password" placeholder="비밀번호" type="password" style="padding: 0 30px;"/>
                  <validation-error :errors="apiValidationErrors.password" />
                  <div slot="footer" style="margin-top: -175px;padding: 0 25px;">
                    <p-button native-type="submit" slot="footer" type="warning" round block class="mb-3">로그인</p-button>
                    <div class="pull-left" style="margin-top: 5px;">
<!--                      <h6><a href="/password/reset" class="link footer-link">Forgot Password?</a></h6>-->
<!--                        <h6 style="color: #fff">아이디저장</h6>-->
                      <input type="checkbox" style="margin-left: 2px;"><span style="color: #fff; font-size: 11px; margin-left: 7px; vertical-align: 2px;">아이디 저장</span>
                      <span style="color: #fff; font-size: 12px; margin-left: 27px; vertical-align: 2px; color: #a0a0a0"><a href="#" style="color: #a0a0a0; text-decoration: none;">아이디,비밀번호 찾기</a></span>
                      <span style="color: #fff; font-size: 12px; margin-left: 5px; vertical-align: 2px; color: #a0a0a0"> | </span>
                      <span style="color: #fff; font-size: 12px; margin-left: 5px; vertical-align: 2px;"><a href="/register" style="color: #a0a0a0; text-decoration: none;">회원가입 신청</a></span>
                    </div>
                  </div>
                </card>
              </form>
            </div>
          </div>
        </div>
<!--        <app-footer></app-footer>-->
<!--        <div class="full-page-background" style="background-image: url(/static/img/background/background-3.jpg) "></div>-->
<!--        <div class="full-page-background"></div>-->
          <div class="full-page-background" style="background-image: url('/static/img/background/bruno-abatti.jpg')"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Button } from 'src/components/UIComponents';
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'
  import formMixin from "@/mixins/form-mixin";
  import ValidationError from "src/components/UIComponents/ValidationError.vue";

export default {
  mixins: [formMixin],
  components: {
    Card,
    AppNavbar,
    AppFooter,
    [Button.name]: Button,
    ValidationError
  },
  data() {
    return {
      // email: "admin@jsonapi.com",
      // password: "secret",
      email: "",
      password: ""
    }
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open')
    },
    closeMenu() {
      document.body.classList.remove('nav-open')
      document.body.classList.remove('off-canvas-sidebar')
    },
    // async login() {
    //   const user = {
    //     data: {
    //       type: "token",
    //       attributes: {
    //         email: this.email,
    //         password: this.password
    //       }
    //     }
    //   }
    //
    //   const requestOptions = {
    //     headers: {
    //       'Accept': 'application/vnd.api+json',
    //       'Content-Type': 'application/vnd.api+json',
    //     }
    //   }
    //
    //   try {
    //     await this.$store.dispatch("login", {user, requestOptions})
    //   } catch (e) {
    //     this.$notify({
    //       message:'Invalid credentials!',
    //       type: 'danger',
    //     });
    //     this.setApiValidation(e.response.data.errors)
    //   }
    // }
    login() {
      const email = this.email;
      const password = this.password;

      if(email == "test@test.com" && password == "1234") {
        console.log('로그인 성공');
        alert('로그인 성공');
        this.$router.push("/components/typography");
      } else if(email != "test@test.com") {
        console.log('회원이 아닙니다.');
        alert('회원이 아닙니다.');
        if(confirm('회원가입페이지로 이동할까요?')) {
          this.$router.push('/register');
        }
      } else if(email == "test@test.com" && password != "1234") {
        console.log('비밀번호가 틀립니다.');
        alert('비밀번호가 틀립니다.');
      }

      console.log(email, password);

    }
  },
  beforeDestroy() {
    this.closeMenu()
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');
  .subtitle {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: normal;
  }
  ::placeholder {
    font-size: 11px;
  }
</style>
