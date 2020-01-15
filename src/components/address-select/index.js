import $ from 'jquery';
import './address-select.css'
// import { addressApi } from '../../global/api';
import tmpl from './address-select.hbs'
import cityTmpl from './city.hbs'
import areaTmpl from './area.hbs'

import compareHelper from '../../global/helpers/compare';
import data from './address-list';
const address = {
  init() {
    console.log(data)
    $('.J-address-select-slot').html(tmpl({
      province: data,
      cityList: data[0].cityList,
      areaList: data[0].cityList[0].areaList
    }, { helpers: { is: compareHelper } }))

    this.$target = $('.J-address-select');

    this.$province = $('.J-select-province');
    this.$city = $('.J-select-city');
    this.$area = $('.J-select-district');

    this.targetCity = data[0].cityList;

    this.bindEvent()

  },

  bindEvent() {
    const _this = this;
    this.$province.on('change', function() {
      const val = $(this).val();
      _this.targetCity = data.filter(item => item.name == val)[0].cityList;

      console.log('_this.targetCity', _this.targetCity)

      _this.targetArea = _this.targetCity[0].areaList;
      console.log('_this.targetArea', _this.targetArea)
      console.log(_this.targetCity)

      _this.$city.html(cityTmpl({ data: _this.targetCity }))
      _this.$area.html(areaTmpl({ data: _this.targetArea }))


    })

    this.$city.on('change', function() {
      const val = $(this).val();

      _this.targetArea = _this.targetCity.filter(item => item.name == val)[0].areaList;

      console.log('_this.targetArea222', _this.targetArea)

      _this.$area.html(areaTmpl({ data: _this.targetArea }))
    })
  },

  getStr() {
    const province = $('.J-select-province').val();
    const city = $('.J-select-city').val();
    const district = $('.J-select-district').val();

    return `${province}省${city}${district}`
  }
}


export default address;
