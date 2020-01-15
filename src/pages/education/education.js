import $ from 'jquery'
import '../../global/common'

import './education.css'
import addressSelect from '../../components/address-select'
import { addEducationApi, educationDetailApi } from '../../global/api'
import tmpl from './content.hbs'
import { query, parseString, count } from '../../global/utils';
import optionTmpl from './options.hbs'

const { idcard, id } = query();

;(function() {
  if(id) {
    educationDetailApi({ id }).then(res => {
      console.log('res===', res)
      $('#education-slot').html(tmpl({ data: res, id }))

    })
  } else {
    $('#education-slot').html(tmpl())

    addressSelect.init()
    let year = (new Date()).getFullYear()
    $('.J-start-year').html(optionTmpl({ data: count(year, year-150)}))
    $('.J-start-month').html(optionTmpl({ data: count(1, 12)}))
    $('.J-end-year').html(optionTmpl({ data: count(year, year-150)}))
    $('.J-end-month').html(optionTmpl({ data: count(1, 12)}))


  }

  $('body').on('click', '#addEduBtn', function() {
    const params = parseString($('#educationForm').serialize());
    params.idcard = idcard;

    if(id) {
      params.id = id;
    } else {
      params.schoolAddress = `${params.province}省${params.city}${params.district}${params.detail}`;

      params.beginDate = `${params.startYear}-${params.startMonth}`
      params.endDate = `${params.endYear}-${params.endMonth}`
    }

    console.log(params)

    addEducationApi(params).then(res => {
      console.log(res)
      if(res.rtn === 0) {
        history.back()
      }

    })
  })

})()


