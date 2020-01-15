import $ from 'jquery';
import '../../global/common'

import './marriage.css'
import tmpl from './content.hbs';
import { query, parseString, count } from '../../global/utils';
import optionTmpl from './options.hbs'
import { addMarriageApi, marriageDetailApi } from '../../global/api'


const { idcard, id } = query();

;(function() {

  if(id) {
    marriageDetailApi({ id }).then(res => {
      $('#marriage-slot').html(tmpl({ data: res, id }))
    })
  } else {
    $('#marriage-slot').html(tmpl())

    $('.J-year').html(optionTmpl({ data: count(2019, 1960)}))
    $('.J-month').html(optionTmpl({ data: count(1, 12)}))
    $('.J-date').html(optionTmpl({ data: count(1, 31)}))

  }

  $('body').on('click', '#addMarriageBtn', function() {
    const params = parseString($('#marriageForm').serialize());

    params.idcard = idcard;

    if(id) {
      params.id = id;
    } else {
      params.occurrenceTime = `${params.year}-${params.month}-${params.date}`
    }

    console.log(params);

    addMarriageApi(params).then(res => {
      if(res.rtn === 0) {
        history.back()
      }
    })

  })
})()
