import $ from 'jquery';
import '../../global/common'

import './income.css'
import tmpl from './content.hbs';
import { query, parseString, count } from '../../global/utils';
import optionTmpl from './options.hbs'
import { addIncomeApi, incomeDetailApi } from '../../global/api'


const { idcard, id } = query();

;(function() {

  if(id) {
    incomeDetailApi({ id }).then(res => {
      $('#income-slot').html(tmpl({ data: res, id }))
    })
  } else {
    $('#income-slot').html(tmpl())
    $('.J-year').html(optionTmpl({ data: count(2019, 1999)}))

    $('.J-blur-trigger').on('blur', function() {
      const total = $(this).val();
      $('input[name=average]').val(Math.floor(total/12))
    })
  }

  $('body').on('click', '#addIncomeBtn', function() {
    const params = parseString($('#incomeForm').serialize());

    params.idcard = idcard;

    if(id) {
      params.id = id;
    }
    console.log(params)

    addIncomeApi(params).then(res => {
      if(res.rtn === 0) {
        history.back();
      }
    })
  })
})()
