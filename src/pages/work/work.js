import $ from 'jquery';
import '../../global/common'

import './work.css'
import tmpl from './content.hbs';
import { query, parseString, count } from '../../global/utils';
import optionTmpl from './options.hbs'
import { addWorkApi, workDetailApi } from '../../global/api'


const { idcard, id } = query();

;(function() {

  if(id) {
    workDetailApi({ id }).then(res => {
      $('#work-slot').html(tmpl({ data: res, id }))
    })
  } else {
    $('#work-slot').html(tmpl())
    let year = (new Date()).getFullYear()
    $('.J-start-year').html(optionTmpl({ data: count(year, year-150)}))
    $('.J-start-month').html(optionTmpl({ data: count(1, 12)}))
    $('.J-start-date').html(optionTmpl({ data: count(1, 31)}))
    $('.J-end-year').html(optionTmpl({ data: count(year, year-150)}))
    $('.J-end-month').html(optionTmpl({ data: count(1, 12)}))
    $('.J-end-date').html(optionTmpl({ data: count(1, 31)}))


  }

  $('body').on('click', '#addWorkBtn',function() {
    const params = parseString($('#workForm').serialize());
    params.idcard = idcard;

    if(id) {
      params.id = id;
    } else {
      params.beginTime = `${params.year1}-${params.month1}-${params.date1}`;
      params.endTime = `${params.year2}-${params.month2}-${params.date2}`;
      params.idcard = idcard;
    }

    console.log(params);

    addWorkApi(params).then(res => {
      if(res.rtn === 0) {
        history.back()
      }
    })

  })
})()
