<template>
  <div class="register-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page register-page section-image" filter-color="black" style="margin-bottom: 15px;">
        <div class="content">
          <div class="container" style="margin-top: -28px;">
            <div class="row" style="margin-bottom: 56px; margin-left: -6px;">
<!--              <div class="col-lg-5 col-md-5 ml-auto">-->
<!--                <info-section class="mt-5"-->
<!--                              type="primary"-->
<!--                              title="Marketing"-->
<!--                              description="We've created the marketing campaign of the website. It was a very interesting collaboration."-->
<!--                              icon="nc-icon nc-tv-2">-->

<!--                </info-section>-->
<!--                <info-section type="primary"-->
<!--                              title="Fully Coded in HTML5"-->
<!--                              description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."-->
<!--                              icon="nc-icon nc-html5">-->

<!--                </info-section>-->

<!--                <info-section type="primary"-->
<!--                              title="Built Audience"-->
<!--                              description="There is also a Fully Customizable CMS Admin Dashboard for this product."-->
<!--                              icon="nc-icon nc-atom">-->

<!--                </info-section>-->
<!--              </div>-->
              <div class="col-lg-4 col-md-6 ml-auto mr-auto" style="margin-top: -35px">
<!--                <p style="color: #fff">아이디: test@test.com / 비밀번호: 1234</p>-->
                <form @submit.prevent="login">
<!--                  <card type="login" style="width: 380px; height: 529px; background: #2f2f37">-->
                  <card type="regist" style="width: 380px; height: 529px; background: #2f2f37; opacity: 0.75">
                    <!--                  <h3 slot="header" class="header text-center">Login</h3>-->
                    <div style="margin-bottom: -160px; width: 200px; height: 50px; text-align: center; margin-top: 80px;">
<!--                      <img :src="require(`@/assets/img/pincar_logo.png`)" style="margin-left: 70px;">-->
                      <img :src="require(`@/assets/img/logo_white.png`)" style="margin-left: 70px; opacity: .8; margin-top: -40px">
<!--                      <p class="subtitle" style="color: #fff; margin-left: 130px; margin-top: -10px">영업 ERP</p>-->
                    </div>
                    <!--                  border-radius: 3px;-->
                    <!--                  border: solid 1px #505050;-->
                    <!--                  background-color: #2f2f37;-->
                    <fg-input v-model="email" placeholder="이메일" style="margin-top: 220px; padding: 0 30px; background-color: #2f2f37; "/>
                    <validation-error :errors="apiValidationErrors.email" />
                    <fg-input v-model="password" placeholder="비밀번호" type="password" style="padding: 0 30px;"/>
                    <validation-error :errors="apiValidationErrors.password" />
                    <fg-input v-model="nickname" placeholder="닉네임" type="text" style="padding: 0 30px;"/>
                    <validation-error :errors="apiValidationErrors.password" />
                    <div slot="footer" style="margin-top: -157px;padding: 0 25px;">
                      <p-button native-type="submit" slot="footer" type="warning" round block class="mb-3">회원가입</p-button>
                      <div class="pull-left" style="margin-top: 5px;">
                        <!--                      <h6><a href="/password/reset" class="link footer-link">Forgot Password?</a></h6>-->
                        <!--                        <h6 style="color: #fff">아이디저장</h6>-->
<!--                        <input type="checkbox" style="margin-left: 2px;"><span style="color: #fff; font-size: 11px; margin-left: 7px; vertical-align: 2px;">아이디 저장</span>-->
                        <span style="color: #fff; font-size: 12px; margin-left: 65px; vertical-align: 2px; color: #a0a0a0"><a href="#" style="color: #a0a0a0; text-decoration: none;">아이디,비밀번호 찾기</a></span>
                        <span style="color: #fff; font-size: 12px; margin-left: 5px; vertical-align: 2px; color: #a0a0a0"> | </span>
                        <span style="color: #fff; font-size: 12px; margin-left: 5px; vertical-align: 2px;"><a href="/login" style="color: #a0a0a0; text-decoration: none;">로그인</a></span>
                      </div>
                    </div>
                  </card>
                </form>
              </div>
            </div>
          </div>
        </div>
<!--        <app-footer></app-footer>-->
        <div class="full-page-background" style="background-image: url('/static/img/background/jan-sendereks.jpg')"></div>
<!--        <div class="full-page-background"-->
<!--             style="background-image: url(/static/img/background/jan-sendereks.jpg) "></div>-->
      </div>
    </div>
  </div>
</template>
<script>
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'
  import { Card, Checkbox, Button, InfoSection } from 'src/components/UIComponents';
  import formMixin from "@/mixins/form-mixin";
  import ValidationError from "src/components/UIComponents/ValidationError.vue";
  export default {
    mixins: [formMixin],
    components: {
      Card,
      AppNavbar,
      AppFooter,
      InfoSection,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button,
      ValidationError
    },
    data() {
      return {
        name: null,
        boolean: false,
        email: null,
        password: null,
        nickname: null,
        password_confirmation: null,
      };
    },
    methods: {
      async register() {
        if (!this.boolean) {
          await this.$notify({
            type: 'danger',
            message: 'You need to agree with our terms and conditions.',
          })
          return;
        }
        const user = {
          data: {
            type: "token",
            attributes: {
              name: this.name,
              email: this.email,
              password: this.password,
              password_confirmation: this.password_confirmation,
            },
          },
        };
        const requestOptions = {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        };
        try {
          await this.$store.dispatch("register", { user, requestOptions });
          this.$notify({
            type: 'success',
            message: 'Successfully registered.',
          })
        } catch (error) {
          this.$notify({
            type: 'danger',
            message: 'Oops, something went wrong!',
          })
          this.setApiValidation(error.response.data.errors);
        }
      },
      toggleNavbar() {
        document.body.classList.toggle('nav-open')
      },
      closeMenu() {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy() {
      this.closeMenu()
    }
  }
</script>
<style>
  ::placeholder {
    font-size: 11px;
  }
</style>