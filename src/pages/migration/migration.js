import $ from 'jquery'
import '../../global/common'

import './migration.css'
import addressSelect from '../../components/address-select'
import { addMigrationApi, migrationDetailApi } from '../../global/api'
import tmpl from './content.hbs'
import { query, parseString, count } from '../../global/utils';
import optionTmpl from './options.hbs'

const { idcard, id } = query();

;(function() {
  if(id) {
    migrationDetailApi({ id }).then(res => {

      $('#migration-slot').html(tmpl({ data: res, id }))

    })
  } else {
    $('#migration-slot').html(tmpl())

    addressSelect.init()

    $('.J-year').html(optionTmpl({ data: count(2019, 1990)}))
    $('.J-month').html(optionTmpl({ data: count(1, 12)}))
    $('.J-date').html(optionTmpl({ data: count(1,31)}))

  }

  $('body').on('click', '#addMigrationBtn', function() {
    const params = parseString($('#migrationForm').serialize());
    params.idcard = idcard;
    if(id) {
      params.id = id;
    } else {
      params.migrationAddress = `${params.province}省${params.city}${params.district}${params.detail}`;
      params.occurrenceTime = `${params.year}-${params.month}-${params.date}`
    }


    console.log(params)

    addMigrationApi(params).then(res => {
      console.log(res)
      if(res.rtn === 0) {
        history.back()
      }

    })
  })


})()


