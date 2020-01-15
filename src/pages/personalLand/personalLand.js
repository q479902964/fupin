import $ from 'jquery';
import '../../global/common'

import './personalLand.css';

import tmpl from './content.hbs'

import { query, parseString, count } from '../../global/utils';

import { personalLandDetailApi, addPersonalLandApi } from '../../global/api'

import addressSelect from '../../components/address-select'

const { idcard, id } = query();

;(async function() {

  if(id) {
    const res = await personalLandDetailApi({ id });
    $('#personal-land-slot').html(tmpl({ data: res, id }))
  } else {
    $('#personal-land-slot').html(tmpl({
      options: {
        year: count(1900, 2100),
        month: count(1, 12),
        date: count(1, 31)
      }
    }))

    addressSelect.init();
  }

  $('#addLandBtn').on('click', function() {
    const params = parseString($('#landForm').serialize());
    params.idcard = idcard;

    if(id) {
      params.id = id;
    } else {
      params.beginDate = `${params.start_year}-${params.start_month}-${params.start_date}`
      params.endDate = `${params.end_year}-${params.end_month}-${params.end_date}`
      params.address = addressSelect.getStr() + params.detail;
    }

    console.log(params);

    addPersonalLandApi(params).then(res => {
      if(res.rtn === 0) {
        history.back()
      }
    })

  })

})()


