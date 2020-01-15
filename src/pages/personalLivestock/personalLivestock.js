import $ from 'jquery';
import '../../global/common'

import './personalLivestock.css';

import tmpl from './content.hbs'

import { query, parseString, count } from '../../global/utils';

import { livestockDetailApi, addLivestockApi } from '../../global/api'


const { idcard, id } = query();

;(async function() {

  if(id) {
    const res = await livestockDetailApi({ id });
    $('#personal-livestock-slot').html(tmpl({ data: res, id }))
  } else {
    $('#personal-livestock-slot').html(tmpl({
      options: {
        year: count(1990, 2050),
        month: count(1, 12),
        date: count(1, 31)
      }
    }))

  }

  $('#addLivestockBtn').on('click', function() {
    const params = parseString($('#livestockForm').serialize());
    params.idcard = idcard;

    if(id) {
      params.id = id;
    } else {
      params.beginDate = `${params.start_year}-${params.start_month}-${params.start_date}`
      params.endDate = `${params.end_year}-${params.end_month}-${params.end_date}`
    }

    console.log(params);

    addLivestockApi(params).then(res => {
      if(res.rtn === 0) {
        history.back()
      }
    })

  })

})()


