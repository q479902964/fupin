import $ from 'jquery';
import '../../global/common'

import './land.css';

import tmpl from './content.hbs'

import { query, parseString, count } from '../../global/utils';

import { familyAssetDetailApi, addFamilyAssetApi } from '../../global/api'

const { idcard, id } = query();

;(async function() {

  if(id) {
    const res = await familyAssetDetailApi({ id });
    $('#land-slot').html(tmpl({ data: res, id }))
  } else {
    $('#land-slot').html(tmpl({
      options: {
        year: count(1900, 2100),
        month: count(1, 12),
        date: count(1, 31)
      }
    }))
  }

  $('#addFamilyAssetBtn').on('click', function() {
    const params = parseString($('#landForm').serialize());
    params.idcard = idcard;

    if(id) {
      params.id = id;
    } else {

      params.arableBeginDate = `${params.start_year_1}-${params.start_month_1}-${params.start_date_1}`
      params.arableEndDate = `${params.end_year_1}-${params.end_month_1}-${params.end_date_1}`
      params.woodlandBeginDate = `${params.start_year_2}-${params.start_month_2}-${params.start_date_2}`
      params.woodlandEndDate = `${params.end_year_2}-${params.end_month_2}-${params.end_date_2}`
    }



    console.log(params);

    addFamilyAssetApi(params).then(res => {
      if(res.rtn === 0) {
        history.back()
      }
    })

  })

})()


