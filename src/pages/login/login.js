import './login.css'

import $ from 'jquery';
import { loginApi } from '../../global/api';

const login = {
  init() {
    $('#loginBtn').on('click', function() {
      const params = $('#loginForm').serialize()
      loginApi(params).then(res => {
        if(res.rtn === 0) {
          localStorage.setItem('_account', res.account)
          window.location.href = "/pages/index"
        } else {
          alert(res.msg)
        }
      })
    })
  }
}

login.init()
