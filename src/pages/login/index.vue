<template>
  <div class="login-wrap">
    <div class="sign-in-wrap" v-if="wrapStatus==='in'">
      <h1>{{$t('titles.signIn')}}</h1>
      <group class="login-form">
        <x-input v-model="formObj.username" :placeholder="$t('placeholder.inputPhone')" :type="'tel'" required></x-input>
        <x-input v-model="formObj.password" :placeholder="$t('placeholder.inputPassword')" :type="'password'" required></x-input>
      </group>
      <x-button :text="$t('btn.signIn')" :type="'primary'" class="login-btn" @click.native="login"></x-button>
      <p class="tip">
        <span>{{$t('tips.noAccount')}}</span>
        <span class="tip-link" @click="wrapStatus='up'">{{$t('tips.signUpNow')}}</span>
      </p>
    </div>
    <div v-else class="sign-up-wrap">
      <h1>{{$t('titles.signUp')}}</h1>
      <group class="login-form">
        <x-input :placeholder="$t('placeholder.inputPhone')" :type="'tel'" required></x-input>
        <x-input :placeholder="$t('placeholder.inputPassword')" :type="'password'" required></x-input>
      </group>
      <x-button :text="$t('btn.signUp')" :type="'primary'" class="login-btn" @click="login"></x-button>
      <p class="tip">
        <span>{{$t('tips.hasAccount')}}</span>
        <span class="tip-link" @click="wrapStatus='in'">{{$t('tips.signInNow')}}</span>
      </p>
    </div>
  </div>
</template>
<style scoped lang="sass">
  .login-wrap
    .sign-in-wrap, .sign-up-wrap
      padding: 20px
      .login-btn
        margin-top: 20px
      .tip
        margin-top: 20px
        .tip-link
          color: #1AAD19
</style>
<script>
import { Group, XInput, XButton } from 'vux'
import loginApi from '@/api/Login'

export default {
  data() {
    return {
      wrapStatus: 'in',
      formObj: {}
    }
  },
  components: { XButton, Group, XInput },
  methods: {
    login() {
      if (this.wrapStatus === 'in') {
        loginApi.loginByUsername(this.formObj.username, this.formObj.password).then((data) => {
          console.log(data)
          localStorage.setItem('token', data.access_token)
        })
      }
    }
  }
}
</script>
