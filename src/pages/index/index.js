import $ from 'jquery'
import './index.css'

import '../../global/common'

import tmpl from './item.hbs'
import { indexApi } from '../../global/api'
!(function() {

  const _fetchAndRender = (params) => {
    indexApi(params).then(res => {
      if(res && res.length) {
        res.map(item => {
          const { sex } = item;
          item.sex = (sex == 0 ? '男' : '女')
        })

        $('#loading-slot').html(tmpl({ data: res }))
      }
    })
  }

  const _getParams = () => {
    const val = $('input[name=search]').val();

    let params = {}

    if(val.length > 3) {
      params = { idcard: val }
    } else {
      params = { username: val }
    }

    return params;
  }

  _fetchAndRender();

  $('#searchForm').submit(function(e) {
    e.preventDefault()

    const params = _getParams()
    _fetchAndRender(params)

  })

  $('#searchBtn').on('click', function() {

    const params = _getParams()
    _fetchAndRender(params)

  })


  $('#filterMine').on('click', function() {
    $(this).toggleClass('filter__mine--active')
    const account = localStorage.getItem('_account');
    const params = { account };
    _fetchAndRender(params)
  })
})()
