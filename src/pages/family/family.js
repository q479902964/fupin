import './family.css'
import $ from 'jquery';
import '../../global/common'
import { parseString, query } from '../../global/utils'
import optionTmpl from './options.hbs'
import { addFamilyApi, familyApi,villageListApi,familyDetailApi } from '../../global/api';
import tmpl from './content.hbs'

const { idcard,id,isHouseholder } = query();

const api = {
  init() {
    this.bindEvent();
    this.$scroller = $('.J-scroller');
  },

  bindEvent() {
    if(id){
      familyDetailApi({id}).then(res=>{
        $('#family-slot').html(tmpl({ data: res,id}))
        if(isHouseholder){
          this.$scroller.css({
            '-webkit-transform': `translate(-${isHouseholder}00%, 0)`,
            'transform': `translate(-${isHouseholder}00%, 0)`
          })
        }
      })
    }else{
      $('#family-slot').html(tmpl())
    }


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
    $('body').on('click',"#holderBtn" ,function() {

      const params = parseString($('#holderForm').serialize());
      console.log(params);
      params.idcard = idcard;

      if(id){
        params.id = id
      }

      addFamilyApi(params).then(res => {
        if(res.rtn === 0) {
          history.back()
        }

      })

    })

    // 非户主提交表单
    $('body').on('click',"#notHolderBtn",function() {
      const params = parseString($('#notHolderForm').serialize());
      console.log(params);
      params.idcard = idcard;
      if(id){
        params.id = id
      }
      addFamilyApi(params).then(res => {
        if(res.rtn === 0) {
          history.back()
        }

      })

    })
    }
   
}


api.init()
