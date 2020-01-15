import $ from 'jquery';
import '../../global/common'

import './retire.css';

import tmpl from './content.hbs'
import optionTmpl from './options.hbs'
import { query, parseString, count } from '../../global/utils';
import { retireDetailApi,addRetireApi } from '../../global/api'
const { idcard, id } = query();
;(async function() {
    if(id) {
        retireDetailApi({ id }).then(res => {
    
          $('#retire-slot').html(tmpl({ data: res, id }))
    
        })
      } else {
        let year = (new Date()).getFullYear()
        $("#retire-slot").html(tmpl())
        $('.J-start-year').html(optionTmpl({ data: count(year, year-150)}))
        $('.J-start-month').html(optionTmpl({ data: count(1, 12)}))
        $('.J-start-date').html(optionTmpl({ data: count(1, 31)}))
        $('.J-end-year').html(optionTmpl({ data: count(year, year-150)}))
        $('.J-end-month').html(optionTmpl({ data: count(1, 12)}))
        $('.J-end-date').html(optionTmpl({ data: count(1, 31)}))
    
      }
    
      $('body').on('click', '#saveInfoBtn', function() {
        const params = parseString($('#retireForm').serialize());
        params.idcard = idcard;
        if(id) {
          params.id = id;
        } else {
          params.militaryDate = `${params.startYear}-${params.startMonth}-${params.startDate}`
          params.retiredDate = `${params.endYear}-${params.endMonth}-${params.endDate}`
        }
    
    
        console.log(params)
    
        addRetireApi(params).then(res => {
          console.log(res)
          if(res.rtn === 0) {
            history.back()
          }
    
        })
      })

})()