import './family.css'
import $ from 'jquery';
import '../../global/common'
import { parseString, query } from '../../global/utils'
import optionTmpl from './options.hbs'
import { addFamilyApi, familyApi,villageListApi } from '../../global/api';

const { idcard } = query();

const api = {
  init() {
    this.bindEvent();
    this.$scroller = $('.J-scroller');
  },

  bindEvent() {

    //获取所属村落数据项
    villageListApi().then(res=>{
      $('.J-village').html(optionTmpl({ data: res.map(item=>item.name)}))
    })

    $('.J-holder').on('click', () => {
      const isHolder = $('input[name=holder]:checked').val();
      this.$scroller.css({
        '-webkit-transform': `translate(-${isHolder}00%, 0)`,
        'transform': `translate(-${isHolder}00%, 0)`
      })

    })



    // 户主提交表单
    $('#holderBtn').on('click', function() {

      const params = parseString($('#holderForm').serialize());
      console.log(params);
      params.idcard = idcard;

      addFamilyApi(params).then(res => {
        if(res.rtn === 0) {
          history.back()
        }

      })

    })

    // 非户主提交表单
    $('#notHolderBtn').on('click', function() {
      const params = parseString($('#notHolderForm').serialize());
      console.log(params);
      params.idcard = idcard;

      addFamilyApi(params).then(res => {
        if(res.rtn === 0) {
          history.back()
        }

      })

    })


  }
}


api.init()
