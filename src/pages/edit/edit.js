import $ from 'jquery';
import './edit.css'
import '../../global/common'
import { query, parseString, count } from '../../global/utils';
import { infoApi, familyApi, workListApi, model } from '../../global/api'
import basicInfoTmpl from './basic-info.hbs';
import familyTmpl from './family.hbs';
import educationTmpl from './education.hbs'
import workTmpl from './work.hbs';
import incomeTmpl from './income.hbs';
import marriageTmpl from './marriage.hbs'
import migrationTmpl from './migration.hbs'
import landTmpl from './family-asset.hbs'
import personalTmpl from './personal.hbs';
import partyMemberTmpl from './partyMember.hbs';
import retireTmpl from './retire.hbs'
import helpers from './helpers'



const { rid, idcard } = query();

const Edit = {
  init() {
    this.initBasicInfo();

    // this.initFamily();

    this.initPartyMember();

    this.initRetire();

    this.initEducation();

    this.initWork();

    this.initIncome();

    this.initMarriage();

    this.initMigration();

    this.initFamilyAsset();

    this.initPersonal();

    this.bindEvent();
  },

  initPersonal() {
    $('#personal-slot').html(personalTmpl({ _href, idcard }));
  },

  initBasicInfo() {
    model.basicInfoApi({ idcard }).then(res => {
      console.log('res', res)

      const { birthday = '', deathdate = '' } = res;
      let year = (new Date()).getFullYear()
      let year_area = count(year, year-150)
      let year_area1 = count(year, year-150)
      let month_area = count(1, 12)
      let month_area1 = count(1, 12)
      let date_area = count(1, 31)
      let date_area1 = count(1, 31)
      if(birthday!==""){
        const arr = birthday.split('-');
    
        res.birth = {
          year: arr[0],
          month: arr[1],
          date: arr[2]
        }
      }

      if(deathdate!==""){
        const arr2 = deathdate.split('-');
        res.death = {
          year: arr2[0],
          month: arr2[1],
          date: arr2[2]
        }
      }
      this.initFamily(res.isHouseholderStr)

      $('#basic-info-slot').html(basicInfoTmpl({
        data: res,
        idcard,
        _href,
        birthOptions: {
          year: year_area,
          month: month_area,
          date:date_area
        },
        deathOptions:{
          year: year_area1,
          month: month_area1,
          date:date_area1 
        }
      }, { helpers }))
    })
  },

  initFamily(isHouseholderStr) {
    // 获取家庭信息

    familyApi({ idcard }).then(res => {
      console.log('res', res)

      $('#family-slot').html(familyTmpl({ data: res, _href, idcard,isHouseholderStr }))
    })
  },

  initEducation() {
    model.educationApi({ idcard }).then(res => {
      console.log('education', res)
      $('#education-slot').html(educationTmpl({ data: res,  _href, idcard }))
    })
  },

  initPartyMember(){
    model.partyMemberListApi({ idcard }).then(res => {
      $('#party-member-slot').html(partyMemberTmpl({ data: res, _href, idcard }))
    })
  },

  initRetire(){
    model.retireListApi({ idcard }).then(res => {
      $('#retire-slot').html(retireTmpl({ data: res, _href, idcard }))
    })
  },

  initWork() {
    model.workListApi({ idcard }).then(res => {
      console.log('work list', res);

      $('#work-slot').html(workTmpl({ data: res, _href, idcard }))
    })
  },

  initIncome() {
    model.incomeListApi({ idcard }).then(res => {
      $('#income-slot').html(incomeTmpl({ data: res, _href, idcard }))
    })
  },


  initMarriage() {
    model.marriageListApi({ idcard }).then(res => {
      $('#marriage-slot').html(marriageTmpl({ data: res, _href, idcard }))
    })
  },

  initMigration() {
    model.migrationListApi({ idcard }).then(res => {
      $('#migration-slot').html(migrationTmpl({ data: res, _href, idcard }, { helpers }))
    })
  },

  initFamilyAsset() {
    model.familyAssetListApi({ idcard }).then(res => {
      $('#family-asset-alot').html(landTmpl({ data: res, _href, idcard }))
    })
  },


  bindEvent() {
    // 个人信息
    $(document).on('click', '#basicInfoBtn', function() {
      console.log($('#basicInfoForm').serialize())
      const params = parseString($('#basicInfoForm').serialize());

      const { year, month, date, year1, month1, date1 } = params;
      params.birthday = `${year}-${month}-${date}`;
      if(year1!==""&&month1!==""&&date1!==""){
        params.deathdate = `${year1}-${month1}-${date1}`;
      }

      if(rid) {
        params.rid = rid;
      }

      console.log(params)
      model.addBasicInfoApi(params).then(res => {
        console.log('res', res)
        if(res.rtn === 0) {
          window.location.href = `${_href.edit}?idcard=${params.idcard}&rid=${res.rid}`
        }

      })
    })
  }

}

Edit.init()
