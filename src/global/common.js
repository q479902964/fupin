import $ from 'jquery';
import { loginOutApi } from './api';
(function() {
  $('#logOut').on('click', function() {
    const account = localStorage.getItem('_account');

    loginOutApi({ account }).then(res => {
      // alert('登出');
      window.location.href = '/pages/login/login.html';
    })

  })


  $('#backBtn').on('click', function() {
    history.back()
  })


  window._href = {
    login: '/pages/login/login.html',
    family: '/pages/family/family.html',
    education: '/pages/education/education.html',
    edit: '/pages/edit/edit.html',
    work: '/pages/work/work.html',
    income: '/pages/income/income.html',
    marriage: '/pages/marriage/marriage.html',
    migration: '/pages/migration/migration.html',
    land: '/pages/land/land.html',
    personal: '/pages/personal/personal.html',
    personalLand: '/pages/personalLand/personalLand.html',
    personalHouse: '/pages/personalHouse/personalHouse.html',
    personalFarm: '/pages/personalFarm/personalFarm.html',
    personalVehicle: '/pages/personalVehicle/personalVehicle.html',
    personalLivestock: '/pages/personalLivestock/personalLivestock.html',
    partyMember: '/pages/partyMember/partyMember.html',
    retire: '/pages/retire/retire.html'
  }
})()
