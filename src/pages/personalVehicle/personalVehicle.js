import $ from 'jquery';
import '../../global/common'

import './personalVehicle.css';

import tmpl from './content.hbs'

import { query, parseString, count } from '../../global/utils';

import { vehicleDetailApi, addVehicleApi } from '../../global/api'


const { idcard, id } = query();

;(async function() {

  if(id) {
    const res = await vehicleDetailApi({ id });
    $('#personal-vehicle-slot').html(tmpl({ data: res, id }))
  } else {
    $('#personal-vehicle-slot').html(tmpl({
      options: {
        year: count(1900, 2100),
        month: count(1, 12),
        date: count(1, 31)
      }
    }))

  }

  $('#addVehicleBtn').on('click', function() {
    const params = parseString($('#landForm').serialize());
    params.idcard = idcard;

    if(id) {
      params.id = id;
    } else {
      params.beginDate = `${params.start_year}-${params.start_month}-${params.start_date}`
      params.endDate = `${params.end_year}-${params.end_month}-${params.end_date}`
    }

    console.log(params);

    addVehicleApi(params).then(res => {
      if(res.rtn === 0) {
        history.back()
      }
    })

  })

})()


