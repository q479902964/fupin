import $ from 'jquery';
import './personal.css';
import '../../global/common'

import { query, parseString, count } from '../../global/utils';

import { houseListApi, personalLandListApi, vehicleListApi, farmingListApi, livestockListApi } from '../../global/api';

import houseTmpl from './house.hbs';
import landTmpl from './land.hbs';
import vehicleTmpl from './vehicle.hbs';
import farmingTmpl from './farming.hbs';
import livestockTmpl from './livestock.hbs';

const { rid, idcard } = query();

const personal = {
  init() {
    this.initHouse();

    this.initLand();

    this.initVehicle();

    this.initFarming();

    this.initLivestock();
  },

  initHouse() {
    houseListApi({ idcard }).then(res => {
      console.log('house', res)

      $('#house-slot').html(houseTmpl({ data: res, _href, idcard }))

    })
  },

  initLand() {
    personalLandListApi({ idcard} ).then(res => {
      console.log('land', res)

      $('#land-slot').html(landTmpl({ data: res, _href, idcard }))

    })
  },

  initVehicle() {

    vehicleListApi({ idcard }).then(res => {
      console.log('vehicle', res)

      $('#vehicle-slot').html(vehicleTmpl({ data: res, _href, idcard }))
    })
  },

  initFarming() {
    farmingListApi({ idcard }).then(res => {
      console.log('farming',res)

      $('#farm-slot').html(farmingTmpl({ data: res, _href, idcard }))
    })
  },

  initLivestock() {
    livestockListApi({ idcard }).then(res => {
      console.log('Livestock', res)

      $('#livestock-slot').html(livestockTmpl({ data: res, _href, idcard }))
    })
  }

}



personal.init();



